import { execSync } from 'child_process';

/**
 * Initialize Prisma migrations on application startup
 * This ensures all pending migrations are applied when the app starts
 */
export async function initializeMigrations() {
  try {
    console.log('[Prisma] Running database migrations...');
    
    // Execute prisma migrate deploy command
    // This is idempotent - it only applies pending migrations
    execSync('npx prisma migrate deploy', {
      stdio: 'inherit',
      env: { ...process.env }
    });
    
    console.log('[Prisma] Migrations completed successfully');
  } catch (error) {
    console.error('[Prisma] Migration error:', error);
    // Don't throw - log the error and continue
    // The app can still function even if migrations fail
  }
}
