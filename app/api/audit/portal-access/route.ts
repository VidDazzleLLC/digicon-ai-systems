import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.json(
        { error: 'Missing portal token' },
        { status: 400 }
      );
    }

    // Find audit request by portal token
    const auditRequest = await prisma.auditRequest.findUnique({
      where: { portalToken: token },
    });

    if (!auditRequest) {
      return NextResponse.json(
        { error: 'Invalid or expired portal link' },
        { status: 404 }
      );
    }

    // Check token expiration
    if (auditRequest.portalTokenExpiresAt < new Date()) {
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
    await prisma.auditRequest.update({
      where: { id: auditRequest.id },
      data: { tokenUsedAt: new Date() },
    });

    // Redirect to checkout with audit request ID
    const checkoutUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/audit/checkout?auditRequestId=${auditRequest.id}`;
    return NextResponse.redirect(checkoutUrl);
  } catch (error) {
    console.error('Error in portal-access:', error);
    return NextResponse.json(
      { error: 'Failed to process portal access' },
      { status: 500 }
    );
  }
}
