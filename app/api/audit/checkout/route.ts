/**
 * Stripe Checkout API for Payroll Audit Service
 * 
 * This API creates Stripe checkout sessions for $249 payroll audit service.
 * Features:
 * - Fixed pricing: $249.00 USD
 * - One-time payment collection
 * - Automatic audit request status update on payment
 * - Enables file upload after payment verification
 * 
 * Workflow:
 * 1. User submits audit request via landing page
 * 2. System creates audit request with 'pending' status
 * 3. User redirected to this checkout API
 * 4. Customer completes payment via Stripe Checkout
 * 5. Stripe webhook confirms payment
 * 6. Audit request status updated to 'paid'
 * 7. User can now access portal and upload payroll files
 */

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-10-29.clover',
});

interface CreateCheckoutRequest {
  auditRequestId: string;
  companyName: string;
  customerEmail: string;
}

/**
 * Create Stripe Checkout Session for Audit Service
 * POST /api/audit/checkout
 */
export async function POST(request: NextRequest) {
  try {
    const body: CreateCheckoutRequest = await request.json();
    const { auditRequestId, companyName, customerEmail } = body;

    // Validate required fields
    if (!auditRequestId || !companyName || !customerEmail) {
      return NextResponse.json(
        { error: 'Missing required fields: auditRequestId, companyName, customerEmail' },
        { status: 400 }
      );
    }

    // Fixed pricing: $249.00 USD
    const amount = 24900; // $249.00 in cents
    const currency = 'usd';

    console.log('💳 CREATING AUDIT CHECKOUT SESSION:');
    console.log(`- Audit Request ID: ${auditRequestId}`);
    console.log(`- Company: ${companyName}`);
    console.log(`- Amount: $249.00 USD`);
    console.log(`- Customer Email: ${customerEmail}`);

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: customerEmail,
      line_items: [
        {
          price_data: {
            currency: currency,
            product_data: {
              name: 'Digicon AI Systems - Payroll Audit (One Quarter)',
              description: `AI-Powered Payroll Audit Service for ${companyName}`,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      metadata: {
        auditRequestId: auditRequestId,
        companyName: companyName,
        service: 'payroll_audit',
      },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/portal/${auditRequestId}?payment=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/portal/${auditRequestId}?payment=cancelled`,
    });

    console.log('✅ AUDIT CHECKOUT SESSION CREATED:');
    console.log(`- Session ID: ${session.id}`);
    console.log(`- Checkout URL: ${session.url}`);

    // Return checkout URL
    return NextResponse.json({
      success: true,
      checkoutUrl: session.url,
      sessionId: session.id,
      amount: amount,
      currency: currency,
      auditRequestId: auditRequestId,
      message: 'Checkout session created successfully'
    });
  } catch (error) {
    console.error('💳 AUDIT CHECKOUT ERROR:', error);
    return NextResponse.json(
      { 
        error: 'Failed to create checkout session',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

/**
 * Get checkout session details
 * GET /api/audit/checkout?session_id=cs_xxx
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Missing session_id parameter' },
        { status: 400 }
      );
    }

    // Retrieve session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    console.log(`📋 AUDIT CHECKOUT SESSION RETRIEVED: ${sessionId}`);
    console.log(`- Payment Status: ${session.payment_status}`);

    return NextResponse.json({
      success: true,
      session: {
        id: session.id,
        payment_status: session.payment_status,
        amount_total: session.amount_total,
        currency: session.currency,
        customer_email: session.customer_email,
        metadata: session.metadata,
      }
    });
  } catch (error) {
    console.error('💳 SESSION RETRIEVAL ERROR:', error);
    return NextResponse.json(
      { 
        error: 'Failed to retrieve session',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
