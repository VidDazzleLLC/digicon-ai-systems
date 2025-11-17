# Launch Day Runbook - November 17, 2025

**Launch Time: 6:00 AM CST**

This runbook provides a minute-by-minute guide for the production launch. Follow each step in order and check off as completed.

---

## Timeline Overview

| Time | Phase | Duration |
|------|-------|----------|
| 5:00 AM | Pre-Launch Preparation | 30 min |
| 5:30 AM | Add API Keys | 30 min |
| 6:00 AM | Deploy to Production | 15 min |
| 6:15 AM | Post-Launch Monitoring | 45 min |
| 7:00 AM | Steady State | Ongoing |

---

## 5:00 AM - Pre-Launch Preparation (30 minutes)

### 5:00 - Verify Code Readiness

#### Check All PRs Merged
```bash
# List all PRs
gh pr list --state all

# Verify these PRs are merged:
# - PR #13: Core audit systems
# - PR #15: LLM integration
# - PR #16: Payment processing
# - PR #18: Security enhancements
# - PR #20: Conference room feature
# - PR #21: Documentation updates
```

**Checklist:**
- [ ] All critical PRs merged to main
- [ ] No open PRs blocking deployment
- [ ] Main branch is stable

#### Verify Copilot Builds Completed

```bash
# Check latest GitHub Actions runs
gh run list --limit 5

# Verify latest build passed
gh run view [run-id]
```

**Checklist:**
- [ ] Latest build on main passed
- [ ] No failing tests
- [ ] No linting errors
- [ ] TypeScript compilation successful

### 5:10 - Local Health Checks

```bash
# Clone latest main branch
git clone https://github.com/VidDazzleLLC/digicon-ai-systems.git
cd digicon-ai-systems

# Install dependencies
npm install

# Build locally
npm run build
```

**Checklist:**
- [ ] Dependencies installed without errors
- [ ] Build completed successfully
- [ ] No webpack errors
- [ ] All pages compiled

### 5:15 - Database Preparation

```bash
# If using Supabase, verify project is ready
# Check: https://app.supabase.com/projects

# If using standalone PostgreSQL:
# Verify database is running
psql $DATABASE_URL -c "SELECT version();"
```

**Checklist:**
- [ ] Database is accessible
- [ ] Connection string is correct
- [ ] Database has adequate resources

### 5:20 - Review Deployment Plan

**Checklist:**
- [ ] Reviewed [DEPLOYMENT.md](./DEPLOYMENT.md)
- [ ] Reviewed [API_KEYS_SETUP.md](./API_KEYS_SETUP.md)
- [ ] Team members notified and available
- [ ] Rollback plan understood
- [ ] Emergency contacts ready

### 5:25 - Prepare Monitoring Tools

```bash
# Open monitoring dashboards:
# - Vercel Dashboard: https://vercel.com/dashboard
# - Stripe Dashboard: https://dashboard.stripe.com/
# - Sentry (if configured): https://sentry.io/

# Open terminal windows for:
# - Deployment logs
# - Health checks
# - Error monitoring
```

**Checklist:**
- [ ] Monitoring dashboards open
- [ ] Log viewers ready
- [ ] Alert channels configured

---

## 5:30 AM - Add API Keys (30 minutes)

Follow the complete guide: [API_KEYS_SETUP.md](./API_KEYS_SETUP.md)

### 5:30 - Anthropic API Key

**Checklist:**
- [ ] Logged into https://console.anthropic.com/
- [ ] API key generated
- [ ] Key added to `.env.production`
- [ ] Verification test passed

### 5:35 - Gemini API Key

**Checklist:**
- [ ] Logged into https://ai.google.dev/
- [ ] API enabled for project
- [ ] API key generated
- [ ] Key added to `.env.production`
- [ ] Verification test passed

### 5:40 - Together.ai API Key

**Checklist:**
- [ ] Logged into https://api.together.xyz/
- [ ] API key generated
- [ ] Key added to `.env.production`
- [ ] Verification test passed

### 5:45 - Stripe Configuration

**Checklist:**
- [ ] Logged into https://dashboard.stripe.com/
- [ ] Switched to LIVE mode
- [ ] Secret key copied
- [ ] Publishable key copied
- [ ] Webhook endpoint created at `/api/stripe/webhook`
- [ ] Webhook secret copied
- [ ] All keys added to `.env.production`
- [ ] Webhook test passed

### 5:50 - Generate Encryption Keys

```bash
# Generate all required secrets
openssl rand -hex 32  # ENCRYPTION_SECRET
openssl rand -hex 32  # JWT_SECRET
openssl rand -hex 32  # SESSION_SECRET
openssl rand -hex 32  # WEBHOOK_SECRET
```

**Checklist:**
- [ ] ENCRYPTION_SECRET generated (64 chars)
- [ ] JWT_SECRET generated (64 chars)
- [ ] SESSION_SECRET generated (64 chars)
- [ ] WEBHOOK_SECRET generated (64 chars)
- [ ] All secrets added to `.env.production`
- [ ] Secrets backed up securely

### 5:55 - Verify All Keys

```bash
# Load environment variables
export $(cat .env.production | grep -v '^#' | xargs)

# Run verification
npm run verify-keys
```

**Expected Output:**
```
✅ Anthropic API Key: Valid format
✅ Gemini API Key: Valid format
✅ Together.ai API Key: Valid format
✅ Stripe Secret Key: Valid format
✅ Encryption Secret: Valid length
✅ JWT Secret: Valid length
```

**Checklist:**
- [ ] All keys show ✅
- [ ] No ❌ errors
- [ ] Verification script completed successfully

---

## 6:00 AM - LAUNCH (15 minutes)

### 6:00 - Upload Environment Variables to Vercel

```bash
# Method 1: Via CLI (recommended for speed)
vercel env add ANTHROPIC_API_KEY production
vercel env add GEMINI_FILE_SEARCH_API_KEY production
vercel env add TOGETHER_AI_API_KEY production
vercel env add STRIPE_SECRET_KEY production
vercel env add STRIPE_PUBLISHABLE_KEY production
vercel env add STRIPE_WEBHOOK_SECRET production
vercel env add ENCRYPTION_SECRET production
vercel env add JWT_SECRET production
vercel env add SESSION_SECRET production
vercel env add WEBHOOK_SECRET production
vercel env add NODE_ENV production
vercel env add DATABASE_URL production

# Method 2: Via Dashboard
# Go to: https://vercel.com/dashboard
# Select project > Settings > Environment Variables
# Add each variable manually
```

**Checklist:**
- [ ] All API keys uploaded
- [ ] All secrets uploaded
- [ ] Environment set to "Production"
- [ ] Variables visible in Vercel dashboard

### 6:05 - Deploy to Production

```bash
# Deploy to production
vercel --prod

# Or trigger deployment via dashboard
# Push to main branch will auto-deploy if configured
```

**Monitor deployment output:**
- Watch for build errors
- Verify all pages compile
- Check for missing dependencies
- Note deployment URL

**Checklist:**
- [ ] Deployment initiated
- [ ] Build phase completed
- [ ] No build errors
- [ ] Deployment URL generated
- [ ] DNS pointed to new deployment

### 6:10 - Run Production Health Checks

```bash
# Wait for deployment to complete (usually 2-3 minutes)

# Check health endpoint
curl https://digicon-ai-systems.vercel.app/api/health | jq

# Expected response:
# {
#   "status": "ready",
#   "timestamp": "2025-11-17T12:00:00.000Z",
#   "database": "connected",
#   "llm_providers": {
#     "anthropic": "ready",
#     "gemini": "ready",
#     "together": "ready"
#   },
#   "audit_systems": {
#     "payroll": "operational",
#     "compliance": "operational",
#     "hris": "operational",
#     "crm": "operational",
#     "erp": "operational",
#     "ai_infrastructure": "operational"
#   }
# }
```

**Checklist:**
- [ ] Health endpoint returns 200 OK
- [ ] Database shows "connected"
- [ ] All LLM providers show "ready"
- [ ] All 6 audit systems show "operational"

### 6:12 - Smoke Tests

#### Test 1: Pricing Page
```bash
# Visit pricing page
curl -I https://digicon-ai-systems.vercel.app/pricing

# Expected: 200 OK
```

**Checklist:**
- [ ] Pricing page loads (200 OK)
- [ ] All pricing tiers display
- [ ] Stripe integration working

#### Test 2: Conference Room Creation
```bash
# Test conference room endpoint
curl -X POST https://digicon-ai-systems.vercel.app/api/conference/create \
  -H "Content-Type: application/json" \
  -d '{
    "companyName": "Test Company",
    "cfoEmail": "test@example.com",
    "companyEmail": "company@example.com"
  }'

# Expected: 201 Created with access code
```

**Checklist:**
- [ ] Conference room created successfully
- [ ] Access code generated
- [ ] Email notification would be sent (in production)

#### Test 3: Sample Audit
```bash
# Trigger a test audit (if endpoint exists)
curl -X POST https://digicon-ai-systems.vercel.app/api/audits/test \
  -H "Content-Type: application/json" \
  -d '{
    "audit_type": "payroll",
    "company_id": "test-001"
  }'

# Expected: 200 OK with audit_id
```

**Checklist:**
- [ ] Audit triggered successfully
- [ ] Audit ID returned
- [ ] No errors in response

---

## 6:15 AM - Post-Launch Monitoring (45 minutes)

### 6:15 - Monitor Error Rates

```bash
# Watch Vercel logs in real-time
vercel logs --follow

# Filter for errors
vercel logs --follow | grep -i error

# In separate terminal, watch for 500 errors
watch -n 5 'curl -s -o /dev/null -w "%{http_code}\n" https://digicon-ai-systems.vercel.app/api/health'
```

**Target Metrics:**
- Error rate: < 1%
- 5xx responses: 0
- Average response time: < 500ms

**Checklist:**
- [ ] No 5xx errors in first 5 minutes
- [ ] Error rate within acceptable range
- [ ] No critical errors in logs

### 6:20 - Monitor Response Times

```bash
# Test response times for key endpoints
time curl https://digicon-ai-systems.vercel.app/
time curl https://digicon-ai-systems.vercel.app/api/health
time curl https://digicon-ai-systems.vercel.app/pricing

# Or use a monitoring tool
# ApacheB bench for load testing:
ab -n 100 -c 10 https://digicon-ai-systems.vercel.app/api/health
```

**Target Metrics:**
- P50: < 500ms
- P95: < 2s
- P99: < 5s

**Checklist:**
- [ ] Homepage loads in < 1s
- [ ] Health endpoint responds in < 500ms
- [ ] Pricing page loads in < 2s
- [ ] All response times acceptable

### 6:25 - Verify Stripe Webhooks

```bash
# Check Stripe dashboard for webhook events
# Go to: https://dashboard.stripe.com/webhooks
# Select your endpoint
# Check "Recent Events" section

# Or test with Stripe CLI
stripe listen --forward-to https://digicon-ai-systems.vercel.app/api/stripe/webhook

# In another terminal, trigger test event:
stripe trigger checkout.session.completed
```

**Checklist:**
- [ ] Webhook endpoint is active
- [ ] Events are being received
- [ ] Event handler returns 200 OK
- [ ] No errors in Stripe logs

### 6:30 - Verify All 6 Audit Systems

Test each audit system individually:

```bash
# 1. Payroll Audit System
curl https://digicon-ai-systems.vercel.app/api/audits/payroll/status
# Expected: {"status": "operational"}

# 2. Compliance Audit System
curl https://digicon-ai-systems.vercel.app/api/audits/compliance/status
# Expected: {"status": "operational"}

# 3. HRIS Audit System
curl https://digicon-ai-systems.vercel.app/api/audits/hris/status
# Expected: {"status": "operational"}

# 4. CRM Audit System
curl https://digicon-ai-systems.vercel.app/api/audits/crm/status
# Expected: {"status": "operational"}

# 5. ERP Audit System
curl https://digicon-ai-systems.vercel.app/api/audits/erp/status
# Expected: {"status": "operational"}

# 6. AI Infrastructure Audit System
curl https://digicon-ai-systems.vercel.app/api/audits/ai-infrastructure/status
# Expected: {"status": "operational"}
```

**Checklist:**
- [ ] Payroll system operational
- [ ] Compliance system operational
- [ ] HRIS system operational
- [ ] CRM system operational
- [ ] ERP system operational
- [ ] AI Infrastructure system operational

### 6:40 - Database Health Check

```bash
# Check database connection and performance
psql $DATABASE_URL -c "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'public';"

# Check for slow queries (if monitoring is set up)
# Review database dashboard in Supabase or monitoring tool

# Verify connection pool
# Check: https://app.supabase.com/project/_/reports/database
```

**Checklist:**
- [ ] Database responsive
- [ ] All tables exist
- [ ] Connection pool healthy
- [ ] No slow queries

### 6:50 - LLM Provider Health

```bash
# Check each LLM provider's status

# Anthropic
curl -H "x-api-key: $ANTHROPIC_API_KEY" \
     -H "anthropic-version: 2023-06-01" \
     https://api.anthropic.com/v1/messages \
     --max-time 5 \
     -d '{"model":"claude-3-sonnet-20240229","max_tokens":10,"messages":[{"role":"user","content":"Hi"}]}'

# Gemini
curl "https://generativelanguage.googleapis.com/v1beta/models?key=$GEMINI_FILE_SEARCH_API_KEY" \
     --max-time 5

# Together.ai
curl https://api.together.xyz/models \
     -H "Authorization: Bearer $TOGETHER_AI_API_KEY" \
     --max-time 5
```

**Checklist:**
- [ ] Anthropic responding (< 2s)
- [ ] Gemini responding (< 2s)
- [ ] Together.ai responding (< 2s)
- [ ] Fallback routing working

---

## 7:00 AM - Steady State (Ongoing)

### Continuous Monitoring

Monitor these metrics every 15 minutes for the first 2 hours:

1. **Error Rate**
   - Target: < 1%
   - Alert if: > 5% for 5 minutes

2. **Response Times**
   - Target: P95 < 2s
   - Alert if: P95 > 5s for 10 minutes

3. **Audit Completions**
   - Track: Number of audits started
   - Track: Number of audits completed
   - Target: 100% completion rate

4. **Payment Processing**
   - Track: Successful payments
   - Track: Failed payments
   - Alert if: > 2% failure rate

### Checklist for First Hour:
- [ ] 7:00 AM - All systems operational
- [ ] 7:15 AM - No errors reported
- [ ] 7:30 AM - Response times normal
- [ ] 7:45 AM - First real audit completed
- [ ] 8:00 AM - All systems stable

### Checklist for Second Hour:
- [ ] 8:15 AM - Traffic patterns normal
- [ ] 8:30 AM - No customer complaints
- [ ] 8:45 AM - Stripe payments working
- [ ] 9:00 AM - Ready for public announcement

---

## Rollback Trigger Conditions

**Immediately rollback if any of these occur:**

- [ ] Error rate > 10% for 5 minutes
- [ ] Any 5xx error rate > 5%
- [ ] Response time P95 > 10 seconds
- [ ] Database connectivity lost
- [ ] All LLM providers failing
- [ ] Stripe payments failing completely
- [ ] Critical security vulnerability discovered

### Rollback Procedure

```bash
# 1. Immediately rollback to previous deployment
vercel rollback https://digicon-ai-systems-[previous-deployment].vercel.app

# 2. Notify team
# Post in Slack/Discord: "ROLLBACK INITIATED - Launch delayed"

# 3. Check logs for root cause
vercel logs --since 1h | grep ERROR

# 4. Create incident report
# Document what went wrong and when

# 5. Fix issue and reschedule launch
```

---

## Success Criteria

Launch is considered successful when:

- [ ] All 6 audit systems operational
- [ ] Error rate < 1% for 1 hour
- [ ] Response times within targets
- [ ] At least 1 successful audit completed
- [ ] Stripe payments processing correctly
- [ ] No critical errors in logs
- [ ] Database performing well
- [ ] All LLM providers responding

---

## Post-Launch Announcement

Once all success criteria are met:

### Internal Announcement (Team)
```
🚀 LAUNCH SUCCESSFUL! 🚀

Digicon AI Systems is now live in production!

✅ All 6 audit systems operational
✅ Response times within targets
✅ Zero critical errors
✅ Stripe payments working

Great job team! Now monitoring for stability.
```

### External Announcement (Customers)
```
📢 Announcing: Digicon AI Systems - Now Live!

AI-powered audit systems for:
- Payroll compliance
- Financial audits
- HRIS analysis
- CRM optimization
- ERP insights
- AI infrastructure audits

Visit: https://digicon-ai-systems.vercel.app
```

**Checklist:**
- [ ] Internal team notified
- [ ] Stakeholders notified
- [ ] Social media posts scheduled
- [ ] Sales team briefed
- [ ] Support team ready

---

## Emergency Contacts

Keep these contacts readily available:

- **Tech Lead**: [Name] - [Phone] - [Email]
- **DevOps**: [Name] - [Phone] - [Email]
- **Database Admin**: [Name] - [Phone] - [Email]
- **Security**: [Name] - [Phone] - [Email]
- **Product Manager**: [Name] - [Phone] - [Email]
- **CEO/Leadership**: [Name] - [Phone] - [Email]

## Additional Resources

- [Deployment Guide](./DEPLOYMENT.md)
- [API Keys Setup](./API_KEYS_SETUP.md)
- [Troubleshooting Guide](./TROUBLESHOOTING.md)
- [Vercel Dashboard](https://vercel.com/dashboard)
- [Stripe Dashboard](https://dashboard.stripe.com/)

---

## Notes Section

Use this space to record any issues, observations, or deviations from the plan:

```
Time | Event | Action Taken | Result
-----|-------|--------------|--------
     |       |              |
     |       |              |
     |       |              |
```

---

**Remember:** This is a high-stakes launch. Stay calm, follow the checklist, and don't hesitate to rollback if something doesn't feel right. We can always fix and redeploy.

**Good luck! 🚀**
