/**
 * Admin Endpoint: Generate Missing Reports
 *
 * Find paid audit requests without reports and generate them
 *
 * GET  /api/admin/generate-missing-reports - List paid requests without reports
 * POST /api/admin/generate-missing-reports - Generate reports for specific IDs
 */

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    console.log('[GENERATE-MISSING] Finding paid requests without reports...');

    const clientAny = prisma as unknown as Record<string, any>;

    // Find all paid requests
    const paidRequests = await clientAny.auditRequest.findMany({
      where: {
        OR: [
          { status: 'paid' },
          { paidAt: { not: null } }
        ]
      },
      select: {
        id: true,
        customerEmail: true,
        companyName: true,
        status: true,
        paidAt: true,
        reportId: true,
        reportData: true,
        reportDelivered: true,
        reportDeliveredAt: true,
        csvData: true,
        fileUploadedAt: true,
        createdAt: true,
        processingError: true
      },
      orderBy: {
        paidAt: 'desc'
      }
    });

    // Separate into categories
    const needsReport = paidRequests.filter(r => !r.reportData && !r.reportId);
    const needsEmail = paidRequests.filter(r => (r.reportData || r.reportId) && !r.reportDelivered);
    const complete = paidRequests.filter(r => (r.reportData || r.reportId) && r.reportDelivered);
    const missingCSV = needsReport.filter(r => !r.csvData);
    const hasCSV = needsReport.filter(r => r.csvData);

    console.log('[GENERATE-MISSING] Found:');
    console.log(`  - Total paid: ${paidRequests.length}`);
    console.log(`  - Needs report: ${needsReport.length}`);
    console.log(`  - Needs email: ${needsEmail.length}`);
    console.log(`  - Complete: ${complete.length}`);

    await prisma.$disconnect();

    return NextResponse.json({
      success: true,
      summary: {
        totalPaid: paidRequests.length,
        needsReport: needsReport.length,
        needsEmail: needsEmail.length,
        complete: complete.length,
        missingCSV: missingCSV.length,
        hasCSV: hasCSV.length
      },
      requests: {
        needsReport: needsReport.map(r => ({
          id: r.id,
          email: r.customerEmail,
          company: r.companyName,
          status: r.status,
          paidAt: r.paidAt,
          hasCSV: !!r.csvData,
          csvLength: r.csvData?.length || 0,
          fileUploadedAt: r.fileUploadedAt,
          error: r.processingError
        })),
        needsEmail: needsEmail.map(r => ({
          id: r.id,
          email: r.customerEmail,
          company: r.companyName,
          reportId: r.reportId,
          paidAt: r.paidAt
        })),
        complete: complete.map(r => ({
          id: r.id,
          email: r.customerEmail,
          reportId: r.reportId,
          deliveredAt: r.reportDeliveredAt
        }))
      }
    });

  } catch (error: any) {
    console.error('[GENERATE-MISSING] Error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { auditRequestIds, action } = body;

    if (!auditRequestIds || !Array.isArray(auditRequestIds)) {
      return NextResponse.json(
        { error: 'auditRequestIds array is required' },
        { status: 400 }
      );
    }

    console.log(`[GENERATE-MISSING] Processing ${auditRequestIds.length} requests`);
    console.log(`[GENERATE-MISSING] Action: ${action || 'generate'}`);

    const results = [];
    const clientAny = prisma as unknown as Record<string, any>;

    for (const auditRequestId of auditRequestIds) {
      try {
        console.log(`[GENERATE-MISSING] Processing ${auditRequestId}...`);

        // Get audit request
        const auditRequest = await clientAny.auditRequest.findUnique({
          where: { id: auditRequestId }
        });

        if (!auditRequest) {
          results.push({
            id: auditRequestId,
            success: false,
            error: 'Audit request not found'
          });
          continue;
        }

        // Check if CSV data exists
        if (!auditRequest.csvData) {
          results.push({
            id: auditRequestId,
            success: false,
            error: 'No CSV data available - customer needs to upload file'
          });
          continue;
        }

        // Generate report using existing audit processor
        const { processAuditRequest } = await import('@/lib/ai/audit-processor');

        await processAuditRequest(auditRequestId);

        results.push({
          id: auditRequestId,
          success: true,
          message: 'Report generated and email sent'
        });

        console.log(`[GENERATE-MISSING] ✅ Success: ${auditRequestId}`);

      } catch (error: any) {
        console.error(`[GENERATE-MISSING] ❌ Error for ${auditRequestId}:`, error);
        results.push({
          id: auditRequestId,
          success: false,
          error: error.message
        });
      }
    }

    await prisma.$disconnect();

    const successCount = results.filter(r => r.success).length;
    const failureCount = results.filter(r => !r.success).length;

    return NextResponse.json({
      success: true,
      message: `Processed ${auditRequestIds.length} requests`,
      summary: {
        total: auditRequestIds.length,
        succeeded: successCount,
        failed: failureCount
      },
      results
    });

  } catch (error: any) {
    console.error('[GENERATE-MISSING] Error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
