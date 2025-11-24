/**
 * Search Audit Requests by Email
 *
 * GET /api/admin/find-by-email?email=connect@1ddazzle.com
 */

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email') || 'connect@1ddazzle.com';

    console.log('[FIND-BY-EMAIL] Searching for email:', email);

    const clientAny = prisma as unknown as Record<string, any>;

    // Find all audit requests with this email
    const requests = await clientAny.auditRequest.findMany({
      where: {
        customerEmail: email
      },
      select: {
        id: true,
        customerEmail: true,
        companyName: true,
        status: true,
        reportId: true,
        reportDelivered: true,
        reportDeliveredAt: true,
        paidAt: true,
        createdAt: true,
        updatedAt: true,
        fileUploadedAt: true,
        reportData: false // Don't send full report data in list
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    console.log('[FIND-BY-EMAIL] Found', requests.length, 'request(s)');

    // Also search for similar emails (typo variations)
    const similarEmails = [
      'connect@1ddazzle.com',
      'connect@viddazzle.com',
      'connect@iddazzle.com',
      'connect@ddazzle.com'
    ];

    const similarRequests = await clientAny.auditRequest.findMany({
      where: {
        customerEmail: {
          in: similarEmails
        }
      },
      select: {
        id: true,
        customerEmail: true,
        companyName: true,
        status: true,
        reportId: true,
        reportDelivered: true,
        createdAt: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    await prisma.$disconnect();

    return NextResponse.json({
      success: true,
      searchEmail: email,
      exactMatches: requests,
      exactMatchCount: requests.length,
      similarMatches: similarRequests.filter(r => r.customerEmail !== email),
      similarMatchCount: similarRequests.filter(r => r.customerEmail !== email).length,
      allMatches: similarRequests,
      totalCount: similarRequests.length
    });

  } catch (error: any) {
    console.error('[FIND-BY-EMAIL] Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Search failed',
        message: error.message
      },
      { status: 500 }
    );
  }
}
