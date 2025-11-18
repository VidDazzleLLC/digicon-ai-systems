/**
 * MissionX Webhook Handler
 * Receives file upload notifications from MissionX portals
 * Downloads files, processes payroll data, stores results, sends notifications
 * 
 * Security Features:
 * - HMAC SHA256 signature verification
 * - File size limits (10MB max)
 * - Record count limits (1000 max)
 * - Trusted source validation (Stripe customer lookup)
 * 
 * POST /api/missionx/webhook
 * 
 * Headers:
 * - x-missionx-signature: HMAC SHA256 signature for verification
 * 
 * Body (file.uploaded event):
 * {
 *   "type": "file.uploaded",
 *   "data": {
 *     "file": {
 *       "id": "file_123",
 *       "name": "payroll_2024.csv",
 *       "url": "https://...",
 *       "size": 12345
 *     },
 *     "client": {
 *       "customId": "cus_stripe123",
 *       "title": "Acme Corp"
 *     }
 *   }
 * }
 */

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { processPayrollFile } from '@/lib/automation/file-processor';
import * as crypto from 'crypto';

const prisma = new PrismaClient();

/**
 * POST /api/missionx/webhook
 * Main webhook handler for MissionX events
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-missionx-signature');

    console.log('\n📥 MISSIONX WEBHOOK RECEIVED');

    // Verify webhook signature (production only)
    if (process.env.NODE_ENV === 'production' && !verifySignature(body, signature)) {
      console.error('❌ Invalid webhook signature');
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      );
    }

    // Parse event
    const event = JSON.parse(body);
    console.log(`- Event type: ${event.type}`);

    // Handle different event types
    switch (event.type) {
      case 'file.uploaded':
        await handleFileUpload(event.data);
        break;

      case 'file.deleted':
        await handleFileDeleted(event.data);
        break;

      default:
        console.log(`ℹ️  Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });

  } catch (error) {
    console.error('🔥 MISSIONX WEBHOOK ERROR:', error);
    return NextResponse.json(
      { 
        error: 'Webhook handler failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

/**
 * Handle file.uploaded event
 */
async function handleFileUpload(data: any) {
  try {
    const { file, client } = data;
    
    console.log(`📄 File uploaded: ${file.name}`);
    console.log(`- File ID: ${file.id}`);
    console.log(`- Client: ${client.title}`);
    console.log(`- Custom ID: ${client.customId}`);

    // Find customer by Stripe customer ID
    const customer = await prisma.stripeCustomer.findFirst({
      where: { 
        stripeCustomerId: client.customId 
      },
    });

    if (!customer) {
      console.error(`❌ Customer not found for Stripe ID: ${client.customId}`);
      return;
    }

    console.log(`✅ Found customer: ${customer.email}`);

    // Check if file is a payroll file (CSV or Excel)
    const ext = file.name.split('.').pop()?.toLowerCase();
    if (!ext || !['csv', 'xlsx', 'xls'].includes(ext)) {
      console.log(`ℹ️  Skipping non-payroll file: ${file.name} (${ext})`);
      return;
    }

    console.log(`✅ Valid payroll file detected: ${ext.toUpperCase()}`);

    // Process the file
    console.log('🚀 Starting file processing...');
    const result = await processPayrollFile({
      fileUrl: file.url,
      fileName: file.name,
      fileId: file.id,
      customerId: client.customId,
      customerEmail: customer.email,
      companyName: customer.companyName,
      apiKeyId: customer.apiKeyId,
    });

    if (result.success) {
      console.log('✅ File processing completed successfully');
      console.log(`- Records processed: ${result.recordsProcessed}`);
      console.log(`- Issues found: ${result.issuesFound}`);
      console.log(`- Corrections made: ${result.correctionsMade}`);
      console.log(`- Processing time: ${result.processingTime}ms`);
      
      // TODO: Send email notification to customer
      console.log(`📧 TODO: Send email to ${customer.email} with results`);
    } else {
      console.error('❌ File processing failed:', result.error);
      
      // TODO: Send error notification to customer
      console.log(`📧 TODO: Send error email to ${customer.email}`);
    }

  } catch (error) {
    console.error('❌ handleFileUpload error:', error);
  }
}

/**
 * Handle file.deleted event
 */
async function handleFileDeleted(data: any) {
  try {
    const { file } = data;
    
    console.log(`🗑️  File deleted: ${file.name}`);
    console.log(`- File ID: ${file.id}`);

    // Find and update file upload record
    const fileUpload = await prisma.fileUpload.findFirst({
      where: { fileId: file.id },
    });

    if (fileUpload) {
      // We don't delete the record, just log it
      console.log(`ℹ️  File ${file.id} deleted from MissionX, keeping database record`);
    } else {
      console.log(`ℹ️  No database record found for file ${file.id}`);
    }

  } catch (error) {
    console.error('❌ handleFileDeleted error:', error);
  }
}

/**
 * Verify webhook signature using HMAC SHA256
 */
function verifySignature(body: string, signature: string | null): boolean {
  if (!signature || !process.env.MISSIONX_WEBHOOK_SECRET) {
    console.warn('⚠️  Missing signature or webhook secret');
    return false;
  }

  try {
    const expectedSignature = crypto
      .createHmac('sha256', process.env.MISSIONX_WEBHOOK_SECRET)
      .update(body)
      .digest('hex');

    return crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expectedSignature)
    );
  } catch (error) {
    console.error('Error verifying signature:', error);
    return false;
  }
}

/**
 * GET /api/missionx/webhook
 * Health check endpoint
 */
export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    service: 'MissionX Webhook Handler',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    events: [
      'file.uploaded',
      'file.deleted',
    ],
    endpoints: {
      POST: '/api/missionx/webhook - Receive MissionX events',
      GET: '/api/missionx/webhook - Health check',
    },
  });
}
