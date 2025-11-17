# API Keys Setup - Morning Checklist

**Date: November 17, 2025, 5:30 AM CST**

This guide provides step-by-step instructions for adding all API keys to the production environment. Follow this checklist in order tomorrow morning before launch.

## Prerequisites

- [ ] `.env.example` copied to `.env.production`
- [ ] Access to all API provider dashboards
- [ ] OpenSSL installed (for generating secrets)
- [ ] Text editor ready for editing `.env.production`

## Step 1: Anthropic Claude (High Priority Systems)

**Priority:** CRITICAL - Used by Payroll, Compliance, and AI Infrastructure audits

### Instructions:
1. Go to: https://console.anthropic.com/
2. Sign in or create account
3. Navigate to "API Keys" section
4. Click "Create Key"
5. Name it: `Digicon AI Systems - Production`
6. Copy the key (starts with `sk-ant-api03-`)
7. Add to `.env.production`:
   ```bash
   ANTHROPIC_API_KEY=sk-ant-api03-[your-key-here]
   ```

### Used By:
- Payroll audit system
- Compliance audit system
- AI Infrastructure audit system

### Verification:
```bash
# Test the key
curl -H "x-api-key: $ANTHROPIC_API_KEY" \
     -H "anthropic-version: 2023-06-01" \
     -H "content-type: application/json" \
     https://api.anthropic.com/v1/messages \
     -d '{"model":"claude-3-sonnet-20240229","max_tokens":10,"messages":[{"role":"user","content":"Test"}]}'

# Expected: JSON response with content
```

### Checklist:
- [ ] Account created/accessed
- [ ] API key generated
- [ ] Key added to `.env.production`
- [ ] Verification test passed

---

## Step 2: Google Gemini File Search (Document Understanding)

**Priority:** CRITICAL - Used by all 6 audit systems for document search

### Instructions:
1. Go to: https://ai.google.dev/
2. Sign in with Google account
3. Click "Get API Key" or "Create API Key"
4. Create new project or select existing: `Digicon AI Systems`
5. Enable "Generative Language API"
6. Copy the key (starts with `AIzaSy`)
7. Add to `.env.production`:
   ```bash
   GEMINI_FILE_SEARCH_API_KEY=AIzaSy[your-key-here]
   ```

### Used By:
- All 6 audit systems for document analysis
- File search functionality
- Semantic search across documents

### Verification:
```bash
# Test the key
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=$GEMINI_FILE_SEARCH_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{"contents":[{"parts":[{"text":"Test"}]}]}'

# Expected: JSON response with candidates
```

### Checklist:
- [ ] Google account accessed
- [ ] Project created/selected
- [ ] Generative Language API enabled
- [ ] API key generated
- [ ] Key added to `.env.production`
- [ ] Verification test passed

---

## Step 3: Together.ai (High-Volume Systems)

**Priority:** HIGH - Used by HRIS, CRM, ERP audits and as fallback for all systems

### Instructions:
1. Go to: https://api.together.xyz/
2. Sign up or sign in
3. Navigate to "API Keys" in settings
4. Click "Create new API key"
5. Name it: `Digicon AI Production`
6. Copy the key
7. Add to `.env.production`:
   ```bash
   TOGETHER_AI_API_KEY=[your-key-here]
   ```

### Used By:
- HRIS audit system
- CRM audit system
- ERP audit system
- Fallback provider for all systems

### Verification:
```bash
# Test the key
curl -X POST https://api.together.xyz/inference \
     -H "Authorization: Bearer $TOGETHER_AI_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{"model":"mistralai/Mixtral-8x7B-Instruct-v0.1","prompt":"Test","max_tokens":10}'

# Expected: JSON response with output
```

### Checklist:
- [ ] Account created/accessed
- [ ] API key generated
- [ ] Key added to `.env.production`
- [ ] Verification test passed

---

## Step 4: Stripe (Payment Processing)

**Priority:** CRITICAL - Required for all payment functionality

### Instructions:

#### 4A: Get API Keys
1. Go to: https://dashboard.stripe.com/apikeys
2. Sign in to Stripe account
3. **Switch to LIVE mode** (toggle in left sidebar)
4. Copy "Secret key" (starts with `sk_live_`)
5. Copy "Publishable key" (starts with `pk_live_`)
6. Add to `.env.production`:
   ```bash
   STRIPE_SECRET_KEY=sk_live_[your-key-here]
   STRIPE_PUBLISHABLE_KEY=pk_live_[your-key-here]
   ```

#### 4B: Set Up Webhook
1. Go to: https://dashboard.stripe.com/webhooks
2. Click "Add endpoint"
3. Endpoint URL: `https://digicon-ai-systems.vercel.app/api/stripe/webhook`
4. Select events to listen for:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
5. Click "Add endpoint"
6. Copy "Signing secret" (starts with `whsec_`)
7. Add to `.env.production`:
   ```bash
   STRIPE_WEBHOOK_SECRET=whsec_[your-key-here]
   ```

### Used By:
- Payment processing
- Subscription management
- Audit purchases
- Conference room access fees

### Verification:
```bash
# Test the secret key (doesn't charge anything)
curl https://api.stripe.com/v1/customers \
  -u "$STRIPE_SECRET_KEY:" \
  -d "email=test@example.com" \
  -d "description=Test customer"

# Expected: JSON response with customer object

# Test webhook with Stripe CLI
stripe listen --forward-to localhost:3000/api/stripe/webhook
# Then trigger test event:
stripe trigger checkout.session.completed
```

### Checklist:
- [ ] Stripe account accessed
- [ ] Switched to LIVE mode
- [ ] Secret key copied
- [ ] Publishable key copied
- [ ] Webhook endpoint created
- [ ] Webhook events selected
- [ ] Webhook secret copied
- [ ] All keys added to `.env.production`
- [ ] Verification tests passed

---

## Step 5: Generate Encryption Keys

**Priority:** CRITICAL - Required for security

### Instructions:

```bash
# Generate Encryption Secret (32 bytes = 64 hex chars)
openssl rand -hex 32

# Generate JWT Secret (32 bytes = 64 hex chars)
openssl rand -hex 32

# Generate Session Secret (32 bytes = 64 hex chars)
openssl rand -hex 32

# Generate Webhook Secret (32 bytes = 64 hex chars)
openssl rand -hex 32
```

### Add to `.env.production`:
```bash
ENCRYPTION_SECRET=[output-from-first-command]
JWT_SECRET=[output-from-second-command]
SESSION_SECRET=[output-from-third-command]
WEBHOOK_SECRET=[output-from-fourth-command]
```

### Important Notes:
- Each secret MUST be exactly 64 hexadecimal characters
- NEVER reuse these secrets across environments
- Store these secrets securely (password manager)
- Do NOT commit these to git

### Checklist:
- [ ] ENCRYPTION_SECRET generated and added
- [ ] JWT_SECRET generated and added
- [ ] SESSION_SECRET generated and added
- [ ] WEBHOOK_SECRET generated and added
- [ ] All secrets are 64 characters long
- [ ] Secrets stored securely

---

## Step 6: Optional API Keys

### OpenAI (Optional Fallback)
If you want OpenAI as an additional fallback:

1. Go to: https://platform.openai.com/api-keys
2. Create new secret key
3. Add to `.env.production`:
   ```bash
   OPENAI_API_KEY=sk-[your-key-here]
   ```

### Sentry (Optional Error Tracking)
For error monitoring:

1. Go to: https://sentry.io/
2. Create project for "Digicon AI Systems"
3. Copy DSN
4. Add to `.env.production`:
   ```bash
   SENTRY_DSN=https://xxxxx@sentry.io/xxxxx
   SENTRY_ENVIRONMENT=production
   ```

### Checklist:
- [ ] OpenAI key added (if desired)
- [ ] Sentry DSN added (if desired)

---

## Step 7: Verify All Keys

Run the verification script to ensure all keys are properly formatted:

```bash
# Load environment variables
export $(cat .env.production | grep -v '^#' | xargs)

# Run verification script
npm run verify-keys
```

### Expected Output:
```
Verifying API Keys...

✅ Anthropic API Key: Valid format
✅ Gemini API Key: Valid format
✅ Together.ai API Key: Valid format
✅ Stripe Secret Key: Valid format
✅ Stripe Publishable Key: Valid format
✅ Stripe Webhook Secret: Valid format
✅ Encryption Secret: Valid length
✅ JWT Secret: Valid length
✅ Session Secret: Valid length
✅ Webhook Secret: Valid length

All checks passed! ✅
```

### If Any Checks Fail:
1. Verify the key format matches expected pattern
2. Check for extra spaces or newlines
3. Ensure key is from the correct environment (live vs test)
4. Regenerate key if necessary

### Checklist:
- [ ] Verification script ran successfully
- [ ] All checks show ✅
- [ ] No ❌ errors in output

---

## Step 8: Upload to Production Environment

### For Vercel Deployment:

```bash
# Upload environment variables to Vercel
vercel env add ANTHROPIC_API_KEY production
# Paste the key when prompted

vercel env add GEMINI_FILE_SEARCH_API_KEY production
# Paste the key when prompted

vercel env add TOGETHER_AI_API_KEY production
# Paste the key when prompted

vercel env add STRIPE_SECRET_KEY production
# Paste the key when prompted

vercel env add STRIPE_PUBLISHABLE_KEY production
# Paste the key when prompted

vercel env add STRIPE_WEBHOOK_SECRET production
# Paste the key when prompted

vercel env add ENCRYPTION_SECRET production
# Paste the secret when prompted

vercel env add JWT_SECRET production
# Paste the secret when prompted

vercel env add SESSION_SECRET production
# Paste the secret when prompted

vercel env add WEBHOOK_SECRET production
# Paste the secret when prompted

# ... continue for any other environment variables
```

Or use the Vercel dashboard:
1. Go to: https://vercel.com/dashboard
2. Select "Digicon AI Systems" project
3. Go to "Settings" > "Environment Variables"
4. Add each variable manually

### Checklist:
- [ ] All API keys uploaded to Vercel
- [ ] All secrets uploaded to Vercel
- [ ] Environment set to "Production"
- [ ] Variables verified in Vercel dashboard

---

## Step 9: Final Verification

### Test Production Health Endpoint:

```bash
# After deployment, test the health endpoint
curl https://digicon-ai-systems.vercel.app/api/health

# Expected response:
# {
#   "status": "ready",
#   "database": "connected",
#   "llm_providers": {
#     "anthropic": "ready",
#     "gemini": "ready",
#     "together": "ready"
#   }
# }
```

### Checklist:
- [ ] Health endpoint returns 200 OK
- [ ] All LLM providers show "ready"
- [ ] Database shows "connected"
- [ ] No error messages in logs

---

## Summary Checklist

Before proceeding to launch:

- [ ] Anthropic API key configured and tested
- [ ] Gemini API key configured and tested
- [ ] Together.ai API key configured and tested
- [ ] Stripe API keys configured and tested
- [ ] Stripe webhook configured
- [ ] All encryption secrets generated
- [ ] All keys verified with verification script
- [ ] All keys uploaded to production environment
- [ ] Production health check passed
- [ ] No errors in verification output

## Time Estimate

- Total time: **30-45 minutes**
- Anthropic: 5 minutes
- Gemini: 5 minutes
- Together.ai: 5 minutes
- Stripe: 10 minutes (including webhook setup)
- Generate secrets: 2 minutes
- Verify keys: 3 minutes
- Upload to Vercel: 10 minutes
- Final verification: 5 minutes

## Troubleshooting

### Issue: Verification script shows ❌
- **Solution**: Double-check the key format and re-copy from provider dashboard

### Issue: Stripe webhook not receiving events
- **Solution**: Verify endpoint URL is correct and publicly accessible

### Issue: Health check shows LLM provider not ready
- **Solution**: Test the API key directly with curl commands above

### Issue: Can't generate encryption secrets
- **Solution**: Ensure OpenSSL is installed: `brew install openssl` (Mac) or `apt-get install openssl` (Linux)

## Next Steps

After completing this checklist:
1. Proceed to [Launch Runbook](./LAUNCH_RUNBOOK.md)
2. Begin deployment process at 5:45 AM
3. Monitor logs during deployment
4. Run post-deployment checks

## Emergency Contacts

If you encounter issues during setup:
- **API Issues**: [API Team Contact]
- **Stripe Issues**: [Finance Team Contact]
- **Security Questions**: [Security Team Contact]
- **Technical Support**: [DevOps Contact]
