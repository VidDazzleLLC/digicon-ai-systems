import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

/**
 * Health check endpoint
 * Returns server status and optionally checks database connectivity
 */
export async function GET(request: NextRequest) {
  try {
    const response: {
      status: string;
      timestamp: string;
      message: string;
      database?: string;
    } = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      message: 'Server is healthy'
    };

    // Check database connectivity if Prisma client is available
    if (prisma) {
      try {
        // Simple query to check database connection
        await prisma.$queryRaw`SELECT 1`;
        response.database = 'connected';
      } catch (dbError) {
        console.error('[Health] Database connection error:', dbError);
        response.database = 'disconnected';
        response.status = 'degraded';
        response.message = 'Server is running but database is unavailable';
      }
    } else {
      response.database = 'not_configured';
    }
    
    return NextResponse.json(
      response,
      { status: response.status === 'ok' ? 200 : 503 }
    );
  } catch (error) {
    console.error('[Health] Health check error:', error);
    return NextResponse.json(
      { 
        status: 'error',
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
