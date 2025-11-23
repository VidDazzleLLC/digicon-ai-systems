/**
 * Email Delivery Helper
 * 
 * Handles email delivery for audit reports using nodemailer or fallback logging.
 * Supports SMTP configuration via environment variables or SendGrid/Resend APIs.
 */

import nodemailer from 'nodemailer';

export interface EmailConfig {
  from: string;
  to: string;
  subject: string;
  html: string;
  attachments?: Array<{
    filename: string;
    path: string;
  }>;
}

/**
 * Send email using configured transport with retry logic
 */
export async function sendEmail(config: EmailConfig, retries = 2): Promise<boolean> {
  // Check if email configuration is available
  const hasSmtp = process.env.SMTP_HOST && process.env.SMTP_PORT;
  const hasResend = process.env.RESEND_API_KEY;

  if (!hasSmtp && !hasResend) {
    // No email configuration - log warning and details
    console.warn('⚠️  [EMAIL] No email provider configured!');
    console.warn('⚠️  [EMAIL] Set either SMTP_* or RESEND_API_KEY environment variables');
    console.warn('[EMAIL FALLBACK] Would have sent:');
    console.warn(`  From: ${config.from}`);
    console.warn(`  To: ${config.to}`);
    console.warn(`  Subject: ${config.subject}`);
    console.warn(`  Body Preview: ${config.html.substring(0, 200)}...`);

    // Return false to indicate email was NOT sent
    // (changed from returning true which was misleading)
    return false;
  }

  let lastError: Error | null = null;

  // Retry logic
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      if (attempt > 0) {
        console.log(`[EMAIL] Retry attempt ${attempt}/${retries}...`);
        // Wait before retry (exponential backoff)
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
      }

      if (hasSmtp) {
        // Use SMTP configuration
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || '587'),
          secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
          auth: process.env.SMTP_USER && process.env.SMTP_PASS ? {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          } : undefined,
          // Increase timeout for Railway
          connectionTimeout: 30000, // 30 seconds
          socketTimeout: 30000,
        });

        const info = await transporter.sendMail(config);
        console.log(`✅ [EMAIL] Sent via SMTP to ${config.to}`);
        console.log(`✅ [EMAIL] Message ID: ${info.messageId}`);
        return true;

      } else if (hasResend) {
        // Use Resend API (already available in the project)
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);

        const result = await resend.emails.send({
          from: config.from,
          to: config.to,
          subject: config.subject,
          html: config.html,
        });

        console.log(`✅ [EMAIL] Sent via Resend to ${config.to}`);
        console.log(`✅ [EMAIL] Result:`, result);
        return true;
      }

      return false;

    } catch (error) {
      lastError = error as Error;
      console.error(`❌ [EMAIL] Attempt ${attempt + 1} failed:`, error);

      // If this was the last attempt, we'll throw below
      if (attempt === retries) {
        break;
      }
    }
  }

  // All retries failed
  console.error(`❌ [EMAIL] All ${retries + 1} attempts failed`);
  console.error(`❌ [EMAIL] Last error:`, lastError);
  return false;
}

/**
 * Generate audit report email HTML
 */
export function generateReportEmailHtml(
  companyName: string,
  reportData: any,
  reportId: string
): string {
  // Escape HTML to prevent XSS
  const escapeHtml = (str: string) => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };
  
  const safeCompanyName = escapeHtml(companyName);
  const safeReportId = escapeHtml(reportId);
  // Convert report data to string and escape
  const reportString = JSON.stringify(reportData, null, 2);
  const safeReportData = escapeHtml(reportString);
  
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
          h2 { color: #FF6B35; }
          .report-box { background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .next-steps { background-color: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0; }
          pre { white-space: pre-wrap; word-wrap: break-word; font-size: 12px; }
          .footer { margin-top: 30px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <h2>Your Payroll Audit Report</h2>
        <p>Hello,</p>
        <p>Thank you for your payment. Your payroll audit for <strong>${safeCompanyName}</strong> has been completed!</p>
        
        <div class="report-box">
          <h3>Audit Findings:</h3>
          <pre>${safeReportData}</pre>
        </div>
        
        <p><strong>Report ID:</strong> ${safeReportId}</p>
        
        <div class="next-steps">
          <p><strong>Next Steps:</strong></p>
          <p>Our team will review these findings and contact you within 24 hours with detailed recommendations and implementation strategies.</p>
        </div>
        
        <p>If you have any questions, please don't hesitate to reach out.</p>
        
        <p>Best regards,<br/>
        Digicon AI Systems<br/>
        <a href="https://digicon.app">digicon.app</a></p>
        
        <div class="footer">
          <p>This email contains your paid audit report. Please keep it for your records.</p>
        </div>
      </body>
    </html>
  `;
}
