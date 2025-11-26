/**
 * DEPRECATED Stripe Webhook Handler
 *
 * ⚠️  THIS ENDPOINT IS DEPRECATED ⚠️
 *
 * Use /api/stripe/webhook instead.
 * This file is kept only for backwards compatibility and returns 410 Gone.
 *
 * If you see errors from this endpoint in your logs, update your Stripe
 * webhook configuration to point to:
 * https://your-domain.com/api/stripe/webhook
 */

import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/webhooks/stripe
 * DEPRECATED - Returns 410 Gone
 */
export async function POST(request: NextRequest) {
  console.warn('[DEPRECATED] /api/webhooks/stripe called - this endpoint is deprecated');
  console.warn('[DEPRECATED] Please update Stripe webhook configuration to use /api/stripe/webhook');

  return NextResponse.json(
    {
      error: 'This webhook endpoint is deprecated',
      message: 'Please configure Stripe to send webhooks to /api/stripe/webhook instead',
      correctEndpoint: '/api/stripe/webhook',
      documentation: 'See STRIPE_WEBHOOK_SETUP.md for configuration instructions'
    },
    { status: 410 } // 410 Gone - indicates resource is no longer available
  );
}

/**
 * GET /api/webhooks/stripe
 * Returns deprecation notice
 */
export async function GET() {
  return NextResponse.json({
    status: 'deprecated',
    message: 'This webhook endpoint is deprecated. Use /api/stripe/webhook instead.',
    correctEndpoint: '/api/stripe/webhook',
    timestamp: new Date().toISOString()
  }, { status: 410 });
}
