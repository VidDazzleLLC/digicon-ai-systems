# 🚀 MissionX Integration Guide

## Complete Implementation for Document Upload & Payroll Audit System

### Overview

This integration connects MissionX client portals to the Digicon AI payroll audit system. When customers pay via Stripe, they automatically get a MissionX portal where they can securely upload payroll documents. These documents are then processed by AI and audit results are delivered.

---

## 📋 Implementation Checklist

### Phase 1: Core Files (CREATE THESE)
- [ ] `app/api/missionx/webhook/route.ts` - Webhook handler
- [ ] `lib/automation/file-processor.ts` - File processing engine
- [ ] Update `prisma/schema.prisma` - Add FileUpload model
- [ ] Update `package.json` - Add dependencies

### Phase 2: Configuration
- [ ] Add environment variables to Railway
- [ ] Configure MissionX webhook URL
- [ ] Test webhook endpoint

### Phase 3: Testing
- [ ] Test file upload flow
- [ ] Verify AI processing
- [ ] Check email notifications

---

## 📁 File 1: Webhook Handler

**Create:** `app/api/missionx/webhook/route.ts`

```typescript
/**
 * MissionX Webhook Handler
 * Receives file upload notifications and triggers payroll audit
 */

import { NextRequest, NextResponse } from 'next/server';
import { processPayrollFile } from '@/lib/automation/file-processor';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-missionx-signature');

    // Verify webhook (production only)
    if (process.env.NODE_ENV === 'production' && !verifySignature(body, signature)) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    const event = JSON.parse(body);
    console.log(`📥 MISSIONX: ${event.type}`);

    if (event.type === 'file.uploaded') {
      await handleFileUpload(event.data);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('🔥 Webhook error:', error);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}

async function handleFileUpload(data: any) {
  const { file, client } = data;
  
  // Find customer
  const customer = await prisma.stripeCustomer.findFirst({
    where: { stripeCustomerId: client.customId }
  });

  if (!customer) return;

  // Check file type
  const ext = file.name.split('.').pop()?.toLowerCase();
  if (!['csv', 'xlsx', 'xls'].includes(ext || '')) return;

  // Process file
  await processPayrollFile({
    fileUrl: file.url,
    fileName: file.name,
    fileId: file.id,
    customerId: client.customId,
    customerEmail: customer.email,
    companyName: customer.companyName,
    apiKeyId: customer.apiKeyId,
  });
}

function verifySignature(body: string, signature: string | null): boolean {
  if (!signature || !process.env.MISSIONX_WEBHOOK_SECRET) return false;
  const crypto = require('crypto');
  const expected = crypto
    .createHmac('sha256', process.env.MISSIONX_WEBHOOK_SECRET)
    .update(body)
    .digest('hex');
  return signature === expected;
}

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    events: ['file.uploaded', 'file.deleted'],
  });
}
```

---

## 📁 File 2: File Processor

**Create:** `lib/automation/file-processor.ts`

```typescript
/**
 * File Processor - Downloads and processes payroll files
 */

import { PrismaClient } from '@prisma/client';
import { correctPayrollData } from './payroll-corrector';

const prisma = new PrismaClient();

interface ProcessParams {
  fileUrl: string;
  fileName: string;
  fileId: string;
  customerId: string;
  customerEmail: string;
  companyName: string;
  apiKeyId: string | null;
}

export async function processPayrollFile(params: ProcessParams) {
  try {
    console.log(`📂 Processing: ${params.fileName}`);

    // 1. Download file
    const fileData = await fetch(params.fileUrl).then(r => r.arrayBuffer());
    const buffer = Buffer.from(fileData);

    // 2. Parse based on extension
    const ext = params.fileName.split('.').pop()?.toLowerCase();
    let payrollData: any[];

    if (ext === 'csv') {
      const Papa = require('papaparse');
      const result = Papa.parse(buffer.toString('utf-8'), {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true,
      });
      payrollData = result.data;
    } else if (ext === 'xlsx' || ext === 'xls') {
      const XLSX = require('xlsx');
      const workbook = XLSX.read(buffer);
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      payrollData = XLSX.utils.sheet_to_json(sheet);
    } else {
      throw new Error('Unsupported format');
    }

    console.log(`✅ Parsed ${payrollData.length} records`);

    // 3. Run AI correction
    const result = await correctPayrollData({
      data: payrollData,
      context: {
        companyName: params.companyName,
        fileName: params.fileName,
      }
    });

    // 4. Store results
    await prisma.auditLog.create({
      data: {
        keyId: params.apiKeyId,
        action: 'PAYROLL_AUDIT_COMPLETE',
        details: `Processed ${params.fileName}`,
        metadata: {
          fileId: params.fileId,
          fileName: params.fileName,
          recordsProcessed: payrollData.length,
          issuesFound: result.issues.length,
          correctionsMade: result.corrections.length,
          corrections: result.corrections,
          issues: result.issues,
        },
        ipAddress: 'missionx',
        userAgent: 'MissionX Integration',
      },
    });

    console.log(`✅ Audit complete: ${result.issues.length} issues found`);

    return {
      status: 'success',
      issuesFound: result.issues.length,
      correctionsMade: result.corrections.length,
    };
  } catch (error) {
    console.error('❌ Processing error:', error);
    throw error;
  }
}
```

---

## 📁 File 3: Update Prisma Schema

**Add to:** `prisma/schema.prisma`

```prisma
model FileUpload {
  id              String   @id @default(uuid())
  fileId          String   @unique
  fileName        String
  fileUrl         String
  fileSize        Int
  customerId      String
  apiKeyId        String?
  status          String   @default("processing")
  issuesFound     Int      @default(0)
  correctionsMade Int      @default(0)
  auditLogId      String?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  apiKey   ApiKey?   @relation(fields: [apiKeyId], references: [id])
  auditLog AuditLog? @relation(fields: [auditLogId], references: [id])
}

// Also add this to ApiKey model:
model ApiKey {
  // ... existing fields
  fileUploads FileUpload[]
}

// And to AuditLog model:
model AuditLog {
  // ... existing fields
  fileUploads FileUpload[]
}
```

---

## 📦 File 4: Update Dependencies

**Add to:** `package.json`

```json
{
  "dependencies": {
    // ... existing dependencies
    "papaparse": "^5.4.1",
    "xlsx": "^0.18.5"
  },
  "devDependencies": {
    // ... existing devDependencies
    "@types/papaparse": "^5.3.8"
  }
}
```

**Then run:**
```bash
npm install
```

---

## ⚙️ Environment Variables

**Add to Railway:**

```env
# MissionX API Credentials
MISSIONX_CLIENT_ID=your_client_id
MISSIONX_CLIENT_SECRET=your_client_secret
MISSIONX_ORG_ID=your_org_id
MISSIONX_WEBHOOK_SECRET=your_webhook_secret
```

**How to get these:**
1. Log into MissionX dashboard
2. Go to Settings > API
3. Create new API credentials
4. Copy all values to Railway

---

## 🔗 Configure Webhook in MissionX

1. Go to MissionX Settings > Webhooks
2. Click "Add Webhook"
3. Enter URL: `https://digicon-ai-systems-production.up.railway.app/api/missionx/webhook`
4. Select events:
   - ✅ `file.uploaded`
   - ✅ `file.deleted`
5. Save and test

---

## 🧪 Testing

### Test 1: Webhook Health Check
```bash
curl https://digicon-ai-systems-production.up.railway.app/api/missionx/webhook
```

Expected response:
```json
{
  "status": "healthy",
  "events": ["file.uploaded", "file.deleted"]
}
```

### Test 2: File Upload Flow
1. Complete a Stripe payment
2. Check that MissionX portal is created
3. Log into MissionX portal
4. Upload a payroll CSV/Excel file
5. Check Railway logs for processing
6. Verify audit results in database

---

## 📊 Database Migration

After updating schema:

```bash
npx prisma db push
npx prisma generate
```

---

## 🎯 How It Works

### Customer Journey:

1. **Payment** → Customer pays $249 on your website
2. **Portal Created** → Stripe webhook → MissionX portal automatically created
3. **Email Sent** → Customer receives email with portal link
4. **Upload** → Customer uploads payroll file to MissionX portal
5. **Webhook** → MissionX sends webhook to Digicon
6. **Processing** → File downloaded and parsed
7. **AI Audit** → Anthropic Claude analyzes payroll data
8. **Results** → Audit report saved to database
9. **Notification** → Customer receives email with results

### Technical Flow:

```
MissionX Portal → Webhook → route.ts → file-processor.ts → payroll-corrector.ts → Database → Email
```

---

## ✅ Success Criteria

- [ ] Customer pays → MissionX portal created automatically
- [ ] Customer uploads CSV → File processed within 30 seconds
- [ ] AI detects payroll errors correctly
- [ ] Audit results saved to database
- [ ] Customer receives email with results
- [ ] No errors in Railway logs

---

## 🐛 Troubleshooting

### Issue: Webhook not receiving events
**Solution:**
- Check MissionX webhook configuration
- Verify webhook URL is correct
- Check Railway logs for errors
- Test with MissionX webhook test button

### Issue: File parsing fails
**Solution:**
- Check file format (CSV, XLSX only)
- Verify file has headers
- Check for empty rows
- Validate data types

### Issue: AI correction not working
**Solution:**
- Verify ANTHROPIC_API_KEY is set
- Check payroll data format
- Review correction engine logs

---

## 📚 Next Steps

1. **Create all files above**
2. **Run database migration**
3. **Install dependencies**
4. **Add environment variables to Railway**
5. **Configure MissionX webhook**
6. **Test with real payment**
7. **Monitor Railway logs**

---

## 🎉 Benefits

✅ **No conference room complexity**  
✅ **Automatic portal provisioning**  
✅ **Secure file handling by MissionX**  
✅ **Enterprise-grade security**  
✅ **Better user experience**  
✅ **Automated workflow**  

---

## 📞 Support

If you need help:
1. Check Railway deployment logs
2. Review MissionX webhook logs
3. Test webhook endpoint directly
4. Verify environment variables are set

---

**Ready to implement? Start with File 1 (webhook handler)!**
