# Digicon AI Systems - Deployment Guide

## Pre-Deployment Checklist

### 1. Environment Setup
- [ ] Copy `.env.example` to `.env.production`
- [ ] Fill in all API keys (provided tomorrow morning)
- [ ] Generate encryption secrets using OpenSSL
- [ ] Verify database connection string
- [ ] Verify all environment variables are set correctly

### 2. Database Setup

#### Initial Setup
If using Supabase:
```bash
# Database will be created automatically
# Use connection string from Supabase dashboard
DATABASE_URL=postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres
```

If using standalone PostgreSQL:
```bash
# Create production database
createdb digicon_production

# Or via psql
psql -c "CREATE DATABASE digicon_production;"
```

#### Run Migrations
```bash
# If migrations exist in database/migrations/
psql $DATABASE_URL < database/migrations/001_initial_schema.sql
psql $DATABASE_URL < database/migrations/002_code_execution_system.sql

# Or if using Prisma
npx prisma migrate deploy
```

#### Seed Tools Database
```bash
# Run seed script to populate tools and initial data
node scripts/seed-tools.js

# Or via npm script
npm run seed
```

### 3. API Key Verification

#### Test Anthropic
```bash
curl -H "x-api-key: $ANTHROPIC_API_KEY" \
     -H "anthropic-version: 2023-06-01" \
     -H "content-type: application/json" \
     https://api.anthropic.com/v1/messages \
     -d '{"model":"claude-3-sonnet-20240229","max_tokens":1024,"messages":[{"role":"user","content":"Hello"}]}'
```

#### Test Gemini
```bash
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=$GEMINI_FILE_SEARCH_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{"contents":[{"parts":[{"text":"Hello"}]}]}'
```

#### Test Together.ai
```bash
curl -X POST https://api.together.xyz/inference \
     -H "Authorization: Bearer $TOGETHER_AI_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{"model":"mistralai/Mixtral-8x7B-Instruct-v0.1","prompt":"Hello","max_tokens":100}'
```

#### Test Stripe Webhook
```bash
# Install Stripe CLI
# Mac: brew install stripe/stripe-cli/stripe
# Other: https://stripe.com/docs/stripe-cli

# Login
stripe login

# Test webhook endpoint
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

### 4. Health Checks

#### Local Health Check
```bash
# Start the development server
npm run dev

# Check health endpoint
curl http://localhost:3000/api/health

# Expected response:
# {
#   "status": "ready",
#   "timestamp": "2025-11-17T06:00:00.000Z",
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

#### Verify All Systems
- [ ] Database connectivity confirmed
- [ ] All 6 audit systems operational
- [ ] LLM providers responding
- [ ] Stripe webhooks configured
- [ ] File upload endpoints working

### 5. Pre-Deployment Build

#### Install Dependencies
```bash
npm install
```

#### Run Build
```bash
npm run build
```

#### Check for Build Errors
- [ ] No TypeScript errors
- [ ] No linting errors
- [ ] All pages compile successfully
- [ ] Static assets generated

### 6. Deployment to Production

#### Option A: Vercel Deployment (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy to production
vercel --prod

# Set environment variables via Vercel dashboard
# Or via CLI:
vercel env add ANTHROPIC_API_KEY production
vercel env add GEMINI_FILE_SEARCH_API_KEY production
vercel env add TOGETHER_AI_API_KEY production
# ... continue for all env vars
```

#### Option B: Manual Deployment

```bash
# Build production bundle
npm run build

# Start production server
NODE_ENV=production npm start

# Or with PM2 for process management
pm2 start npm --name "digicon-ai" -- start
```

#### Option C: Docker Deployment

```bash
# Build Docker image
docker build -t digicon-ai-systems:latest .

# Run container
docker run -d \
  --name digicon-ai \
  -p 3000:3000 \
  --env-file .env.production \
  digicon-ai-systems:latest
```

### 7. Post-Deployment Verification

#### Run Production Health Checks
```bash
# Check production health endpoint
curl https://digicon-ai-systems.vercel.app/api/health

# Verify all systems return "ready"
# Check response status is 200
```

#### Monitor Logs
```bash
# Vercel logs
vercel logs --follow

# Or check dashboard: https://vercel.com/dashboard

# PM2 logs (if using PM2)
pm2 logs digicon-ai
```

#### Verify Stripe Webhooks
```bash
# Check Stripe dashboard for webhook events
# Ensure events are being received and processed
# https://dashboard.stripe.com/webhooks
```

#### Test Core Functionality
- [ ] Pricing page loads correctly
- [ ] Conference room creation works
- [ ] File uploads are processed
- [ ] Audit systems can be triggered
- [ ] Payment processing works (test mode first)

### 8. Merge All PRs

Before deploying, ensure all PRs are merged:
- [ ] PR #13 - Core audit systems
- [ ] PR #15 - LLM integration
- [ ] PR #16 - Payment processing
- [ ] PR #18 - Security enhancements
- [ ] PR #20 - Conference room feature
- [ ] PR #21 - Documentation updates

```bash
# Verify all PRs are merged
gh pr list --state merged

# Pull latest from main
git checkout main
git pull origin main
```

## Deployment Commands Reference

```bash
# Install dependencies
npm install

# Run database migrations
npm run migrate

# Seed tools database
npm run seed

# Build for production
npm run build

# Start production server
npm run start

# Run with PM2
pm2 start ecosystem.config.js

# Check application logs
npm run logs

# Verify API keys
npm run verify-keys

# Run health check
npm run health-check
```

## Post-Deployment Monitoring

### Key Metrics to Monitor

1. **Error Rate**
   - Should be < 1% in steady state
   - Alert if > 5% for 5 minutes

2. **Response Times**
   - P50 < 500ms
   - P95 < 2s
   - P99 < 5s

3. **LLM API Health**
   - Monitor success rate for each provider
   - Track fallback usage
   - Watch for rate limiting

4. **Database Performance**
   - Connection pool usage
   - Query performance
   - Lock contention

5. **Audit System Status**
   - Active audits count
   - Audit completion rate
   - Average audit duration

### Monitoring Commands

```bash
# Check system status
curl https://digicon-ai-systems.vercel.app/api/health | jq

# Monitor error logs
vercel logs --filter error

# Check specific audit system
curl https://digicon-ai-systems.vercel.app/api/audits/status

# View active audits
curl https://digicon-ai-systems.vercel.app/api/audits/active
```

### Test Sample Audits

```bash
# Run test audit for each system
curl -X POST https://digicon-ai-systems.vercel.app/api/audits/payroll \
  -H "Content-Type: application/json" \
  -d '{"company_id":"test-001","audit_type":"quick"}'

# Verify audit completes successfully
# Expected: 200 OK with audit_id in response
```

## Rollback Procedure

### When to Rollback

Rollback if any of the following occur:
- Error rate > 5% for more than 5 minutes
- Response time > 10 seconds consistently
- Database connectivity fails
- Stripe payments failing
- Critical security vulnerability discovered
- LLM providers all failing

### Rollback Steps

#### Vercel Rollback
```bash
# List recent deployments
vercel ls

# Rollback to previous deployment
vercel rollback [deployment-url]

# Or via dashboard:
# 1. Go to https://vercel.com/dashboard
# 2. Select project
# 3. Click "Deployments"
# 4. Find last good deployment
# 5. Click "..." > "Promote to Production"
```

#### Manual Rollback
```bash
# Stop current version
pm2 stop digicon-ai

# Revert to previous git commit
git log --oneline -10
git reset --hard [previous-commit-hash]

# Rebuild and restart
npm run build
pm2 restart digicon-ai
```

#### Post-Rollback Actions
1. Check logs to identify root cause
   ```bash
   vercel logs --since 1h
   ```

2. Document the issue
   - What went wrong?
   - When did it happen?
   - What was the impact?
   - What's the fix?

3. Create hotfix branch
   ```bash
   git checkout -b hotfix/issue-description
   ```

4. Fix and redeploy
   ```bash
   # Make fixes
   # Test locally
   npm run build
   npm start
   
   # Deploy fix
   vercel --prod
   ```

## Troubleshooting

### Common Issues

#### Issue: Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

#### Issue: Database Connection Fails
```bash
# Check DATABASE_URL is correct
echo $DATABASE_URL

# Test connection
psql $DATABASE_URL -c "SELECT 1"

# Check Supabase status
curl https://status.supabase.com/api/v2/status.json
```

#### Issue: LLM API Errors
```bash
# Verify API key format
npm run verify-keys

# Test each provider individually
# See "API Key Verification" section above

# Check rate limits
# Review API provider dashboards
```

#### Issue: Stripe Webhook Not Working
```bash
# Verify webhook endpoint is publicly accessible
curl https://digicon-ai-systems.vercel.app/api/stripe/webhook

# Check webhook secret matches
# Verify endpoint URL in Stripe dashboard

# Test webhook locally
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

## Security Checklist

- [ ] All API keys are in environment variables (not in code)
- [ ] ENCRYPTION_SECRET is at least 32 bytes (64 hex characters)
- [ ] JWT_SECRET is at least 32 bytes (64 hex characters)
- [ ] Database uses SSL/TLS connection
- [ ] Stripe webhooks use signature verification
- [ ] CORS is configured correctly
- [ ] Rate limiting is enabled
- [ ] File uploads are validated and scanned
- [ ] PII protection is enabled
- [ ] Audit logs are being written

## Support Contacts

- **Database Issues**: [DBA Team Contact]
- **API Issues**: [API Team Contact]
- **Deployment Issues**: [DevOps Contact]
- **Security Issues**: [Security Team Contact]
- **Stripe/Payment Issues**: [Finance Team Contact]

## Additional Resources

- [API Keys Setup Guide](./API_KEYS_SETUP.md)
- [Launch Runbook](./LAUNCH_RUNBOOK.md)
- [Troubleshooting Guide](./TROUBLESHOOTING.md)
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
