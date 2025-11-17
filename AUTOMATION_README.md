# Tier 1 Automation System

## Overview

AI-powered automation system for 6 audit systems using Anthropic Claude 3.5 Sonnet. Automatically detects and corrects errors in real-time via webhook APIs.

## Supported Systems

1. **Payroll** - Overtime, taxes, duplicate payments
2. **HRIS** - Employee data, benefits, PTO tracking
3. **ERP** - Inventory, procurement, workflow
4. **CRM** - Leads, pipeline, follow-ups
5. **Compliance** - Policies, regulations, risks
6. **AI Infrastructure** - Costs, performance, APIs

## Architecture

### Core Components

- **Anthropic Claude 3.5 Sonnet** - AI correction engine
- **PostgreSQL + Prisma** - Database and ORM
- **Next.js 14 App Router** - API and UI framework
- **Stripe** - Subscription billing
- **bcryptjs** - API key hashing

### Security Features

- ✅ AES-256 API key hashing with bcrypt
- ✅ Rate limiting (1000 calls/day per key)
- ✅ Secure webhook authentication
- ✅ Audit logging for all activities
- ✅ Single-use API key display

## Quick Start

### 1. Environment Setup

```bash
# Copy environment template
cp .env.example .env.local

# Required variables
ANTHROPIC_API_KEY=your_anthropic_key_here
DATABASE_URL=postgresql://user:password@localhost:5432/digicon
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

### 2. Database Setup

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev
```

### 3. Start Development Server

```bash
npm run dev
# Visit http://localhost:3000
```

## API Documentation

### Generate API Key

**Endpoint:** `POST /api/automation/keys/generate`

```json
{
  "systemType": "PAYROLL",
  "companyId": "company-123",
  "companyName": "Acme Corp",
  "companyEmail": "admin@acme.com",
  "name": "Production API Key",
  "dailyLimit": 5000
}
```

**Response:**
```json
{
  "success": true,
  "apiKey": "sk_live_abc123...",
  "keyId": "key_xyz",
  "keyPrefix": "sk_live_abc1",
  "systemType": "PAYROLL",
  "warning": "Save this API key securely. It will not be shown again."
}
```

### Send Data for Correction

**Endpoint:** `POST /api/automation/{system}/webhook`

**Systems:** `payroll`, `hris`, `erp`, `crm`, `compliance`, `ai-infrastructure`

**Headers:**
```
Authorization: Bearer sk_live_your_api_key_here
Content-Type: application/json
```

**Example (Payroll):**
```json
{
  "recordId": "PAY-2024-001",
  "data": {
    "employeeId": "EMP-123",
    "hours": 45,
    "hourlyRate": 25.00,
    "grossPay": 1125.00,
    "overtimeHours": 5,
    "overtimePay": 0
  }
}
```

**Response:**
```json
{
  "success": true,
  "correctionId": "corr_xyz",
  "issuesFound": 1,
  "severity": "medium",
  "confidence": 0.95,
  "estimatedSavings": 187.50,
  "correction": {
    "id": "corr_xyz",
    "status": "PENDING",
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

### View Dashboard

**Endpoint:** `GET /api/automation/{system}/dashboard/data?companyId=company-123`

**Response:**
```json
{
  "corrections": [...],
  "stats": {
    "total": 150,
    "pending": 12,
    "approved": 128,
    "rejected": 10,
    "totalSavings": 45000.00
  },
  "apiKeys": [...],
  "recentLogs": [...]
}
```

### Revoke API Key

**Endpoint:** `POST /api/automation/keys/revoke`

```json
{
  "keyId": "key_xyz",
  "companyId": "company-123"
}
```

## Dashboard UI

Visit the dashboard for your system:

- Payroll: `/automation/payroll/dashboard`
- HRIS: `/automation/hris/dashboard`
- ERP: `/automation/erp/dashboard`
- CRM: `/automation/crm/dashboard`
- Compliance: `/automation/compliance/dashboard`
- AI Infrastructure: `/automation/ai-infrastructure/dashboard`

### Dashboard Features

- 📊 Real-time correction statistics
- 🔑 API key management and usage tracking
- 📝 Detailed correction logs
- 💰 Estimated savings calculator
- 📈 Confidence scores and severity levels
- ⚡ Recent activity feed

## AI Correction Examples

### Payroll Example

**Input:**
```json
{
  "employeeId": "EMP-123",
  "hours": 45,
  "hourlyRate": 25.00,
  "grossPay": 1125.00,
  "overtimeHours": 5,
  "overtimePay": 0
}
```

**AI Detection:**
- ❌ **Issue:** Overtime not paid (5 hours @ 1.5x rate)
- ✅ **Correction:** Add $187.50 overtime pay
- 📊 **Confidence:** 98%
- 💰 **Savings:** $187.50 (employee retention/compliance)

### HRIS Example

**Input:**
```json
{
  "employeeId": "EMP-456",
  "firstName": "John",
  "lastName": "Doe",
  "benefits": {
    "healthInsurance": true,
    "dentalInsurance": false,
    "visionInsurance": true
  },
  "ptoBalance": -5
}
```

**AI Detection:**
- ❌ **Issue:** Negative PTO balance (data error)
- ✅ **Correction:** Reset to 0 and flag for review
- 📊 **Confidence:** 92%

## Database Schema

### Key Models

#### ApiKey
- Hashed API keys with bcrypt
- System type assignment
- Rate limiting (daily quota)
- Usage tracking

#### AutomationCorrection
- Original and corrected data
- AI reasoning and confidence
- Status workflow (PENDING → APPROVED → APPLIED)
- Estimated savings calculation

#### AutomationLog
- Audit trail for all activities
- Webhook calls, key generation, etc.
- Success/failure tracking

#### Subscription (Stripe)
- Customer and subscription IDs
- System type assignment
- Billing period tracking

## Stripe Integration

### Subscription Flow

1. Customer subscribes via Stripe Checkout
2. Webhook receives `customer.subscription.created`
3. System creates subscription record
4. Customer receives API key generation link
5. Customer generates API key for their system
6. Webhook authentication begins working

### Webhook Events

- `customer.subscription.created` - New subscription
- `customer.subscription.updated` - Plan change
- `customer.subscription.deleted` - Cancellation (revokes API keys)
- `checkout.session.completed` - One-time purchases

## Rate Limiting

- **Default:** 1,000 API calls per day per key
- **Customizable:** Set `dailyLimit` when generating key
- **Reset:** Daily at midnight UTC
- **Overage:** Returns 429 status code

## Error Handling

### Common Errors

| Code | Error | Solution |
|------|-------|----------|
| 401 | Invalid API key | Check Authorization header |
| 400 | Missing data | Include `recordId` and `data` |
| 429 | Rate limit exceeded | Wait for daily reset or upgrade plan |
| 500 | AI analysis failed | Retry request |

## Development

### Project Structure

```
├── app/
│   ├── api/automation/
│   │   ├── {system}/webhook/          # System-specific webhooks
│   │   ├── {system}/dashboard/data/   # Dashboard APIs
│   │   └── keys/                      # API key management
│   ├── automation/{system}/dashboard/ # Dashboard pages
│   └── components/automation/         # Shared components
├── lib/automation/
│   ├── base-corrector.ts              # Anthropic Claude integration
│   ├── webhook-handler.ts             # Shared webhook logic
│   ├── dashboard-handler.ts           # Shared dashboard logic
│   ├── api-key-validator.ts           # Authentication
│   ├── encryption.ts                  # Key generation/hashing
│   └── prisma.ts                      # Database client
└── prisma/
    └── schema.prisma                   # Database schema
```

### Adding a New System Type

1. Add to SystemType enum in `prisma/schema.prisma`
2. Add prompt in `lib/automation/base-corrector.ts`
3. Create webhook route: `app/api/automation/{system}/webhook/route.ts`
4. Create dashboard API: `app/api/automation/{system}/dashboard/data/route.ts`
5. Create dashboard page: `app/automation/{system}/dashboard/page.tsx`
6. Run `npx prisma generate` to update types

## Testing

### Manual Testing

```bash
# Generate API key
curl -X POST http://localhost:3000/api/automation/keys/generate \
  -H "Content-Type: application/json" \
  -d '{
    "systemType": "PAYROLL",
    "companyId": "test-123",
    "companyName": "Test Co",
    "companyEmail": "test@example.com"
  }'

# Test webhook
curl -X POST http://localhost:3000/api/automation/payroll/webhook \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "recordId": "TEST-001",
    "data": {"employeeId": "EMP-123", "hours": 40, "hourlyRate": 25}
  }'
```

## Production Deployment

### Checklist

- [ ] Set all environment variables
- [ ] Run database migrations
- [ ] Configure Stripe webhooks
- [ ] Set up monitoring/logging
- [ ] Test all 6 system webhooks
- [ ] Verify dashboard access
- [ ] Configure rate limits
- [ ] Set up backup strategy

### Environment Variables (Production)

```bash
NODE_ENV=production
ANTHROPIC_API_KEY=sk-ant-...
DATABASE_URL=postgresql://...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

## Support

For issues or questions:
- 📧 Email: support@digicon.ai
- 📚 Docs: https://docs.digicon.ai
- 🐛 Issues: https://github.com/VidDazzleLLC/digicon-ai-systems/issues

## License

Proprietary - Digicon AI Systems™
