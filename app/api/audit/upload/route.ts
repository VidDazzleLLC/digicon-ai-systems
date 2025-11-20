import { NextRequest, NextResponse } from 'next/server';
import Papa from 'papaparse';
import { Resend } from 'resend';

// CSV Upload Endpoint - Accepts anonymized company data for audit
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const requestId = formData.get('requestId') as string;
    const email = formData.get('email') as string;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }
    
    // Validate file type
    if (!file.name.endsWith('.csv')) {
      return NextResponse.json(
        { error: 'Only CSV files are accepted' },
        { status: 400 }
      );
    }
    
    // Read and parse CSV
    const text = await file.text();
    const parsed = Papa.parse(text, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true
    });
    
    if (parsed.errors.length > 0) {
      return NextResponse.json(
        { error: 'CSV parsing failed', details: parsed.errors },
        { status: 400 }
      );
    }
    
    // Generate upload ID
    const uploadId = `audit_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // TRIGGER AUDIT PROCESSING IMMEDIATELY
    console.log(`[AUDIT] Triggering audit processing for uploadId: ${uploadId}`);
    
    // Call process endpoint with CSV data
    const processResponse = await fetch(
      '/api/audit/process', 
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          uploadId,
          systemType: 'payroll',
          csvData: text
        })
      }
    );
    
    if (!processResponse.ok) {
      console.error(`[AUDIT ERROR] Process endpoint failed: ${processResponse.status}`);
      throw new Error('Audit processing failed');
    }
    
    const auditResult = await processResponse.json();
    console.log(`[AUDIT] Audit completed successfully for uploadId: ${uploadId}`);
    
    // SEND AUDIT REPORT VIA EMAIL
    if (email) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        const htmlReport = `
          <html>
            <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #FF6B35;">Your Payroll Audit Report</h2>
              <p>Hello,</p>
              <p>Your payroll audit has been completed successfully!</p>
              
              <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3>Audit Findings:</h3>
                <pre style="white-space: pre-wrap; word-wrap: break-word;">${JSON.stringify(auditResult.auditReport, null, 2)}</pre>
              </div>
              
              <p><strong>Processing Time:</strong> ${auditResult.processingTime}</p>
              <p><strong>Upload ID:</strong> ${uploadId}</p>
              
              <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Next Steps:</strong></p>
                <p>Our team will review these findings and contact you within 24 hours with detailed recommendations and implementation strategies.</p>
              </div>
              
              <p>Best regards,<br/>Digicon AI Systems</p>
            </body>
          </html>
        `;
        
        await resend.emails.send({
          from: 'noreply@digicon.app',
          to: email,
          subject: `Your Payroll Audit Report - ${uploadId}`,
          html: htmlReport
        });
        
        console.log(`[EMAIL] Audit report sent successfully to ${email}`);
      } catch (emailError) {
        console.error(`[EMAIL ERROR] Failed to send audit report:`, emailError);
        // Don't fail the request - audit was completed, email is a bonus
      }
    }
    
    return NextResponse.json({
      success: true,
      uploadId,
      rowCount: parsed.data.length,
      columns: parsed.meta.fields,
      message: 'File uploaded and audit processing completed successfully!',
      auditResult: auditResult.auditReport,
      processingTime: auditResult.processingTime,
      emailSent: !!email
    });
  } catch (error: any) {
    console.error('[UPLOAD ERROR]', error);
    return NextResponse.json(
      { error: 'Upload failed', message: error.message },
      { status: 500 }
    );
  }
}
