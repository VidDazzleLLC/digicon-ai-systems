import crypto from 'crypto';

/**
 * Generate a unique token for portal access
 * @returns A cryptographically secure UUID token
 */
export function generateToken(): string {
  return crypto.randomUUID();
}

/**
 * Hash a token using SHA-256
 * Tokens are hashed before storage for security
 * @param token - The plain token to hash
 * @returns The hashed token
 */
export function hashToken(token: string): string {
  return crypto.createHash('sha256').update(token).digest('hex');
}

/**
 * Generate token expiration date (48 hours from now)
 * @returns A Date object representing 48 hours from now
 */
export function getTokenExpiration(): Date {
  const expirationDate = new Date();
  expirationDate.setHours(expirationDate.getHours() + 48);
  return expirationDate;
}

/**
 * Check if a token has expired
 * @param expirationDate - The expiration date to check
 * @returns True if the token has expired, false otherwise
 */
export function isTokenExpired(expirationDate: Date): boolean {
  return new Date() > expirationDate;
}
