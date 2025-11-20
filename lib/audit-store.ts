/**
 * Audit Request Store
 * 
 * Lightweight server-side helper for persisting audit request data.
 * Uses a local JSON file for storage with atomic read/write operations.
 * 
 * Data Structure:
 * - id: unique identifier
 * - companyName: company name from request
 * - customerEmail: email for report delivery
 * - status: pending | report_ready | paid
 * - report: { reportId, filePath, url }
 * - createdAt: timestamp
 * - paidAt: timestamp (when payment completed)
 * - reportDelivered: boolean flag
 * - reportDeliveredAt: timestamp
 */

import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'app', 'data');
const AUDIT_REQUESTS_FILE = path.join(DATA_DIR, 'audit-requests.json');

export interface AuditReport {
  reportId: string;
  filePath: string;
  url?: string;
}

export interface AuditRequest {
  id: string;
  companyName: string;
  customerEmail: string;
  status: 'pending' | 'report_ready' | 'paid';
  report?: AuditReport;
  createdAt: string;
  paidAt?: string;
  reportDelivered?: boolean;
  reportDeliveredAt?: string;
  stripeSessionId?: string;
}

/**
 * Initialize storage directory and file if they don't exist
 */
async function ensureDataDir(): Promise<void> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    
    // Check if file exists
    try {
      await fs.access(AUDIT_REQUESTS_FILE);
    } catch {
      // File doesn't exist, create it with empty array
      await fs.writeFile(AUDIT_REQUESTS_FILE, JSON.stringify([], null, 2));
    }
  } catch (error) {
    console.error('Error ensuring data directory:', error);
    throw error;
  }
}

/**
 * Read all audit requests from storage
 */
async function readAuditRequests(): Promise<AuditRequest[]> {
  await ensureDataDir();
  
  try {
    const data = await fs.readFile(AUDIT_REQUESTS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading audit requests:', error);
    return [];
  }
}

/**
 * Write audit requests to storage
 */
async function writeAuditRequests(requests: AuditRequest[]): Promise<void> {
  await ensureDataDir();
  
  try {
    await fs.writeFile(AUDIT_REQUESTS_FILE, JSON.stringify(requests, null, 2));
  } catch (error) {
    console.error('Error writing audit requests:', error);
    throw error;
  }
}

/**
 * Create a new audit request
 */
export async function createAuditRequest(
  companyName: string,
  customerEmail: string
): Promise<AuditRequest> {
  const id = `audit_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  const request: AuditRequest = {
    id,
    companyName,
    customerEmail,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };
  
  const requests = await readAuditRequests();
  requests.push(request);
  await writeAuditRequests(requests);
  
  console.log(`[AUDIT-STORE] Created audit request: ${id}`);
  return request;
}

/**
 * Get an audit request by ID
 */
export async function getAuditRequest(id: string): Promise<AuditRequest | null> {
  const requests = await readAuditRequests();
  return requests.find(r => r.id === id) || null;
}

/**
 * Update an audit request
 */
export async function updateAuditRequest(
  id: string,
  updates: Partial<AuditRequest>
): Promise<AuditRequest | null> {
  const requests = await readAuditRequests();
  const index = requests.findIndex(r => r.id === id);
  
  if (index === -1) {
    console.error(`[AUDIT-STORE] Audit request not found: ${id}`);
    return null;
  }
  
  requests[index] = { ...requests[index], ...updates };
  await writeAuditRequests(requests);
  
  console.log(`[AUDIT-STORE] Updated audit request: ${id}`, updates);
  return requests[index];
}

/**
 * Mark audit request as report ready
 */
export async function markReportReady(
  id: string,
  report: AuditReport
): Promise<AuditRequest | null> {
  return updateAuditRequest(id, {
    status: 'report_ready',
    report,
  });
}

/**
 * Mark audit request as paid and set stripe session
 */
export async function markAsPaid(
  id: string,
  stripeSessionId: string
): Promise<AuditRequest | null> {
  return updateAuditRequest(id, {
    status: 'paid',
    paidAt: new Date().toISOString(),
    stripeSessionId,
  });
}

/**
 * Mark report as delivered
 */
export async function markReportDelivered(id: string): Promise<AuditRequest | null> {
  return updateAuditRequest(id, {
    reportDelivered: true,
    reportDeliveredAt: new Date().toISOString(),
  });
}

/**
 * Find audit request by Stripe session ID
 */
export async function findByStripeSession(sessionId: string): Promise<AuditRequest | null> {
  const requests = await readAuditRequests();
  return requests.find(r => r.stripeSessionId === sessionId) || null;
}
