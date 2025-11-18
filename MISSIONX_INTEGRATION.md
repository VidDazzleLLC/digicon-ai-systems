# MissionX Integration - Document Upload System

Complete integration for handling payroll file uploads from MissionX, with automated processing and AI-powered correction.

## 🎯 Overview

This integration enables MissionX to send payroll files to the Digicon AI Systems platform for automated processing and error correction. Files are received via webhook, parsed, validated, and optionally processed through the AI correction engine.

## 📋 Features

- ✅ **Webhook Handler** - Receives file upload events from MissionX
- ✅ **Multi-Format Support** - Handles CSV and JSON payroll files
- ✅ **Automatic Parsing** - Extracts and normalizes payroll data
- ✅ **Data Validation** - Ensures data meets required format
- ✅ **AI Correction** - Optional integration with Claude AI for error detection
- ✅ **Database Storage** - Persists all upload results and processing history
- ✅ **Complete Audit Trail** - Logs every step of the process

## 🏗️ Architecture

```
┌─────────────────┐
│   MissionX      │
│  File Portal    │
└────────┬────────┘
         │ POST /api/missionx/webhook
         │ { event, file, clientId }
         ▼
┌──────────────────────────┐
│  Webhook Endpoint        │
│  - Validate request      │
│  - Check API key         │
│  - Log event             │
└────────┬─────────────────┘
         │
         ▼
┌──────────────────────────┐
│  File Processor          │
│  - Download file         │
│  - Parse CSV/JSON        │
│  - Extract payroll data  │
│  - Validate format       │
└────────┬─────────────────┘
         │
         ▼
┌──────────────────────────┐
│  Payroll Corrector       │
│  - Analyze with Claude   │
│  - Detect errors         │
│  - Generate corrections  │
└────────┬─────────────────┘
         │
         ▼
┌──────────────────────────┐
│  Database Storage        │
│  - MissionXFileUpload    │
│  - PayrollCorrection     │
│  - AutomationLog         │
└──────────────────────────┘
```

## 🔌 API Endpoints

### POST /api/missionx/webhook

Main webhook endpoint for receiving file uploads from MissionX.

**Headers:**
- `x-api-key` (optional) - Digicon API key for AI correction
- `Content-Type: application/json`

**Request Body:**
```json
{
  "event": "file.uploaded",
  "clientId": "missionx_client_123",
  "userId": "user_456",
  "file": {
    "id": "file_789",
    "name": "payroll_january_2024.csv",
    "size": 2048,
    "type": "text/csv",
    "url": "https://storage.missionx.ai/files/..."
  }
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "File processed successfully",
  "data": {
    "uploadId": "clx123abc",
    "fileName": "payroll_january_2024.csv",
    "recordCount": 25,
    "processingTime": 3542,
    "correctionResult": {
      "correctionsFound": true,
      "correctionCount": 3,
      "correctedData": [...],
      "issues": [...]
    }
  }
}
```

**Response (No API Key - Data Extracted Only):**
```json
{
  "success": true,
  "message": "File processed successfully",
  "data": {
    "uploadId": "clx123abc",
    "fileName": "payroll_january_2024.csv",
    "recordCount": 25,
    "processingTime": 1234
  }
}
```

### GET /api/missionx/webhook

Health check endpoint.

**Response:**
```json
{
  "status": "healthy",
  "service": "MissionX File Upload Webhook",
  "version": "1.0.0",
  "supportedEvents": ["file.uploaded", "file_uploaded"],
  "features": {
    "fileFormats": ["CSV", "JSON"],
    "aiCorrection": "Optional with x-api-key header",
    "authentication": "Optional API key for AI correction"
  }
}
```

## 📄 Supported File Formats

### CSV Format

CSV files with payroll data. Column names are normalized automatically.

**Supported Column Names:**
- Employee ID: `employee_id`, `employeeid`, `emp_id`, `id`
- Employee Name: `employee_name`, `name`, `employee`
- Hours: `hours`, `regular_hours`
- Rate: `rate`, `hourly_rate`, `pay_rate`
- Overtime Hours: `overtime_hours`, `overtime`, `ot_hours`
- Overtime Rate: `overtime_rate`, `ot_rate`
- Gross Pay: `gross_pay`, `gross`, `total_pay`
- Tax Withheld: `tax_withheld`, `tax`, `taxes`
- Net Pay: `net_pay`, `net`, `take_home`

**Example CSV:**
```csv
employee_id,employee_name,hours,rate,overtime_hours,overtime_rate,gross_pay,tax_withheld,net_pay
E001,John Doe,40,25.00,5,37.50,1187.50,237.50,950.00
E002,Jane Smith,45,30.00,5,45.00,1575.00,315.00,1260.00
```

### JSON Format

JSON array of payroll records.

**Example JSON:**
```json
[
  {
    "employeeId": "E001",
    "employeeName": "John Doe",
    "hours": 40,
    "rate": 25.00,
    "overtimeHours": 5,
    "overtimeRate": 37.50,
    "grossPay": 1187.50,
    "taxWithheld": 237.50,
    "netPay": 950.00
  }
]
```

## 🔐 Authentication

### Optional API Key

Include the `x-api-key` header to enable AI-powered correction:

```bash
curl -X POST https://your-domain.com/api/missionx/webhook \
  -H "x-api-key: digi_XXXXXXXXXXXXXXXX" \
  -H "Content-Type: application/json" \
  -d '{ ... }'
```

**With API Key:**
- File is processed AND corrected with AI
- Rate limits apply (1000 requests/day)
- Full correction results returned
- Linked to customer account

**Without API Key:**
- File is processed (parsed and validated)
- No AI correction performed
- No rate limits
- Data extraction only

## 💾 Database Schema

### MissionXFileUpload

Stores file upload metadata and processing results.

```prisma
model MissionXFileUpload {
  id                  String            @id @default(cuid())
  createdAt           DateTime          @default(now())
  updatedAt           DateTime          @updatedAt
  
  // MissionX Details
  missionxClientId    String?
  missionxFileId      String?
  missionxUserId      String?
  
  // File Information
  fileName            String
  fileSize            Int?
  fileType            String?
  fileUrl             String?
  
  // Processing Status
  status              FileUploadStatus  @default(PENDING)
  processedAt         DateTime?
  
  // Extracted Data
  extractedData       Json?
  recordCount         Int?
  
  // Correction Results
  correctionId        String?           @unique
  correction          PayrollCorrection?
  
  // Processing Metadata
  processingTime      Int?
  errorMsg            String?
  
  // API Key Association
  apiKeyId            String?
  apiKey              ApiKey?
}

enum FileUploadStatus {
  PENDING
  PROCESSING
  COMPLETED
  FAILED
}
```

## 📊 Event Logging

All webhook events are logged to the `AutomationLog` table:

- `MISSIONX_FILE_UPLOAD_RECEIVED` - File upload webhook received
- `MISSIONX_FILE_PROCESSING_STARTED` - File processing started
- `MISSIONX_FILE_PROCESSING_COMPLETED` - Processing completed successfully
- `MISSIONX_FILE_PROCESSING_FAILED` - Processing failed

## 🧪 Testing

### Using cURL

```bash
# Test health check
curl http://localhost:3000/api/missionx/webhook

# Test file upload (CSV content)
curl -X POST http://localhost:3000/api/missionx/webhook \
  -H "Content-Type: application/json" \
  -d '{
    "event": "file.uploaded",
    "clientId": "test_client",
    "userId": "test_user",
    "file": {
      "id": "test_file_123",
      "name": "test_payroll.csv",
      "type": "text/csv",
      "content": "employee_id,hours,rate\nE001,40,25\nE002,45,30"
    }
  }'

# Test with API key for AI correction
curl -X POST http://localhost:3000/api/missionx/webhook \
  -H "x-api-key: digi_YOUR_KEY_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "event": "file.uploaded",
    "clientId": "test_client",
    "file": {
      "name": "payroll.csv",
      "url": "https://example.com/payroll.csv"
    }
  }'
```

### Using Test Script

```bash
# Run the test suite
./test-missionx-webhook.sh
```

## 🚀 Deployment

### Environment Variables

No additional environment variables required beyond the existing setup:

```env
DATABASE_URL=postgresql://...           # Required
ANTHROPIC_API_KEY=sk-ant-...           # Required for AI correction
ENCRYPTION_SECRET=...                   # Required for API keys
```

### MissionX Configuration

In MissionX, configure the webhook endpoint:

1. Go to MissionX Settings → Webhooks
2. Add new webhook endpoint: `https://your-domain.com/api/missionx/webhook`
3. Select event: `file.uploaded`
4. Save configuration

## 📈 Monitoring

### Success Metrics

Monitor these metrics in the database:

```sql
-- Total uploads
SELECT COUNT(*) FROM "MissionXFileUpload";

-- Success rate
SELECT 
  status,
  COUNT(*) as count,
  ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(), 2) as percentage
FROM "MissionXFileUpload"
GROUP BY status;

-- Average processing time
SELECT AVG("processingTime") as avg_ms
FROM "MissionXFileUpload"
WHERE status = 'COMPLETED';

-- Recent uploads
SELECT 
  "fileName",
  "recordCount",
  "processingTime",
  status,
  "createdAt"
FROM "MissionXFileUpload"
ORDER BY "createdAt" DESC
LIMIT 10;
```

## 🔍 Troubleshooting

### Common Issues

**"Missing file information"**
- Ensure `file` object is included in webhook payload
- Check that `file.name` is provided

**"Failed to extract payroll data"**
- Verify CSV/JSON format is correct
- Check that employee_id field exists in data
- Ensure file content is accessible

**"Invalid payroll data"**
- Data must be an array
- Each record must have `employeeId` field
- Maximum 1000 records per file

**"Rate limit exceeded"**
- Check API key usage in dashboard
- Wait 24 hours or use different API key
- Consider removing API key for extraction-only mode

## 🔗 Integration with Existing Systems

### MissionX Client

Uses the existing MissionX API client at `lib/integrations/missionx.ts` for authentication and client management.

### Payroll Corrector

Connects directly to the existing payroll correction engine at `lib/automation/payroll-corrector.ts` for AI-powered error detection.

### API Key System

Integrates with the existing API key validation and rate limiting system.

## 📚 Related Documentation

- [QUICKSTART.md](./QUICKSTART.md) - Quick start guide
- [PAYROLL_AUTOMATION.md](./PAYROLL_AUTOMATION.md) - Payroll automation documentation
- [TESTING.md](./TESTING.md) - Testing guide

## 🛠️ Implementation Files

- `app/api/missionx/webhook/route.ts` - Webhook endpoint handler
- `lib/automation/file-processor.ts` - File processing logic
- `prisma/schema.prisma` - Database schema (MissionXFileUpload model)

---

**Built with:**
- Next.js 14 API Routes
- Prisma ORM
- Papa Parse (CSV parsing)
- Anthropic Claude AI (optional)
