import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { companyName, contactName, email } = body;

    // Validate required fields
    if (!companyName || !contactName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create audit request in database
    const auditRequest = await prisma.auditRequest.create({
      data: {
        companyName,
        contactName,
        email,
        status: 'pending',
        submittedAt: new Date(),
      },
    });

    // TODO: Send email notification to user with secure portal link
    // const portalLink = `https://digicon-ai-systems-production.up.railway.app/portal/${auditRequest.id}`;
    // Send email with portal link

    return NextResponse.json(
      {
        success: true,
        message: 'Audit request submitted successfully',
        requestId: auditRequest.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting audit request:', error);
    return NextResponse.json(
      { error: 'Failed to submit audit request' },
      { status: 500 }
    );
  }
}
