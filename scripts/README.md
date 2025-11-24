# Admin Scripts

## Fix Email and Resend Report

### Option 1: Using API Endpoint (Railway Console)

Call the admin API endpoint via Railway console or curl:

```bash
curl -X POST https://your-app.railway.app/api/admin/fix-email-resend \
  -H "Content-Type: application/json" \
  -d '{
    "auditRequestId": "cm1dd0h08mhml4t4ju4wsjlxp8",
    "newEmail": "connect@viddazzle.com"
  }'
```

### Option 2: Using TypeScript Script (Local)

If you have the repo cloned locally:

```bash
# Install tsx if not already installed
npm install -g tsx

# Run the script
tsx scripts/fix-email-and-resend.ts
```

**Note:** Edit the script constants before running:
- `AUDIT_REQUEST_ID`
- `OLD_EMAIL`
- `NEW_EMAIL`

### What it does:

1. ✅ Updates the email address in the database
2. ✅ Finds the most recent audit report
3. ✅ Resends the report to the corrected email
4. ✅ Updates the delivery status

### Environment Variables Required:

- `SMTP_HOST` + `SMTP_PORT` + `SMTP_USER` + `SMTP_PASS` (for SMTP)
- OR `RESEND_API_KEY` (for Resend)

Without email configuration, the script will update the database but cannot send emails.
