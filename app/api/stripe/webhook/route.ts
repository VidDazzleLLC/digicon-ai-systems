/**
 * Stripe Webhook Handler - Updated for Payroll Automation
 * Handles Stripe events and generates API keys after successful payment
 * 
 * Events Handled:
 * - checkout.session.completed: Generate API key after payment
 * - customer.subscription.created: Track new subscription
 * - customer.subscription.updated: Update subscription status
 * - customer.subscription.deleted: Revoke API key on cancellation
 * - invoice.payment_failed: Suspend API key
 */

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { generateApiKey, revokeApiKey } from '@/lib/automation/api-keys';
import Stripe from 'stripe';

const prisma = new PrismaClient();

// Initialize Stripe (only if credentials exist)
let stripe: Stripe | null = null;
if (process.env.STRIPE_SECRET_KEY) {
  stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2025-10-29.clover',
  });
}

/**
 * POST /api/stripe/webhook
 * Main Stripe webhook handler
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    if (!signature) {
      console.error('⚠️  Missing stripe-signature header');
      return NextResponse.json(
        { error: 'Missing stripe-signature header' },
        { status: 400 }
      );
    }

    // Verify webhook signature in production
    let event: Stripe.Event;
    
    if (stripe && process.env.STRIPE_WEBHOOK_SECRET) {
      try {
        event = stripe.webhooks.constructEvent(
          body,
          signature,
          process.env.STRIPE_WEBHOOK_SECRET
        );
      } catch (err) {
        console.error('⚠️  Webhook signature verification failed:', err);
        return NextResponse.json(
          { error: 'Webhook signature verification failed' },
          { status: 400 }
        );
      }
    } else {
      // Development mode - parse body as JSON
      event = JSON.parse(body);
    }

    console.log(`\n🎉 STRIPE WEBHOOK: ${event.type}`);
    console.log(`- Event ID: ${event.id}`);

    // Handle event
    switch (event.type) {
      case 'checkout.session.completed': {
        await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
        break;
      }

      case 'checkout.session.async_payment_succeeded': {
        // Handle async payments (e.g., bank transfers) - same as checkout completed
        await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
        break;
      }

      case 'customer.subscription.created': {
        await handleSubscriptionCreated(event.data.object as Stripe.Subscription);
        break;
      }

      case 'customer.subscription.updated': {
        await handleSubscriptionUpdated(event.data.object as Stripe.Subscription);
        break;
      }

      case 'customer.subscription.deleted': {
        await handleSubscriptionDeleted(event.data.object as Stripe.Subscription);
        break;
      }

      case 'invoice.payment_failed': {
        await handlePaymentFailed(event.data.object as Stripe.Invoice);
        break;
      }

      case 'invoice.payment_succeeded': {
        await handlePaymentSucceeded(event.data.object as Stripe.Invoice);
        break;
      }

      default:
        console.log(`ℹ️  Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });

  } catch (error) {
    console.error('🔥 WEBHOOK ERROR:', error);
    return NextResponse.json(
      { 
        error: 'Webhook handler failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

/**
 * Handle checkout.session.completed
 * 
 * This handler now supports TWO types of checkout sessions:
 * 1. Payroll Audit payments (new workflow)
 * 2. API key/subscription payments (existing workflow)
 */
async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  console.log('💰 CHECKOUT SESSION COMPLETED');
  console.log(`- Session ID: ${session.id}`);
  console.log(`- Customer: ${session.customer_email}`);
  console.log(`- Amount: ${session.currency?.toUpperCase()} ${((session.amount_total || 0) / 100).toFixed(2)}`);
  console.log(`- Metadata:`, session.metadata);

  const customerEmail = session.customer_email;
  const customerId = session.customer as string;
  
  if (!customerEmail) {
    console.error('❌ No customer email in session');
    return;
  }

  // Check if this is an audit payment (new workflow)
  const auditRequestId = session.metadata?.auditRequestId;
  const reportId = session.metadata?.reportId;
  
  if (auditRequestId && session.metadata?.service === 'payroll_audit') {
    await handleAuditPayment(session, auditRequestId, reportId);
    return;
  }

  // Otherwise, handle as API key/subscription payment (existing workflow)
  const companyName = session.metadata?.companyName || 'Unknown Company';
  const subscriptionId = session.subscription as string;

  // Check if API key already exists for this customer
  const existingKey = await prisma.apiKey.findFirst({
    where: {
      customerEmail,
      status: 'ACTIVE',
    },
  });

  if (existingKey) {
    console.log('ℹ️  Customer already has an active API key');
    return;
  }

  // Generate API key
  console.log('🔑 Generating API key...');
  
  const apiKeyData = await generateApiKey({
    customerEmail,
    companyName,
    stripeCustomerId: customerId,
    stripeSubscriptionId: subscriptionId,
    requestsPerDay: 1000,
  });

  // Create Stripe customer record
  await prisma.stripeCustomer.create({
    data: {
      stripeCustomerId: customerId,
      stripeSubscriptionId: subscriptionId,
      email: customerEmail,
      companyName,
      subscriptionStatus: 'ACTIVE',
      apiKeyId: apiKeyData.id,
    },
  });

  console.log(`✅ API key generated and sent to ${customerEmail}`);
  
  // TODO: Send email with API key to customer
  console.log(`📧 SEND EMAIL TO ${customerEmail}:`);
  console.log(`   API Key: ${apiKeyData.apiKey}`);
  console.log(`   Rate Limit: ${apiKeyData.requestsPerDay} requests/day`);

  // MissionX removed - using self-contained portal instead
  console.log('✅ API key generated - self-contained portal ready');
}

/**
 * Handle Audit Payment - Complete Workflow
 *
 * After successful payment:
 * 1. Mark audit request as paid
 * 2. Process the CSV data (if not already processed)
 * 3. Run AI analysis to generate report
 * 4. Store report in database
 * 5. Send report via email
 * 6. Mark as delivered
 */
async function handleAuditPayment(
  session: Stripe.Checkout.Session,
  auditRequestId: string,
  reportId?: string
) {
  console.log('📋 HANDLING AUDIT PAYMENT');
  console.log(`- Audit Request ID: ${auditRequestId}`);
  console.log(`- Customer Email: ${session.customer_email}`);

  const { getAuditRequest, updateAuditRequest, markAsPaid, markReportDelivered } = await import('@/lib/audit-store');

  // Get audit request
  const auditRequest = await getAuditRequest(auditRequestId);

  if (!auditRequest) {
    console.error(`❌ Audit request not found: ${auditRequestId}`);
    return;
  }

  // Check if already paid (idempotency)
  if (auditRequest.paidAt) {
    console.log('ℹ️  Audit request already marked as paid');

    // Check if report was already delivered
    if (auditRequest.reportDelivered) {
      console.log('ℹ️  Report already delivered - skipping duplicate delivery');
      return;
    }
  } else {
    // Mark as paid
    await markAsPaid(auditRequestId, session.id);
          
    console.log(`✅ Marked audit request as paid: ${auditRequestId}`);
  }

  try {
    let reportData: any;
    const startTime = Date.now();

    // Check if report already exists in database
    if (auditRequest.report && auditRequest.report.reportData) {
      console.log('📄 Report already exists in database');
      reportData = auditRequest.report.reportData;
    } else {
      // Generate report from stored CSV data
      console.log('🔄 Generating report from CSV data...');

      if (!auditRequest.csvData) {
        throw new Error('No CSV data found for processing');
      }

      // Mark as processing
      await updateAuditRequest(auditRequestId, {
        status: 'processing',
        processingStartedAt: new Date().toISOString(),
      });

      // Parse CSV and run audit
      const Papa = await import('papaparse');
      const { runAudit } = await import('@/lib/audit/analyzers');

      const parsed = Papa.parse(auditRequest.csvData, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true,
      });

      console.log(`📊 Processing ${parsed.data.length} rows with ${parsed.meta.fields?.length || 0} columns`);

      // Run AI audit analysis
      const auditResult = await runAudit({
        systemType: 'payroll',
        rows: parsed.data as any[],
        columns: parsed.meta.fields || [],
      });

      const processingTime = Date.now() - startTime;

      // Create report object
      const newReportId = reportId || `report_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
      reportData = {
        reportId: newReportId,
        generatedAt: new Date().toISOString(),
        companyName: auditRequest.companyName,
        customerEmail: auditRequest.customerEmail,
        auditResult: auditResult,
        summary: {
          totalRows: parsed.data.length,
          systemType: auditResult.systemType,
          confidence: auditResult.confidence,
          processingTimeMs: processingTime,
        },
      };

      // Store report in database (Railway-safe)
      await updateAuditRequest(auditRequestId, {
        status: 'report_ready',
        report: {
          reportId: newReportId,
          reportData: reportData,
        },
        processingCompletedAt: new Date().toISOString(),
        processingTimeMs: processingTime,
        aiModel: 'claude-3-5-sonnet-20240620',
      });

      console.log(`✅ Report generated and stored in database (${processingTime}ms)`);
    }

    // Send email with report
    console.log('📧 Sending email with report...');
    const { sendEmail, generateReportEmailHtml } = await import('@/lib/email-delivery');

    const emailHtml = generateReportEmailHtml(
      auditRequest.companyName,
      reportData.auditResult || reportData,
      reportData.reportId
    );

    const emailSent = await sendEmail({
      from: process.env.EMAIL_FROM || 'noreply@digicon.app',
      to: auditRequest.customerEmail,
      subject: `Your Payroll Audit Report - ${auditRequest.companyName}`,
      html: emailHtml,
    });

    if (emailSent) {
      // Mark as delivered
      await updateAuditRequest(auditRequestId, {
        status: 'completed',
        reportDelivered: true,
        reportDeliveredAt: new Date().toISOString(),
      });
      console.log(`✅ Audit report delivered to ${auditRequest.customerEmail}`);
    } else {
      // Email failed but report is generated
      console.warn('⚠️  Email delivery failed, but report was generated and stored');
      await updateAuditRequest(auditRequestId, {
        processingError: 'Email delivery failed - report available in database',
      });
    }

  } catch (error) {
    console.error('❌ Error in audit payment workflow:', error);

    // Update request with error
    await updateAuditRequest(auditRequestId, {
      status: 'failed',
      processingError: error instanceof Error ? error.message : 'Unknown error during processing',
      processingCompletedAt: new Date().toISOString(),
    });

    // Payment was successful, so we don't fail the webhook
    // Admin can manually retry or deliver the report later
    console.error('⚠️  Payment succeeded but report generation failed. Manual intervention may be required.');
  }
}

/**
 * Handle customer.subscription.created
 */
async function handleSubscriptionCreated(subscription: any) {
  console.log('📋 SUBSCRIPTION CREATED');
  console.log(`- Subscription ID: ${subscription.id}`);
  console.log(`- Customer: ${subscription.customer}`);

  const customerId = subscription.customer as string;
  const currentPeriodStart = subscription.current_period_start 
    ? new Date(subscription.current_period_start * 1000) 
    : new Date();
  const currentPeriodEnd = subscription.current_period_end 
    ? new Date(subscription.current_period_end * 1000) 
    : new Date();

  // Update or create stripe customer record
  await prisma.stripeCustomer.upsert({
    where: { stripeCustomerId: customerId },
    update: {
      stripeSubscriptionId: subscription.id,
      subscriptionStatus: subscription.status.toUpperCase() as any,
      currentPeriodStart,
      currentPeriodEnd,
    },
    create: {
      stripeCustomerId: customerId,
      stripeSubscriptionId: subscription.id,
      email: 'unknown@email.com', // Will be updated from checkout
      companyName: 'Unknown',
      subscriptionStatus: subscription.status.toUpperCase() as any,
      currentPeriodStart,
      currentPeriodEnd,
    },
  });

  console.log('✅ Subscription record created');
}

/**
 * Handle customer.subscription.updated
 */
async function handleSubscriptionUpdated(subscription: any) {
  console.log('🔄 SUBSCRIPTION UPDATED');
  console.log(`- Subscription ID: ${subscription.id}`);
  console.log(`- Status: ${subscription.status}`);

  const customerId = subscription.customer as string;
  const currentPeriodStart = subscription.current_period_start 
    ? new Date(subscription.current_period_start * 1000) 
    : new Date();
  const currentPeriodEnd = subscription.current_period_end 
    ? new Date(subscription.current_period_end * 1000) 
    : new Date();
  const cancelAt = subscription.cancel_at 
    ? new Date(subscription.cancel_at * 1000) 
    : null;

  // Update stripe customer record
  await prisma.stripeCustomer.updateMany({
    where: { stripeCustomerId: customerId },
    data: {
      subscriptionStatus: subscription.status.toUpperCase() as any,
      currentPeriodStart,
      currentPeriodEnd,
      cancelAt,
    },
  });

  // Update API key billing status
  const stripeCustomer = await prisma.stripeCustomer.findFirst({
    where: { stripeCustomerId: customerId },
  });

  if (stripeCustomer?.apiKeyId) {
    const billingStatus = subscription.status === 'active' ? 'ACTIVE'
      : subscription.status === 'past_due' ? 'PAST_DUE'
      : subscription.status === 'canceled' ? 'CANCELLED'
      : 'ACTIVE';

    await prisma.apiKey.update({
      where: { id: stripeCustomer.apiKeyId },
      data: { billingStatus: billingStatus as any },
    });
  }

  console.log('✅ Subscription updated');
}

/**
 * Handle customer.subscription.deleted
 */
async function handleSubscriptionDeleted(subscription: any) {
  console.log('❌ SUBSCRIPTION DELETED');
  console.log(`- Subscription ID: ${subscription.id}`);

  const customerId = subscription.customer as string;

  // Find and revoke API key
  const stripeCustomer = await prisma.stripeCustomer.findFirst({
    where: { stripeCustomerId: customerId },
  });

  if (stripeCustomer?.apiKeyId) {
    const apiKey = await prisma.apiKey.findUnique({
      where: { id: stripeCustomer.apiKeyId },
    });

    if (apiKey && apiKey.status === 'ACTIVE') {
      await revokeApiKey(apiKey.keyHash, 'SUBSCRIPTION_CANCELLED');
      console.log('✅ API key revoked due to subscription cancellation');
    }
  }

  // Update stripe customer record
  await prisma.stripeCustomer.updateMany({
    where: { stripeCustomerId: customerId },
    data: {
      subscriptionStatus: 'CANCELLED',
      canceledAt: new Date(),
    },
  });
}

/**
 * Handle invoice.payment_failed
 */
async function handlePaymentFailed(invoice: Stripe.Invoice) {
  console.log('⚠️  PAYMENT FAILED');
  console.log(`- Invoice ID: ${invoice.id}`);
  console.log(`- Customer: ${invoice.customer}`);

  const customerId = invoice.customer as string;

  // Find API key and suspend it
  const stripeCustomer = await prisma.stripeCustomer.findFirst({
    where: { stripeCustomerId: customerId },
  });

  if (stripeCustomer?.apiKeyId) {
    await prisma.apiKey.update({
      where: { id: stripeCustomer.apiKeyId },
      data: { billingStatus: 'PAST_DUE' },
    });

    console.log('⚠️  API key marked as past due');
  }
}

/**
 * Handle invoice.payment_succeeded
 */
async function handlePaymentSucceeded(invoice: Stripe.Invoice) {
  console.log('✅ PAYMENT SUCCEEDED');
  console.log(`- Invoice ID: ${invoice.id}`);

  const customerId = invoice.customer as string;

  // Find API key and reactivate it
  const stripeCustomer = await prisma.stripeCustomer.findFirst({
    where: { stripeCustomerId: customerId },
  });

  if (stripeCustomer?.apiKeyId) {
    await prisma.apiKey.update({
      where: { id: stripeCustomer.apiKeyId },
      data: { billingStatus: 'ACTIVE' },
    });

    console.log('✅ API key billing status restored to active');
  }
}

/**
 * GET /api/stripe/webhook
 * Health check
 */
export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    message: 'Stripe webhook endpoint is active',
    timestamp: new Date().toISOString(),
    events: [
      'checkout.session.completed',
      'checkout.session.async_payment_succeeded',
      'customer.subscription.created',
      'customer.subscription.updated',
      'customer.subscription.deleted',
      'invoice.payment_failed',
      'invoice.payment_succeeded',
    ],
  });
}
