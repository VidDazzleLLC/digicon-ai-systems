# Railway Deployment Guide

## Critical Environment Variables

This document outlines all required environment variables for deploying the Digicon AI Systems application on Railway.

### ⚠️ REQUIRED - Core Application

```bash
# Database (PostgreSQL)
DATABASE_URL="postgresql://user:password@host:port/database"

# Application URLs
NEXT_PUBLIC_APP_URL="https://your-app.railway.app"
NEXT_PUBLIC_BASE_URL="https://your-app.railway.app"

# Node Environment
NODE_ENV="production"
```

### ⚠️ REQUIRED - Stripe Payment Processing

```bash
# Stripe API Keys
STRIPE_SECRET_KEY="sk_live_..."
STRIPE_PUBLISHABLE_KEY="pk_live_..."

# Stripe Webhook Secret (get from Stripe Dashboard)
STRIPE_WEBHOOK_SECRET="whsec_..."
```

### ⚠️ REQUIRED - Email Delivery

**Option A: SMTP (Recommended for Gmail, SendGrid, etc.)**
```bash
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
EMAIL_FROM="noreply@digicon.app"
```

**Option B: Resend (Modern Email API)**
```bash
RESEND_API_KEY="re_..."
EMAIL_FROM="noreply@digicon.app"
```

**⚠️ WARNING:** If NEITHER SMTP nor Resend is configured, emails will NOT be sent to customers!

### ⚠️ REQUIRED - AI Processing

At least ONE of these must be configured:

```bash
# Anthropic Claude (Recommended)
ANTHROPIC_API_KEY="sk-ant-..."

# OR OpenAI GPT
OPENAI_API_KEY="sk-..."

# OR Google Gemini
GOOGLE_AI_API_KEY="..."
```

### Optional - Additional Integrations

```bash
# Twilio (for SMS/Voice)
TWILIO_ACCOUNT_SID="..."
TWILIO_AUTH_TOKEN="..."
TWILIO_PHONE_NUMBER="..."

# Supabase (if using Supabase for database)
NEXT_PUBLIC_SUPABASE_URL="..."
NEXT_PUBLIC_SUPABASE_ANON_KEY="..."

# Together AI (for advanced monetization features)
TOGETHER_API_KEY="..."

# Aitable Integration
AITABLE_API_KEY="..."
AITABLE_SPACE_ID="..."

# MissionX Integration
MISSIONX_API_KEY="..."
MISSIONX_WORKSPACE_ID="..."
```

---

## Railway-Specific Configuration

### 1. Database Setup

Railway provides PostgreSQL as a service:

1. Add PostgreSQL to your Railway project
2. Railway automatically sets `DATABASE_URL`
3. Run migrations:
   ```bash
   npx prisma migrate deploy
   ```

### 2. Webhook Configuration

**Important:** Railway provides a unique URL for your app. You MUST configure Stripe webhooks:

1. Get your Railway app URL: `https://your-app.railway.app`
2. Go to Stripe Dashboard → Developers → Webhooks
3. Add endpoint: `https://your-app.railway.app/api/stripe/webhook`
4. Select events:
   - `checkout.session.completed`
   - `checkout.session.async_payment_succeeded`
   - `customer.subscription.*`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Copy the webhook signing secret to `STRIPE_WEBHOOK_SECRET`

### 3. Email Provider Setup

**Option A: Gmail SMTP**

1. Enable 2FA on your Gmail account
2. Generate an "App Password": https://myaccount.google.com/apppasswords
3. Use these settings:
   ```bash
   SMTP_HOST="smtp.gmail.com"
   SMTP_PORT="587"
   SMTP_USER="your-email@gmail.com"
   SMTP_PASS="your-16-char-app-password"
   EMAIL_FROM="your-email@gmail.com"
   ```

**Option B: Resend (Easiest)**

1. Sign up at https://resend.com (free tier: 100 emails/day)
2. Get API key from dashboard
3. Verify your domain (or use Resend's test domain)
4. Set:
   ```bash
   RESEND_API_KEY="re_..."
   EMAIL_FROM="onboarding@resend.dev" # or your verified domain
   ```

### 4. Timeout Configuration

Railway has a **10-second default timeout** for HTTP requests. Our app is configured to handle longer processing times:

**What we've done:**
- Updated `next.config.js` with Railway-optimized settings
- AI processing is handled asynchronously in webhooks
- Reports stored in database (not filesystem)
- Email delivery has retry logic

**Railway Settings to Configure:**

1. Go to Railway project settings
2. Under "Deploy", set:
   - **Build Command:** `npm run build`
   - **Start Command:** `npm start`
3. Under "Variables", add all environment variables above
4. **Healthcheck Timeout:** 300 seconds (5 minutes)
5. **Restart Policy:** On failure

---

## Deployment Checklist

### Pre-Deployment

- [ ] All required environment variables configured in Railway
- [ ] Database migrations run: `npx prisma migrate deploy`
- [ ] Stripe webhook endpoint configured and tested
- [ ] Email provider configured (SMTP or Resend)
- [ ] AI API key configured (Anthropic/OpenAI/Gemini)
- [ ] Test payment in Stripe test mode

### Post-Deployment

- [ ] Test file upload flow
- [ ] Test Stripe checkout (use test card: `4242 4242 4242 4242`)
- [ ] Verify webhook receives payment event (check Railway logs)
- [ ] Confirm report generation (check database or Railway logs)
- [ ] Verify email delivery to test address
- [ ] Monitor Railway logs for errors

### Monitoring

**Check Railway Logs:**
```bash
# Look for these success indicators:
✅ [UPLOAD] Created audit request
✅ Marked audit request as paid
🔄 Generating report from CSV data...
✅ Report generated and stored in database
✅ [EMAIL] Sent via SMTP/Resend to customer@example.com
✅ Audit report delivered to customer@example.com

# Watch for errors:
❌ [EMAIL] No email provider configured
❌ Report file path not found
❌ Error in audit payment workflow
```

---

## Troubleshooting

### Issue: "Upload failing"
**Cause:** Broken onClick handler
**Status:** ✅ FIXED in this deployment

### Issue: "Payment succeeds but no report sent"
**Cause:** Missing report generation step
**Status:** ✅ FIXED - Reports now generated in webhook after payment

### Issue: "Email not being sent"
**Check:**
1. Is SMTP or Resend configured?
2. Check Railway logs for email errors
3. Verify SMTP credentials are correct
4. For Gmail: Did you use an App Password (not regular password)?

### Issue: "Webhook timeouts"
**Cause:** AI processing takes too long
**Status:** ✅ FIXED - Optimized for Railway's timeout limits

### Issue: "Report generation fails"
**Check:**
1. Is `ANTHROPIC_API_KEY` set?
2. Check Railway logs for AI API errors
3. Verify CSV data was stored during upload
4. Check database for `processingError` field

---

## Database Schema Migration

After deploying, run this migration to update the schema:

```bash
# In your Railway project shell or locally with DATABASE_URL set:
npx prisma migrate deploy

# If you need to create a new migration from schema changes:
npx prisma migrate dev --name railway_fixes
```

---

## Testing the Complete Flow

### 1. Upload Test

```bash
# Visit your portal page
https://your-app.railway.app/portal/[request-id]

# Upload a CSV file
# Should see: "File uploaded successfully!"
```

### 2. Payment Test

Use Stripe test cards:
- **Success:** 4242 4242 4242 4242 (any future date, any CVC)
- **Decline:** 4000 0000 0000 0002

### 3. Webhook Test

After payment, check Railway logs:
```bash
railway logs
```

Should see the complete flow:
1. Checkout completed
2. Payment marked
3. Report generation started
4. AI analysis completed
5. Report stored
6. Email sent
7. Status marked as completed

### 4. Database Verification

```sql
-- Check request status
SELECT id, status, "reportDelivered", "processingError"
FROM "AuditRequest"
WHERE "customerEmail" = 'test@example.com'
ORDER BY "createdAt" DESC
LIMIT 5;

-- Check if report data is stored
SELECT id, "reportId", "reportData" IS NOT NULL as has_report
FROM "AuditRequest"
WHERE "paidAt" IS NOT NULL;
```

---

## Performance Optimization

### Railway-Specific Tips

1. **Database Connection Pooling:** Already configured in Prisma
2. **Cold Starts:** First request may be slow (Railway warm-up)
3. **Memory:** Railway auto-scales, but monitor usage
4. **Logs:** Use Railway's log filtering: `railway logs --filter "ERROR"`

### Cost Optimization

- **Hobby Plan:** ~$5/month for hobby projects
- **Pro Plan:** $20/month for production with better performance
- **Database:** Consider separate database service for production

---

## Support & Resources

- **Railway Docs:** https://docs.railway.app
- **Stripe Webhooks:** https://stripe.com/docs/webhooks
- **Prisma Migrations:** https://www.prisma.io/docs/concepts/components/prisma-migrate
- **Resend Docs:** https://resend.com/docs

---

## Emergency Recovery

If something goes wrong after deployment:

### Rollback
```bash
# In Railway dashboard, click "Deployments" and rollback to previous version
```

### Manual Report Delivery

If a customer paid but didn't receive report:

```sql
-- Find the audit request
SELECT * FROM "AuditRequest" WHERE "customerEmail" = 'customer@example.com';

-- Check if report was generated
-- If reportData exists, you can manually send it
```

Then use the admin panel or manually trigger email delivery.

---

**Last Updated:** 2025-11-23
**Author:** Claude Code
**Version:** 1.0 - Railway Migration Fixes
