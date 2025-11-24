/**
 * Admin API: Fix Email and Resend Report
 *
 * POST /api/admin/fix-email-resend
 *
 * Body:
 * {
 *   "auditRequestId": "cm1dd0h08mhml4t4ju4wsjlxp8",
 *   "newEmail": "connect@viddazzle.com"
 * }
 */

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { sendEmail, generateReportEmailHtml } from '@/lib/email-delivery';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { auditRequestId, newEmail } = body;

    if (!auditRequestId) {
      return NextResponse.json(
        { error: 'auditRequestId is required' },
        { status: 400 }
      );
    }

    if (!newEmail) {
      return NextResponse.json(
        { error: 'newEmail is required' },
        { status: 400 }
      );
    }

    console.log(`[ADMIN] Fix email and resend for ${auditRequestId}`);

    // Step 1: Find the audit request
    const clientAny = prisma as unknown as Record<string, any>;
    const auditRequest = await clientAny.auditRequest.findUnique({
      where: { id: auditRequestId }
    });

    if (!auditRequest) {
      return NextResponse.json(
        { error: `Audit request ${auditRequestId} not found` },
        { status: 404 }
      );
    }

    const oldEmail = auditRequest.customerEmail;
    console.log(`[ADMIN] Found audit request for ${auditRequest.companyName}`);
    console.log(`[ADMIN] Current email: ${oldEmail} → ${newEmail}`);

    // Step 2: Update the email address
    await clientAny.auditRequest.update({
      where: { id: auditRequestId },
      data: {
        customerEmail: newEmail,
        updatedAt: new Date()
      }
    });
    console.log(`[ADMIN] Email updated successfully`);

    // Step 3: Check if report exists
    if (!auditRequest.reportData) {
      return NextResponse.json(
        {
          success: true,
          emailUpdated: true,
          reportResent: false,
          error: 'No report data found - email updated but cannot resend report'
        },
        { status: 200 }
      );
    }

    if (!auditRequest.reportId) {
      return NextResponse.json(
        {
          success: true,
          emailUpdated: true,
          reportResent: false,
          error: 'No report ID found - email updated but cannot resend report'
        },
        { status: 200 }
      );
    }

    // Step 4: Resend the report
    console.log(`[ADMIN] Resending report ${auditRequest.reportId} to ${newEmail}`);

    const emailHtml = generateReportEmailHtml(
      auditRequest.companyName,
      auditRequest.reportData,
      auditRequest.reportId
    );

    const emailSent = await sendEmail({
      from: process.env.EMAIL_FROM || 'noreply@digicon.app',
      to: newEmail,
      subject: `Your Payroll Audit Report - ${auditRequest.companyName}`,
      html: emailHtml,
    });

    if (!emailSent) {
      console.error(`[ADMIN] Email delivery failed`);
      return NextResponse.json(
        {
          success: true,
          emailUpdated: true,
          reportResent: false,
          error: 'Email updated but delivery failed - check SMTP/Resend configuration'
        },
        { status: 200 }
      );
    }

    // Step 5: Update delivery status
    await clientAny.auditRequest.update({
      where: { id: auditRequestId },
      data: {
        reportDelivered: true,
        reportDeliveredAt: new Date()
      }
    });

    console.log(`[ADMIN] ✅ Success! Email fixed and report resent`);

    return NextResponse.json({
      success: true,
      emailUpdated: true,
      reportResent: true,
      message: `Email updated from ${oldEmail} to ${newEmail} and report resent successfully`,
      auditRequestId,
      reportId: auditRequest.reportId,
      newEmail
    });

  } catch (error: any) {
    console.error('[ADMIN ERROR]', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fix email and resend',
        message: error.message
      },
      { status: 500 }
    );
  }
}
