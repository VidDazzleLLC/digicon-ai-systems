# Audit Workflow - Implementation Guide

## Overview

This document describes the updated audit workflow where users upload payroll files first, the system generates an audit report, and then routes users to Stripe Checkout. The final audit report is only emailed after successful payment.

## Workflow Steps

### 1. File Upload & Report Generation
**Endpoint:** `POST /api/audit/upload`

The user uploads a payroll file (CSV) along with company details:

```bash
curl -X POST http://localhost:3000/api/audit/upload \
  -F "file=@payroll.csv" \
  -F "companyName=Acme Corp" \
  -F "email=finance@acme.com"
```

**What happens:**
1. System validates the CSV file
2. Generates an audit report using the existing `/api/audit/process` endpoint
3. Stores the report temporarily in `app/temp-reports/`
4. Creates an audit request record in `app/data/audit-requests.json`
5. Creates a Stripe Checkout session ($249)
6. Returns the checkout URL to the client

**Response:**
```json
{
  "success": true,
  "checkoutUrl": "https://checkout.stripe.com/pay/cs_...",
  "sessionId": "cs_test_...",
  "reportId": "report_...",
  "auditRequestId": "audit_...",
  "message": "Report generated successfully. Please complete payment to receive your report."
}
```

### 2. Payment Processing
The user is redirected to the Stripe Checkout URL where they complete payment for $249.

### 3. Webhook Processing
**Endpoint:** `POST /api/stripe/webhook`

After successful payment, Stripe sends a `checkout.session.completed` webhook:

**What happens:**
1. Webhook validates the Stripe signature
2. Extracts `auditRequestId` from session metadata
3. Marks the audit request as "paid" (idempotent)
4. Loads the report from temporary storage
5. Sends the report via email to the customer
6. Marks the report as "delivered"

**Email delivery:**
- Uses SMTP (nodemailer) if `SMTP_HOST` is configured
- Falls back to Resend API if `RESEND_API_KEY` is configured
- Falls back to console.log if neither is configured

### 4. Alternative Checkout Flow
**Endpoint:** `POST /api/audit/checkout`

If the checkout session expires or needs to be recreated:

```bash
curl -X POST http://localhost:3000/api/audit/checkout \
  -H "Content-Type: application/json" \
  -d '{
    "auditRequestId": "audit_..."
  }'
```

**What happens:**
1. Retrieves the existing audit request
2. Checks if a valid session already exists
3. Creates a new session if needed
4. Returns the checkout URL (always uses `session.url` with fallback)

## Environment Variables

Add these to your `.env` file:

```bash
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Base URL (for redirects)
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Email Configuration - Option 1: SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Email Configuration - Option 2: Resend (already in project)
RESEND_API_KEY=re_your_resend_api_key
```

## Data Storage

### Audit Requests
Stored in: `app/data/audit-requests.json`

```json
[
  {
    "id": "audit_1234567890_abc123",
    "companyName": "Acme Corp",
    "customerEmail": "finance@acme.com",
    "status": "paid",
    "report": {
      "reportId": "report_1234567890_def456",
      "filePath": "/path/to/app/temp-reports/report_1234567890_def456.json",
      "url": "/temp-reports/report_1234567890_def456.json"
    },
    "createdAt": "2025-11-20T12:00:00.000Z",
    "paidAt": "2025-11-20T12:05:00.000Z",
    "reportDelivered": true,
    "reportDeliveredAt": "2025-11-20T12:05:05.000Z",
    "stripeSessionId": "cs_test_abc123"
  }
]
```

### Audit Reports
Stored in: `app/temp-reports/{reportId}.json`

```json
{
  "reportId": "report_1234567890_def456",
  "auditRequestId": "audit_1234567890_abc123",
  "companyName": "Acme Corp",
  "customerEmail": "finance@acme.com",
  "generatedAt": "2025-11-20T12:00:00.000Z",
  "rowCount": 150,
  "columns": ["employee_id", "salary", "hours_worked"],
  "auditReport": {
    "systemType": "payroll",
    "kpis": { ... },
    "findings": [ ... ]
  },
  "processingTime": "9 seconds"
}
```

## Testing Locally

### 1. Start the development server
```bash
npm run dev
```

### 2. Test file upload
```bash
curl -X POST http://localhost:3000/api/audit/upload \
  -F "file=@sample-payroll.csv" \
  -F "companyName=Test Company" \
  -F "email=test@example.com"
```

### 3. Test webhook (using Stripe CLI)
```bash
# Install Stripe CLI
stripe listen --forward-to localhost:3000/api/stripe/webhook

# Trigger a test payment
stripe trigger checkout.session.completed
```

### 4. Check audit data
```bash
cat app/data/audit-requests.json | jq .
```

## Idempotency & Error Handling

### Webhook Idempotency
- The webhook checks if `paidAt` is already set before processing
- If `reportDelivered` is true, skips email delivery
- Multiple webhook calls for the same event won't result in duplicate emails

### Error Scenarios

**1. Report file missing during delivery:**
- Payment is marked as successful
- Error is logged but webhook doesn't fail
- Manual delivery can be triggered later

**2. Email delivery fails:**
- Payment is marked as successful
- Error is logged
- Report file remains in temporary storage for manual delivery

**3. Stripe not configured:**
- Upload and checkout endpoints return 500 error with clear message
- Build succeeds (Stripe is optional during build time)

## API Reference

### POST /api/audit/upload
Accepts file upload and generates audit report.

**Request:**
- `file` (File): CSV file
- `companyName` (string): Company name
- `email` (string): Customer email

**Response:**
```json
{
  "success": true,
  "checkoutUrl": "https://checkout.stripe.com/...",
  "sessionId": "cs_...",
  "reportId": "report_...",
  "auditRequestId": "audit_...",
  "message": "..."
}
```

### POST /api/audit/checkout
Creates or retrieves checkout session.

**Request:**
```json
{
  "auditRequestId": "audit_..."
}
```

**Response:**
```json
{
  "success": true,
  "checkoutUrl": "https://checkout.stripe.com/...",
  "sessionId": "cs_...",
  "auditRequestId": "audit_...",
  "reportId": "report_...",
  "message": "..."
}
```

### POST /api/stripe/webhook
Handles Stripe webhook events.

**Supported Events:**
- `checkout.session.completed`
- `checkout.session.async_payment_succeeded`

## Migration Notes

### From Previous Flow
The previous workflow required payment before file upload. The new workflow:
- Allows immediate file upload and report generation
- Creates a better UX (users see value before paying)
- Maintains payment requirement before report delivery
- Stores reports temporarily until payment is confirmed

### Backward Compatibility
- The checkout endpoint still supports legacy mode (without auditRequestId)
- Existing webhook handlers for API key generation remain functional
- No database schema changes required (uses JSON file storage)

## Security Considerations

1. **Webhook Signature Verification**: Always verify Stripe signatures in production
2. **Report Storage**: Temporary reports are stored locally (consider cleanup policy)
3. **Email Security**: Use environment variables for SMTP credentials
4. **Payment Verification**: Only deliver reports after confirmed payment
5. **Idempotency**: Prevents duplicate charges and deliveries

## Future Enhancements

- Add report cleanup job (delete old unpaid reports after X days)
- Implement report download from secure portal
- Add support for multiple file formats (Excel, JSON)
- Implement database storage instead of JSON files
- Add email templates with attachments
- Add refund handling in webhook
