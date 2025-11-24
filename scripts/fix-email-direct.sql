-- Direct SQL to fix email typo and mark for resend
-- Run this in Railway PostgreSQL console or via psql

-- Step 1: Update the email address
UPDATE "AuditRequest"
SET
  "customerEmail" = 'connect@viddazzle.com',
  "updatedAt" = NOW(),
  "reportDelivered" = false,  -- Mark as not delivered so it can be resent
  "reportDeliveredAt" = NULL
WHERE "id" = 'cm1dd0h08mhml4t4ju4wsjlxp8';

-- Step 2: Verify the update
SELECT
  "id",
  "companyName",
  "customerEmail",
  "reportId",
  "status",
  "reportDelivered",
  "reportDeliveredAt",
  "paidAt"
FROM "AuditRequest"
WHERE "id" = 'cm1dd0h08mhml4t4ju4wsjlxp8';

-- This will output the updated record to confirm the change
