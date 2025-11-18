/**
 * MissionX Webhook Endpoint
 * Handles file upload webhooks from MissionX
 * 
 * POST /api/missionx/webhook
 * 
 * Headers:
 * - x-api-key: digi_XXXXXXXXXXXXXXXX (optional, for AI correction)
 * - x-missionx-signature: webhook signature for verification (optional)
 * 
 * Body:
 * {
 *   "event": "file.uploaded",
 *   "clientId": "client_123",
 *   "userId": "user_456",
 *   "file": {
 *     "id": "file_789",
 *     "name": "payroll_data.csv",
 *     "size": 1024,
 *     "type": "text/csv",
 *     "url": "https://storage.missionx.ai/files/..."
 *   }
 * }
 */

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { validateApiKey, incrementApiKeyUsage } from '@/lib/automation/api-keys';
import { processPayrollFile, MissionXFileUploadData } from '@/lib/automation/file-processor';

const prisma = new PrismaClient();

/**
 * POST /api/missionx/webhook
 * Main webhook endpoint for MissionX file uploads
 */
export async function POST(request: NextRequest) {
  const startTime = Date.now();
  
  try {
    const ipAddress = request.headers.get('x-forwarded-for') || 'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const apiKey = request.headers.get('x-api-key');
    
    console.log('\n📥 MISSIONX WEBHOOK REQUEST RECEIVED');
    console.log(`- IP: ${ipAddress}`);
    console.log(`- User Agent: ${userAgent}`);
    console.log(`- Has API Key: ${!!apiKey}`);
    
    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch (error) {
      console.log('❌ Invalid JSON body');
      
      return NextResponse.json(
        { 
          success: false,
          error: 'Invalid request',
          message: 'Request body must be valid JSON'
        },
        { status: 400 }
      );
    }
    
    console.log(`- Event: ${body.event}`);
    console.log(`- File: ${body.file?.name}`);
    
    // Validate webhook event
    if (body.event !== 'file.uploaded' && body.event !== 'file_uploaded') {
      console.log(`⚠️ Unsupported event type: ${body.event}`);
      
      return NextResponse.json({
        success: true,
        message: `Event type '${body.event}' acknowledged but not processed`,
        processed: false,
      });
    }
    
    // Validate file data
    if (!body.file || !body.file.name) {
      console.log('❌ Missing file information');
      
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid data',
          message: 'Missing file information in webhook payload'
        },
        { status: 400 }
      );
    }
    
    // Check if API key is provided
    let apiKeyRecord = null;
    if (apiKey) {
      apiKeyRecord = await validateApiKey(apiKey);
      
      if (!apiKeyRecord) {
        console.log('⚠️ Invalid API key provided, processing without AI correction');
        
        await logAutomationEvent({
          eventType: 'AUTHENTICATION_FAILED',
          eventData: { 
            reason: 'Invalid API key',
            fileName: body.file.name 
          },
          endpoint: '/api/missionx/webhook',
          method: 'POST',
          ipAddress,
          userAgent,
          statusCode: 200, // Still process the file
          success: true,
        });
      } else {
        console.log(`✅ API key validated for ${apiKeyRecord.customerEmail}`);
        
        // Check rate limit
        if (apiKeyRecord.requestsToday >= apiKeyRecord.requestsPerDay) {
          console.log('❌ Rate limit exceeded');
          
          await logAutomationEvent({
            apiKeyId: apiKeyRecord.id,
            eventType: 'RATE_LIMIT_EXCEEDED',
            eventData: { 
              requestsToday: apiKeyRecord.requestsToday,
              limit: apiKeyRecord.requestsPerDay,
              fileName: body.file.name
            },
            endpoint: '/api/missionx/webhook',
            method: 'POST',
            ipAddress,
            userAgent,
            statusCode: 429,
            success: false,
            errorMsg: 'Rate limit exceeded',
          });
          
          return NextResponse.json(
            { 
              success: false,
              error: 'Rate limit exceeded',
              message: `Daily limit of ${apiKeyRecord.requestsPerDay} requests reached`,
              limit: apiKeyRecord.requestsPerDay,
              used: apiKeyRecord.requestsToday,
              resetsAt: new Date(new Date(apiKeyRecord.lastResetAt).getTime() + 24 * 60 * 60 * 1000).toISOString()
            },
            { status: 429 }
          );
        }
        
        // Increment API key usage
        await incrementApiKeyUsage(apiKeyRecord.id);
      }
    }
    
    // Log file upload received
    await logAutomationEvent({
      apiKeyId: apiKeyRecord?.id,
      eventType: 'MISSIONX_FILE_UPLOAD_RECEIVED',
      eventData: { 
        fileName: body.file.name,
        fileSize: body.file.size,
        clientId: body.clientId,
        userId: body.userId,
        hasApiKey: !!apiKeyRecord,
      },
      endpoint: '/api/missionx/webhook',
      method: 'POST',
      ipAddress,
      userAgent,
      statusCode: 200,
      success: true,
    });
    
    // Prepare file data
    const fileData: MissionXFileUploadData = {
      fileId: body.file.id,
      clientId: body.clientId,
      userId: body.userId,
      fileName: body.file.name,
      fileSize: body.file.size,
      fileType: body.file.type,
      fileUrl: body.file.url,
      fileContent: body.file.content, // Optional: inline content
    };
    
    // Log processing started
    await logAutomationEvent({
      apiKeyId: apiKeyRecord?.id,
      eventType: 'MISSIONX_FILE_PROCESSING_STARTED',
      eventData: { 
        fileName: body.file.name,
        clientId: body.clientId,
      },
      endpoint: '/api/missionx/webhook',
      method: 'POST',
      ipAddress,
      userAgent,
      statusCode: 200,
      success: true,
    });
    
    console.log('🔄 Starting file processing...');
    
    // Process the file
    const processingResult = await processPayrollFile(
      fileData,
      apiKeyRecord?.id
    );
    
    const totalProcessingTime = Date.now() - startTime;
    
    if (processingResult.success) {
      console.log(`✅ File processing completed in ${totalProcessingTime}ms`);
      
      await logAutomationEvent({
        apiKeyId: apiKeyRecord?.id,
        eventType: 'MISSIONX_FILE_PROCESSING_COMPLETED',
        eventData: { 
          fileName: body.file.name,
          uploadId: processingResult.uploadId,
          recordCount: processingResult.recordCount,
          correctionCount: processingResult.correctionResult?.correctionCount,
          correctionsFound: processingResult.correctionResult?.correctionsFound,
        },
        endpoint: '/api/missionx/webhook',
        method: 'POST',
        ipAddress,
        userAgent,
        statusCode: 200,
        responseTime: totalProcessingTime,
        success: true,
      });
      
      return NextResponse.json({
        success: true,
        message: 'File processed successfully',
        data: {
          uploadId: processingResult.uploadId,
          fileName: body.file.name,
          recordCount: processingResult.recordCount,
          processingTime: totalProcessingTime,
          correctionResult: processingResult.correctionResult,
        },
        meta: apiKeyRecord ? {
          requestsRemaining: apiKeyRecord.requestsPerDay - apiKeyRecord.requestsToday - 1,
        } : undefined,
      });
      
    } else {
      console.log(`❌ File processing failed: ${processingResult.error}`);
      
      await logAutomationEvent({
        apiKeyId: apiKeyRecord?.id,
        eventType: 'MISSIONX_FILE_PROCESSING_FAILED',
        eventData: { 
          fileName: body.file.name,
          uploadId: processingResult.uploadId,
          error: processingResult.error,
        },
        endpoint: '/api/missionx/webhook',
        method: 'POST',
        ipAddress,
        userAgent,
        statusCode: 500,
        responseTime: totalProcessingTime,
        success: false,
        errorMsg: processingResult.error,
      });
      
      return NextResponse.json(
        {
          success: false,
          error: 'Processing failed',
          message: processingResult.error,
          data: {
            uploadId: processingResult.uploadId,
            fileName: body.file.name,
            processingTime: totalProcessingTime,
          }
        },
        { status: 500 }
      );
    }
    
  } catch (error) {
    const processingTime = Date.now() - startTime;
    console.error('🔥 MISSIONX WEBHOOK ERROR:', error);
    
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
 * GET /api/missionx/webhook
 * Health check endpoint
 */
export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    service: 'MissionX File Upload Webhook',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    endpoints: {
      POST: '/api/missionx/webhook - Process file uploads from MissionX'
    },
    supportedEvents: [
      'file.uploaded',
      'file_uploaded'
    ],
    features: {
      fileFormats: ['CSV', 'JSON'],
      aiCorrection: 'Optional with x-api-key header',
      authentication: 'Optional API key for AI correction',
      rateLimit: '1000 requests/day per API key'
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
    await prisma.automationLog.create({
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
