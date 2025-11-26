/**
 * System Health Diagnostic Endpoint
 *
 * Checks ALL critical systems to identify what's actually broken:
 * - Anthropic API connectivity and authentication
 * - Resend email service
 * - Database connectivity
 * - Recent audit requests status
 * - Environment configuration
 *
 * GET /api/admin/system-health
 */

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

async function testAnthropicKey(): Promise<any> {
  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
      return {
        status: 'error',
        error: 'ANTHROPIC_API_KEY not set in environment',
        configured: false
      };
    }

    if (!apiKey.startsWith('sk-ant-')) {
      return {
        status: 'error',
        error: 'ANTHROPIC_API_KEY has invalid format (should start with sk-ant-)',
        configured: true,
        validFormat: false
      };
    }

    // Make a minimal test API call
    const { Anthropic } = await import('@anthropic-ai/sdk');
    const anthropic = new Anthropic({ apiKey });

    await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20240620',
      max_tokens: 10,
      messages: [{ role: 'user', content: 'test' }]
    });

    return {
      status: 'ok',
      configured: true,
      validFormat: true,
      authenticated: true,
      keyPrefix: apiKey.substring(0, 12) + '...'
    };

  } catch (error: any) {
    return {
      status: 'error',
      configured: true,
      authenticated: false,
      error: error.message,
      statusCode: error.status,
      errorType: error.type
    };
  }
}

async function testResendKey(): Promise<any> {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return {
        status: 'error',
        error: 'RESEND_API_KEY not set in environment',
        configured: false
      };
    }

    // Make a test API call to verify the key works
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    // Try to get API key info (doesn't send email)
    // Note: Resend doesn't have a ping endpoint, so we'll just verify format
    return {
      status: 'ok',
      configured: true,
      keyPrefix: apiKey.substring(0, 8) + '...',
      note: 'Key is configured (actual send test would require recipient)'
    };

  } catch (error: any) {
    return {
      status: 'error',
      configured: true,
      error: error.message
    };
  }
}

async function testDatabaseConnection(): Promise<any> {
  try {
    const clientAny = prisma as unknown as Record<string, any>;

    // Simple query to test connection
    const count = await clientAny.auditRequest.count();

    return {
      status: 'ok',
      connected: true,
      totalAuditRequests: count
    };

  } catch (error: any) {
    return {
      status: 'error',
      connected: false,
      error: error.message
    };
  }
}

async function getRecentAuditRequests(limit: number = 10): Promise<any> {
  try {
    const clientAny = prisma as unknown as Record<string, any>;

    const requests = await clientAny.auditRequest.findMany({
      orderBy: { createdAt: 'desc' },
      take: limit,
      select: {
        id: true,
        customerEmail: true,
        companyName: true,
        status: true,
        paidAt: true,
        createdAt: true,
        updatedAt: true,
        fileUploadedAt: true,
        reportId: true,
        reportDelivered: true,
        reportDeliveredAt: true,
        processingError: true,
        csvData: false // Don't include full CSV data
      }
    });

    // Add diagnostic info
    const withDiagnostics = requests.map(r => {
      const timeSincePaid = r.paidAt ? (Date.now() - new Date(r.paidAt).getTime()) / 1000 / 60 : null; // minutes
      const timeSinceUpload = r.fileUploadedAt ? (Date.now() - new Date(r.fileUploadedAt).getTime()) / 1000 / 60 : null;

      return {
        ...r,
        diagnostics: {
          hasCsvData: !!r.csvData,
          hasReport: !!r.reportId,
          isPaid: !!r.paidAt,
          minutesSincePaid: timeSincePaid ? Math.round(timeSincePaid) : null,
          minutesSinceUpload: timeSinceUpload ? Math.round(timeSinceUpload) : null,
          issue: !r.csvData ? 'NO_CSV_DATA' :
                 (r.paidAt && !r.reportId) ? 'PAID_BUT_NO_REPORT' :
                 (r.reportId && !r.reportDelivered) ? 'REPORT_NOT_DELIVERED' :
                 r.processingError ? 'PROCESSING_ERROR' :
                 'OK'
        }
      };
    });

    return {
      status: 'ok',
      count: requests.length,
      requests: withDiagnostics
    };

  } catch (error: any) {
    return {
      status: 'error',
      error: error.message
    };
  }
}

async function getPaidRequestsWithoutReports(): Promise<any> {
  try {
    const clientAny = prisma as unknown as Record<string, any>;

    const paidNoReport = await clientAny.auditRequest.findMany({
      where: {
        AND: [
          {
            OR: [
              { status: 'paid' },
              { paidAt: { not: null } }
            ]
          },
          {
            OR: [
              { reportId: null },
              { reportData: null }
            ]
          }
        ]
      },
      select: {
        id: true,
        customerEmail: true,
        companyName: true,
        status: true,
        paidAt: true,
        fileUploadedAt: true,
        reportId: true,
        processingError: true,
        csvData: false
      },
      orderBy: { paidAt: 'desc' }
    });

    const missingCsv = paidNoReport.filter(r => !r.csvData);
    const hasCsv = paidNoReport.filter(r => r.csvData);

    return {
      status: 'ok',
      totalPaidWithoutReports: paidNoReport.length,
      missingCsvData: missingCsv.length,
      hasCsvDataButNoReport: hasCsv.length,
      requests: paidNoReport.map(r => ({
        ...r,
        hasCsvData: !!r.csvData,
        issue: !r.csvData ? 'Customer needs to upload CSV' : 'Should process but hasn\'t'
      }))
    };

  } catch (error: any) {
    return {
      status: 'error',
      error: error.message
    };
  }
}

export async function GET(req: NextRequest) {
  try {
    console.log('[SYSTEM-HEALTH] Running comprehensive diagnostics...');

    const [anthropic, resend, database, recent, paidNoReport] = await Promise.all([
      testAnthropicKey(),
      testResendKey(),
      testDatabaseConnection(),
      getRecentAuditRequests(15),
      getPaidRequestsWithoutReports()
    ]);

    await prisma.$disconnect();

    const health = {
      timestamp: new Date().toISOString(),
      environment: {
        nodeEnv: process.env.NODE_ENV,
        hasAnthropicKey: !!process.env.ANTHROPIC_API_KEY,
        hasResendKey: !!process.env.RESEND_API_KEY,
        hasEmailFrom: !!process.env.EMAIL_FROM,
        hasDatabaseUrl: !!process.env.DATABASE_URL,
        emailFrom: process.env.EMAIL_FROM || '(not set)'
      },
      services: {
        anthropic,
        resend,
        database
      },
      recentRequests: recent,
      paidWithoutReports: paidNoReport,
      summary: {
        criticalIssues: [
          ...(!anthropic.authenticated ? ['Anthropic API authentication failed'] : []),
          ...(database.status === 'error' ? ['Database connection failed'] : []),
          ...(paidNoReport.totalPaidWithoutReports > 0 ? [`${paidNoReport.totalPaidWithoutReports} paid customers without reports`] : [])
        ],
        warnings: [
          ...(!resend.configured ? ['Resend email not configured'] : []),
          ...(!process.env.EMAIL_FROM ? ['EMAIL_FROM not set'] : []),
          ...(paidNoReport.missingCsvData > 0 ? [`${paidNoReport.missingCsvData} paid customers missing CSV data`] : [])
        ]
      }
    };

    console.log('[SYSTEM-HEALTH] Critical issues:', health.summary.criticalIssues);
    console.log('[SYSTEM-HEALTH] Warnings:', health.summary.warnings);

    return NextResponse.json(health, {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error: any) {
    console.error('[SYSTEM-HEALTH] Diagnostic failed:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'System health check failed',
        message: error.message,
        stack: error.stack
      },
      { status: 500 }
    );
  }
}
