# Tier 1 Payroll Automation System

**AI-Powered Payroll Error Detection and Correction**

Fully automated payroll auditing system using Anthropic Claude AI to detect and correct payroll errors in real-time with zero human intervention.

## 🚀 Features

### Core Capabilities
- ✅ **AI-Powered Correction** - Anthropic Claude 3.5 Sonnet analyzes payroll data
- ✅ **Real-Time Processing** - <10 second response time guaranteed
- ✅ **Zero Human Intervention** - Fully automated end-to-end
- ✅ **Secure API Keys** - AES-256-GCM encryption + SHA-256 hashing
- ✅ **Rate Limiting** - 1000 requests/day per key (configurable)
- ✅ **Complete Audit Trail** - All actions logged to database
- ✅ **Real-Time Dashboard** - Live monitoring with auto-refresh
- ✅ **Stripe Integration** - Automated billing and API key generation

### Security Features
- 🔒 AES-256-GCM encryption for API key storage
- 🔒 SHA-256 hashing for API key lookup
- 🔒 Rate limiting to prevent abuse
- 🔒 Comprehensive audit logging
- 🔒 Stripe webhook signature verification
- 🔒 Environment variable security

### Error Detection
- 📊 Mathematical calculation errors (gross pay, net pay, overtime)
- 📊 Tax withholding validation (15-30% federal income tax)
- 📊 Overtime rate calculations (1.5x regular rate)
- 📊 Negative or zero values detection
- 📊 Unreasonable values identification
- 📊 Missing required fields
- 📊 Data type inconsistencies

## 📋 System Architecture

```
┌─────────────────┐
│  Client System  │
│   (ADP, etc)    │
└────────┬────────┘
         │ POST /api/automation/payroll/webhook
         │ x-api-key: digi_XXXXXXXX
         ▼
┌─────────────────────────┐
│  Webhook Endpoint       │
│  - Validate API key     │
│  - Check rate limit     │
│  - Log request          │
└────────┬────────────────┘
         │
         ▼
┌─────────────────────────┐
│  AI Correction Engine   │
│  - Anthropic Claude API │
│  - Analyze payroll      │
│  - Detect errors        │
│  - Generate corrections │
└────────┬────────────────┘
         │
         ▼
┌─────────────────────────┐
│  Database               │
│  - Store corrections    │
│  - Update usage stats   │
│  - Log all events       │
└────────┬────────────────┘
         │
         ▼
┌─────────────────────────┐
│  Real-Time Dashboard    │
│  - SWR auto-refresh     │
│  - Live statistics      │
│  - Activity logs        │
└─────────────────────────┘
```

## 🎯 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Anthropic API key
- Stripe account (for billing)

### Installation

```bash
# Clone repository
git clone https://github.com/VidDazzleLLC/digicon-ai-systems.git
cd digicon-ai-systems

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Setup database
npx prisma db push
npx prisma generate

# Start development server
npm run dev
```

### Environment Variables

**Required:**
```env
DATABASE_URL=postgresql://user:password@host:5432/database
ANTHROPIC_API_KEY=sk-ant-your_key_here
ENCRYPTION_SECRET=your_32_character_secret_here
```

**Optional (for production):**
```env
STRIPE_SECRET_KEY=sk_live_your_key
STRIPE_WEBHOOK_SECRET=whsec_your_secret
```

## 📡 API Endpoints

### 1. Generate API Key
`POST /api/automation/keys/generate`

Generate a new API key for a customer.

**Request:**
```json
{
  "customerEmail": "cfo@company.com",
  "companyName": "Acme Corp"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "apiKey": "digi_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "customerId": "cust_XXXXXXXXXXXXXXXX",
    "requestsPerDay": 1000
  }
}
```

### 2. Payroll Webhook
`POST /api/automation/payroll/webhook`

Submit payroll data for AI correction.

**Headers:**
```
x-api-key: digi_XXXXXXXXXXXXXXXX
Content-Type: application/json
```

**Request:**
```json
{
  "data": [
    {
      "employeeId": "E001",
      "hours": 45,
      "rate": 25,
      "taxWithheld": 200
    }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "result": {
    "correctionsFound": true,
    "correctionCount": 2,
    "correctedData": [...],
    "issues": [...]
  },
  "meta": {
    "processingTime": 3542,
    "aiTokensUsed": 1234
  }
}
```

### 3. Revoke API Key
`POST /api/automation/keys/revoke`

Revoke an API key.

**Request:**
```json
{
  "apiKey": "digi_XXXXXXXXXXXXXXXX",
  "reason": "Customer cancelled subscription"
}
```

### 4. Dashboard Data
`GET /api/automation/dashboard/data?apiKey=digi_XXXXXXXX`

Get real-time dashboard data.

### 5. Stripe Webhook
`POST /api/stripe/webhook`

Handles Stripe payment events and auto-generates API keys.

## 🎨 Real-Time Dashboard

Access at: `/automation/dashboard`

**Features:**
- 📊 Live usage statistics
- 📊 Correction history
- 📊 Activity logs
- 📊 Performance metrics
- 📊 Auto-refresh every 5 seconds

**Statistics Shown:**
- Requests today / Rate limit
- Total corrections performed
- Issues found and fixed
- Average processing time
- Recent corrections (last 10)
- Activity logs (last 20)
- 24-hour hourly activity chart

## 💳 Stripe Integration

### Payment Flow

1. Customer completes Stripe checkout
2. `checkout.session.completed` webhook fired
3. System automatically generates API key
4. API key sent to customer email
5. Customer can start using the system

### Subscription Management

- ✅ Automatic API key generation on payment
- ✅ API key revocation on cancellation
- ✅ Billing status sync (active, past_due, cancelled)
- ✅ Suspension on payment failure
- ✅ Reactivation on payment success

### Webhook Events Handled

- `checkout.session.completed` - Generate API key
- `customer.subscription.created` - Track subscription
- `customer.subscription.updated` - Update status
- `customer.subscription.deleted` - Revoke API key
- `invoice.payment_failed` - Suspend API key
- `invoice.payment_succeeded` - Reactivate API key

## 🗄️ Database Schema

### ApiKey
- Stores encrypted API keys
- Tracks usage and rate limits
- Links to Stripe subscriptions

### PayrollCorrection
- Stores all correction requests
- Input and output data
- AI model and token usage
- Processing time metrics

### AutomationLog
- Complete audit trail
- All API events logged
- Success/failure tracking
- Performance monitoring

### StripeCustomer
- Stripe customer data
- Subscription status
- Billing information
- API key linking

## 🔒 Security

### API Key Security
1. **Generation** - Secure random 48-character hex string
2. **Hashing** - SHA-256 hash for database lookup
3. **Encryption** - AES-256-GCM for backup storage
4. **Storage** - Never store plaintext keys
5. **Display** - Only shown once at generation

### Encryption
- Algorithm: AES-256-GCM
- Key derivation: SHA-256 with random salt
- Authentication tags for integrity
- Random IVs for each encryption

### Rate Limiting
- 1000 requests/day per API key (configurable)
- 24-hour rolling window
- Automatic counter reset
- 429 status code on limit exceeded

## 📈 Performance

### Targets
- ⚡ Webhook response: <10 seconds
- ⚡ AI correction: 2-5 seconds average
- ⚡ Dashboard load: <1 second
- ⚡ Database queries: <100ms

### Optimization
- Prisma Client for efficient queries
- SWR for client-side caching
- Anthropic Claude for fast AI processing
- PostgreSQL indexes on key fields

## 🧪 Testing

See [TESTING.md](./TESTING.md) for comprehensive testing guide.

**Quick Test:**
```bash
# 1. Generate API key
curl -X POST http://localhost:3000/api/automation/keys/generate \
  -H "Content-Type: application/json" \
  -d '{"customerEmail": "test@example.com", "companyName": "Test Co"}'

# 2. Test webhook
curl -X POST http://localhost:3000/api/automation/payroll/webhook \
  -H "x-api-key: digi_YOUR_KEY" \
  -H "Content-Type: application/json" \
  -d '{"data": [{"employeeId": "E001", "hours": 45, "rate": 25}]}'

# 3. View dashboard
open http://localhost:3000/automation/dashboard
```

## 🚀 Deployment

### Vercel Deployment

1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

### Environment Variables (Production)

```env
DATABASE_URL=postgresql://...
ANTHROPIC_API_KEY=sk-ant-api03-...
ENCRYPTION_SECRET=<secure-32+-char-secret>
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### Stripe Webhook Setup

1. Go to Stripe Dashboard → Webhooks
2. Add endpoint: `https://yourdomain.com/api/stripe/webhook`
3. Select all subscription and payment events
4. Copy webhook signing secret to environment variables

## 📊 Monitoring

### Logs
All operations logged with emojis for easy scanning:
- 🔑 API key operations
- 🎯 Webhook requests
- 🤖 AI processing
- ✅ Success events
- ❌ Error events

### Database
Use Prisma Studio to browse data:
```bash
npx prisma studio
```

### Dashboard
Real-time monitoring at `/automation/dashboard`

## 🛠️ Troubleshooting

### Common Issues

**"Missing API key"**
- Include `x-api-key` header in requests

**"Invalid API key"**
- Check key format (starts with `digi_`)
- Verify key not revoked
- Ensure key exists in database

**"Rate limit exceeded"**
- Wait 24 hours or use new API key
- Check `requestsPerDay` setting

**"AI correction failed"**
- Verify `ANTHROPIC_API_KEY` is valid
- Check Anthropic API status
- Ensure proper data format

## 📝 API Key Format

Format: `digi_` + 48 hex characters

Example: `digi_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4`

## 🎯 Success Criteria

- [x] API key generation after Stripe payment
- [x] Webhook receives + validates + rate limits
- [x] Anthropic Claude analyzes and corrects
- [x] All corrections logged to database
- [x] Real-time dashboard functional
- [x] Stripe recurring billing automated
- [x] Zero human intervention required

## 📄 License

Proprietary - Digicon AI Systems™

## 🤝 Support

For issues or questions:
- Review [TESTING.md](./TESTING.md)
- Check console logs
- Verify environment variables
- Test with example curl commands

---

**Built with:**
- Next.js 14
- Anthropic Claude AI
- Prisma ORM
- PostgreSQL
- Stripe
- SWR
- TypeScript
