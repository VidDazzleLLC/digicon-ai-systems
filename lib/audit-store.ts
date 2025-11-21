/**
 * Audit Request Store
 * 
 * Server-side helper for persisting audit request data.
 * Uses PostgreSQL database via Prisma for reliable storage.
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

import prisma from './db';
import type { AuditRequest as PrismaAuditRequest } from '@prisma/client';

/**
 * Helper function to safely parse columns JSON
 */
function parseColumns(columnsJson: string | null | undefined): string[] | undefined {
  if (!columnsJson) return undefined;
  try {
    return JSON.parse(columnsJson);
  } catch (error) {
    console.error('[AUDIT-STORE] Failed to parse columns JSON:', error);
    return undefined;
  }
}

/**
 * Helper function to serialize columns to JSON
 */
function serializeColumns(columns: string[] | undefined): string | null {
  if (!columns) return null;
  try {
    return JSON.stringify(columns);
  } catch (error) {
    console.error('[AUDIT-STORE] Failed to serialize columns:', error);
    return null;
  }
}

/**
 * Helper function to convert database record to AuditRequest interface
 */
function recordToAuditRequest(record: PrismaAuditRequest): AuditRequest {
  return {
    id: record.id,
    companyName: record.companyName,
    customerEmail: record.customerEmail,
    status: record.status as 'pending' | 'report_ready' | 'paid',
    createdAt: record.createdAt.toISOString(),
    reportDelivered: record.reportDelivered,
    reportDeliveredAt: record.reportDeliveredAt?.toISOString(),
    paidAt: record.paidAt?.toISOString(),
    stripeSessionId: record.stripeSessionId || undefined,
    csvData: record.csvData || undefined,
    rowCount: record.rowCount || undefined,
    columns: parseColumns(record.columns),
    report: record.reportId ? {
      reportId: record.reportId,
      filePath: record.reportFilePath || '',
      url: record.reportUrl || undefined,
    } : undefined,
  };
}

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
  csvData?: string;
  rowCount?: number;
  columns?: string[];
}

/**
 * Create a new audit request
 */
export async function createAuditRequest(
  companyName: string,
  customerEmail: string
): Promise<AuditRequest> {
  if (!prisma) {
    throw new Error('Database not configured');
  }

  const id = `audit_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
  
  const record = await prisma.auditRequest.create({
    data: {
      id,
      companyName,
      customerEmail,
      status: 'pending',
    },
  });
  
  console.log(`[AUDIT-STORE] Created audit request: ${id}`);
  
  return recordToAuditRequest(record);
}

/**
 * Get an audit request by ID
 */
export async function getAuditRequest(id: string): Promise<AuditRequest | null> {
  if (!prisma) {
    throw new Error('Database not configured');
  }

  const record = await prisma.auditRequest.findUnique({
    where: { id },
  });
  
  if (!record) {
    return null;
  }
  
  return recordToAuditRequest(record);
}

/**
 * Update an audit request
 */
export async function updateAuditRequest(
  id: string,
  updates: Partial<AuditRequest>
): Promise<AuditRequest | null> {
  if (!prisma) {
    throw new Error('Database not configured');
  }

  try {
    // Build the update data object with proper types
    const updateData: {
      status?: string;
      paidAt?: Date | null;
      stripeSessionId?: string;
      reportDelivered?: boolean;
      reportDeliveredAt?: Date | null;
      csvData?: string;
      rowCount?: number;
      columns?: string | null;
      reportId?: string;
      reportFilePath?: string;
      reportUrl?: string | null;
    } = {};
    
    if (updates.status !== undefined) {
      updateData.status = updates.status;
    }
    if (updates.paidAt !== undefined) {
      updateData.paidAt = updates.paidAt ? new Date(updates.paidAt) : null;
    }
    if (updates.stripeSessionId !== undefined) {
      updateData.stripeSessionId = updates.stripeSessionId;
    }
    if (updates.reportDelivered !== undefined) {
      updateData.reportDelivered = updates.reportDelivered;
    }
    if (updates.reportDeliveredAt !== undefined) {
      updateData.reportDeliveredAt = updates.reportDeliveredAt ? new Date(updates.reportDeliveredAt) : null;
    }
    if (updates.csvData !== undefined) {
      updateData.csvData = updates.csvData;
    }
    if (updates.rowCount !== undefined) {
      updateData.rowCount = updates.rowCount;
    }
    if (updates.columns !== undefined) {
      updateData.columns = serializeColumns(updates.columns);
    }
    if (updates.report !== undefined) {
      updateData.reportId = updates.report.reportId;
      updateData.reportFilePath = updates.report.filePath;
      updateData.reportUrl = updates.report.url ?? null;
    }
    
    const record = await prisma.auditRequest.update({
      where: { id },
      data: updateData,
    });
    
    console.log(`[AUDIT-STORE] Updated audit request: ${id}`, updates);
    
    return recordToAuditRequest(record);
  } catch (error) {
    console.error(`[AUDIT-STORE] Audit request not found: ${id}`, error);
    return null;
  }
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
  if (!prisma) {
    throw new Error('Database not configured');
  }

  const record = await prisma.auditRequest.findFirst({
    where: { stripeSessionId: sessionId },
  });
  
  if (!record) {
    return null;
  }
  
  return recordToAuditRequest(record);
}
