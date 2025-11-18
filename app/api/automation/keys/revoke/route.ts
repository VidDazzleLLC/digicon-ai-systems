/**
 * API Key Revocation Endpoint
 * Revokes an API key
 * 
 * POST /api/automation/keys/revoke
 * 
 * Body:
 * {
 *   "apiKey": "digi_XXXXXXXXXXXXXXXX",
 *   "reason": "User requested cancellation"
 * }
 */

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { revokeApiKey } from '@/lib/automation/api-keys';

const prisma = new PrismaClient();

/**
 * POST /api/automation/keys/revoke
 * Revoke an existing API key
 */
export async function POST(request: NextRequest) {
  try {
    console.log('\n🚫 API KEY REVOCATION REQUEST');
    
    // Parse request body
    const body = await request.json();
    
    const { apiKey, reason } = body;
    
    // Validate required fields
    if (!apiKey) {
      console.log('❌ Missing API key');
      return NextResponse.json(
        { 
          error: 'Missing required field',
          message: 'apiKey is required'
        },
        { status: 400 }
      );
    }
    
    console.log('- Revoking API key...');
    
    // Revoke the API key
    const revokedKey = await revokeApiKey(apiKey, reason || 'USER_REQUESTED');
    
    // Log event
    await prisma.payrollAutomationLog.create({
      data: {
        apiKeyId: revokedKey.id,
        eventType: 'API_KEY_REVOKED',
        eventData: {
          customerEmail: revokedKey.customerEmail,
          reason: reason || 'USER_REQUESTED',
        },
        endpoint: '/api/automation/keys/revoke',
        method: 'POST',
        ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
        userAgent: request.headers.get('user-agent') || 'unknown',
        statusCode: 200,
        success: true,
      },
    });
    
    console.log(`✅ API key revoked for ${revokedKey.customerEmail}`);
    
    return NextResponse.json({
      success: true,
      message: 'API key revoked successfully',
      data: {
        id: revokedKey.id,
        customerEmail: revokedKey.customerEmail,
        companyName: revokedKey.companyName,
        status: revokedKey.status,
        revokedAt: revokedKey.revokedAt,
        revokedReason: revokedKey.revokedReason,
      },
    });
    
  } catch (error) {
    console.error('🔥 API KEY REVOCATION ERROR:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to revoke API key',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/automation/keys/revoke
 * Information endpoint
 */
export async function GET() {
  return NextResponse.json({
    service: 'API Key Revocation',
    method: 'POST',
    description: 'Revoke an existing API key',
    requiredFields: {
      apiKey: 'string (digi_XXXXXXXXXXXXXXXX)',
    },
    optionalFields: {
      reason: 'string (reason for revocation)',
    },
    response: {
      success: 'boolean',
      data: {
        id: 'string',
        customerEmail: 'string',
        status: 'REVOKED',
        revokedAt: 'timestamp',
      },
    },
  });
}
