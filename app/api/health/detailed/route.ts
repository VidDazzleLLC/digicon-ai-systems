// Detailed Health Check Endpoint
// GET /api/health/detailed - Returns comprehensive health information

import { NextResponse } from 'next/server';
import { checkDetailedHealth } from '@/lib/health';
import { metrics } from '@/lib/monitoring';

export async function GET() {
  try {
    const startTime = Date.now();
    
    // Track request
    metrics.recordRequest('/api/health/detailed');
    
    // Perform detailed health check
    const health = await checkDetailedHealth();
    
    // Track response time
    const duration = Date.now() - startTime;
    metrics.recordResponseTime(duration);
    
    // Return appropriate HTTP status
    const statusCode = health.status === 'healthy' ? 200 : 
                       health.status === 'degraded' ? 200 : 503;
    
    return NextResponse.json(health, { status: statusCode });
  } catch (error) {
    metrics.recordError('detailed_health_check_failed', error as Error);
    
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: 'Detailed health check failed'
      },
      { status: 503 }
    );
  }
}
