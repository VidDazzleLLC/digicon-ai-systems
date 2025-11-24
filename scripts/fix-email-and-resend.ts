#!/usr/bin/env tsx
/**
 * Fix Email Typo and Resend Report
 *
 * Usage: npx tsx scripts/fix-email-and-resend.ts
 *
 * This script:
 * 1. Updates the email address for a specific audit request
 * 2. Resends the audit report to the corrected email
 */

import { prisma } from '../lib/db';
import { sendEmail, generateReportEmailHtml } from '../lib/email-delivery';

const AUDIT_REQUEST_ID = 'cm1dd0h08mhml4t4ju4wsjlxp8'; // Portal ID from logs
const OLD_EMAIL = 'connect@1ddazzle.com';
const NEW_EMAIL = 'connect@viddazzle.com';

async function main() {
  console.log('🔧 Starting email fix and resend process...\n');

  try {
    // Step 1: Find the audit request
    console.log(`📋 Step 1: Looking up audit request ${AUDIT_REQUEST_ID}...`);
    const clientAny = prisma as unknown as Record<string, any>;
    const auditRequest = await clientAny.auditRequest.findUnique({
      where: { id: AUDIT_REQUEST_ID }
    });

    if (!auditRequest) {
      console.error(`❌ Audit request ${AUDIT_REQUEST_ID} not found!`);
      process.exit(1);
    }

    console.log(`✅ Found audit request for company: ${auditRequest.companyName}`);
    console.log(`   Current email: ${auditRequest.customerEmail}`);
    console.log(`   Report ID: ${auditRequest.reportId || 'N/A'}`);
    console.log(`   Status: ${auditRequest.status}`);
    console.log(`   Report delivered: ${auditRequest.reportDelivered}`);

    // Step 2: Verify the email is wrong
    if (auditRequest.customerEmail !== OLD_EMAIL) {
      console.warn(`⚠️  Email mismatch! Expected "${OLD_EMAIL}", found "${auditRequest.customerEmail}"`);
      console.log('   Continuing anyway...');
    }

    // Step 3: Update the email address
    console.log(`\n✏️  Step 2: Updating email from "${OLD_EMAIL}" to "${NEW_EMAIL}"...`);
    await clientAny.auditRequest.update({
      where: { id: AUDIT_REQUEST_ID },
      data: {
        customerEmail: NEW_EMAIL,
        updatedAt: new Date()
      }
    });
    console.log('✅ Email address updated successfully!');

    // Step 4: Check if report exists
    if (!auditRequest.reportData) {
      console.error('❌ No report data found! Cannot resend.');
      process.exit(1);
    }

    if (!auditRequest.reportId) {
      console.error('❌ No report ID found! Cannot resend.');
      process.exit(1);
    }

    console.log('\n📧 Step 3: Resending report email...');
    console.log(`   To: ${NEW_EMAIL}`);
    console.log(`   Report ID: ${auditRequest.reportId}`);
    console.log(`   Company: ${auditRequest.companyName}`);

    // Step 5: Generate and send email
    const emailHtml = generateReportEmailHtml(
      auditRequest.companyName,
      auditRequest.reportData,
      auditRequest.reportId
    );

    const emailSent = await sendEmail({
      from: process.env.EMAIL_FROM || 'noreply@digicon.app',
      to: NEW_EMAIL,
      subject: `Your Payroll Audit Report - ${auditRequest.companyName}`,
      html: emailHtml,
    });

    if (!emailSent) {
      console.error('❌ Email delivery failed!');
      console.error('   Check your email configuration (SMTP_* or RESEND_API_KEY)');
      process.exit(1);
    }

    // Step 6: Update delivery status
    console.log('✅ Email sent successfully!');
    console.log('\n📝 Step 4: Updating delivery status...');
    await clientAny.auditRequest.update({
      where: { id: AUDIT_REQUEST_ID },
      data: {
        reportDelivered: true,
        reportDeliveredAt: new Date()
      }
    });

    console.log('\n🎉 SUCCESS! Email fixed and report resent.');
    console.log(`   ✅ Email updated: ${OLD_EMAIL} → ${NEW_EMAIL}`);
    console.log(`   ✅ Report sent to: ${NEW_EMAIL}`);
    console.log(`   ✅ Delivery status: Updated`);

  } catch (error) {
    console.error('\n❌ ERROR:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
