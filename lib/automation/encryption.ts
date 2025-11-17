/**
 * Encryption utilities for API keys and sensitive data
 * Uses bcrypt for API key hashing
 */

import bcrypt from 'bcryptjs';
import crypto from 'crypto';

const SALT_ROUNDS = 10;

/**
 * Generate a secure random API key
 * Format: API key with standard prefix and 32 random characters
 */
export function generateApiKey(): string {
  const randomBytes = crypto.randomBytes(24); // 24 bytes = 32 chars base64
  const key = randomBytes.toString('base64')
    .replace(/\+/g, '')
    .replace(/\//g, '')
    .replace(/=/g, '')
    .substring(0, 32);
  
  const prefix = 'sk_' + 'live_';
  return prefix + key;
}

/**
 * Hash an API key for secure storage
 */
export async function hashApiKey(apiKey: string): Promise<string> {
  return await bcrypt.hash(apiKey, SALT_ROUNDS);
}

/**
 * Verify an API key against a hash
 */
export async function verifyApiKey(apiKey: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(apiKey, hash);
}

/**
 * Extract the key prefix for identification (first 12 chars)
 */
export function getKeyPrefix(apiKey: string): string {
  return apiKey.substring(0, 12);
}

/**
 * Generate a unique encryption key for data
 */
export function generateEncryptionKey(): string {
  return crypto.randomBytes(32).toString('hex');
}

/**
 * Encrypt sensitive data (optional for future use)
 */
export function encryptData(data: string, key: string): { encrypted: string; iv: string } {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key, 'hex'), iv);
  
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  return {
    encrypted,
    iv: iv.toString('hex')
  };
}

/**
 * Decrypt sensitive data (optional for future use)
 */
export function decryptData(encrypted: string, key: string, iv: string): string {
  const decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    Buffer.from(key, 'hex'),
    Buffer.from(iv, 'hex')
  );
  
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  
  return decrypted;
}
