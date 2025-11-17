# Troubleshooting Guide

This guide covers common issues you might encounter during deployment and operation of Digicon AI Systems, along with their solutions.

---

## Table of Contents

1. [Build & Deployment Issues](#build--deployment-issues)
2. [API Key Issues](#api-key-issues)
3. [Database Issues](#database-issues)
4. [LLM Provider Issues](#llm-provider-issues)
5. [Stripe Payment Issues](#stripe-payment-issues)
6. [Performance Issues](#performance-issues)
7. [Security Issues](#security-issues)
8. [Audit System Issues](#audit-system-issues)

---

## Build & Deployment Issues

### Issue: Build Fails with "Module not found"

**Symptoms:**
```
Error: Cannot find module '@/components/...'
```

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build

# If still failing, check package.json for missing dependencies
npm install --save [missing-package]
```

### Issue: Vercel Deployment Timeout

**Symptoms:**
- Deployment exceeds time limit
- Build hangs indefinitely

**Solution:**
```bash
# 1. Check if build works locally
npm run build

# 2. Optimize build configuration in next.config.js
# Add build caching and reduce bundle size

# 3. Check Vercel settings
# Go to: Settings > General > Build & Development Settings
# Ensure Node.js version is correct (18.x or 20.x)

# 4. Contact Vercel support if issue persists
```

### Issue: Environment Variables Not Loading

**Symptoms:**
- Application can't access process.env variables
- Health check shows missing configuration

**Solution:**
```bash
# 1. Verify variables are set in Vercel
vercel env ls

# 2. Check variable names match exactly (case-sensitive)
# 3. Re-deploy after adding variables
vercel --prod

# 4. For Next.js client-side variables, ensure NEXT_PUBLIC_ prefix
```

### Issue: TypeScript Compilation Errors

**Symptoms:**
```
Type error: Property 'X' does not exist on type 'Y'
```

**Solution:**
```bash
# 1. Check TypeScript version
npm list typescript

# 2. Clear TypeScript cache
rm -rf .next
npx tsc --noEmit

# 3. Update type definitions
npm install --save-dev @types/node @types/react @types/react-dom

# 4. Fix type errors in code or use temporary workaround
# @ts-ignore (use sparingly)
```

---

## API Key Issues

### Issue: "Invalid API Key" Error for Anthropic

**Symptoms:**
```
Error: Invalid API key provided
Status: 401
```

**Solution:**
```bash
# 1. Verify key format (should start with sk-ant-api03-)
echo $ANTHROPIC_API_KEY

# 2. Test key directly
curl -H "x-api-key: $ANTHROPIC_API_KEY" \
     -H "anthropic-version: 2023-06-01" \
     -H "content-type: application/json" \
     https://api.anthropic.com/v1/messages \
     -d '{"model":"claude-3-sonnet-20240229","max_tokens":10,"messages":[{"role":"user","content":"test"}]}'

# 3. Check if key is active in Anthropic console
# Go to: https://console.anthropic.com/settings/keys

# 4. Regenerate key if necessary
# Update in .env.production and Vercel
```

### Issue: Gemini API Rate Limiting

**Symptoms:**
```
Error: Resource exhausted
Status: 429
```

**Solution:**
```bash
# 1. Check quota in Google AI Studio
# Go to: https://ai.google.dev/

# 2. Implement exponential backoff in code
# Wait and retry: 1s, 2s, 4s, 8s, 16s

# 3. Use Together.ai as fallback
# System should automatically switch providers

# 4. Request quota increase if needed
# https://ai.google.dev/gemini-api/docs/quota
```

### Issue: Together.ai Connection Timeout

**Symptoms:**
```
Error: Request timeout
Status: 504
```

**Solution:**
```bash
# 1. Check Together.ai status
curl https://status.together.xyz/api/v2/status.json

# 2. Increase timeout in configuration
# Set LLM_REQUEST_TIMEOUT=600 (10 minutes)

# 3. Test with different model
# Some models are faster than others

# 4. Check network/firewall settings
# Ensure outbound HTTPS connections allowed
```

### Issue: API Keys Work Locally but Not in Production

**Symptoms:**
- Local development works fine
- Production returns authentication errors

**Solution:**
```bash
# 1. Verify environment variables in Vercel
vercel env ls production

# 2. Check for extra spaces or newlines in keys
# Re-copy keys from provider dashboards

# 3. Ensure production environment is selected
vercel env pull .env.production --environment=production

# 4. Redeploy after updating variables
vercel --prod
```

---

## Database Issues

### Issue: "Database Connection Failed"

**Symptoms:**
```
Error: connect ECONNREFUSED
Health check: database: "disconnected"
```

**Solution:**
```bash
# 1. Test connection manually
psql $DATABASE_URL -c "SELECT 1"

# 2. Check if database is running
# For Supabase: https://status.supabase.com/
# For standalone: systemctl status postgresql

# 3. Verify DATABASE_URL format
# postgresql://user:password@host:port/database
# Ensure no extra spaces

# 4. Check firewall rules
# Ensure Vercel IP ranges can access database
# For Supabase: Already configured
# For other: Add Vercel IPs to allowlist

# 5. Check connection pool limits
# Increase if needed in database settings
```

### Issue: "Too Many Connections"

**Symptoms:**
```
Error: remaining connection slots are reserved
Status: 53300
```

**Solution:**
```bash
# 1. Check current connections
psql $DATABASE_URL -c "SELECT count(*) FROM pg_stat_activity;"

# 2. Reduce connection pool size in application
# Set in DATABASE_URL: ?connection_limit=10

# 3. Close idle connections
psql $DATABASE_URL -c "SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE state = 'idle' AND state_change < current_timestamp - INTERVAL '5' MINUTE;"

# 4. Upgrade database plan for more connections
# Or use PgBouncer for connection pooling
```

### Issue: Slow Query Performance

**Symptoms:**
- Database queries taking > 5 seconds
- Application timeouts

**Solution:**
```sql
-- 1. Find slow queries
SELECT query, mean_exec_time, calls
FROM pg_stat_statements
ORDER BY mean_exec_time DESC
LIMIT 10;

-- 2. Add indexes for frequently queried columns
CREATE INDEX idx_conference_room_access_code ON ConferenceRoom(accessCode);
CREATE INDEX idx_conference_room_status ON ConferenceRoom(status);

-- 3. Analyze table statistics
ANALYZE ConferenceRoom;
ANALYZE ConferenceRoomFile;

-- 4. Consider query optimization
-- Add EXPLAIN ANALYZE to understand query plans
```

### Issue: Migration Failed

**Symptoms:**
```
Error: Migration X failed
Database schema out of sync
```

**Solution:**
```bash
# 1. Check which migrations ran
psql $DATABASE_URL -c "SELECT * FROM _prisma_migrations;"

# 2. Manually fix failed migration
# Review migration file for errors
# Fix SQL syntax or constraint issues

# 3. Mark migration as completed (if manually fixed)
# Or roll back and retry
npx prisma migrate resolve --rolled-back [migration-name]

# 4. Run migrations again
npx prisma migrate deploy
```

---

## LLM Provider Issues

### Issue: All LLM Providers Failing

**Symptoms:**
- Anthropic: Error
- Gemini: Error
- Together.ai: Error
- No audits can complete

**Solution:**
```bash
# 1. Check each provider's status page
# Anthropic: https://status.anthropic.com/
# Google: https://status.cloud.google.com/
# Together.ai: https://status.together.xyz/

# 2. Verify all API keys
npm run verify-keys

# 3. Test each provider individually
# See API Key Issues section above

# 4. Check application logs for specific errors
vercel logs --follow | grep -i "llm\|api"

# 5. Implement graceful degradation
# Queue requests for retry when providers recover
```

### Issue: LLM Response Too Slow

**Symptoms:**
- Requests taking > 30 seconds
- Audit timeouts

**Solution:**
```bash
# 1. Check provider latency
time curl [provider-endpoint]

# 2. Use faster models
# Anthropic: claude-3-haiku (faster)
# Instead of: claude-3-opus (slower)

# 3. Reduce max_tokens in requests
# Set to minimum needed (e.g., 2000 instead of 4000)

# 4. Enable streaming responses
# Process tokens as they arrive

# 5. Use caching for repeated queries
# Cache common audit patterns
```

### Issue: LLM Returns Malformed JSON

**Symptoms:**
```
Error: Unexpected token in JSON at position 0
LLM response cannot be parsed
```

**Solution:**
```javascript
// 1. Add JSON validation and retry logic
try {
  const response = await llm.generate(prompt);
  const parsed = JSON.parse(response);
  return parsed;
} catch (error) {
  // Retry with explicit JSON instructions
  const retryPrompt = prompt + "\n\nIMPORTANT: Respond ONLY with valid JSON. No markdown, no explanations.";
  const retryResponse = await llm.generate(retryPrompt);
  return JSON.parse(retryResponse);
}

// 2. Use JSON mode if provider supports it
// Anthropic: Use system prompt with JSON schema
// Gemini: Use generationConfig.responseMimeType = "application/json"

// 3. Extract JSON from markdown code blocks
const jsonMatch = response.match(/```json\n([\s\S]*?)\n```/);
if (jsonMatch) {
  return JSON.parse(jsonMatch[1]);
}
```

---

## Stripe Payment Issues

### Issue: Webhook Not Receiving Events

**Symptoms:**
- Stripe dashboard shows events sent
- Application not processing them

**Solution:**
```bash
# 1. Verify webhook endpoint is publicly accessible
curl -I https://digicon-ai-systems.vercel.app/api/stripe/webhook
# Expected: 405 Method Not Allowed (for GET)
# This means endpoint exists

# 2. Check webhook secret matches
echo $STRIPE_WEBHOOK_SECRET
# Compare with Stripe dashboard value

# 3. Test webhook signature verification
# Add logging to webhook handler
console.log('Received webhook:', event.type);

# 4. Check Stripe webhook logs
# Go to: https://dashboard.stripe.com/webhooks/[webhook-id]
# Review "Recent Events" for errors

# 5. Test locally with Stripe CLI
stripe listen --forward-to localhost:3000/api/stripe/webhook
stripe trigger checkout.session.completed
```

### Issue: Payment Succeeds but Not Recorded

**Symptoms:**
- Customer charged successfully
- Database doesn't reflect payment

**Solution:**
```bash
# 1. Check webhook logs
vercel logs --follow | grep stripe

# 2. Verify webhook handler is processing events
# Add console.log statements

# 3. Check database for transaction
psql $DATABASE_URL -c "SELECT * FROM payments WHERE stripe_payment_id = '[payment-id]';"

# 4. Manually reconcile if needed
# Use Stripe dashboard data to update database

# 5. Implement idempotency
# Store Stripe event IDs to prevent duplicate processing
```

### Issue: Test Mode vs Live Mode Confusion

**Symptoms:**
- Payments work in test but not live
- Wrong API keys being used

**Solution:**
```bash
# 1. Verify environment
echo $NODE_ENV
# Should be "production" for live mode

# 2. Check which Stripe keys are being used
echo $STRIPE_SECRET_KEY | cut -c1-10
# sk_live_ = Live mode ✓
# sk_test_ = Test mode ✗

# 3. Ensure webhook is configured for live mode
# Stripe dashboard > Webhooks
# Check "Live mode" toggle

# 4. Update environment variables if wrong
vercel env rm STRIPE_SECRET_KEY production
vercel env add STRIPE_SECRET_KEY production
# Paste live key
```

---

## Performance Issues

### Issue: Slow Page Load Times

**Symptoms:**
- Pages taking > 5 seconds to load
- Poor user experience

**Solution:**
```bash
# 1. Run performance audit
npx lighthouse https://digicon-ai-systems.vercel.app --view

# 2. Optimize images
# Use Next.js Image component
# Serve WebP format
# Implement lazy loading

# 3. Reduce JavaScript bundle size
# Analyze bundle
npx @next/bundle-analyzer

# 4. Enable caching
# Set proper Cache-Control headers
# Use Redis for API response caching

# 5. Use CDN for static assets
# Vercel automatically does this
```

### Issue: High Memory Usage

**Symptoms:**
```
Error: JavaScript heap out of memory
Function timeout
```

**Solution:**
```bash
# 1. Increase Node.js memory limit
# Add to package.json scripts:
"start": "NODE_OPTIONS='--max-old-space-size=4096' next start"

# 2. Profile memory usage
node --inspect server.js
# Connect Chrome DevTools to profile

# 3. Fix memory leaks
# Check for:
# - Unclosed database connections
# - Event listeners not removed
# - Large objects not garbage collected

# 4. Upgrade Vercel plan if needed
# More memory available on Pro/Enterprise
```

### Issue: Rate Limiting Triggered

**Symptoms:**
```
Error: Too many requests
Status: 429
```

**Solution:**
```bash
# 1. Check rate limit configuration
echo $API_RATE_LIMIT

# 2. Implement exponential backoff
# Wait before retry: 1s, 2s, 4s, 8s

# 3. Use caching to reduce requests
# Cache frequent queries with Redis

# 4. Distribute load
# Use queue system for background jobs

# 5. Request limit increase
# Contact support if legitimately need more
```

---

## Security Issues

### Issue: Encryption Secret Not Set

**Symptoms:**
```
Error: ENCRYPTION_SECRET must be defined
Cannot encrypt sensitive data
```

**Solution:**
```bash
# 1. Generate new secret
openssl rand -hex 32

# 2. Add to environment
vercel env add ENCRYPTION_SECRET production
# Paste the generated secret

# 3. Redeploy
vercel --prod

# 4. Update all environments
# Development, staging, production should each have unique secrets
```

### Issue: Suspicious Activity Detected

**Symptoms:**
- Multiple failed login attempts
- Unusual API access patterns
- Unexpected file uploads

**Solution:**
```bash
# 1. Check audit logs
psql $DATABASE_URL -c "SELECT * FROM AuditLog WHERE eventType = 'SUSPICIOUS_ACTIVITY' ORDER BY createdAt DESC LIMIT 10;"

# 2. Review IP addresses
# Check if from known malicious sources

# 3. Block offending IPs
# Add to firewall rules or WAF

# 4. Revoke compromised access codes
psql $DATABASE_URL -c "UPDATE ConferenceRoom SET status = 'REVOKED' WHERE accessCode = '[suspicious-code]';"

# 5. Notify security team
# Document incident
# Review security policies
```

### Issue: PII Protection Not Working

**Symptoms:**
- Sensitive data visible in logs
- PII not being redacted

**Solution:**
```bash
# 1. Verify feature flag is enabled
echo $ENABLE_PII_PROTECTION
# Should be "true"

# 2. Check PII detection logic
# Test with sample data containing:
# - SSN, credit card numbers
# - Email addresses, phone numbers

# 3. Update regex patterns if needed
# Ensure all PII types are covered

# 4. Review logs for leaks
vercel logs | grep -E '[0-9]{3}-[0-9]{2}-[0-9]{4}'
# Should not find SSNs

# 5. Implement additional scrubbing
# Add to log middleware
```

---

## Audit System Issues

### Issue: Audit Stuck "In Progress"

**Symptoms:**
- Audit doesn't complete
- Status never updates to "completed"

**Solution:**
```bash
# 1. Check audit timeout setting
echo $AUDIT_TIMEOUT
# Default: 60 minutes

# 2. Check LLM provider status
# See LLM Provider Issues section

# 3. Check audit logs
vercel logs --follow | grep "audit-[audit-id]"

# 4. Manually mark as failed if needed
psql $DATABASE_URL -c "UPDATE Audits SET status = 'failed', error = 'Timeout' WHERE id = '[audit-id]' AND status = 'in_progress' AND created_at < NOW() - INTERVAL '2 hours';"

# 5. Implement better timeout handling
# Add watchdog timer to mark stalled audits as failed
```

### Issue: File Upload Fails

**Symptoms:**
```
Error: File too large
Error: Invalid file type
```

**Solution:**
```bash
# 1. Check file size limit
echo $MAX_FILE_UPLOAD_SIZE
# Default: 100 MB

# 2. Verify file type is allowed
# Allowed: PDF, CSV, XLSX, JSON, XML

# 3. Check Vercel function limits
# Free tier: 4.5 MB
# Pro tier: 50 MB
# Enterprise: 50 MB (can request more)

# 4. Use chunked uploads for large files
# Split files > 10 MB into chunks

# 5. Increase limits if needed
# Update MAX_FILE_UPLOAD_SIZE
# Upgrade Vercel plan
```

### Issue: Audit Results Inaccurate

**Symptoms:**
- Findings don't match actual data
- High false positive rate

**Solution:**
```bash
# 1. Review audit prompt
# Ensure instructions are clear
# Add examples of correct analysis

# 2. Check data quality
# Verify uploaded files are valid
# Check for corruption or formatting issues

# 3. Enable auto-learning
echo $ENABLE_AUTO_LEARNING
# Should be "true"

# 4. Adjust confidence thresholds
# Increase to reduce false positives
# Decrease to reduce false negatives

# 5. Manual review and feedback
# Use human review to train system
# Update prompts based on patterns
```

### Issue: Conference Room Access Code Not Working

**Symptoms:**
- Valid code rejected
- "Access denied" error

**Solution:**
```bash
# 1. Verify code format
# Should be 8 alphanumeric characters

# 2. Check if room is expired
psql $DATABASE_URL -c "SELECT status, expiresAt FROM ConferenceRoom WHERE accessCode = '[code]';"

# 3. Check if code has been used
# If codeUsed = true and firstAccessedAt is set, may be restricted

# 4. Verify IP whitelist (if configured)
# Check client IP matches allowed IPs

# 5. Reset access code if needed
psql $DATABASE_URL -c "UPDATE ConferenceRoom SET codeUsed = false WHERE accessCode = '[code]';"
```

---

## Getting Help

If you can't resolve an issue using this guide:

### 1. Check Documentation
- [Deployment Guide](./DEPLOYMENT.md)
- [API Keys Setup](./API_KEYS_SETUP.md)
- [Launch Runbook](./LAUNCH_RUNBOOK.md)

### 2. Search Logs
```bash
# Vercel logs
vercel logs --follow

# Filter by error
vercel logs | grep -i error

# Last hour
vercel logs --since 1h
```

### 3. Check External Status Pages
- Vercel: https://www.vercel-status.com/
- Stripe: https://status.stripe.com/
- Anthropic: https://status.anthropic.com/
- Google Cloud: https://status.cloud.google.com/
- Supabase: https://status.supabase.com/

### 4. Contact Support
- **Technical Issues**: [DevOps Team]
- **API Issues**: [API Team]
- **Payment Issues**: [Finance Team]
- **Security Issues**: [Security Team]

### 5. Create Issue
```bash
# Document the problem
# Include:
# - What you expected to happen
# - What actually happened
# - Steps to reproduce
# - Error messages
# - Screenshots if applicable

# Open issue in GitHub
gh issue create --title "Issue: [Brief Description]" --body "[Detailed description]"
```

---

## Prevention Best Practices

To avoid common issues:

1. **Always test locally before deploying**
   ```bash
   npm run build
   npm start
   # Test all critical paths
   ```

2. **Use staging environment**
   - Deploy to staging first
   - Run smoke tests
   - Then deploy to production

3. **Monitor proactively**
   - Set up alerts for error rates
   - Watch response times
   - Track API usage

4. **Keep dependencies updated**
   ```bash
   npm outdated
   npm update
   ```

5. **Regular backups**
   - Database snapshots daily
   - Environment variables backed up
   - Configuration as code

6. **Document changes**
   - Update changelog
   - Document configuration changes
   - Keep runbooks current

---

**Remember:** When in doubt, check the logs first. Most issues leave clear traces in application logs, database logs, or provider dashboards.
