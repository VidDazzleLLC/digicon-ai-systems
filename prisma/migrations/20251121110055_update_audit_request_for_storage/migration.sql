-- AlterTable AuditRequest - Update schema for database storage
-- Rename email to customerEmail
ALTER TABLE "AuditRequest" RENAME COLUMN "email" TO "customerEmail";

-- Drop old contactName column (not used)
ALTER TABLE "AuditRequest" DROP COLUMN "contactName";

-- Add new columns for report information
ALTER TABLE "AuditRequest" ADD COLUMN "reportId" TEXT;
ALTER TABLE "AuditRequest" ADD COLUMN "reportFilePath" TEXT;
ALTER TABLE "AuditRequest" ADD COLUMN "reportUrl" TEXT;

-- Add payment information
ALTER TABLE "AuditRequest" ADD COLUMN "paidAt" TIMESTAMP(3);
ALTER TABLE "AuditRequest" ADD COLUMN "stripeSessionId" TEXT;

-- Add delivery status
ALTER TABLE "AuditRequest" ADD COLUMN "reportDelivered" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "AuditRequest" ADD COLUMN "reportDeliveredAt" TIMESTAMP(3);

-- Add CSV processing data (temporary storage)
ALTER TABLE "AuditRequest" ADD COLUMN "csvData" TEXT;
ALTER TABLE "AuditRequest" ADD COLUMN "rowCount" INTEGER;
ALTER TABLE "AuditRequest" ADD COLUMN "columns" TEXT;

-- Drop old index on email column
DROP INDEX IF EXISTS "AuditRequest_email_idx";

-- Create new indexes
CREATE INDEX "AuditRequest_customerEmail_idx" ON "AuditRequest"("customerEmail");
CREATE INDEX "AuditRequest_stripeSessionId_idx" ON "AuditRequest"("stripeSessionId");
