import { NextRequest, NextResponse } from 'next/server';
import { execSync } from 'child_process';

let migrationAttempted = false;

/**
 * Health check endpoint
 * Also runs Prisma migrations on first call to ensure database schema is ready
 */
export async function GET(request: NextRequest) {
  try {
    // Run migrations once on first health check
    if (!migrationAttempted) {
      migrationAttempted = true;
      console.log('[Health] Running Prisma migrations...');
      
      try {
        execSync('npx prisma migrate deploy', {
          stdio: 'inherit',
          env: { ...process.env }
        });
        console.log('[Health] Migrations completed successfully');
      } catch (migrationError) {
        console.error('[Health] Migration error:', migrationError);
        // Continue anyway - migrations might already be applied
      }
    }
    
    return NextResponse.json(
      { 
        status: 'ok',
        timestamp: new Date().toISOString(),
        message: 'Server is healthy'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Health] Health check error:', error);
    return NextResponse.json(
      { 
        status: 'error',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
