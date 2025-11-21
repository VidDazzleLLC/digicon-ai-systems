/**
 * Audit Upload Endpoint - Correct Workflow
 * 
 * This endpoint implements the updated audit workflow:
 * 1. Accept payroll file upload (CSV or other formats)
 * 2. Validate and store file/data
 * 3. Create Stripe Checkout session ($249)
 * 4. Return checkout URL to client
 * 
 * The report is generated and emailed after payment is confirmed via webhook.
 */

import { NextRequest, NextResponse } from 'next/server';
import Papa from 'papaparse';
import Stripe from 'stripe';
import { 
  createAuditRequest, 
  updateAuditRequest 
} from '@/lib/audit-store';

// Initialize Stripe only if API key is available
let stripe: Stripe | null = null;
if (process.env.STRIPE_SECRET_KEY) {
  stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2025-10-29.clover',
  });
}

export async function POST(req: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json(
        { error: 'Stripe is not configured. Please set STRIPE_SECRET_KEY environment variable.' },
        { status: 500 }
      );
    }

    const formData = await req.formData();
    const file = formData.get('file') as File;
    const companyName = formData.get('companyName') as string;
    const customerEmail = formData.get('email') as string;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }
    
    if (!companyName || !customerEmail) {
      return NextResponse.json(
        { error: 'Company name and email are required' },
        { status: 400 }
      );
    }
    
    // Validate file type (accept CSV for now)
    if (!file.name.endsWith('.csv')) {
      return NextResponse.json(
        { error: 'Only CSV files are accepted' },
        { status: 400 }
      );
    }
    
    console.log(`[UPLOAD] Processing file upload for ${companyName} (${customerEmail})`);
    
    // Read and parse CSV
    const text = await file.text();
    const parsed = Papa.parse(text, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true
    });
    
    if (parsed.errors.length > 0) {
      return NextResponse.json(
        { error: 'CSV parsing failed', details: parsed.errors },
        { status: 400 }
      );
    }
    
    // Create audit request in storage
    const auditRequest = await createAuditRequest(companyName, customerEmail);
    console.log(`[UPLOAD] Created audit request: ${auditRequest.id}`);
    
    // Create Stripe Checkout session
    console.log('[UPLOAD] Creating Stripe Checkout session...');
    
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: customerEmail,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Digicon AI Systems - Payroll Audit Report',
              description: `AI-Powered Payroll Audit Service for ${companyName}`,
            },
            unit_amount: 24900, // $249.00
          },
          quantity: 1,
        },
      ],
      metadata: {
        auditRequestId: auditRequest.id,
        customer_email: customerEmail,
        service: 'payroll_audit',
      },
      success_url: `${baseUrl}/portal/${auditRequest.id}?payment=success`,
      cancel_url: `${baseUrl}/portal/${auditRequest.id}?payment=cancelled`,
    });
    
    // Update audit request with session ID
    await updateAuditRequest(auditRequest.id, {
      stripeSessionId: session.id,
    });
    
    console.log(`[UPLOAD] Checkout session created: ${session.id}`);
    console.log(`[UPLOAD] Checkout URL from Stripe: ${session.url}`);
    
    // Construct checkout URL with fallback
    const checkoutUrl = session.url || `https://checkout.stripe.com/pay/${session.id}`;
    console.log(`[UPLOAD] Final checkout URL: ${checkoutUrl}`);
    
    // Return checkout URL and session info
    return NextResponse.json({
      success: true,
      checkoutUrl,
      sessionId: session.id,
      auditRequestId: auditRequest.id,
      message: 'File uploaded successfully. Please complete payment to receive your audit report.',
    });
    
  } catch (error: any) {
    console.error('[UPLOAD ERROR]', error);
    console.error('[UPLOAD ERROR] Details:', {
      message: error.message,
      stack: error.stack,
      type: typeof error
    });
    return NextResponse.json(
      { success: false, error: 'Upload failed', message: error.message },
      { status: 500 }
    );
  }
}
