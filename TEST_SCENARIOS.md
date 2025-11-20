# Audit Workflow - Test Scenarios

## Prerequisites

Before testing, ensure you have:

1. **Environment Variables Configured:**
   ```bash
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   RESEND_API_KEY=re_...  # or SMTP settings
   ```

2. **Development Server Running:**
   ```bash
   npm run dev
   ```

3. **Stripe CLI (for webhook testing):**
   ```bash
   stripe listen --forward-to localhost:3000/api/stripe/webhook
   ```

## Test Scenario 1: Complete Happy Path

### Step 1: Upload Payroll File
```bash
# Create a sample CSV file
cat > /tmp/sample-payroll.csv << 'EOF'
employee_id,name,salary,hours_worked,department
1,John Doe,75000,160,Engineering
2,Jane Smith,65000,160,Marketing
3,Bob Johnson,55000,160,Sales
EOF

# Upload the file
curl -X POST http://localhost:3000/api/audit/upload \
  -F "file=@/tmp/sample-payroll.csv" \
  -F "companyName=Test Company Inc" \
  -F "email=test@example.com" \
  | jq .
```

**Expected Response:**
```json
{
  "success": true,
  "checkoutUrl": "https://checkout.stripe.com/pay/cs_test_...",
  "sessionId": "cs_test_...",
  "reportId": "report_...",
  "auditRequestId": "audit_...",
  "message": "Report generated successfully. Please complete payment to receive your report."
}
```

**Verify:**
- Check that `app/data/audit-requests.json` contains the new request
- Check that `app/temp-reports/{reportId}.json` contains the report
- Status should be "report_ready"

### Step 2: Complete Payment
1. Open the `checkoutUrl` in a browser
2. Use test card: `4242 4242 4242 4242`
3. Enter any future expiry date and CVC
4. Complete the payment

**Verify:**
- Stripe CLI shows webhook event received
- Check console logs for "HANDLING AUDIT PAYMENT"
- Check that audit request status is now "paid"
- Check that email was sent (or logged if no SMTP configured)
- Check that `reportDelivered` is true

### Step 3: Verify Data
```bash
# Check audit request
cat app/data/audit-requests.json | jq '.[0]'

# Verify fields
# - status: "paid"
# - paidAt: timestamp
# - reportDelivered: true
# - reportDeliveredAt: timestamp
```

## Test Scenario 2: Idempotent Webhook

### Step 1: Complete first payment (follow Scenario 1)

### Step 2: Trigger duplicate webhook
```bash
# In Stripe CLI, manually trigger the same event
stripe trigger checkout.session.completed
```

**Expected Behavior:**
- Webhook should detect that payment is already processed
- Should log: "Audit request already marked as paid"
- Should skip email delivery: "Report already delivered - skipping duplicate delivery"
- No duplicate emails sent

**Verify:**
- Only one email was sent
- Audit request still shows single paidAt timestamp
- No errors in console

## Test Scenario 3: Missing Stripe Configuration

### Step 1: Remove Stripe key
```bash
# Temporarily unset STRIPE_SECRET_KEY
unset STRIPE_SECRET_KEY
```

### Step 2: Attempt upload
```bash
curl -X POST http://localhost:3000/api/audit/upload \
  -F "file=@/tmp/sample-payroll.csv" \
  -F "companyName=Test Company" \
  -F "email=test@example.com"
```

**Expected Response:**
```json
{
  "error": "Stripe is not configured. Please set STRIPE_SECRET_KEY environment variable."
}
```

**Verify:**
- Clear error message
- No partial data created
- Application doesn't crash

## Test Scenario 4: Invalid CSV File

### Step 1: Create invalid CSV
```bash
echo "invalid,csv,without\nproper,structure" > /tmp/invalid.csv
```

### Step 2: Upload invalid file
```bash
curl -X POST http://localhost:3000/api/audit/upload \
  -F "file=@/tmp/invalid.csv" \
  -F "companyName=Test Company" \
  -F "email=test@example.com"
```

**Expected Response:**
```json
{
  "error": "CSV parsing failed",
  "details": [ ... ]
}
```

**Verify:**
- No audit request created
- No temp report file created
- Clear error message about parsing

## Test Scenario 5: Expired Session Retrieval

### Step 1: Create a checkout session
```bash
# Upload and get checkout URL
RESPONSE=$(curl -X POST http://localhost:3000/api/audit/upload \
  -F "file=@/tmp/sample-payroll.csv" \
  -F "companyName=Test Company" \
  -F "email=test@example.com")

AUDIT_ID=$(echo $RESPONSE | jq -r '.auditRequestId')
```

### Step 2: Wait for session to expire (or simulate)
```bash
# After 24 hours, or simulate by requesting new session
curl -X POST http://localhost:3000/api/audit/checkout \
  -H "Content-Type: application/json" \
  -d "{\"auditRequestId\": \"$AUDIT_ID\"}"
```

**Expected Response:**
```json
{
  "success": true,
  "checkoutUrl": "https://checkout.stripe.com/...",
  "sessionId": "cs_test_NEW...",
  "message": "Checkout session created successfully"
}
```

**Verify:**
- New session created with new ID
- Old session marked as expired
- New checkout URL works

## Test Scenario 6: Email Fallback (No SMTP)

### Step 1: Disable email configuration
```bash
unset SMTP_HOST
unset SMTP_PORT
unset RESEND_API_KEY
```

### Step 2: Complete payment flow (Scenario 1)

**Expected Behavior:**
- Console shows: "[EMAIL FALLBACK] No email configuration found. Would have sent:"
- Followed by email details
- Audit still marked as paid
- reportDelivered still set to true

**Verify:**
- No email sending errors
- Console logs show fallback message
- Payment processed successfully
- Status updates work correctly

## Test Scenario 7: Report File Missing During Delivery

### Step 1: Create audit request and delete report file
```bash
# Complete upload (Scenario 1, Step 1)
# Then manually delete the report file
rm app/temp-reports/report_*.json
```

### Step 2: Complete payment
```bash
# Complete checkout session
```

**Expected Behavior:**
- Webhook processes payment
- Marks as paid
- Attempts to load report
- Logs error: "Error delivering report"
- Payment still marked successful
- Status is "paid" but reportDelivered may not be set

**Verify:**
- Error logged but webhook doesn't fail
- Payment marked as successful
- Manual intervention needed for report delivery

## Test Scenario 8: Non-CSV File Upload

### Step 1: Try uploading non-CSV file
```bash
echo "This is a text file" > /tmp/test.txt

curl -X POST http://localhost:3000/api/audit/upload \
  -F "file=@/tmp/test.txt" \
  -F "companyName=Test Company" \
  -F "email=test@example.com"
```

**Expected Response:**
```json
{
  "error": "Only CSV files are accepted"
}
```

**Verify:**
- Clear error message
- No audit request created
- No processing attempted

## Test Scenario 9: Missing Required Fields

### Step 1: Upload without email
```bash
curl -X POST http://localhost:3000/api/audit/upload \
  -F "file=@/tmp/sample-payroll.csv" \
  -F "companyName=Test Company"
```

**Expected Response:**
```json
{
  "error": "Company name and email are required"
}
```

### Step 2: Upload without company name
```bash
curl -X POST http://localhost:3000/api/audit/upload \
  -F "file=@/tmp/sample-payroll.csv" \
  -F "email=test@example.com"
```

**Expected Response:**
```json
{
  "error": "Company name and email are required"
}
```

**Verify:**
- Clear validation errors
- No partial data created

## Test Scenario 10: Session URL Fallback

### Step 1: Check session.url in response
```bash
RESPONSE=$(curl -X POST http://localhost:3000/api/audit/upload \
  -F "file=@/tmp/sample-payroll.csv" \
  -F "companyName=Test Company" \
  -F "email=test@example.com")

echo $RESPONSE | jq '.checkoutUrl'
```

**Expected:**
- URL should be present
- Should start with "https://checkout.stripe.com/"
- Should be a valid Stripe checkout URL

**Verify:**
- URL opens in browser
- Shows Stripe checkout page
- Amount is $249.00

## Performance Tests

### Test 1: Multiple Concurrent Uploads
```bash
# Upload 5 files simultaneously
for i in {1..5}; do
  curl -X POST http://localhost:3000/api/audit/upload \
    -F "file=@/tmp/sample-payroll.csv" \
    -F "companyName=Test Company $i" \
    -F "email=test$i@example.com" &
done
wait
```

**Verify:**
- All requests complete successfully
- No race conditions in file writes
- Each gets unique IDs
- All reports stored correctly

### Test 2: Large CSV File
```bash
# Generate large CSV (1000 rows)
python3 << 'EOF'
import csv
with open('/tmp/large-payroll.csv', 'w') as f:
    writer = csv.writer(f)
    writer.writerow(['employee_id', 'name', 'salary', 'hours_worked'])
    for i in range(1000):
        writer.writerow([i, f'Employee {i}', 50000 + i*1000, 160])
EOF

# Upload
time curl -X POST http://localhost:3000/api/audit/upload \
  -F "file=@/tmp/large-payroll.csv" \
  -F "companyName=Large Company" \
  -F "email=test@example.com"
```

**Expected:**
- Completes within reasonable time (<30s)
- Report generated successfully
- No memory issues

## Manual Verification Checklist

- [ ] Files uploaded successfully create audit requests
- [ ] Checkout sessions are created with correct amount ($249)
- [ ] session.url is always present in response
- [ ] Payment completion triggers webhook
- [ ] Webhook marks audit as paid
- [ ] Email is sent (or logged) after payment
- [ ] Duplicate webhooks don't cause duplicate emails
- [ ] Expired sessions can be recreated
- [ ] Error messages are clear and helpful
- [ ] No sensitive data in logs
- [ ] Build completes without errors
- [ ] No security vulnerabilities (CodeQL passed)
- [ ] Documentation is accurate and complete

## Cleanup After Testing

```bash
# Remove test data
rm app/data/audit-requests.json
rm app/temp-reports/report_*.json

# Remove test files
rm /tmp/sample-payroll.csv
rm /tmp/invalid.csv
rm /tmp/test.txt
rm /tmp/large-payroll.csv
```
