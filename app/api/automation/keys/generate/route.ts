/**
 * API Key Generation Endpoint
 * Generates API keys after Stripe payment verification
 * 
 * POST /api/automation/keys/generate
 * 
 * Body:
 * {
 *   "customerEmail": "cfo@company.com",
 *   "companyName": "Acme Corp",
 *   "stripeCustomerId": "cus_XXXXXXXX",
 *   "stripeSubscriptionId": "sub_XXXXXXXX"
 * }
 */

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { generateApiKey } from '@/lib/automation/api-keys';

const prisma = new PrismaClient();

/**
 * POST /api/automation/keys/generate
 * Generate a new API key for a customer
 */
export async function POST(request: NextRequest) {
  try {
    console.log('\n🔑 API KEY GENERATION REQUEST');
    
    // Parse request body
    const body = await request.json();
    
    const { customerEmail, companyName, stripeCustomerId, stripeSubscriptionId } = body;
    
    // Validate required fields
    if (!customerEmail || !companyName) {
      console.log('❌ Missing required fields');
      return NextResponse.json(
        { 
          error: 'Missing required fields',
          message: 'customerEmail and companyName are required'
        },
        { status: 400 }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(customerEmail)) {
      console.log('❌ Invalid email format');
      return NextResponse.json(
        { 
          error: 'Invalid email',
          message: 'customerEmail must be a valid email address'
        },
        { status: 400 }
      );
    }
    
    console.log(`- Customer: ${customerEmail}`);
    console.log(`- Company: ${companyName}`);
    
    // Check if customer already has an active API key
    const existingKey = await prisma.apiKey.findFirst({
      where: {
        customerEmail,
        status: 'ACTIVE',
      },
    });
    
    if (existingKey) {
      console.log('⚠️  Customer already has an active API key');
      return NextResponse.json(
        { 
          error: 'API key already exists',
          message: 'Customer already has an active API key',
          existingKeyId: existingKey.id,
        },
        { status: 409 }
      );
    }
    
    // Generate API key
    const apiKeyData = await generateApiKey({
      customerEmail,
      companyName,
      stripeCustomerId,
      stripeSubscriptionId,
      requestsPerDay: 1000,
    });
    
    // Log event
    await prisma.automationLog.create({
      data: {
        apiKeyId: apiKeyData.id,
        eventType: 'API_KEY_GENERATED',
        eventData: {
          customerEmail,
          companyName,
          stripeCustomerId,
        },
        endpoint: '/api/automation/keys/generate',
        method: 'POST',
        ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
        userAgent: request.headers.get('user-agent') || 'unknown',
        statusCode: 201,
        success: true,
      },
    });
    
    console.log(`✅ API key generated: ${apiKeyData.id}`);
    
    return NextResponse.json(
      {
        success: true,
        message: 'API key generated successfully',
        data: {
          apiKey: apiKeyData.apiKey, // IMPORTANT: Only time the key is shown
          id: apiKeyData.id,
          customerId: apiKeyData.customerId,
          customerEmail: apiKeyData.customerEmail,
          companyName: apiKeyData.companyName,
          requestsPerDay: apiKeyData.requestsPerDay,
          createdAt: apiKeyData.createdAt,
        },
        warning: 'Save this API key securely. It will not be shown again.',
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('🔥 API KEY GENERATION ERROR:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to generate API key',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/automation/keys/generate
 * Information endpoint
 */
export async function GET() {
  return NextResponse.json({
    service: 'API Key Generation',
    method: 'POST',
    description: 'Generate a new API key for payroll automation',
    requiredFields: {
      customerEmail: 'string (email)',
      companyName: 'string',
    },
    optionalFields: {
      stripeCustomerId: 'string',
      stripeSubscriptionId: 'string',
    },
    response: {
      apiKey: 'string (digi_XXXXXXXXXXXXXXXX)',
      customerId: 'string',
      requestsPerDay: 'number (default: 1000)',
    },
    note: 'API key is only shown once at generation time',
  });
}
