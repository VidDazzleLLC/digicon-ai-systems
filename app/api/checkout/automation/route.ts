// Dynamic Stripe Checkout API
// Handles multi-system automation purchases with bundle discounts
// Creates both one-time setup fees and recurring monthly subscriptions

import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
  apiVersion: '2025-10-29.clover',
});

// Setup fees (one-time)
const SETUP_PRICING: Record<string, number> = {
  payroll: 7500,
  hris: 6500,
  erp: 8500,
  crm: 5500,
  compliance: 9500,
  ai_infrastructure: 10000,
};

// Monthly recurring (per system, based on company size)
const MONTHLY_PRICING: Record<string, number> = {
  small: 500, // 0-50 employees
  midmarket: 1200, // 51-500 employees
  enterprise: 2500, // 500+ employees
};

// Bundle discounts
const BUNDLE_DISCOUNTS: Record<number, number> = {
  1: 0, // No discount
  2: 0.1, // 10% off
  3: 0.2, // 20% off
  4: 0.2, // 20% off
  5: 0.3, // 30% off
  6: 0.3, // 30% off (All systems)
};

const SYSTEM_NAMES: Record<string, string> = {
  payroll: 'Payroll Processing Automation',
  hris: 'HRIS/HCM System Automation',
  erp: 'ERP/Finance Automation',
  crm: 'CRM Lead-to-Close Automation',
  compliance: 'Compliance & Audit Automation',
  ai_infrastructure: 'AI Infrastructure & RAG Optimization',
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { systems, companySize, email } = body;

    // Validation
    if (!systems || !Array.isArray(systems) || systems.length === 0) {
      return NextResponse.json({ error: 'At least one system must be selected' }, { status: 400 });
    }

    if (!companySize || !['small', 'midmarket', 'enterprise'].includes(companySize)) {
      return NextResponse.json({ error: 'Valid company size required' }, { status: 400 });
    }

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    // Calculate totals
    const setupTotal = systems.reduce(
      (sum: number, sys: string) => sum + (SETUP_PRICING[sys] || 0),
      0
    );
    const discount = BUNDLE_DISCOUNTS[systems.length] || 0;
    const monthlyPerSystem = MONTHLY_PRICING[companySize];

    // Build line items for Stripe
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

    // Add setup fees (one-time payment)
    systems.forEach((system: string) => {
      const setupPrice = SETUP_PRICING[system] || 0;
      const discountedPrice = Math.round(setupPrice * (1 - discount));

      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: `${SYSTEM_NAMES[system] || system.toUpperCase()} - Setup`,
            description: 'One-time implementation and configuration fee',
            metadata: {
              systemType: system,
              priceType: 'setup',
            },
          },
          unit_amount: discountedPrice * 100, // Convert to cents
        },
        quantity: 1,
      });
    });

    // Add monthly recurring (subscription)
    systems.forEach((system: string) => {
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: `${SYSTEM_NAMES[system] || system.toUpperCase()} - Monthly Service`,
            description: `${companySize.charAt(0).toUpperCase() + companySize.slice(1)} tier recurring service`,
            metadata: {
              systemType: system,
              priceType: 'recurring',
              companySize,
            },
          },
          unit_amount: monthlyPerSystem * 100, // Convert to cents
          recurring: {
            interval: 'month',
          },
        },
        quantity: 1,
      });
    });

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      customer_email: email,
      line_items: lineItems,
      mode: 'subscription',
      metadata: {
        systems: systems.join(','),
        companySize,
        discount: (discount * 100).toString(),
        setupTotal: setupTotal.toString(),
        monthlyPerSystem: monthlyPerSystem.toString(),
      },
      success_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/pricing`,
      billing_address_collection: 'required',
      phone_number_collection: {
        enabled: true,
      },
      allow_promotion_codes: true,
    });

    return NextResponse.json({
      success: true,
      url: session.url,
      sessionId: session.id,
    });
  } catch (error: any) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      {
        error: 'Failed to create checkout session',
        message: error.message,
      },
      { status: 500 }
    );
  }
}
