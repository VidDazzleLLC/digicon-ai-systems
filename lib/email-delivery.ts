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
 * Send email using configured transport
 */
export async function sendEmail(config: EmailConfig): Promise<boolean> {
  // Check if email configuration is available
  const hasSmtp = process.env.SMTP_HOST && process.env.SMTP_PORT;
  const hasResend = process.env.RESEND_API_KEY;
  
  if (!hasSmtp && !hasResend) {
    // No email configuration - log instead
    console.log('[EMAIL FALLBACK] No email configuration found. Would have sent:');
    console.log(`  From: ${config.from}`);
    console.log(`  To: ${config.to}`);
    console.log(`  Subject: ${config.subject}`);
    console.log(`  Body: ${config.html.substring(0, 200)}...`);
    return true;
  }
  
  try {
    if (hasSmtp) {
      // Use SMTP configuration
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT!),
        secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
        auth: process.env.SMTP_USER && process.env.SMTP_PASS ? {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        } : undefined,
      });
      
      await transporter.sendMail(config);
      console.log(`[EMAIL] Sent via SMTP to ${config.to}`);
      return true;
    } else if (hasResend) {
      // Use Resend API (already available in the project)
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      await resend.emails.send({
        from: config.from,
        to: config.to,
        subject: config.subject,
        html: config.html,
      });
      
      console.log(`[EMAIL] Sent via Resend to ${config.to}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('[EMAIL ERROR] Failed to send email:', error);
    return false;
  }
}

/**
 * Generate audit report email HTML
 */
export function generateReportEmailHtml(
  companyName: string,
  reportData: any,
  reportId: string
): string {
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
        <p>Thank you for your payment. Your payroll audit for <strong>${companyName}</strong> has been completed!</p>
        
        <div class="report-box">
          <h3>Audit Findings:</h3>
          <pre>${JSON.stringify(reportData, null, 2)}</pre>
        </div>
        
        <p><strong>Report ID:</strong> ${reportId}</p>
        
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
