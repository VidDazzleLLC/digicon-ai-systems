/**
 * API Key Management
 * Generation, validation, and revocation of API keys for payroll automation
 * 
 * Features:
 * - Secure key generation (digi_XXXXXXXXXXXXXXXX format)
 * - SHA-256 hashing for storage
 * - AES-256-GCM encryption
 * - Rate limiting (1000 requests/day)
 * - Usage tracking
 */

import { PrismaClient } from '@prisma/client';
import { encrypt, decrypt, sha256Hash, generateSecureRandom } from '../encryption';

const prisma = new PrismaClient();

const API_KEY_PREFIX = 'digi_';
const API_KEY_LENGTH = 48; // 48 hex chars after prefix

/**
 * Generate a new API key
 * 
 * @param customerEmail - Customer email address
 * @param companyName - Company name
 * @param stripeCustomerId - Stripe customer ID (optional)
 * @param stripeSubscriptionId - Stripe subscription ID (optional)
 * @returns API key object with plaintext key (only time it's visible)
 */
export async function generateApiKey(params: {
  customerEmail: string;
  companyName: string;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  requestsPerDay?: number;
}) {
  try {
    // Generate random API key
    const randomPart = generateSecureRandom(API_KEY_LENGTH / 2); // Hex will double length
    const apiKey = `${API_KEY_PREFIX}${randomPart}`;
    
    // Hash the key for database storage
    const keyHash = sha256Hash(apiKey);
    
    // Encrypt the key for backup storage
    const encryptedKey = encrypt(apiKey);
    
    // Generate unique customer ID
    const customerId = `cust_${generateSecureRandom(16)}`;
    
    // Create API key record
    const apiKeyRecord = await prisma.apiKey.create({
      data: {
        key: apiKey,
        keyHash: keyHash,
        encryptedKey: encryptedKey,
        customerId: customerId,
        customerEmail: params.customerEmail,
        companyName: params.companyName,
        status: 'ACTIVE',
        requestsPerDay: params.requestsPerDay || 1000,
        requestsToday: 0,
        lastResetAt: new Date(),
        stripeCustomerId: params.stripeCustomerId,
        stripeSubscriptionId: params.stripeSubscriptionId,
        billingStatus: 'ACTIVE',
      },
    });
    
    console.log(`✅ API Key generated for ${params.customerEmail}`);
    console.log(`- Customer ID: ${customerId}`);
    console.log(`- Rate Limit: ${params.requestsPerDay || 1000} requests/day`);
    
    return {
      id: apiKeyRecord.id,
      apiKey: apiKey, // IMPORTANT: This is the only time the plaintext key is returned
      customerId: customerId,
      customerEmail: params.customerEmail,
      companyName: params.companyName,
      requestsPerDay: apiKeyRecord.requestsPerDay,
      createdAt: apiKeyRecord.createdAt,
    };
    
  } catch (error) {
    console.error('Failed to generate API key:', error);
    throw new Error('API key generation failed');
  }
}

/**
 * Validate an API key
 * 
 * @param apiKey - API key to validate
 * @returns API key record if valid, null if invalid
 */
export async function validateApiKey(apiKey: string) {
  try {
    // Check format
    if (!apiKey.startsWith(API_KEY_PREFIX)) {
      console.log('❌ Invalid API key format');
      return null;
    }
    
    // Hash the key to look up in database
    const keyHash = sha256Hash(apiKey);
    
    // Find API key record
    const apiKeyRecord = await prisma.apiKey.findUnique({
      where: { keyHash },
    });
    
    if (!apiKeyRecord) {
      console.log('❌ API key not found');
      return null;
    }
    
    // Check if key is active
    if (apiKeyRecord.status !== 'ACTIVE') {
      console.log(`❌ API key status: ${apiKeyRecord.status}`);
      return null;
    }
    
    // Check billing status
    if (apiKeyRecord.billingStatus !== 'ACTIVE' && apiKeyRecord.billingStatus !== 'TRIAL') {
      console.log(`❌ Billing status: ${apiKeyRecord.billingStatus}`);
      return null;
    }
    
    // Check rate limit
    const now = new Date();
    const lastReset = new Date(apiKeyRecord.lastResetAt);
    const hoursSinceReset = (now.getTime() - lastReset.getTime()) / (1000 * 60 * 60);
    
    // Reset counter if more than 24 hours have passed
    if (hoursSinceReset >= 24) {
      await prisma.apiKey.update({
        where: { id: apiKeyRecord.id },
        data: {
          requestsToday: 0,
          lastResetAt: now,
        },
      });
      apiKeyRecord.requestsToday = 0;
    }
    
    // Check if rate limit exceeded
    if (apiKeyRecord.requestsToday >= apiKeyRecord.requestsPerDay) {
      console.log(`❌ Rate limit exceeded: ${apiKeyRecord.requestsToday}/${apiKeyRecord.requestsPerDay}`);
      return null;
    }
    
    console.log(`✅ API key validated for ${apiKeyRecord.customerEmail}`);
    console.log(`- Requests today: ${apiKeyRecord.requestsToday}/${apiKeyRecord.requestsPerDay}`);
    
    return apiKeyRecord;
    
  } catch (error) {
    console.error('API key validation error:', error);
    return null;
  }
}

/**
 * Increment API key usage counter
 * 
 * @param apiKeyId - API key ID
 */
export async function incrementApiKeyUsage(apiKeyId: string) {
  try {
    await prisma.apiKey.update({
      where: { id: apiKeyId },
      data: {
        requestsToday: { increment: 1 },
        totalRequests: { increment: 1 },
        lastUsedAt: new Date(),
      },
    });
  } catch (error) {
    console.error('Failed to increment API key usage:', error);
  }
}

/**
 * Revoke an API key
 * 
 * @param apiKey - API key to revoke (or key hash)
 * @param reason - Reason for revocation
 */
export async function revokeApiKey(apiKeyOrHash: string, reason: string = 'USER_REQUESTED') {
  try {
    // Hash the key if it's not already hashed
    const keyHash = apiKeyOrHash.startsWith(API_KEY_PREFIX)
      ? sha256Hash(apiKeyOrHash)
      : apiKeyOrHash;
    
    // Update API key status
    const updated = await prisma.apiKey.update({
      where: { keyHash },
      data: {
        status: 'REVOKED',
        revokedAt: new Date(),
        revokedReason: reason,
      },
    });
    
    console.log(`✅ API key revoked for ${updated.customerEmail}`);
    console.log(`- Reason: ${reason}`);
    
    return updated;
    
  } catch (error) {
    console.error('Failed to revoke API key:', error);
    throw new Error('API key revocation failed');
  }
}

/**
 * Get API key statistics
 * 
 * @param apiKeyId - API key ID
 */
export async function getApiKeyStats(apiKeyId: string) {
  try {
    const apiKey = await prisma.apiKey.findUnique({
      where: { id: apiKeyId },
      include: {
        corrections: {
          orderBy: { createdAt: 'desc' },
          take: 10,
        },
        automationLogs: {
          orderBy: { createdAt: 'desc' },
          take: 20,
        },
      },
    });
    
    if (!apiKey) {
      return null;
    }
    
    // Calculate statistics
    const totalCorrections = await prisma.payrollCorrection.count({
      where: { apiKeyId },
    });
    
    const successfulCorrections = await prisma.payrollCorrection.count({
      where: {
        apiKeyId,
        status: 'COMPLETED',
      },
    });
    
    const failedCorrections = await prisma.payrollCorrection.count({
      where: {
        apiKeyId,
        status: 'FAILED',
      },
    });
    
    return {
      apiKey: {
        id: apiKey.id,
        customerEmail: apiKey.customerEmail,
        companyName: apiKey.companyName,
        status: apiKey.status,
        requestsToday: apiKey.requestsToday,
        requestsPerDay: apiKey.requestsPerDay,
        totalRequests: apiKey.totalRequests,
        lastUsedAt: apiKey.lastUsedAt,
        createdAt: apiKey.createdAt,
      },
      stats: {
        totalCorrections,
        successfulCorrections,
        failedCorrections,
        successRate: totalCorrections > 0
          ? (successfulCorrections / totalCorrections * 100).toFixed(2)
          : '0',
      },
      recentCorrections: apiKey.corrections,
      recentLogs: apiKey.automationLogs,
    };
    
  } catch (error) {
    console.error('Failed to get API key stats:', error);
    return null;
  }
}

/**
 * List all API keys for a customer
 * 
 * @param customerEmail - Customer email
 */
export async function listApiKeys(customerEmail: string) {
  try {
    const apiKeys = await prisma.apiKey.findMany({
      where: { customerEmail },
      orderBy: { createdAt: 'desc' },
    });
    
    return apiKeys.map(key => ({
      id: key.id,
      customerId: key.customerId,
      status: key.status,
      requestsToday: key.requestsToday,
      requestsPerDay: key.requestsPerDay,
      totalRequests: key.totalRequests,
      lastUsedAt: key.lastUsedAt,
      createdAt: key.createdAt,
      revokedAt: key.revokedAt,
      // Never return the actual key or hash
    }));
    
  } catch (error) {
    console.error('Failed to list API keys:', error);
    return [];
  }
}
