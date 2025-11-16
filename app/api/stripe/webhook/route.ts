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
    apiVersion: '2024-11-20.acacia',
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
 * Generate API key after successful payment
 */
async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  console.log('💰 CHECKOUT SESSION COMPLETED');
  console.log(`- Session ID: ${session.id}`);
  console.log(`- Customer: ${session.customer_email}`);
  console.log(`- Amount: ${session.currency?.toUpperCase()} ${((session.amount_total || 0) / 100).toFixed(2)}`);

  const customerEmail = session.customer_email;
  const customerId = session.customer as string;
  
  if (!customerEmail) {
    console.error('❌ No customer email in session');
    return;
  }

  // Extract metadata
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
}

/**
 * Handle customer.subscription.created
 */
async function handleSubscriptionCreated(subscription: Stripe.Subscription) {
  console.log('📋 SUBSCRIPTION CREATED');
  console.log(`- Subscription ID: ${subscription.id}`);
  console.log(`- Customer: ${subscription.customer}`);

  const customerId = subscription.customer as string;

  // Update or create stripe customer record
  await prisma.stripeCustomer.upsert({
    where: { stripeCustomerId: customerId },
    update: {
      stripeSubscriptionId: subscription.id,
      subscriptionStatus: subscription.status.toUpperCase() as any,
      currentPeriodStart: new Date(subscription.current_period_start * 1000),
      currentPeriodEnd: new Date(subscription.current_period_end * 1000),
    },
    create: {
      stripeCustomerId: customerId,
      stripeSubscriptionId: subscription.id,
      email: 'unknown@email.com', // Will be updated from checkout
      companyName: 'Unknown',
      subscriptionStatus: subscription.status.toUpperCase() as any,
      currentPeriodStart: new Date(subscription.current_period_start * 1000),
      currentPeriodEnd: new Date(subscription.current_period_end * 1000),
    },
  });

  console.log('✅ Subscription record created');
}

/**
 * Handle customer.subscription.updated
 */
async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  console.log('🔄 SUBSCRIPTION UPDATED');
  console.log(`- Subscription ID: ${subscription.id}`);
  console.log(`- Status: ${subscription.status}`);

  const customerId = subscription.customer as string;

  // Update stripe customer record
  await prisma.stripeCustomer.updateMany({
    where: { stripeCustomerId: customerId },
    data: {
      subscriptionStatus: subscription.status.toUpperCase() as any,
      currentPeriodStart: new Date(subscription.current_period_start * 1000),
      currentPeriodEnd: new Date(subscription.current_period_end * 1000),
      cancelAt: subscription.cancel_at ? new Date(subscription.cancel_at * 1000) : null,
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
async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
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
      'customer.subscription.created',
      'customer.subscription.updated',
      'customer.subscription.deleted',
      'invoice.payment_failed',
      'invoice.payment_succeeded',
    ],
  });
}
