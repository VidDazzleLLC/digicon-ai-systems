/**
 * Emergency Admin Endpoint - Direct SQL Fix
 *
 * This endpoint bypasses all dependencies and uses raw SQL
 * to fix the email typo and resend the report.
 *
 * GET /api/admin/emergency-fix
 */

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    console.log('[EMERGENCY-FIX] Starting emergency email fix...');

    // Import pg dynamically
    const { Pool } = await import('pg');

    // Get DATABASE_URL from environment
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      return NextResponse.json(
        { error: 'DATABASE_URL not configured' },
        { status: 500 }
      );
    }

    // Create PostgreSQL connection pool
    const pool = new Pool({
      connectionString: databaseUrl,
      ssl: databaseUrl.includes('sslmode=require') ? { rejectUnauthorized: false } : false
    });

    console.log('[EMERGENCY-FIX] Connected to database');

    const auditRequestId = 'cm1dd0h08mhml4t4ju4wsjlxp8';
    const newEmail = 'connect@viddazzle.com';

    // Step 1: Get current record
    const currentRecord = await pool.query(
      'SELECT "id", "customerEmail", "reportId", "reportData", "companyName", "status", "reportDelivered" FROM "AuditRequest" WHERE "id" = $1',
      [auditRequestId]
    );

    if (currentRecord.rows.length === 0) {
      await pool.end();
      return NextResponse.json(
        { error: `Audit request ${auditRequestId} not found` },
        { status: 404 }
      );
    }

    const record = currentRecord.rows[0];
    console.log('[EMERGENCY-FIX] Current email:', record.customerEmail);

    // Step 2: Update the email address
    const updateResult = await pool.query(
      `UPDATE "AuditRequest"
       SET "customerEmail" = $1,
           "updatedAt" = NOW(),
           "reportDelivered" = false,
           "reportDeliveredAt" = NULL
       WHERE "id" = $2
       RETURNING "id", "customerEmail", "reportId", "status"`,
      [newEmail, auditRequestId]
    );

    console.log('[EMERGENCY-FIX] Email updated to:', newEmail);

    // Step 3: Send email if report data exists
    let emailSent = false;
    if (record.reportData && record.reportId) {
      try {
        const { sendEmail, generateReportEmailHtml } = await import('@/lib/email-delivery');

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
          await pool.query(
            `UPDATE "AuditRequest"
             SET "reportDelivered" = true,
                 "reportDeliveredAt" = NOW()
             WHERE "id" = $1`,
            [auditRequestId]
          );
        }
      } catch (emailError) {
        console.error('[EMERGENCY-FIX] Email send failed:', emailError);
      }
    }

    await pool.end();

    return NextResponse.json({
      success: true,
      message: 'Email address fixed successfully',
      details: {
        auditRequestId,
        oldEmail: record.customerEmail,
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
