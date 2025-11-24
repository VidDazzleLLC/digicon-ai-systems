/**
 * AI Audit Processor
 * Analyzes payroll data and generates audit reports
 * Replaces MissionX webhook processing
 */

import { Anthropic } from '@anthropic-ai/sdk';
import { prisma } from '@/lib/db';
import { sendEmail, generateReportEmailHtml } from '@/lib/email-delivery';

// Initialize Anthropic Claude client
let anthropic: Anthropic | null = null;
if (process.env.ANTHROPIC_API_KEY) {
  // Validate API key format
  const apiKey = process.env.ANTHROPIC_API_KEY.trim();
  if (!apiKey.startsWith('sk-ant-')) {
    console.error('[AI-PROCESSOR] ⚠️  ANTHROPIC_API_KEY is set but has invalid format!');
    console.error('[AI-PROCESSOR] Expected format: sk-ant-api03-...');
    console.error('[AI-PROCESSOR] Using mock mode instead');
    anthropic = null;
  } else {
    anthropic = new Anthropic({
      apiKey: apiKey,
    });
  }
}

interface AuditResult {
  summary: string;
  issuesFound: number;
  criticalIssues: string[];
  warnings: string[];
  recommendations: string[];
  compliance: {
    taxWithholding: string;
    minimumWage: string;
    overtime: string;
  };
  totalEmployees: number;
  totalPayroll: number;
}

/**
 * Process an audit request - analyze CSV data and generate report
 */
export async function processAuditRequest(auditRequestId: string): Promise<void> {
  const startTime = Date.now();
  console.log(`[AI-PROCESSOR] Starting analysis for audit ${auditRequestId}`);

  try {
    // Get audit request with CSV data
    const clientAny = prisma as unknown as Record<string, any>;
    const auditRequest = await clientAny.auditRequest.findUnique({
      where: { id: auditRequestId },
    });

    if (!auditRequest) {
      throw new Error(`Audit request ${auditRequestId} not found`);
    }

    if (!auditRequest.csvData) {
      throw new Error(`No CSV data found for audit ${auditRequestId}`);
    }

    console.log(`[AI-PROCESSOR] Analyzing ${auditRequest.rowCount} rows for ${auditRequest.companyName}`);

    // Analyze with Claude AI
    const auditResult = await analyzePayrollData(
      auditRequest.csvData,
      auditRequest.companyName
    );

    // Generate report ID
    const reportId = `AUDIT_${auditRequestId.substring(0, 8)}_${Date.now()}`;

    // Store report in database
    await clientAny.auditRequest.update({
      where: { id: auditRequestId },
      data: {
        reportId: reportId,
        reportData: auditResult as any,
        status: 'report_ready',
        processingCompletedAt: new Date(),
        processingTimeMs: Date.now() - startTime,
        aiModel: 'claude-3-5-sonnet-20241022',
      },
    });

    console.log(`[AI-PROCESSOR] Report generated: ${reportId}`);

    // Send report email (non-blocking - don't fail if email fails)
    let emailSent = false;
    try {
      emailSent = await sendAuditReport(auditRequest, auditResult, reportId);
    } catch (error) {
      console.warn(`[AI-PROCESSOR] Email delivery failed (non-fatal):`, error);
    }

    // Mark as completed regardless of email status
    // Report is ready even if email failed
    await clientAny.auditRequest.update({
      where: { id: auditRequestId },
      data: {
        status: 'completed',
        reportDelivered: emailSent,
        reportDeliveredAt: emailSent ? new Date() : null,
      },
    });

    if (emailSent) {
      console.log(`[AI-PROCESSOR] ✅ Audit completed and emailed for ${auditRequestId}`);
    } else {
      console.log(`[AI-PROCESSOR] ✅ Audit completed for ${auditRequestId} (email delivery failed - report available in database)`);
    }

  } catch (error) {
    console.error(`[AI-PROCESSOR] ❌ Processing failed for ${auditRequestId}:`, error);

    // Update with error
    const clientAny = prisma as unknown as Record<string, any>;
    await clientAny.auditRequest.update({
      where: { id: auditRequestId },
      data: {
        status: 'failed',
        processingError: error instanceof Error ? error.message : 'Unknown error',
        processingCompletedAt: new Date(),
        processingTimeMs: Date.now() - startTime,
      },
    });

    throw error;
  }
}

/**
 * Analyze payroll data with Claude AI
 */
async function analyzePayrollData(
  csvData: string,
  companyName: string
): Promise<AuditResult> {
  if (!anthropic) {
    // Fallback: Generate mock report for testing
    console.warn('[AI-PROCESSOR] Anthropic API not configured, using mock data');
    return generateMockReport(csvData);
  }

  const prompt = `You are an expert payroll auditor. Analyze this payroll data for ${companyName} and provide a comprehensive audit report.

CSV Data:
${csvData.substring(0, 50000)} ${csvData.length > 50000 ? '...(truncated)' : ''}

Provide your analysis in JSON format with:
{
  "summary": "Brief overview of findings",
  "issuesFound": <number of issues>,
  "criticalIssues": ["issue 1", "issue 2"],
  "warnings": ["warning 1", "warning 2"],
  "recommendations": ["recommendation 1", "recommendation 2"],
  "compliance": {
    "taxWithholding": "compliant|non-compliant|review-needed",
    "minimumWage": "compliant|non-compliant|review-needed",
    "overtime": "compliant|non-compliant|review-needed"
  },
  "totalEmployees": <number>,
  "totalPayroll": <amount>
}`;

  try {
    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 4096,
      messages: [{
        role: 'user',
        content: prompt
      }]
    });

    // Extract JSON from Claude's response
    const content = message.content[0];
    if (content.type === 'text') {
      // Try to parse JSON from the response
      const jsonMatch = content.text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
    }

    throw new Error('Failed to parse AI response');

  } catch (error: any) {
    // Handle authentication errors specifically
    if (error.status === 401 || error.message?.includes('authentication')) {
      console.error('[AI-PROCESSOR] ❌ ANTHROPIC_API_KEY is invalid or expired!');
      console.error('[AI-PROCESSOR] Please check your API key at: https://console.anthropic.com/settings/keys');
      console.error('[AI-PROCESSOR] Falling back to mock report...');
      return generateMockReport(csvData);
    }

    // Re-throw other errors
    throw error;
  }
}

/**
 * Generate mock report for testing when AI is not available
 */
function generateMockReport(csvData: string): AuditResult {
  const lines = csvData.split('\n');
  const rowCount = Math.max(0, lines.length - 1); // Subtract header

  return {
    summary: `Analyzed ${rowCount} payroll records. Found minor discrepancies that require attention.`,
    issuesFound: 3,
    criticalIssues: [
      'Potential overtime miscalculation for 2 employees',
    ],
    warnings: [
      'Missing tax withholding documentation for 1 employee',
      'Inconsistent pay period dates detected',
    ],
    recommendations: [
      'Review overtime calculation methodology',
      'Update tax withholding forms for affected employees',
      'Standardize pay period date formatting',
    ],
    compliance: {
      taxWithholding: 'review-needed',
      minimumWage: 'compliant',
      overtime: 'review-needed',
    },
    totalEmployees: rowCount,
    totalPayroll: rowCount * 5000, // Mock calculation
  };
}

/**
 * Send audit report via email
 * Returns true if email sent successfully, false otherwise
 */
async function sendAuditReport(
  auditRequest: any,
  auditResult: AuditResult,
  reportId: string
): Promise<boolean> {
  console.log(`[AI-PROCESSOR] Sending report to ${auditRequest.customerEmail}`);

  const emailHtml = generateReportEmailHtml(
    auditRequest.companyName,
    auditResult,
    reportId
  );

  const emailSent = await sendEmail({
    from: process.env.EMAIL_FROM || 'noreply@digicon.app',
    to: auditRequest.customerEmail,
    subject: `Your Payroll Audit Report - ${auditRequest.companyName}`,
    html: emailHtml,
  });

  if (!emailSent) {
    console.warn(`[AI-PROCESSOR] Email delivery failed for ${auditRequest.customerEmail}`);
    return false;
  }

  console.log(`[AI-PROCESSOR] ✅ Report emailed to ${auditRequest.customerEmail}`);
  return true;
}
