import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // Fetch the audit request from Prisma
    const clientAny = prisma as unknown as Record<string, any>;
    
    let auditRequest;
    if (clientAny && typeof clientAny.auditRequest?.findUnique === 'function') {
      auditRequest = await clientAny.auditRequest.findUnique({
        where: { id },
      });
    } else if (clientAny && typeof clientAny.request?.findUnique === 'function') {
      auditRequest = await clientAny.request.findUnique({
        where: { id },
      });
    }

    if (!auditRequest) {
      return NextResponse.json(
        { error: 'Audit request not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(auditRequest);
  } catch (error) {
    console.error('Error fetching audit request:', error);
    return NextResponse.json(
      { error: 'Failed to fetch audit request', details: (error as Error).message },
      { status: 500 }
    );
  }
}
