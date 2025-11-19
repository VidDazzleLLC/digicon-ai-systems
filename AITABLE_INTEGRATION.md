# AITable.ai Integration Guide

## Overview

This guide explains how to integrate AITable.ai with the Digicon AI Systems platform, connecting your CRM data with MissionX client portals for seamless data synchronization and workflow automation.

## Architecture

```
AITable.ai CRM (Data Layer)
  ↓ (Bi-directional sync via API)
Digicon App on Railway (Integration/Processing Layer)
  ↓ (Webhooks & portal management)
MissionX Client Portals (Client-facing Layer)
```

## Features

- **Bi-directional Data Sync**: Automatically sync client data between AITable CRM and MissionX portals
- **Webhook Integration**: Real-time updates when CRM records are created, updated, or deleted
- **Audit Results Storage**: Store AI-corrected payroll data directly in AITable
- **Client Portal Creation**: Automatically create MissionX portals for new clients added to CRM
- **File Upload Tracking**: Track all file uploads and audit results in your CRM

## Prerequisites

1. AITable.ai account with API access
2. AITable workspace with Digicon CRM datasheet
3. MissionX integration already configured (see MISSIONX_INTEGRATION.md)
4. Railway deployment with environment variables configured

## AITable.ai Setup

### 1. Get API Token

1. Log in to AITable.ai
2. Go to Settings → API
3. Generate new API token
4. Copy token for environment variables

### 2. Get Datasheet IDs

1. Open your Digicon CRM workspace
2. Navigate to each datasheet (Leads, Orders, etc.)
3. Copy datasheet ID from URL: `https://aitable.ai/workbench/{DATASHEET_ID}/...`
4. Note down IDs for:
   - Leads datasheet
   - Orders datasheet
   - Audit Results datasheet

### 3. Configure Webhook

1. In AITable.ai, go to Automation
2. Create new automation trigger: "When record is created/updated"
3. Add action: "Send webhook"
4. Set webhook URL: `https://your-app.railway.app/api/aitable/webhook`
5. Configure webhook secret (generate random string)

## Environment Variables

Add these to your Railway deployment:

```bash
# AITable.ai Configuration
AITABLE_API_TOKEN=your_aitable_api_token_here
AITABLE_BASE_URL=https://api.aitable.ai
AITABLE_SPACE_ID=your_space_id
AITABLE_LEADS_DATASHEET_ID=dst...
AITABLE_ORDERS_DATASHEET_ID=dst...
AITABLE_AUDIT_RESULTS_DATASHEET_ID=dst...
AITABLE_WEBHOOK_SECRET=your_webhook_secret_here
```

## Implementation Files

### 1. AITable API Client (`lib/integrations/aitable.ts`)

Handles all API communication with AITable.ai:
- CRUD operations on records
- Datasheet queries
- Field mapping
- Error handling

### 2. Webhook Handler (`app/api/aitable/webhook/route.ts`)

Receives webhooks from AITable when CRM data changes:
- Validates webhook signatures
- Processes record create/update/delete events
- Triggers sync to MissionX
- Logs all webhook events

### 3. Sync Engine (`lib/automation/aitable-sync.ts`)

Manages bi-directional synchronization:
- Syncs client data from AITable to MissionX
- Syncs audit results from MissionX back to AITable
- Handles data transformation
- Manages conflict resolution

### 4. Database Schema Updates (`prisma/schema.prisma`)

New models for tracking sync state:
```prisma
model AITableSync {
  id              String   @id @default(cuid())
  recordId        String   // AITable record ID
  datasheetId     String   // AITable datasheet ID  
  entityType      String   // "lead", "order", "audit_result"
  entityId        String   // Internal entity ID
  lastSyncedAt    DateTime @default(now())
  syncDirection   String   // "aitable_to_app", "app_to_aitable"
  syncStatus      String   // "success", "failed", "pending"
  errorMessage    String?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  @@index([recordId])
  @@index([entityId])
  @@index([entityType])
}
```

## Data Flow

### Client Onboarding Flow

1. **New Lead in AITable**:
   - Sales team creates new lead in AITable CRM
   - Webhook fires to Digicon app
   - App creates MissionX portal for client
   - Portal URL saved back to AITable lead record

2. **Lead Converts to Order**:
   - Lead status updated to "Won" in AITable
   - Webhook triggers order creation
   - MissionX portal activated with file upload capability
   - Client receives portal access email

### File Upload & Processing Flow

1. **Client Uploads File**:
   - Client uploads payroll file to MissionX portal
   - MissionX webhook fires to Digicon app
   - App downloads and processes file with AI
   - Audit results generated

2. **Results Sync to AITable**:
   - App creates new record in Audit Results datasheet
   - Links to Order record
   - Includes:
     - File name and upload date
     - Number of employees processed
     - Number of corrections made
     - Corrected file URL
     - Processing status

### Reporting Flow

1. **Dashboard Updates**:
   - AITable dashboard shows all active orders
   - Real-time audit result metrics
   - Client portal usage tracking
   - Revenue calculations based on audit volume

## API Endpoints

### POST /api/aitable/webhook

Receives webhooks from AITable automation.

**Request Headers**:
```
Content-Type: application/json
X-AITable-Signature: <webhook_signature>
```

**Request Body**:
```json
{
  "eventType": "record.created" | "record.updated" | "record.deleted",
  "datasheetId": "dst...",
  "recordId": "rec...",
  "record": {
    "fields": {
      "Client Name": "Acme Corp",
      "Email": "contact@acme.com",
      "Status": "Active"
    }
  }
}
```

**Response**:
```json
{
  "success": true,
  "message": "Webhook processed successfully",
  "syncId": "sync_123..."
}
```

### POST /api/aitable/sync

Manually trigger sync for a specific entity.

**Request Body**:
```json
{
  "entityType": "order",
  "entityId": "order_123",
  "direction": "app_to_aitable"
}
```

## Testing

### 1. Test API Connection

```bash
curl -X GET https://api.aitable.ai/fusion/v1/spaces \
  -H "Authorization: Bearer YOUR_API_TOKEN"
```

### 2. Test Webhook Endpoint

```bash
curl -X POST https://your-app.railway.app/api/aitable/webhook \
  -H "Content-Type: application/json" \
  -H "X-AITable-Signature: test_signature" \
  -d '{
    "eventType": "record.created",
    "datasheetId": "dst...",
    "recordId": "rec...",
    "record": {
      "fields": {
        "Client Name": "Test Client"
      }
    }
  }'
```

### 3. Verify Sync

1. Create test lead in AITable
2. Check Railway logs for webhook receipt
3. Verify MissionX portal creation
4. Confirm portal URL synced back to AITable

## Error Handling

### Webhook Failures

- Webhooks are retried up to 3 times with exponential backoff
- Failed webhooks logged to database for manual review
- Email notifications sent for critical failures

### Sync Conflicts

- Latest update wins (based on `updatedAt` timestamp)
- Conflicts logged in `AITableSync` table
- Manual resolution UI available in admin panel

### API Rate Limits

- AITable.ai: 10 requests/second
- Implement request queuing for bulk operations
- Use batch APIs when available

## Monitoring

### Key Metrics

- Webhook processing time
- Sync success rate
- API error rate
- Data consistency checks

### Logging

All sync operations logged with:
- Timestamp
- Entity type and ID
- Sync direction
- Success/failure status
- Error messages (if any)

## Security

### API Token Management

- Store API token in Railway environment variables
- Never commit tokens to version control
- Rotate tokens every 90 days

### Webhook Signature Verification

- All webhooks must include valid signature
- Signatures verified using HMAC-SHA256
- Invalid signatures rejected with 401 error

### Data Privacy

- Client data encrypted in transit (HTTPS)
- PII fields encrypted at rest
- Access logs maintained for compliance

## Troubleshooting

### Webhook Not Firing

1. Check AITable automation is enabled
2. Verify webhook URL is correct
3. Check Railway logs for incoming requests
4. Test with manual webhook trigger

### Sync Failures

1. Check API token is valid
2. Verify datasheet IDs are correct
3. Check field mappings match AITable schema
4. Review error logs in database

### Data Inconsistency

1. Run manual sync for affected records
2. Check `AITableSync` table for failed syncs
3. Verify webhook processing order
4. Review conflict resolution logs

## Deployment

### 1. Update Code

```bash
git add .
git commit -m "Add AITable integration"
git push origin main
```

### 2. Run Migrations

```bash
npx prisma db push
```

### 3. Configure Environment Variables

In Railway dashboard:
1. Go to Variables tab
2. Add all AITable environment variables
3. Deploy changes

### 4. Set Up Webhooks

In AITable.ai:
1. Create automation for each datasheet
2. Set webhook URL to production endpoint
3. Test with sample data

## Support

For issues or questions:
- Check Railway logs: `railway logs`
- Review webhook events in AITable automation history
- Check sync status in database: `SELECT * FROM AITableSync WHERE syncStatus = 'failed'`

## Changelog

### v1.0.0 (Initial Release)
- AITable API client implementation
- Webhook handler for CRM events
- Bi-directional sync engine
- Database schema for sync tracking
- Error handling and retry logic

## Next Steps

1. Implement AITable API client
2. Create webhook handler
3. Build sync engine
4. Update database schema
5. Configure environment variables
6. Test end-to-end flow
7. Deploy to production
8. Set up monitoring and alerts
