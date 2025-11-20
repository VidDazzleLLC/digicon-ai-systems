/**
 * lib/automation/prisma.ts
 * 
 * DEPRECATED: This module now re-exports the canonical Prisma client from lib/db.ts
 * to ensure a single PrismaClient instance across the entire application.
 * 
 * This prevents:
 * - Connection pool exhaustion
 * - Memory bloat from multiple instances
 * - Inconsistent state between modules
 */

import prisma from '../db';

export default prisma;
export { prisma };
