import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { hashToken } from '@/lib/token-utils';

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();

    if (!token) {
      return NextResponse.json(
        { error: 'Token is required' },
        { status: 400 }
      );
    }

    // Hash the token to match stored value
    const hashedToken = hashToken(token);

    // Find the audit request with this token
    const auditRequest = await db.auditRequest.findUnique({
      where: { portalToken: hashedToken },
    });

    if (!auditRequest) {
      return NextResponse.json(
        { error: 'Invalid or expired portal link' },
        { status: 404 }
      );
    }

    // Check if token has expired (48 hours)
    const now = new Date();
    if (auditRequest.portalTokenExpiresAt && auditRequest.portalTokenExpiresAt < now) {
      return NextResponse.json(
        { error: 'Portal link has expired' },
        { status: 401 }
      );
    }

    // Check if token has already been used
    if (auditRequest.tokenUsedAt) {
      return NextResponse.json(
        { error: 'Portal link has already been used' },
        { status: 401 }
      );
    }

    // Mark token as used
    await db.auditRequest.update({
      where: { id: auditRequest.id },
      data: {
        tokenUsedAt: new Date(),
      },
    });

    // Return the request ID for checkout redirect
    return NextResponse.json(
      {
        success: true,
        requestId: auditRequest.id,
        email: auditRequest.email,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Token verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
