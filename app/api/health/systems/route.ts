// Systems Health Check Endpoint
// GET /api/health/systems - Returns all 6 systems status

import { NextResponse } from 'next/server';
import { checkSystemsHealth } from '@/lib/health';
import { metrics } from '@/lib/monitoring';

export async function GET() {
  try {
    const startTime = Date.now();
    
    // Track request
    metrics.recordRequest('/api/health/systems');
    
    // Check all systems health
    const systemsHealth = await checkSystemsHealth();
    
    // Track response time
    const duration = Date.now() - startTime;
    metrics.recordResponseTime(duration);
    
    return NextResponse.json(systemsHealth, { status: 200 });
  } catch (error) {
    metrics.recordError('systems_health_check_failed', error as Error);
    
    return NextResponse.json(
      {
        error: 'Systems health check failed',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
