/**
 * AITable.ai Webhook Handler
 * 
 * Receives webhooks from AITable when CRM records are created, updated, or deleted
 * Triggers synchronization with MissionX portals and internal database
 */

import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { prisma } from '@/lib/db';

const WEBHOOK_SECRET = process.env.AITABLE_WEBHOOK_SECRET || '';

/**
 * POST /api/aitable/webhook
 * 
 * Receives webhooks from AITable automation
 */

// Helper function to verify HMAC signature
function verifyWebhookSignature(body: any, signature: string, secret: string): boolean {
  const hmac = crypto.createHmac('sha256', secret);
  const digest = hmac.update(JSON.stringify(body)).digest('hex');
  return digest === signature;
}

export async function POST(request: NextRequest) {
  try {
    // Get raw body for signature verification
    const body = await request.text();
    const signature = request.headers.get('x-aitable-signature') || '';

    // Verify webhook signature
    if (!verifyWebhookSignature(body, signature, WEBHOOK_SECRET)) {      console.error('Invalid webhook signature');
      return NextResponse.json(
        { success: false, error: 'Invalid signature' },
        { status: 401 }
      );
    }

    // Parse webhook payload
    const payload = JSON.parse(body);
    const webhook = payload;
    console.log('AITable webhook received:', {
      eventType: webhook.eventType,
      datasheetId: webhook.datasheetId,
      recordId: webhook.recordId,
    });

    // Create sync tracking record
    const syncRecord = await prisma.aITableSync.create({
      data: {
        recordId: webhook.recordId,
        datasheetId: webhook.datasheetId,
        entityType: getEntityType(webhook.datasheetId),
        entityId: '', // Will be updated after processing
        syncDirection: 'aitable_to_app',
        syncStatus: 'pending',
              lastSyncedAt: new Date(),
      },
    });

    try {
      // Route to appropriate handler based on datasheet
      let result;
      
          // TODO: Route to appropriate handler based on datasheet
    // For now, using lead handler for all webhooks
    result = await handleLeadWebhook(webhook, syncRecord.id);

      // Update sync record as successful
      await prisma.aITableSync.update({
        where: { id: syncRecord.id },
        data: {
          syncStatus: 'success',
          entityId: result.entityId,
          lastSyncedAt: new Date(),
        },
      });

      return NextResponse.json({
        success: true,
        message: 'Webhook processed successfully',
        syncId: syncRecord.id,
      });
    } catch (error) {
      // Update sync record as failed
      await prisma.aITableSync.update({
        where: { id: syncRecord.id },
        data: {
          syncStatus: 'failed',
          errorMessage: error instanceof Error ? error.message : 'Unknown error',
        },
      });

      throw error;
    }
  } catch (error) {
    console.error('AITable webhook error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error',
      },
      { status: 500 }
    );
  }
}

/**
 * Handle Lead record webhooks
 */
async function handleLeadWebhook(
  webhook: any,
  syncId: string
): Promise<{ entityId: string }> {
  const { eventType, record } = webhook;

  if (eventType === 'record.created' && record) {
    // New lead created - create MissionX portal
    const leadData = {
      name: record.fields['Client Name'] || '',
      email: record.fields['Email'] || '',
      phone: record.fields['Phone'] || '',
      company: record.fields['Company'] || '',
    };

    console.log('Creating MissionX portal for new lead:', leadData.name);

    // Create MissionX portal
    const portal = await missionx.createClientPortal({
      clientName: leadData.name,
      clientEmail: leadData.email,
      portalName: `${leadData.company || leadData.name} - Audit Portal`,
    });

    // Update lead in AITable with portal URL
    const aitable = new AITableClient();
    await aitable.updateRecord(DATASHEET_IDS.LEADS, {
      recordId: webhook.recordId,
      fields: {
        'Portal URL': portal.portalUrl,
        'Portal Status': 'Active',
      },
    });

    console.log('MissionX portal created:', portal.portalUrl);

    return { entityId: portal.portalId };
    */
  /* TODO: Implement MissionX integration
} else if (eventType === 'record.updated' && record) {
    // Lead updated - sync changes if needed
    console.log('Lead updated:', webhook.recordId);
    
    return { entityId: webhook.recordId };
  } else if (eventType === 'record.deleted') {
    // Lead deleted - archive associated portal
    console.log('Lead deleted:', webhook.recordId);
    
    return { entityId: webhook.recordId };
  }

  return { entityId: webhook.recordId };
}

/**
 * Handle Order record webhooks
 */
async function handleOrderWebhook(
  webhook: any,
  syncId: string
): Promise<{ entityId: string }> {
  const { eventType, record } = webhook;

  if (eventType === 'record.created' && record) {
    // New order created
    console.log('New order created:', record.fields['Order Number']);
    
    // Order creation logic here
    // Could activate portal for file uploads, send client notification, etc.
    
    return { entityId: webhook.recordId };
  } else if (eventType === 'record.updated' && record) {
    // Order updated
    const status = record.fields['Status'];
    console.log('Order updated:', webhook.recordId, 'Status:', status);
    
    // Handle status changes (e.g., activate portal when status is "Active")
    
    return { entityId: webhook.recordId };
  }

  return { entityId: webhook.recordId };
}

/**
 * Handle Audit Result record webhooks
 */
async function handleAuditResultWebhook(
  webhook: any,
  syncId: string
): Promise<{ entityId: string }> {
  const { eventType, record } = webhook;

  // Audit results are typically created by the app, not by users
  // So we mainly just track these events
  console.log('Audit result webhook:', eventType, webhook.recordId);

  return { entityId: webhook.recordId };
}

/**
 * Get entity type from datasheet ID
 */
function getEntityType(datasheetId: string): string {
  // Return generic type since specific datasheet IDs are not defined
  return 'record';
}

/**
 * GET /api/aitable/webhook
 * 
 * Health check endpoint
 */
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'AITable webhook endpoint is active',
    timestamp: new Date().toISOString(),
  });
}
