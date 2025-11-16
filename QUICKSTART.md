# 🚀 Quick Start Guide - Payroll Automation System

## Instant Setup (5 Minutes)

### 1. Environment Setup

```bash
# Copy and edit environment file
cp .env.example .env.local

# Add these three critical variables:
DATABASE_URL=postgresql://user:password@host:5432/database
ANTHROPIC_API_KEY=sk-ant-your_key_here
ENCRYPTION_SECRET=your_32_character_secret_here_minimum
```

### 2. Database Setup

```bash
# Push schema to database
npx prisma db push

# Generate Prisma client
npx prisma generate
```

### 3. Start Server

```bash
# Install dependencies (if not already)
npm install

# Start development server
npm run dev
```

Server runs at: `http://localhost:3000` ✅

---

## Test in 60 Seconds

### Step 1: Generate API Key (15s)

```bash
curl -X POST http://localhost:3000/api/automation/keys/generate \
  -H "Content-Type: application/json" \
  -d '{
    "customerEmail": "test@example.com",
    "companyName": "Test Company"
  }'
```

**Copy the `apiKey` from response!** Format: `digi_XXXXXXXXXXXXXXXX...`

### Step 2: Test AI Correction (30s)

```bash
curl -X POST http://localhost:3000/api/automation/payroll/webhook \
  -H "x-api-key: YOUR_API_KEY_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "data": [
      {
        "employeeId": "E001",
        "employeeName": "John Doe",
        "hours": 45,
        "rate": 25,
        "overtimeHours": 5,
        "overtimeRate": 25,
        "grossPay": 1000,
        "taxWithheld": 50,
        "netPay": 950
      }
    ]
  }'
```

**AI will detect errors:** Wrong overtime rate, incorrect calculations, low tax withholding.

### Step 3: View Dashboard (15s)

1. Open: `http://localhost:3000/automation/dashboard`
2. Enter your API key
3. See real-time stats! 📊

---

## What It Does

### 🤖 AI-Powered Payroll Auditing

- **Detects:** Math errors, tax issues, overtime miscalculations
- **Speed:** <10 seconds response time
- **Model:** Anthropic Claude 3.5 Sonnet
- **Accuracy:** Catches critical payroll errors automatically

### 🔒 Enterprise Security

- **Encryption:** AES-256-GCM for all API keys
- **Hashing:** SHA-256 for secure lookups
- **Rate Limiting:** 1000 requests/day per key
- **Audit Trail:** Every action logged to database

### 💳 Automated Billing

- **Stripe Integration:** Automatic API key generation
- **Lifecycle Management:** Auto-revoke on cancellation
- **Status Sync:** Real-time billing status updates

### 📊 Real-Time Dashboard

- **Live Stats:** Usage, corrections, issues found
- **Auto-Refresh:** Every 5 seconds with SWR
- **Activity Logs:** Complete request history

---

## File Structure

```
lib/
├── encryption.ts                          # AES-256-GCM utilities
└── automation/
    ├── api-keys.ts                        # Key management
    └── payroll-corrector.ts               # AI correction engine

app/api/automation/
├── payroll/webhook/route.ts               # Main webhook
├── keys/
│   ├── generate/route.ts                  # Generate keys
│   └── revoke/route.ts                    # Revoke keys
└── dashboard/data/route.ts                # Dashboard API

app/automation/
└── dashboard/page.tsx                     # React dashboard

app/api/stripe/
└── webhook/route.ts                       # Stripe billing

prisma/
└── schema.prisma                          # Database schema
```

---

## Key Commands

```bash
# Database
npx prisma db push          # Push schema changes
npx prisma generate         # Generate client
npx prisma studio          # Browse database

# Development
npm run dev                # Start dev server
npm run build              # Build for production

# Testing
curl http://localhost:3000/api/automation/payroll/webhook  # Health check
```

---

## Environment Variables

**Required (3):**
```env
DATABASE_URL=postgresql://...       # PostgreSQL connection
ANTHROPIC_API_KEY=sk-ant-...        # Claude API key
ENCRYPTION_SECRET=<32+ chars>       # Encryption key
```

**Optional (Billing):**
```env
STRIPE_SECRET_KEY=sk_...            # Stripe key
STRIPE_WEBHOOK_SECRET=whsec_...     # Webhook secret
```

---

## API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/automation/keys/generate` | POST | Generate API key |
| `/api/automation/keys/revoke` | POST | Revoke API key |
| `/api/automation/payroll/webhook` | POST | Process payroll |
| `/api/automation/dashboard/data` | GET | Dashboard data |
| `/api/stripe/webhook` | POST | Stripe events |

---

## Common Issues

**"Missing API key"**
→ Add `x-api-key` header to request

**"Invalid API key"**
→ Check key format: `digi_XXXXXXXX...`

**"Rate limit exceeded"**
→ Wait 24h or generate new key

**"Encryption failed"**
→ Set `ENCRYPTION_SECRET` (32+ chars)

**"AI correction failed"**
→ Verify `ANTHROPIC_API_KEY` is valid

---

## Next Steps

1. ✅ **Read:** [PAYROLL_AUTOMATION.md](./PAYROLL_AUTOMATION.md) - Full docs
2. ✅ **Test:** [TESTING.md](./TESTING.md) - Complete testing guide
3. ✅ **Deploy:** Set env vars → Deploy to Vercel/hosting
4. ✅ **Configure:** Setup Stripe webhook endpoint
5. ✅ **Monitor:** Use dashboard at `/automation/dashboard`

---

## Support

**Documentation:**
- Full docs: `PAYROLL_AUTOMATION.md`
- Testing: `TESTING.md`
- This guide: `QUICKSTART.md`

**Troubleshooting:**
- Check console logs
- Use Prisma Studio
- Review environment variables
- Test with curl commands

---

## Features Checklist

- [x] AI-powered payroll correction (Anthropic Claude)
- [x] API key management (generation, validation, revocation)
- [x] Secure encryption (AES-256-GCM + SHA-256)
- [x] Rate limiting (1000/day configurable)
- [x] Real-time dashboard (auto-refresh)
- [x] Stripe billing integration
- [x] Complete audit trail
- [x] <10 second response time
- [x] Zero human intervention
- [x] Production-ready

---

**Ready to go! 🚀**

For detailed information, see:
- 📚 [PAYROLL_AUTOMATION.md](./PAYROLL_AUTOMATION.md)
- 🧪 [TESTING.md](./TESTING.md)
