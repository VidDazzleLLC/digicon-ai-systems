/**
 * API Key validation and authentication utilities
 */

import { verifyApiKey } from './encryption';
import { prisma } from './prisma';

export interface ApiKeyValidationResult {
  valid: boolean;
  apiKey?: any;
  error?: string;
}

/**
 * Validate an API key from a request
 */
export async function validateApiKey(
  authHeader: string | null,
  expectedSystemType?: string
): Promise<ApiKeyValidationResult> {
  if (!authHeader) {
    return { valid: false, error: 'Missing Authorization header' };
  }

  // Extract the API key from "Bearer sk_live_..."
  const apiKey = authHeader.replace('Bearer ', '').trim();
  
  if (!apiKey.startsWith('sk_live_')) {
    return { valid: false, error: 'Invalid API key format' };
  }

  try {
    // Build where clause with proper type
    const whereClause: any = {
      active: true,
    };
    
    if (expectedSystemType) {
      whereClause.systemType = expectedSystemType as any;
    }

    // Find all active API keys (we need to hash check each one)
    const apiKeys = await prisma.apiKey.findMany({
      where: whereClause
    });

    // Check each key's hash
    for (const key of apiKeys) {
      const isValid = await verifyApiKey(apiKey, key.keyHash);
      if (isValid) {
        // Update usage stats
        await prisma.apiKey.update({
          where: { id: key.id },
          data: {
            lastUsedAt: new Date(),
            totalRequests: { increment: 1 },
            requestsToday: { increment: 1 }
          }
        });

        return { valid: true, apiKey: key };
      }
    }

    return { valid: false, error: 'Invalid API key' };
  } catch (error) {
    console.error('API key validation error:', error);
    return { valid: false, error: 'Validation failed' };
  }
}

/**
 * Check if API key has exceeded rate limits
 */
export async function checkRateLimit(apiKeyId: string): Promise<boolean> {
  const apiKey = await prisma.apiKey.findUnique({
    where: { id: apiKeyId }
  });

  if (!apiKey) return false;

  // Check if we need to reset daily usage
  const now = new Date();
  const lastReset = new Date(apiKey.lastResetAt);
  const hoursSinceReset = (now.getTime() - lastReset.getTime()) / (1000 * 60 * 60);

  if (hoursSinceReset >= 24) {
    // Reset daily usage
    await prisma.apiKey.update({
      where: { id: apiKeyId },
      data: {
        requestsToday: 0,
        lastResetAt: now
      }
    });
    return true;
  }

  // Check if under limit
  return apiKey.requestsToday < apiKey.requestsPerDay;
}
