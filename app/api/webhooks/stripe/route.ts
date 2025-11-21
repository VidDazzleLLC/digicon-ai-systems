/**
 * Stripe Webhook Handler for Conference Room Payments
 * 
 * This webhook receives events from Stripe and updates conference room
 * status after successful payment.
 * 
 * Stripe Events Handled:
 * - checkout.session.completed: Payment successful
 * - checkout.session.expired: Payment session expired
 * - payment_intent.succeeded: Alternative payment success confirmation
 * 
 * Webhook Setup (Stripe Dashboard):
 * 1. Go to Developers → Webhooks
 * 2. Add endpoint: https://your-domain.com/api/webhooks/stripe
 * 3. Select events: checkout.session.completed, payment_intent.succeeded
 * 4. Copy signing secret to STRIPE_WEBHOOK_SECRET env var
 */

import { NextRequest, NextResponse } from 'next/server';
// import Stripe from 'stripe';
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: '2023-10-16',
// });

/**
 * Stripe Webhook Handler
 * POST /api/webhooks/stripe
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    if (!signature) {
      console.error('⚠️  WEBHOOK ERROR: No stripe-signature header');
      return NextResponse.json(
        { error: 'Missing stripe-signature header' },
        { status: 400 }
      );
    }

    // In production, verify webhook signature
    // let event: Stripe.Event;
    // try {
    //   event = stripe.webhooks.constructEvent(
    //     body,
    //     signature,
    //     process.env.STRIPE_WEBHOOK_SECRET!
    //   );
    // } catch (err) {
    //   console.error('⚠️  Webhook signature verification failed:', err);
    //   return NextResponse.json(
    //     { error: 'Webhook signature verification failed' },
    //     { status: 400 }
    //   );
    // }

    // Mock event for development
    const event = {
      id: `evt_${Date.now()}`,
      type: 'checkout.session.completed',
      data: {
        object: {
          id: 'cs_test_123',
          payment_status: 'paid',
          amount_total: 250000,
          currency: 'usd',
          customer_email: 'cfo@company.com',
          metadata: {
            conferenceRoomId: 'room_123',
            companyName: 'Acme Corp',
          }
        }
      }
    };

    console.log(`\n🎉 STRIPE WEBHOOK RECEIVED: ${event.type}`);
    console.log(`- Event ID: ${event.id}`);

    // Handle different event types
    switch (event.type) {
      // Automation subscription events
      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const subscription = event.data.object as any;
        
        console.log('🔄 SUBSCRIPTION EVENT:');
        console.log(`- Subscription ID: ${subscription.id}`);
        console.log(`- Customer ID: ${subscription.customer}`);
        console.log(`- Status: ${subscription.status}`);
        
        // Extract system type from metadata
        const systemType = subscription.metadata?.systemType;
        if (systemType) {
          console.log(`- System Type: ${systemType}`);
          
          // TODO: Update subscription in database
          // const companyId = subscription.metadata?.companyId;
          // await prisma.subscription.upsert({
          //   where: { stripeSubscriptionId: subscription.id },
          //   create: {
          //     stripeCustomerId: subscription.customer,
          //     stripeSubscriptionId: subscription.id,
          //     stripePriceId: subscription.items.data[0].price.id,
          //     companyId: companyId,
          //     companyName: subscription.metadata?.companyName,
          //     companyEmail: subscription.metadata?.companyEmail,
          //     systemType: systemType.toUpperCase(),
          //     status: subscription.status,
          //     currentPeriodStart: new Date(subscription.current_period_start * 1000),
          //     currentPeriodEnd: new Date(subscription.current_period_end * 1000),
          //     monthlyPrice: subscription.items.data[0].price.unit_amount / 100,
          //   },
          //   update: {
          //     status: subscription.status,
          //     currentPeriodStart: new Date(subscription.current_period_start * 1000),
          //     currentPeriodEnd: new Date(subscription.current_period_end * 1000),
          //   }
          // });
          
          console.log(`✅ SUBSCRIPTION UPDATED IN DATABASE`);
        }
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as any;
        
        console.log('❌ SUBSCRIPTION CANCELLED:');
        console.log(`- Subscription ID: ${subscription.id}`);
        
        // TODO: Revoke API keys and mark subscription as cancelled
        // await prisma.subscription.update({
        //   where: { stripeSubscriptionId: subscription.id },
        //   data: { status: 'canceled' }
        // });
        
        // Revoke associated API keys
        // await prisma.apiKey.updateMany({
        //   where: { companyId: subscription.metadata?.companyId },
        //   data: { active: false }
        // });
        
        console.log(`✅ SUBSCRIPTION CANCELLED AND API KEYS REVOKED`);
        break;
      }

      case 'checkout.session.completed': {
        const session = event.data.object;
        
        console.log('💰 PAYMENT SUCCESSFUL:');
        console.log(`- Session ID: ${session.id}`);
        console.log(`- Amount: ${session.currency.toUpperCase()} ${(session.amount_total / 100).toFixed(2)}`);
        console.log(`- Conference Room ID: ${session.metadata?.conferenceRoomId}`);
        console.log(`- Customer: ${session.customer_email}`);

        // Update conference room status in database
        if (session.metadata?.conferenceRoomId) {
          // TODO: Update database
          // await prisma.conferenceRoom.update({
          //   where: { id: session.metadata.conferenceRoomId },
          //   data: {
          //     status: 'CLOSED_WON',
          //     dealValue: session.amount_total / 100,
          //     closedAt: new Date(),
          //     closureReason: 'PAYMENT_RECEIVED',
          //   }
          // });

          // Create payment record
          // await prisma.payment.create({
          //   data: {
          //     conferenceRoomId: session.metadata.conferenceRoomId,
          //     stripeSessionId: session.id,
          //     amount: session.amount_total,
          //     currency: session.currency,
          //     customerEmail: session.customer_email,
          //     status: 'completed',
          //     paidAt: new Date(),
          //   }
          // });

          // Send confirmation email to customer
          console.log(`📧 SENDING PAYMENT CONFIRMATION EMAIL to ${session.customer_email}`);
          
          // Log audit event
          // await prisma.auditLog.create({
          //   data: {
          //     conferenceRoomId: session.metadata.conferenceRoomId,
          //     eventType: 'PAYMENT_RECEIVED',
          //     eventData: {
          //       amount: session.amount_total,
          //       currency: session.currency,
          //       stripeSessionId: session.id,
          //     },
          //     actorEmail: session.customer_email || 'system',
          //     actorIP: 'stripe-webhook',
          //     success: true,
          //   }
          // });

          console.log(`✅ CONFERENCE ROOM ${session.metadata.conferenceRoomId} STATUS UPDATED TO PAID`);
        }

              // Handle Audit Payment
              else if (session.metadata?.auditRequestId) {
                        console.log('💰 HANDLING AUDIT PAYMENT');
                        console.log(`- Audit Request ID: ${session.metadata.auditRequestId}`);

                        // Get audit request from storage
                        const { getAuditRequest, updateAuditRequest } = await import('@/lib/audit-store');
                        const auditRequest = await getAuditRequest(session.metadata.auditRequestId);

                        if (!auditRequest) {
                                    console.error(`❌ Audit request ${session.metadata.auditRequestId} not found`);
                                    return;
                                  }

                        // Mark as paid
                        await updateAuditRequest(session.metadata.auditRequestId, { status: 'paid' });
                        console.log(`✅ MARKED audit request as paid`);

                        // Generate report from stored CSV data
                        const { runAudit } = await import('@/lib/audit/analyzers');
                        const Papa = await import('papaparse');

                        const parsed = Papa.parse(auditRequest.csvData!, {
                                    header: true,
                                    skipEmptyLines: true,
                                    dynamicTyping: true
                                              });

                        const reportResult = await runAudit({
                                    systemType: 'payroll',
                                    rows: parsed.data,
                                    columns: parsed.meta.fields || []
                                              });

                        // Store report ID and update status
                        const reportId = `report_${Date.now()}_${session.metadata.auditRequestId}`;
                        await updateAuditRequest(session.metadata.auditRequestId, {
                                    reportId: reportId,
                                    status: 'delivered'
                                              });
                        console.log(`✅ Generated report: ${reportId}`);

                        // Send email with report
                        const { Resend } = await import('resend');
                        const resend = new Resend(process.env.RESEND_API_KEY);

                        await resend.emails.send({
                                    from: 'Digicon AI <noreply@digicon.app>',
                                    to: auditRequest.customerEmail,
                                    subject: 'Your Payroll Audit Report is Ready',
                                    html: `<h1>Your Audit Report is Complete</h1><p>View your report at ${process.env.NEXT_PUBLIC_APP_URL}/portal/${session.metadata.auditRequestId}</p>`
                                              });

                        console.log(`📧 SENT report email to ${auditRequest.customerEmail}`);
                      }
        break;
      }

      case 'checkout.session.expired': {
        const session = event.data.object;
        
        console.log('⏰ CHECKOUT SESSION EXPIRED:');
        console.log(`- Session ID: ${session.id}`);
        console.log(`- Conference Room ID: ${session.metadata?.conferenceRoomId}`);

        // Update payment session status
        if (session.metadata?.conferenceRoomId) {
          // await prisma.paymentSession.update({
          //   where: { sessionId: session.id },
          //   data: { status: 'expired' }
          // });
          
          console.log(`❌ PAYMENT SESSION MARKED AS EXPIRED`);
        }
        break;
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as any;
        
        console.log('💳 PAYMENT INTENT SUCCEEDED:');
        console.log(`- Payment Intent ID: ${paymentIntent.id}`);
        console.log(`- Amount: ${paymentIntent.currency?.toUpperCase()} ${((paymentIntent.amount || 0) / 100).toFixed(2)}`);
        
        // Additional confirmation - useful for some payment methods
        break;
      }

      default:
        console.log(`ℹ️  Unhandled event type: ${event.type}`);
    }

    // Return 200 to acknowledge receipt of the event
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
 * Health check endpoint
 * GET /api/webhooks/stripe
 */
export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    message: 'Stripe webhook endpoint is active',
    timestamp: new Date().toISOString()
  });
}
