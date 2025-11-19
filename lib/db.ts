/**
 * lib/db.ts
 *
 * Safe Prisma initialization:
 * - If DATABASE_URL is missing, do NOT instantiate PrismaClient (avoids runtime error).
 * - In production we create a single PrismaClient instance.
 * - In development we attach the client to `global` to avoid multiple instances during HMR.
 *
 * Export:
 * - default: PrismaClient | undefined
 * - hasPrisma: boolean flag to let callers easily test availability
 */

import { PrismaClient } from '@prisma/client';

declare global {
  // Allow a single PrismaClient across module reloads in dev
  // @ts-ignore
  var __prismaClient: PrismaClient | undefined;
}

const createPrismaClient = (): PrismaClient => {
  return new PrismaClient();
};

const prisma: PrismaClient | undefined = (() => {
  // If DATABASE_URL is not configured, don't attempt to instantiate PrismaClient.
  // Instantiating PrismaClient without a datasource URL will throw.
  if (!process.env.DATABASE_URL) {
    return undefined;
  }

  if (process.env.NODE_ENV === 'production') {
    // In production, just create the client once
    return createPrismaClient();
  }

  // In development, reuse the client across module reloads to avoid "already running" errors
  const g = global as any;
  if (!g.__prismaClient) {
    g.__prismaClient = createPrismaClient();
  }
  return g.__prismaClient as PrismaClient;
})();

export { prisma };
export default prisma;
export const hasPrisma = Boolean(prisma);
