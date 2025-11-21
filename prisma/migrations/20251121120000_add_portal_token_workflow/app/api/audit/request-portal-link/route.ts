import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { v4 as uuidv4 } from 'uuid';
import { Resend } from 'resend';
import PortalLinkEmail from '@/app/emails/PortalLinkEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { companyName, personalName, email } = body;

    // Validate input
    if (!companyName || !personalName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate unique portal token
    const portalToken = uuidv4();
    const tokenExpiresAt = new Date(Date.now() + 48 * 60 * 60 * 1000); // 48 hours

    // Create or update AuditRequest with portal token
    const auditRequest = await prisma.auditRequest.upsert({
      where: { email },
      update: {
        portalToken,
        portalTokenExpiresAt: tokenExpiresAt,
        companyName,
        personalName,
        tokenUsedAt: null,
      },
      create: {
        portalToken,
        portalTokenExpiresAt: tokenExpiresAt,
        companyName,
        personalName,
        email,
      },
    });

    // Generate portal link
    const portalLink = `${process.env.NEXT_PUBLIC_APP_URL}/portal/access?token=${portalToken}`;

    // Send email with Resend
    await resend.emails.send({
      from: 'noreply@digicon.app',
      to: email,
      subject: 'Your Digicon AI Audit Portal Link',
      react: PortalLinkEmail({ personalName, portalLink, expiresIn: '48 hours' }),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Portal link sent to your email',
        auditRequestId: auditRequest.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in request-portal-link:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
