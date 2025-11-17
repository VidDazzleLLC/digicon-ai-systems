/**
 * Revoke an API key
 * Shared endpoint for all system types
 */

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/automation/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { keyId, companyId } = body;

    // Validate required fields
    if (!keyId || !companyId) {
      return NextResponse.json(
        { error: 'Missing required fields: keyId and companyId' },
        { status: 400 }
      );
    }

    // Find the key
    const apiKey = await prisma.apiKey.findUnique({
      where: { id: keyId },
    });

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not found' },
        { status: 404 }
      );
    }

    // Verify ownership
    if (apiKey.companyId !== companyId) {
      return NextResponse.json(
        { error: 'Unauthorized: You do not own this API key' },
        { status: 403 }
      );
    }

    // Revoke the key
    await prisma.apiKey.update({
      where: { id: keyId },
      data: { active: false },
    });

    // Log the revocation
    await prisma.automationLog.create({
      data: {
        eventType: 'key_revoked',
        systemType: apiKey.systemType,
        success: true,
        apiKeyId: keyId,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'API key revoked successfully',
      keyId,
    });

  } catch (error) {
    console.error('API key revocation error:', error);
    return NextResponse.json(
      { error: 'Failed to revoke API key' },
      { status: 500 }
    );
  }
}
