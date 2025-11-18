/**
 * Shared webhook handler logic
 * Used by all 6 automation system webhooks
 */

import { NextRequest, NextResponse } from 'next/server';
import { validateApiKey, checkRateLimit } from './api-key-validator';
import { analyzeCorrection, SystemType } from './base-corrector';
import { prisma } from './prisma';

export interface WebhookPayload {
  recordId: string;
  data: any;
  metadata?: Record<string, any>;
}

/**
 * Handle webhook request for any system type
 */
export async function handleWebhook(
  request: NextRequest,
  systemType: SystemType
): Promise<NextResponse> {
  try {
    // Validate API key
    const authHeader = request.headers.get('Authorization');
    const validation = await validateApiKey(authHeader, systemType.toUpperCase());

    if (!validation.valid) {
      await logWebhookCall(systemType, null, false, validation.error);
      return NextResponse.json(
        { error: validation.error },
        { status: 401 }
      );
    }

    const apiKey = validation.apiKey;

    // Check rate limit
    const withinLimit = await checkRateLimit(apiKey.id);
    if (!withinLimit) {
      await logWebhookCall(systemType, apiKey.id, false, 'Rate limit exceeded');
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    let payload: WebhookPayload;
    try {
      payload = await request.json();
    } catch (error) {
      await logWebhookCall(systemType, apiKey.id, false, 'Invalid JSON payload');
      return NextResponse.json(
        { error: 'Invalid JSON payload' },
        { status: 400 }
      );
    }

    // Validate payload
    if (!payload.recordId || !payload.data) {
      await logWebhookCall(systemType, apiKey.id, false, 'Missing recordId or data');
      return NextResponse.json(
        { error: 'Missing required fields: recordId and data' },
        { status: 400 }
      );
    }

    // Analyze with AI
    const startTime = Date.now();
    const correction = await analyzeCorrection(systemType, payload.data, payload.recordId);
    const responseTime = Date.now() - startTime;

    // Save correction to database
    const savedCorrection = await prisma.payrollCorrection.create({
      data: {
        inputData: payload.data,
        employeeId: payload.recordId,
        aiModel: 'claude-3-5-sonnet-20241022',
        processingTime: responseTime,
        correctionsFound: correction.issuesFound.length > 0,
        correctionCount: correction.issuesFound.length,
        outputData: correction.correctedData,
        issuesFound: correction.corrections,
        apiKeyId: apiKey.id,
        status: 'PROCESSING',
      },
    });

    // Log successful webhook call
    await logWebhookCall(
      systemType,
      apiKey.id,
      true,
      null,
      responseTime,
      payload
    );

    return NextResponse.json({
      success: true,
      correctionId: savedCorrection.id,
      issuesFound: correction.issuesFound.length,
      correction: {
        id: savedCorrection.id,
        status: savedCorrection.status,
        createdAt: savedCorrection.createdAt,
        correctionsFound: savedCorrection.correctionsFound,
        correctionCount: savedCorrection.correctionCount,
      },
    });

  } catch (error) {
    console.error('Webhook error:', error);
    await logWebhookCall(
      systemType,
      null,
      false,
      error instanceof Error ? error.message : 'Unknown error'
    );
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * Log webhook call to database
 */
async function logWebhookCall(
  systemType: SystemType,
  apiKeyId: string | null,
  success: boolean,
  errorMessage: string | null | undefined,
  responseTime?: number,
  requestBody?: any
): Promise<void> {
  try {
    await prisma.automationLog.create({
      data: {
        eventType: 'PAYROLL_WEBHOOK_RECEIVED',
        eventData: requestBody || {},
        endpoint: `/api/automation/${systemType}/webhook`,
        method: 'POST',
        ipAddress: '0.0.0.0',
        statusCode: success ? 200 : 500,
        success,
        errorMsg: errorMessage || null,
        responseTime,
        apiKeyId,
      },
    });
  } catch (error) {
    console.error('Failed to log webhook call:', error);
  }
}
