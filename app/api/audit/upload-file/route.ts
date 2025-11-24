/**
 * File Upload Endpoint - Post-Payment Upload
 *
 * New Self-Contained Workflow:
 * 1. User has already paid (status: paid)
 * 2. Upload payroll CSV file
 * 3. Store file data in AuditRequest
 * 4. Trigger AI analysis immediately
 * 5. Email report when complete
 *
 * NO MissionX dependency - everything stored in our database
 */

import { NextRequest, NextResponse } from 'next/server';
import Papa from 'papaparse';
import { prisma } from '@/lib/db';

// Max file size: 10MB
const MAX_FILE_SIZE = 10 * 1024 * 1024;

// Allowed file types
const ALLOWED_MIME_TYPES = [
  'text/csv',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
];

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const auditRequestId = formData.get('auditRequestId') as string;

    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    if (!auditRequestId) {
      return NextResponse.json(
        { error: 'Audit request ID is required' },
        { status: 400 }
      );
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: `File too large. Maximum size is ${MAX_FILE_SIZE / 1024 / 1024}MB` },
        { status: 400 }
      );
    }

    // Validate file type
    if (!ALLOWED_MIME_TYPES.includes(file.type) && !file.name.endsWith('.csv')) {
      return NextResponse.json(
        { error: 'Only CSV and Excel files are accepted' },
        { status: 400 }
      );
    }

    console.log(`[UPLOAD] Processing file: ${file.name} (${file.size} bytes) for audit ${auditRequestId}`);

    // Get audit request - cast to any to avoid type issues
    const clientAny = prisma as unknown as Record<string, any>;
    const auditRequest = await clientAny.auditRequest.findUnique({
      where: { id: auditRequestId },
    });

    if (!auditRequest) {
      return NextResponse.json(
        { error: 'Audit request not found' },
        { status: 404 }
      );
    }

    // Verify payment status
    if (auditRequest.status !== 'paid' && !auditRequest.paidAt) {
      return NextResponse.json(
        { error: 'Payment required before uploading files' },
        { status: 403 }
      );
    }

    // Read and parse file
    const text = await file.text();
    let rowCount = 0;
    let columns: string[] = [];

    if (file.name.endsWith('.csv') || file.type === 'text/csv') {
      const parsed = Papa.parse(text, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true
      });

      if (parsed.errors.length > 0) {
        console.error('[UPLOAD] CSV parsing errors:', parsed.errors);
        return NextResponse.json(
          { error: 'CSV parsing failed', details: parsed.errors },
          { status: 400 }
        );
      }

      rowCount = parsed.data.length;
      columns = parsed.meta.fields || [];
    }

    console.log(`[UPLOAD] Parsed ${rowCount} rows with ${columns.length} columns`);

    // Store file data in database
    await clientAny.auditRequest.update({
      where: { id: auditRequestId },
      data: {
        csvData: text,
        rowCount: rowCount,
        columns: JSON.stringify(columns),
        originalFileName: file.name,
        fileUploadedAt: new Date(),
        fileSize: file.size,
        fileMimeType: file.type,
        status: 'processing', // Update status to processing
        processingStartedAt: new Date(),
      },
    });

    console.log(`[UPLOAD] File data stored in database for audit ${auditRequestId}`);

    // TODO: Trigger AI analysis in background
    // For now, we'll process it synchronously
    try {
      // Import AI processor
      const { processAuditRequest } = await import('@/lib/ai/audit-processor');

      // Process in background (don't await)
      processAuditRequest(auditRequestId).catch((error) => {
        console.error(`[UPLOAD] Background processing failed for ${auditRequestId}:`, error);
      });

      console.log(`[UPLOAD] AI analysis triggered for ${auditRequestId}`);
    } catch (error) {
      console.warn('[UPLOAD] AI processor not available yet:', error);
    }

    return NextResponse.json({
      success: true,
      auditRequestId: auditRequestId,
      fileName: file.name,
      fileSize: file.size,
      rowCount: rowCount,
      message: 'File uploaded successfully. Your audit is being processed.',
    });

  } catch (error: any) {
    console.error('[UPLOAD ERROR]', error);
    return NextResponse.json(
      { success: false, error: 'Upload failed', message: error.message },
      { status: 500 }
    );
  }
}
