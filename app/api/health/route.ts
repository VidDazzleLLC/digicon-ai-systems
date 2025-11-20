import { NextRequest, NextResponse } from 'next/server';

/**
 * Health check endpoint
 * 
 * Performs a lightweight health check without side effects.
 * Database migrations should be handled separately (e.g., deployment hook, seed script).
 * This endpoint must be fast and non-blocking for load balancers and monitoring.
 */
export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(
      {
        status: 'ok',
        timestamp: new Date().toISOString(),
        message: 'Server is healthy',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Health] Health check error:', error);
    return NextResponse.json(
      {
        status: 'error',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
