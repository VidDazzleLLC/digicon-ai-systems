# Payroll Automation System - Testing Guide

## Setup

### 1. Database Setup

```bash
# If using local PostgreSQL
createdb digicon_test

# Or use a cloud PostgreSQL database (Neon, Supabase, etc.)
```

### 2. Environment Variables

Copy `.env.test` to `.env.local` and fill in your actual values:

```bash
cp .env.test .env.local
```

**Required variables:**
- `DATABASE_URL` - PostgreSQL connection string
- `ANTHROPIC_API_KEY` - Your Anthropic API key
- `ENCRYPTION_SECRET` - 32+ character random string

**Optional for full functionality:**
- `STRIPE_SECRET_KEY` - Stripe test mode key
- `STRIPE_WEBHOOK_SECRET` - Stripe webhook signing secret

### 3. Database Migration

```bash
# Push schema to database
npx prisma db push

# Generate Prisma client
npx prisma generate
```

### 4. Start Development Server

```bash
npm run dev
```

Server will start at `http://localhost:3000`

## Testing Workflow

### Step 1: Generate API Key

**Option A: Direct API Call (Testing)**

```bash
curl -X POST http://localhost:3000/api/automation/keys/generate \
  -H "Content-Type: application/json" \
  -d '{
    "customerEmail": "test@example.com",
    "companyName": "Test Company Inc"
  }'
```

**Response:**
```json
{
  "success": true,
  "message": "API key generated successfully",
  "data": {
    "apiKey": "digi_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "id": "clxxxxx...",
    "customerId": "cust_XXXXXXXXXXXXXXXX",
    "customerEmail": "test@example.com",
    "companyName": "Test Company Inc",
    "requestsPerDay": 1000,
    "createdAt": "2024-01-01T00:00:00.000Z"
  },
  "warning": "Save this API key securely. It will not be shown again."
}
```

**⚠️ IMPORTANT:** Save the API key - it will not be shown again!

**Option B: Via Stripe Payment (Production)**
- Customer completes Stripe checkout
- Webhook automatically generates API key
- API key sent via email

### Step 2: Test Payroll Webhook

Use the API key from Step 1:

```bash
curl -X POST http://localhost:3000/api/automation/payroll/webhook \
  -H "x-api-key: digi_YOUR_API_KEY_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "data": [
      {
        "employeeId": "E001",
        "employeeName": "John Doe",
        "hours": 45,
        "rate": 25,
        "overtimeHours": 5,
        "overtimeRate": 37.5,
        "grossPay": 1187.5,
        "taxWithheld": 200,
        "netPay": 987.5
      },
      {
        "employeeId": "E002",
        "employeeName": "Jane Smith",
        "hours": 40,
        "rate": 30,
        "grossPay": 1200,
        "taxWithheld": 250,
        "netPay": 950
      }
    ]
  }'
```

**Expected Response (Success):**
```json
{
  "success": true,
  "message": "Payroll data processed successfully",
  "result": {
    "correctionsFound": true,
    "correctionCount": 2,
    "correctedData": [...],
    "issues": [
      {
        "employeeId": "E001",
        "field": "taxWithheld",
        "originalValue": 200,
        "correctedValue": 237,
        "reason": "Tax withholding should be approximately 20% of gross pay",
        "severity": "warning"
      }
    ],
    "summary": "Found 2 issues in payroll data..."
  },
  "meta": {
    "recordsProcessed": 2,
    "processingTime": 3542,
    "aiTokensUsed": 1234,
    "requestsRemaining": 999
  }
}
```

### Step 3: View Dashboard

1. Navigate to: `http://localhost:3000/automation/dashboard`
2. Enter your API key
3. View real-time statistics:
   - Requests today
   - Total corrections
   - Issues found
   - Average processing time
   - Recent corrections
   - Activity logs

The dashboard auto-refreshes every 5 seconds using SWR.

### Step 4: Test Rate Limiting

Make 1001+ requests in a day to test rate limiting:

```bash
# This should fail with 429 status
for i in {1..1001}; do
  curl -X POST http://localhost:3000/api/automation/payroll/webhook \
    -H "x-api-key: digi_YOUR_API_KEY_HERE" \
    -H "Content-Type: application/json" \
    -d '{"data": [{"employeeId": "E001"}]}'
  sleep 0.1
done
```

**Expected Response (Rate Limited):**
```json
{
  "error": "Rate limit exceeded",
  "message": "Daily limit of 1000 requests reached",
  "limit": 1000,
  "used": 1000,
  "resetsAt": "2024-01-02T00:00:00.000Z"
}
```

### Step 5: Test API Key Revocation

```bash
curl -X POST http://localhost:3000/api/automation/keys/revoke \
  -H "Content-Type: application/json" \
  -d '{
    "apiKey": "digi_YOUR_API_KEY_HERE",
    "reason": "Testing revocation"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "API key revoked successfully",
  "data": {
    "id": "clxxxxx...",
    "customerEmail": "test@example.com",
    "status": "REVOKED",
    "revokedAt": "2024-01-01T12:00:00.000Z",
    "revokedReason": "Testing revocation"
  }
}
```

### Step 6: Test Revoked Key (Should Fail)

```bash
curl -X POST http://localhost:3000/api/automation/payroll/webhook \
  -H "x-api-key: digi_YOUR_REVOKED_KEY_HERE" \
  -H "Content-Type: application/json" \
  -d '{"data": [{"employeeId": "E001"}]}'
```

**Expected Response:**
```json
{
  "error": "Authentication failed",
  "message": "Invalid or revoked API key"
}
```

## Test Data Examples

### Example 1: Correct Payroll (No Issues)

```json
{
  "data": [
    {
      "employeeId": "E001",
      "hours": 40,
      "rate": 25,
      "grossPay": 1000,
      "taxWithheld": 200,
      "netPay": 800
    }
  ]
}
```

### Example 2: Incorrect Calculations

```json
{
  "data": [
    {
      "employeeId": "E001",
      "hours": 45,
      "rate": 25,
      "overtimeHours": 5,
      "overtimeRate": 25,
      "grossPay": 1000,
      "taxWithheld": 50,
      "netPay": 950
    }
  ]
}
```

AI should detect:
- Overtime rate should be 1.5x (37.5, not 25)
- Gross pay calculation incorrect
- Tax withholding seems too low

### Example 3: Missing Fields

```json
{
  "data": [
    {
      "employeeId": "E001",
      "hours": 40
    }
  ]
}
```

AI should detect missing required fields.

## Monitoring & Debugging

### Check Database

```bash
# Open Prisma Studio
npx prisma studio
```

Browse tables:
- `ApiKey` - View API keys and usage
- `PayrollCorrection` - View corrections history
- `AutomationLog` - View all events
- `StripeCustomer` - View billing info

### Check Logs

All operations are logged to console with emojis:
- 🔑 API key operations
- 🎯 Webhook requests
- 🤖 AI processing
- ✅ Success
- ❌ Errors

### API Health Checks

```bash
# Check webhook health
curl http://localhost:3000/api/automation/payroll/webhook

# Check key generation info
curl http://localhost:3000/api/automation/keys/generate

# Check Stripe webhook
curl http://localhost:3000/api/stripe/webhook
```

## Troubleshooting

### Issue: "Missing API key"
**Solution:** Include `x-api-key` header in request

### Issue: "Invalid API key"
**Solutions:**
- Check API key format (must start with `digi_`)
- Verify key not revoked
- Ensure key exists in database

### Issue: "Rate limit exceeded"
**Solution:** Wait 24 hours or use a new API key

### Issue: "Encryption failed"
**Solution:** Check `ENCRYPTION_SECRET` is set and 32+ characters

### Issue: "AI correction failed"
**Solutions:**
- Verify `ANTHROPIC_API_KEY` is valid
- Check Anthropic API status
- Ensure proper payroll data format

### Issue: Database connection failed
**Solutions:**
- Verify `DATABASE_URL` is correct
- Run `npx prisma db push`
- Check database is running

## Production Deployment

### Environment Variables

Set in Vercel/hosting platform:
```
DATABASE_URL=postgresql://...
ANTHROPIC_API_KEY=sk-ant-api03-...
ENCRYPTION_SECRET=<32+ character secret>
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### Stripe Webhook Configuration

1. Go to Stripe Dashboard → Webhooks
2. Add endpoint: `https://yourdomain.com/api/stripe/webhook`
3. Select events:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_failed`
   - `invoice.payment_succeeded`
4. Copy webhook signing secret to `STRIPE_WEBHOOK_SECRET`

### Database Migration

```bash
# Production migration
npx prisma db push
```

### Verify Deployment

```bash
# Test health endpoints
curl https://yourdomain.com/api/automation/payroll/webhook
curl https://yourdomain.com/api/stripe/webhook
```

## Security Checklist

- ✅ API keys encrypted with AES-256-GCM
- ✅ SHA-256 hashing for key lookup
- ✅ Rate limiting enforced
- ✅ All actions logged to database
- ✅ Webhook signature verification (Stripe)
- ✅ Environment variables secured
- ✅ No plaintext API keys in database
- ✅ HTTPS required in production

## Performance Targets

- ⚡ Webhook response: <10 seconds
- ⚡ AI correction: 2-5 seconds average
- ⚡ Dashboard load: <1 second
- ⚡ Rate limit check: <100ms
- ⚡ Auto-refresh: Every 5 seconds

## Support

For issues or questions:
1. Check this testing guide
2. Review console logs
3. Check Prisma Studio for database state
4. Verify environment variables
5. Test with curl commands above
