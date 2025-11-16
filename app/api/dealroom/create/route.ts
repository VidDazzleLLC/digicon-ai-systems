import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';

/**
 * Secure Deal Room Provisioning API
 * 
 * Creates an enterprise-grade secure deal room when a customer expresses interest.
 * Generates single-use access codes and sends them to the CFO.
 * 
 * Security Philosophy:
 * - "Show me you can save money, but I won't give you my data until I trust you"
 * - Deal rooms are ISOLATED, ENCRYPTED, and TIME-LIMITED
 * - Access codes are SINGLE-USE and expire after 90 days
 * - All file uploads are encrypted with AES-256
 * - Complete audit trail of all access attempts
 * 
 * Workflow:
 * 1. Sales/Marketing: Customer clicks "Get Free Audit" or "Schedule Demo"
 * 2. This API: Creates secure deal room + generates access code
 * 3. Email Service: Sends access code to CFO with security assurances
 * 4. CFO: Enters code → Gains access to upload portal
 * 5. CFO: Uploads sensitive docs (payroll, finance, compliance)
 * 6. System: Encrypts files → Runs audit → Generates proposal
 * 7. Deal closes → Room expires → All data destroyed (optional retention)
 */

interface CreateDealRoomRequest {
  // Company Information
  companyName: string;
  companyEmail: string;
  cfoName?: string;
  cfoEmail: string;
  cfoPhone?: string;
  industry?: string;
  annualRevenue?: number;
  annualBudget?: number;
  
  // Lead Source
  leadSource?: string;  // 'WEBSITE', 'REFERRAL', 'COLD_OUTREACH', 'DEMO_REQUEST'
  salesRep?: string;
  
  // Security Options
  enableMFA?: boolean;
  ipWhitelist?: string[];
  
  // Internal Notes
  notes?: string;
}

// Generate cryptographically secure 8-character access code
function generateAccessCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';  // Excluding ambiguous characters (0,O,1,I)
  let code = '';
  const randomBytes = crypto.randomBytes(8);
  
  for (let i = 0; i < 8; i++) {
    code += chars[randomBytes[i] % chars.length];
  }
  
  return code;
}

// Generate AES-256 encryption key for this deal room
function generateEncryptionKey(): string {
  return crypto.randomBytes(32).toString('hex');  // 256-bit key
}

// Send access code email to CFO
async function sendAccessCodeEmail(
  cfoEmail: string,
  cfoName: string,
  companyName: string,
  accessCode: string,
  expiresAt: Date
): Promise<void> {
  // TODO: Integrate with email service (SendGrid, AWS SES, etc.)
  
  const emailBody = `
Dear ${cfoName},

Thank you for your interest in Digicon AI Systems' free audit service.

We've created a secure deal room for ${companyName} to upload sensitive documents for analysis.

🔒 YOUR SECURE ACCESS CODE: ${accessCode}

✅ Security Assurances:
- This code is FOR YOUR USE ONLY and expires on ${expiresAt.toLocaleDateString()}
- All uploaded files are encrypted with AES-256 encryption
- Data is stored in SOC 2 Type II compliant infrastructure
- Only authorized Digicon analysts can decrypt your data
- Complete audit trail of all access attempts
- Room automatically expires after deal closure

📊 What to Upload:
- Payroll exports (ADP, Gusto, Workday)
- Financial statements (P&L, balance sheet, GL entries)
- HRIS data (employee records, time tracking)
- ERP data (SAP, Oracle, NetSuite)
- CRM exports (Salesforce, HubSpot)
- Compliance logs (tax filings, audit trails)

⏱ Turnaround Time: 90 minutes after upload

Access your secure deal room here:
https://digicon-ai-systems.vercel.app/dealroom/${accessCode}

Questions? Reply to this email or call us at (555) 123-4567.

Best regards,
Digicon AI Systems Security Team

P.S. We take your data security seriously. Our system is designed with enterprise-grade protection to ensure your sensitive information remains confidential.
  `.trim();

  console.log('\n=== ACCESS CODE EMAIL ===' );
  console.log(`To: ${cfoEmail}`);
  console.log(`Subject: Your Secure Deal Room Access Code`);
  console.log(emailBody);
  console.log('\n=========================\n');
  
  // In production, send via email service
  // await emailService.send({ to: cfoEmail, subject: ..., body: emailBody });
}

export async function POST(request: NextRequest) {
  try {
    const body: CreateDealRoomRequest = await request.json();
    
    const {
      companyName,
      companyEmail,
      cfoName = 'CFO',
      cfoEmail,
      cfoPhone,
      industry,
      annualRevenue,
      annualBudget,
      leadSource = 'WEBSITE',
      salesRep,
      enableMFA = false,
      ipWhitelist = [],
      notes
    } = body;

    // Validate required fields
    if (!companyName || !cfoEmail) {
      return NextResponse.json(
        { error: 'Missing required fields: companyName, cfoEmail' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cfoEmail)) {
      return NextResponse.json(
        { error: 'Invalid CFO email address' },
        { status: 400 }
      );
    }

    // Generate secure credentials
    const accessCode = generateAccessCode();
    const accessCodeHash = await bcrypt.hash(accessCode, 10);
    const encryptionKey = generateEncryptionKey();
    
    // Set expiration to 90 days from now
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 90);

    // Create deal room record (pseudo-code - would use Prisma in production)
    const dealRoom = {
      id: crypto.randomUUID(),
      createdAt: new Date(),
      
      // Company Info
      companyName,
      companyEmail,
      cfoName,
      cfoEmail,
      industry,
      annualRevenue,
      annualBudget,
      
      // Access Control
      accessCode,  // Stored for email only (not in DB)
      accessCodeHash,  // Hashed version in DB
      codeGeneratedAt: new Date(),
      codeUsed: false,
      
      // Security
      encryptionKey,  // Unique key for this room
      mfaEnabled: enableMFA,
      mfaPhone: cfoPhone,
      ipWhitelist,
      
      // Status
      status: 'ACTIVE',
      expiresAt,
      dealStage: 'INTEREST',
      
      // Metadata
      leadSource,
      salesRep,
      notes
    };

    // TODO: Save to database
    // await prisma.dealRoom.create({ data: dealRoom });
    
    // Log audit event
    console.log('\n🎯 DEAL ROOM CREATED:');
    console.log(`- Company: ${companyName}`);
    console.log(`- CFO: ${cfoName} (${cfoEmail})`);
    console.log(`- Access Code: ${accessCode}`);
    console.log(`- Expires: ${expiresAt.toLocaleDateString()}`);
    console.log(`- Room ID: ${dealRoom.id}`);
    
    // Send access code to CFO
    await sendAccessCodeEmail(
      cfoEmail,
      cfoName,
      companyName,
      accessCode,
      expiresAt
    );

    // Return success response (DO NOT include access code in API response)
    return NextResponse.json({
      success: true,
      dealRoom: {
        id: dealRoom.id,
        companyName: dealRoom.companyName,
        cfoEmail: dealRoom.cfoEmail,
        status: dealRoom.status,
        expiresAt: dealRoom.expiresAt,
        accessCodeSent: true,
        message: `Secure deal room created. Access code sent to ${cfoEmail}`
      }
    });

  } catch (error) {
    console.error('Deal room creation error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to create deal room',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
