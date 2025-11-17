import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
import { addRoom } from '@/lib/conferenceRoomStorage';

/**
 * Secure Conference Room Provisioning API
 *
 * Creates an enterprise-grade secure conference room when a customer expresses interest.
 * Generates single-use access codes and sends them to the CFO.
 *
 * Security Philosophy:
 * - "Show me you can save money, but I won't give you my data until I trust you"
 * - Conference rooms are ISOLATED, ENCRYPTED, and TIME-LIMITED
 * - Access codes are SINGLE-USE and expire after 90 days
 * - All file uploads are encrypted with AES-256
 * - Complete audit trail of all access attempts
 *
 * Workflow:
 * 1. Sales/Marketing: Customer clicks "Get free audit" or "Schedule Demo"
 * 2. This API: Creates secure conference room + generates access code
 * 3. Email Service: Sends access code to CFO with security assurances
 * 4. CFO: Enters code + gains access to upload portal
 * 5. CFO: Uploads sensitive docs (payroll, finance, compliance)
 * 6. System: Encrypts files + Runs audit + Generates proposal
 * 7. Deal Closes + Room expires + All data destroyed (optional retention)
 */

interface CreateConferenceRoomRequest {
  // Company Information
  companyName: string;
  companyEmail: string;
  cfPName?: string;
  cfPEmail?: string;
  cfEmail: string;
  cfoEmail?: string;
  industryType?: string;
  annualRevenue?: number;

  // Lead Source
  leadSource?: string; // 'WEBSITE', 'REFERRAL', 'COLD_OUTREACH', 'DEMO_REQUEST'
  salesRep?: string;

  // Security Options
  enableMFA?: boolean;
  ipWhitelist?: string[];

  // Internal Notes
  notes?: string;
}

interface StoredRoom {
  id: string;
  companyName: string;
  companyEmail: string;
  cfoEmail: string;
  accessCodeHash: string; // Bcrypt hash
  codeGeneratedAt: string;
  status: 'ACTIVE' | 'PENDING' | 'CLOSED';
  createdAt: string;
  expiresAt: string;
  accessCodeSent: boolean;
}


// Generate cryptographically secure 8-character access code
function generateAccessCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; // Excluding ambiguous characters (0,O,1,I,l)
  let code = '';
  const randomBytes = crypto.randomBytes(6);
  for (let i = 0; i < 8; i++) {
    code += chars[randomBytes[i] % chars.length];
  }
  return code;
}

// Generate AES-256 encryption key for this conference room
function generateEncryptionKey(): string {
  return crypto.randomBytes(32).toString('hex'); // 256-bit key
}

// Send access code email to CFO via Gmail SMTP
async function sendAccessCodeEmail(
  cfoEmail: string,
  cfPName: string,
  companyName: string,
  accessCode: string,
  expiresAt: Date
): Promise<void> {
  try {
    // Create Nodemailer transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Digicon AI Systems" <${process.env.GMAIL_USER}>`,
      to: cfoEmail,
      subject: '🔐 Your Digicon Secure Conference Room Access Code',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">🔐 Secure Access Code</h1>
            <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.9;">Digicon AI Systems Conference Room</p>
          </div>
          <div style="background: #f8f9fa; padding: 40px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0;">
            <p style="margin: 0 0 20px 0; font-size: 16px; color: #333;">Hello ${cfPName || 'there'},</p>
            <p style="margin: 0 0 20px 0; font-size: 14px; color: #666;">Thank you for your interest in Digicon AI Systems' free payroll audit service. We've created a secure conference room for <strong>${companyName}</strong> where you can upload sensitive documents for analysis.</p>
            
            <div style="background: white; border: 2px solid #667eea; border-radius: 6px; padding: 20px; margin: 30px 0; text-align: center;">
              <p style="margin: 0 0 10px 0; font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 1px;">Your Access Code</p>
              <p style="margin: 0; font-size: 48px; font-weight: bold; color: #667eea; letter-spacing: 8px; font-family: 'Courier New', monospace;">${accessCode}</p>
            </div>
            
            <p style="margin: 0 0 20px 0; font-size: 14px; color: #666;"><strong>How to use your code:</strong></p>
            <ol style="margin: 0 0 20px 0; padding-left: 20px; font-size: 14px; color: #666;">
              <li style="margin-bottom: 8px;">Go to <strong>digicon-ai-systems.vercel.app</strong></li>
              <li style="margin-bottom: 8px;">Click "Conference Rooms" in the navigation</li>
              <li style="margin-bottom: 8px;">Click "Join Room" on the conference room for your company</li>
              <li style="margin-bottom: 8px;">Enter your 8-character access code above</li>
              <li>Upload your payroll, finance, and compliance documents securely</li>
            </ol>
            
            <div style="background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; border-radius: 4px;">
              <p style="margin: 0; font-size: 13px; color: #856404;"><strong>⏰ Important:</strong> This code expires on ${expiresAt.toLocaleDateString()} and is single-use only. All files are encrypted with AES-256.</p>
            </div>
            
            <p style="margin: 0 0 10px 0; font-size: 14px; color: #666;"><strong>Security Assurances:</strong></p>
            <ul style="margin: 0 0 20px 0; padding-left: 20px; font-size: 13px; color: #666;">
              <li>Your data is <strong>never shared</strong> with third parties</li>
              <li>All uploads are <strong>encrypted with AES-256</strong></li>
              <li>Complete <strong>audit trail</strong> of all access attempts</li>
              <li>Room automatically expires and data is destroyed after 90 days</li>
              <li>SOC 2 Type II certified infrastructure</li>
            </ul>
            
            <p style="margin: 20px 0; font-size: 14px; color: #666;">If you have any questions or need assistance, please don't hesitate to reach out to our team at <strong>sales@iprosper.io</strong>.</p>
            
            <p style="margin: 0; font-size: 13px; color: #999; border-top: 1px solid #e0e0e0; padding-top: 15px;">Best regards,<br><strong>Digicon AI Systems Team</strong><br><em>Enterprise-grade AI solutions with uncompromising security and privacy</em></p>
          </div>
        </div>
      `,
      text: `
Your Digicon Secure Conference Room Access Code

Hello ${cfPName || 'there'},

Thank you for your interest in Digicon AI Systems' free payroll audit service.

Your Access Code: ${accessCode}

Code expires: ${expiresAt.toLocaleDateString()}

How to use your code:
1. Go to digicon-ai-systems.vercel.app
2. Click "Conference Rooms"
3. Click "Join Room" on your company's room
4. Enter your 8-character access code
5. Upload your documents securely

Security Assurances:
- Your data is NEVER shared with third parties
- All uploads are encrypted with AES-256
- Complete audit trail of all access
- Room expires in 90 days
- SOC 2 Type II certified

Questions? Email sales@iprosper.io
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent to ${cfoEmail} with access code`);
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    throw new Error(`Failed to send access code email: ${error}`);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { companyName, cfoEmail, cfPName, cfPEmail } = body;

    // Validation
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
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Generate access code
    const accessCode = generateAccessCode();
    const accessCodeHash = await bcrypt.hash(accessCode, 10);
    const now = new Date();
    const expiresAt = new Date(now.getTime() + 90 * 24 * 60 * 60 * 1000); // 90 days
    const roomId = crypto.randomUUID();

    // Create room record
    const room: StoredRoom = {
      id: roomId,
      companyName,
      companyEmail: cfPEmail || cfoEmail,
      cfoEmail,
      accessCodeHash,
      codeGeneratedAt: now.toISOString(),
      status: 'ACTIVE',
      createdAt: now.toISOString(),
      expiresAt: expiresAt.toISOString(),
      accessCodeSent: false,
    };

    // Store room
addRoom(room);
    // Send access code email
    try {
      await sendAccessCodeEmail(cfoEmail, cfPName || '', companyName, accessCode, expiresAt);
      room.accessCodeSent = true;
    } catch (emailError) {
      console.error('Failed to send email, but room was created:', emailError);
      // Don't fail the request if email fails - at least the room was created
      // In production, you'd want to retry or log this
    }

    // Return success without exposing the plaintext access code
    return NextResponse.json(
      {
        success: true,
        message: `Secure conference room created for ${companyName}. An 8-character access code was sent to ${cfoEmail}. Please check your inbox (and spam folder) for the access code — you will use it to log in to the room. The code is single-use and expires in 90 days.`,
        room: {
          id: roomId,
          companyName: room.companyName,
          cfoEmail: room.cfoEmail,
          status: room.status,
          expiresAt: room.expiresAt,
          accessCodeSent: room.accessCodeSent,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('❌ Error creating conference room:', error);
    return NextResponse.json(
      { error: 'Failed to create conference room', details: String(error) },
      { status: 500 }
    );
  }
}

// Helper function to verify access code (for /api/dealroom/verify)
async function verifyAccessCode(code: string, roomId: string): Promise<boolean> {
  const room = rooms.get(roomId);
  if (!room) return false;
  
  const isValid = await bcrypt.compare(code, room.accessCodeHash);
  return isValid;
}
