/**
 * Stripe Checkout API for Payroll Audit Service
 * 
 * This API creates Stripe checkout sessions for $249 payroll audit service.
 * 
 * Updated Workflow:
 * 1. User uploads payroll files (via /api/audit/upload)
 * 2. System generates audit report and creates checkout session
 * 3. Upload endpoint returns checkoutUrl (preferred flow)
 * 4. OR user can request checkout session via this endpoint (legacy support)
 * 5. Customer completes payment via Stripe Checkout
 * 6. Stripe webhook confirms payment
 * 7. Audit report is emailed to customer
 * 
 * Features:
 * - Fixed pricing: $249.00 USD
 * - One-time payment collection
 * - Returns session.url reliably (with fallback to constructed URL)
 * - Supports both creating new sessions and retrieving existing ones
 */

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getAuditRequest, updateAuditRequest } from '@/lib/audit-store';

// Initialize Stripe only if API key is available
let stripe: Stripe | null = null;
if (process.env.STRIPE_SECRET_KEY) {
  stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2025-10-29.clover',
  });
}

interface CreateCheckoutRequest {
  auditRequestId?: string;
  reportId?: string;
  companyName?: string;
  customerEmail?: string;
}

/**
 * Create Stripe Checkout Session for Audit Service
 * POST /api/audit/checkout
 * 
 * Supports two modes:
 * 1. Create new session from auditRequestId (for previously generated reports)
 * 2. Legacy mode with full details (for backward compatibility)
 */
export async function POST(request: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json(
        { error: 'Stripe is not configured. Please set STRIPE_SECRET_KEY environment variable.' },
        { status: 500 }
      );
    }

    const body: CreateCheckoutRequest = await request.json();
    const { auditRequestId, reportId, companyName, customerEmail } = body;

    // Mode 1: Create session for existing audit request
    if (auditRequestId) {
      const auditRequest = await getAuditRequest(auditRequestId);
      
      if (!auditRequest) {
        return NextResponse.json(
          { error: 'Audit request not found' },
          { status: 404 }
        );
      }
      
      // Check if session already exists
      if (auditRequest.stripeSessionId) {
        try {
          const existingSession = await stripe.checkout.sessions.retrieve(auditRequest.stripeSessionId);
          
          // If session is still valid and not expired, return it
          if (existingSession.status !== 'expired') {
            const checkoutUrl = existingSession.url || `https://checkout.stripe.com/pay/${existingSession.id}`;
            console.log(`[CHECKOUT] Returning existing session: ${existingSession.id}`);
            console.log(`[CHECKOUT] Checkout URL: ${checkoutUrl}`);
            return NextResponse.json({
              success: true,
              checkoutUrl,
              sessionId: existingSession.id,
              auditRequestId: auditRequest.id,
              reportId: auditRequest.report?.reportId,
              message: 'Using existing checkout session',
            });
          }
        } catch (err) {
          console.log('[CHECKOUT] Existing session not found or expired, creating new one');
        }
      }
      
      // Create new session for this audit request
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        customer_email: auditRequest.customerEmail,
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'Digicon AI Systems - Payroll Audit Report',
                description: `AI-Powered Payroll Audit Service for ${auditRequest.companyName}`,
              },
              unit_amount: 24900, // $249.00
            },
            quantity: 1,
          },
        ],
        metadata: {
          auditRequestId: auditRequest.id,
          reportId: auditRequest.report?.reportId || '',
          customer_email: auditRequest.customerEmail,
          service: 'payroll_audit',
        },
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/portal/${auditRequest.id}?payment=success&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/portal/${auditRequest.id}?payment=cancelled`,
      });
      
      // Update audit request with new session ID
      await updateAuditRequest(auditRequest.id, {
        stripeSessionId: session.id,
      });
      
      console.log(`[CHECKOUT] Created session for audit request: ${auditRequest.id}`);
      console.log(`[CHECKOUT] Session ID: ${session.id}`);
      console.log(`[CHECKOUT] Session URL from Stripe: ${session.url}`);
      
      // Construct checkout URL with fallback
      const checkoutUrl = session.url || `https://checkout.stripe.com/pay/${session.id}`;
      console.log(`[CHECKOUT] Final checkout URL: ${checkoutUrl}`);
      
      return NextResponse.json({
        success: true,
        checkoutUrl,
        sessionId: session.id,
        auditRequestId: auditRequest.id,
        reportId: auditRequest.report?.reportId,
        message: 'Checkout session created successfully',
      });
    }

    // Mode 2: Legacy mode - create session with provided details
    if (!companyName || !customerEmail) {
      return NextResponse.json(
        { error: 'Missing required fields: auditRequestId OR (companyName AND customerEmail)' },
        { status: 400 }
      );
    }

    // Fixed pricing: $249.00 USD
    const amount = 24900; // $249.00 in cents
    const currency = 'usd';

    console.log('💳 CREATING AUDIT CHECKOUT SESSION (Legacy mode):');
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
        companyName: companyName,
        service: 'payroll_audit',
        reportId: reportId || '',
        auditRequestId: auditRequestId || '', // Include for webhook processing
      },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/portal?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/portal?payment=cancelled`,
    });

    console.log('✅ AUDIT CHECKOUT SESSION CREATED (Legacy mode):');
    console.log(`- Session ID: ${session.id}`);
    console.log(`- Checkout URL from Stripe: ${session.url}`);
    
    // Construct checkout URL with fallback
    const checkoutUrl = session.url || `https://checkout.stripe.com/pay/${session.id}`;
    console.log(`- Final checkout URL: ${checkoutUrl}`);

    // Return checkout URL with fallback
    return NextResponse.json({
      success: true,
      checkoutUrl,
      sessionId: session.id,
      amount: amount,
      currency: currency,
      message: 'Checkout session created successfully'
    });
  } catch (error) {
    console.error('💳 AUDIT CHECKOUT ERROR:', error);
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      type: typeof error
    });
    return NextResponse.json(
      { 
        error: 'Failed to create checkout session',
        details: error instanceof Error ? error.message : 'Unknown error',
        success: false
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
    if (!stripe) {
      return NextResponse.json(
        { error: 'Stripe is not configured. Please set STRIPE_SECRET_KEY environment variable.' },
        { status: 500 }
      );
    }

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
