/**
 * Encryption Utilities
 * AES-256-GCM encryption/decryption for secure data storage
 * 
 * Use Cases:
 * - API key encryption before storage
 * - Sensitive data protection
 * - Conference room file encryption
 */

import { createCipheriv, createDecipheriv, randomBytes, createHash } from 'crypto';

const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 16; // AES block size
const SALT_LENGTH = 64;
const TAG_LENGTH = 16;
const KEY_LENGTH = 32; // 256 bits

/**
 * Get encryption secret from environment
 * Must be at least 32 characters
 */
function getEncryptionSecret(): string {
  const secret = process.env.ENCRYPTION_SECRET;
  
  if (!secret || secret.length < 32) {
    throw new Error('ENCRYPTION_SECRET must be at least 32 characters');
  }
  
  return secret;
}

/**
 * Derive a 256-bit key from the encryption secret
 */
function deriveKey(secret: string, salt: Buffer): Buffer {
  return createHash('sha256')
    .update(secret)
    .update(salt)
    .digest();
}

/**
 * Encrypt data using AES-256-GCM
 * 
 * @param plaintext - Data to encrypt
 * @returns Encrypted data with IV, salt, and auth tag (base64 encoded)
 */
export function encrypt(plaintext: string): string {
  try {
    const secret = getEncryptionSecret();
    
    // Generate random salt and IV
    const salt = randomBytes(SALT_LENGTH);
    const iv = randomBytes(IV_LENGTH);
    
    // Derive key from secret and salt
    const key = deriveKey(secret, salt);
    
    // Create cipher
    const cipher = createCipheriv(ALGORITHM, key, iv);
    
    // Encrypt data
    let encrypted = cipher.update(plaintext, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    
    // Get authentication tag
    const authTag = cipher.getAuthTag();
    
    // Combine: salt + iv + authTag + encrypted data
    const result = Buffer.concat([
      salt,
      iv,
      authTag,
      Buffer.from(encrypted, 'base64')
    ]);
    
    return result.toString('base64');
    
  } catch (error) {
    console.error('Encryption error:', error);
    throw new Error('Failed to encrypt data');
  }
}

/**
 * Decrypt data using AES-256-GCM
 * 
 * @param ciphertext - Encrypted data (base64 encoded)
 * @returns Decrypted plaintext
 */
export function decrypt(ciphertext: string): string {
  try {
    const secret = getEncryptionSecret();
    
    // Decode base64
    const buffer = Buffer.from(ciphertext, 'base64');
    
    // Extract components
    const salt = buffer.subarray(0, SALT_LENGTH);
    const iv = buffer.subarray(SALT_LENGTH, SALT_LENGTH + IV_LENGTH);
    const authTag = buffer.subarray(
      SALT_LENGTH + IV_LENGTH,
      SALT_LENGTH + IV_LENGTH + TAG_LENGTH
    );
    const encrypted = buffer.subarray(SALT_LENGTH + IV_LENGTH + TAG_LENGTH);
    
    // Derive key from secret and salt
    const key = deriveKey(secret, salt);
    
    // Create decipher
    const decipher = createDecipheriv(ALGORITHM, key, iv);
    decipher.setAuthTag(authTag);
    
    // Decrypt data
    let decrypted = decipher.update(encrypted.toString('base64'), 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    
    return decrypted;
    
  } catch (error) {
    console.error('Decryption error:', error);
    throw new Error('Failed to decrypt data');
  }
}

/**
 * Generate SHA-256 hash of a string
 * Used for API key hashing
 * 
 * @param data - Data to hash
 * @returns SHA-256 hash (hex encoded)
 */
export function sha256Hash(data: string): string {
  return createHash('sha256').update(data).digest('hex');
}

/**
 * Generate a secure random string
 * Used for API key generation
 * 
 * @param length - Length of random string (in bytes, will be hex encoded to 2x length)
 * @returns Random hex string
 */
export function generateSecureRandom(length: number = 32): string {
  return randomBytes(length).toString('hex');
}

/**
 * Verify encrypted data integrity
 * 
 * @param ciphertext - Encrypted data to verify
 * @returns true if data is valid, false otherwise
 */
export function verifyEncryption(ciphertext: string): boolean {
  try {
    decrypt(ciphertext);
    return true;
  } catch {
    return false;
  }
}
