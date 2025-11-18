/**
 * Payroll Automation Webhook Endpoint
 * Receives payroll data, validates API key, triggers AI correction
 * 
 * POST /api/automation/payroll/webhook
 * 
 * Headers:
 * - x-api-key: digi_XXXXXXXXXXXXXXXX
 * 
 * Body:
 * {
 *   "data": [
 *     {
 *       "employeeId": "E001",
 *       "hours": 45,
 *       "rate": 25,
 *       "taxWithheld": 200
 *     }
 *   ]
 * }
 */

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { validateApiKey, incrementApiKeyUsage } from '@/lib/automation/api-keys';
import { correctPayrollData, validatePayrollData } from '@/lib/automation/payroll-corrector';

const prisma = new PrismaClient();

/**
 * POST /api/automation/payroll/webhook
 * Main webhook endpoint for payroll correction
 */
export async function POST(request: NextRequest) {
  const startTime = Date.now();
  
  try {
    // Extract API key from header
    const apiKey = request.headers.get('x-api-key');
    const ipAddress = request.headers.get('x-forwarded-for') || 'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';
    
    console.log('\n🎯 PAYROLL WEBHOOK REQUEST RECEIVED');
    console.log(`- IP: ${ipAddress}`);
    console.log(`- User Agent: ${userAgent}`);
    
    // Validate API key presence
    if (!apiKey) {
      console.log('❌ Missing API key');
      
      await logAutomationEvent({
        eventType: 'AUTHENTICATION_FAILED',
        eventData: { reason: 'Missing API key' },
        endpoint: '/api/automation/payroll/webhook',
        method: 'POST',
        ipAddress,
        userAgent,
        statusCode: 401,
        success: false,
        errorMsg: 'Missing x-api-key header',
      });
      
      return NextResponse.json(
        { 
          error: 'Authentication required',
          message: 'Missing x-api-key header'
        },
        { status: 401 }
      );
    }
    
    // Validate API key
    const apiKeyRecord = await validateApiKey(apiKey);
    
    if (!apiKeyRecord) {
      console.log('❌ Invalid or revoked API key');
      
      await logAutomationEvent({
        eventType: 'AUTHENTICATION_FAILED',
        eventData: { reason: 'Invalid or revoked API key' },
        endpoint: '/api/automation/payroll/webhook',
        method: 'POST',
        ipAddress,
        userAgent,
        statusCode: 401,
        success: false,
        errorMsg: 'Invalid API key',
      });
      
      return NextResponse.json(
        { 
          error: 'Authentication failed',
          message: 'Invalid or revoked API key'
        },
        { status: 401 }
      );
    }
    
    console.log(`✅ API key validated for ${apiKeyRecord.customerEmail}`);
    
    // Check rate limit
    if (apiKeyRecord.requestsToday >= apiKeyRecord.requestsPerDay) {
      console.log('❌ Rate limit exceeded');
      
      await logAutomationEvent({
        apiKeyId: apiKeyRecord.id,
        eventType: 'RATE_LIMIT_EXCEEDED',
        eventData: { 
          requestsToday: apiKeyRecord.requestsToday,
          limit: apiKeyRecord.requestsPerDay
        },
        endpoint: '/api/automation/payroll/webhook',
        method: 'POST',
        ipAddress,
        userAgent,
        statusCode: 429,
        success: false,
        errorMsg: 'Rate limit exceeded',
      });
      
      return NextResponse.json(
        { 
          error: 'Rate limit exceeded',
          message: `Daily limit of ${apiKeyRecord.requestsPerDay} requests reached`,
          limit: apiKeyRecord.requestsPerDay,
          used: apiKeyRecord.requestsToday,
          resetsAt: new Date(new Date(apiKeyRecord.lastResetAt).getTime() + 24 * 60 * 60 * 1000).toISOString()
        },
        { status: 429 }
      );
    }
    
    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch (error) {
      console.log('❌ Invalid JSON body');
      
      await logAutomationEvent({
        apiKeyId: apiKeyRecord.id,
        eventType: 'PAYROLL_WEBHOOK_RECEIVED',
        eventData: { error: 'Invalid JSON' },
        endpoint: '/api/automation/payroll/webhook',
        method: 'POST',
        ipAddress,
        userAgent,
        statusCode: 400,
        success: false,
        errorMsg: 'Invalid JSON body',
      });
      
      return NextResponse.json(
        { 
          error: 'Invalid request',
          message: 'Request body must be valid JSON'
        },
        { status: 400 }
      );
    }
    
    // Validate payroll data
    const validation = validatePayrollData(body.data);
    if (!validation.valid) {
      console.log(`❌ Invalid payroll data: ${validation.error}`);
      
      await logAutomationEvent({
        apiKeyId: apiKeyRecord.id,
        eventType: 'PAYROLL_WEBHOOK_RECEIVED',
        eventData: { error: validation.error },
        endpoint: '/api/automation/payroll/webhook',
        method: 'POST',
        ipAddress,
        userAgent,
        statusCode: 400,
        success: false,
        errorMsg: validation.error,
      });
      
      return NextResponse.json(
        { 
          error: 'Invalid data',
          message: validation.error
        },
        { status: 400 }
      );
    }
    
    console.log(`✅ Validated ${body.data.length} payroll records`);
    
    // Increment API key usage
    await incrementApiKeyUsage(apiKeyRecord.id);
    
    // Log webhook received
    await logAutomationEvent({
      apiKeyId: apiKeyRecord.id,
      eventType: 'PAYROLL_WEBHOOK_RECEIVED',
      eventData: { 
        recordCount: body.data.length,
        customerEmail: apiKeyRecord.customerEmail
      },
      endpoint: '/api/automation/payroll/webhook',
      method: 'POST',
      ipAddress,
      userAgent,
      statusCode: 200,
      success: true,
    });
    
    // Trigger AI correction
    console.log('🤖 Starting AI payroll correction...');
    
    await logAutomationEvent({
      apiKeyId: apiKeyRecord.id,
      eventType: 'PAYROLL_CORRECTION_STARTED',
      eventData: { recordCount: body.data.length },
      endpoint: '/api/automation/payroll/webhook',
      method: 'POST',
      ipAddress,
      userAgent,
      statusCode: 200,
      success: true,
    });
    
    const correctionResult = await correctPayrollData(body.data, apiKeyRecord.id);
    
    const processingTime = Date.now() - startTime;
    
    if (correctionResult.success) {
      console.log(`✅ AI correction completed in ${processingTime}ms`);
      
      await logAutomationEvent({
        apiKeyId: apiKeyRecord.id,
        eventType: 'PAYROLL_CORRECTION_COMPLETED',
        eventData: { 
          correctionCount: correctionResult.correctionCount,
          correctionsFound: correctionResult.correctionsFound,
          aiTokensUsed: correctionResult.aiTokensUsed
        },
        endpoint: '/api/automation/payroll/webhook',
        method: 'POST',
        ipAddress,
        userAgent,
        statusCode: 200,
        responseTime: processingTime,
        success: true,
      });
      
      return NextResponse.json({
        success: true,
        message: 'Payroll data processed successfully',
        result: {
          correctionsFound: correctionResult.correctionsFound,
          correctionCount: correctionResult.correctionCount,
          correctedData: correctionResult.correctedData,
          issues: correctionResult.issues,
          summary: correctionResult.summary,
        },
        meta: {
          recordsProcessed: body.data.length,
          processingTime: processingTime,
          aiTokensUsed: correctionResult.aiTokensUsed,
          requestsRemaining: apiKeyRecord.requestsPerDay - apiKeyRecord.requestsToday - 1,
        }
      });
      
    } else {
      console.log(`❌ AI correction failed: ${correctionResult.error}`);
      
      return NextResponse.json(
        {
          success: false,
          error: 'Processing failed',
          message: correctionResult.error,
          meta: {
            processingTime: processingTime,
          }
        },
        { status: 500 }
      );
    }
    
  } catch (error) {
    const processingTime = Date.now() - startTime;
    console.error('🔥 WEBHOOK ERROR:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
        meta: {
          processingTime: processingTime,
        }
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/automation/payroll/webhook
 * Health check endpoint
 */
export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    service: 'Payroll Automation Webhook',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    endpoints: {
      POST: '/api/automation/payroll/webhook - Process payroll data'
    }
  });
}

/**
 * Helper function to log automation events
 */
async function logAutomationEvent(params: {
  apiKeyId?: string;
  eventType: string;
  eventData: any;
  endpoint: string;
  method: string;
  ipAddress: string;
  userAgent: string;
  statusCode: number;
  responseTime?: number;
  success: boolean;
  errorMsg?: string;
}) {
  try {
    await prisma.payrollAutomationLog.create({
      data: {
        apiKeyId: params.apiKeyId,
        eventType: params.eventType as any,
        eventData: params.eventData,
        endpoint: params.endpoint,
        method: params.method,
        ipAddress: params.ipAddress,
        userAgent: params.userAgent,
        statusCode: params.statusCode,
        responseTime: params.responseTime,
        success: params.success,
        errorMsg: params.errorMsg,
      },
    });
  } catch (error) {
    console.error('Failed to log automation event:', error);
  }
}
