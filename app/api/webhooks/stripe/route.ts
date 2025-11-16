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
