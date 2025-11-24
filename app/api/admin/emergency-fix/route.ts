/**
 * Emergency Admin Endpoint - Fix Email Typo
 *
 * Uses Prisma (already installed) to fix email and resend report.
 * No additional dependencies needed.
 *
 * GET /api/admin/emergency-fix
 */

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { sendEmail, generateReportEmailHtml } from '@/lib/email-delivery';

export async function GET(req: NextRequest) {
  try {
    console.log('[EMERGENCY-FIX] Starting emergency email fix...');

    const auditRequestId = 'cm1dd0h08mhml4t4ju4wsjlxp8';
    const newEmail = 'connect@viddazzle.com';

    // Step 1: Get current record
    const clientAny = prisma as unknown as Record<string, any>;
    const record = await clientAny.auditRequest.findUnique({
      where: { id: auditRequestId }
    });

    if (!record) {
      return NextResponse.json(
        { error: `Audit request ${auditRequestId} not found` },
        { status: 404 }
      );
    }

    const oldEmail = record.customerEmail;
    console.log('[EMERGENCY-FIX] Current email:', oldEmail);

    // Step 2: Update the email address
    await clientAny.auditRequest.update({
      where: { id: auditRequestId },
      data: {
        customerEmail: newEmail,
        updatedAt: new Date(),
        reportDelivered: false,
        reportDeliveredAt: null
      }
    });

    console.log('[EMERGENCY-FIX] Email updated to:', newEmail);

    // Step 3: Send email if report data exists
    let emailSent = false;
    if (record.reportData && record.reportId) {
      try {
        const emailHtml = generateReportEmailHtml(
          record.companyName,
          record.reportData,
          record.reportId
        );

        emailSent = await sendEmail({
          from: process.env.EMAIL_FROM || 'noreply@digicon.app',
          to: newEmail,
          subject: `Your Payroll Audit Report - ${record.companyName}`,
          html: emailHtml,
        });

        if (emailSent) {
          console.log('[EMERGENCY-FIX] Email sent successfully');

          // Update delivery status
          await clientAny.auditRequest.update({
            where: { id: auditRequestId },
            data: {
              reportDelivered: true,
              reportDeliveredAt: new Date()
            }
          });
        }
      } catch (emailError) {
        console.error('[EMERGENCY-FIX] Email send failed:', emailError);
      }
    }

    await prisma.$disconnect();

    return NextResponse.json({
      success: true,
      message: 'Email address fixed successfully',
      details: {
        auditRequestId,
        oldEmail,
        newEmail,
        reportId: record.reportId,
        emailSent,
        reportAvailable: !!record.reportData
      }
    });

  } catch (error: any) {
    console.error('[EMERGENCY-FIX] Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Emergency fix failed',
        message: error.message
      },
      { status: 500 }
    );
  }
}
