// Basic Health Check Endpoint
// GET /api/health - Returns basic health status

import { NextResponse } from 'next/server';
import { checkHealth } from '@/lib/health';
import { metrics } from '@/lib/monitoring';

export async function GET() {
  try {
    const startTime = Date.now();
    
    // Track request
    metrics.recordRequest('/api/health');
    
    // Perform health check
    const health = await checkHealth();
    
    // Track response time
    const duration = Date.now() - startTime;
    metrics.recordResponseTime(duration);
    
    // Return appropriate HTTP status
    const statusCode = health.status === 'healthy' ? 200 : 
                       health.status === 'degraded' ? 200 : 503;
    
    return NextResponse.json(health, { status: statusCode });
  } catch (error) {
    metrics.recordError('health_check_failed', error as Error);
    
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: 'Health check failed'
      },
      { status: 503 }
    );
  }
}
