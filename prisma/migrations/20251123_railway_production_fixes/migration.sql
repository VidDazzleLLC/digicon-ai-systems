-- Railway Production Fixes Migration
-- This migration adds fields to support Railway deployment:
-- - Store reports in database instead of filesystem
-- - Track processing status and errors
-- - Add metadata for debugging and monitoring

-- Add new fields to AuditRequest table
ALTER TABLE "AuditRequest"
  ADD COLUMN IF NOT EXISTS "reportData" JSONB,
  ADD COLUMN IF NOT EXISTS "processingStartedAt" TIMESTAMP(3),
  ADD COLUMN IF NOT EXISTS "processingCompletedAt" TIMESTAMP(3),
  ADD COLUMN IF NOT EXISTS "processingError" TEXT,
  ADD COLUMN IF NOT EXISTS "aiModel" TEXT,
  ADD COLUMN IF NOT EXISTS "processingTimeMs" INTEGER;

-- Update existing status values to support new workflow states
-- Note: This is safe because old values (pending, report_ready, paid) are still valid
-- New possible values: processing, completed, failed

-- Add comment to status field
COMMENT ON COLUMN "AuditRequest"."status" IS 'Status: pending | processing | report_ready | paid | completed | failed';

-- Add comment to reportData field
COMMENT ON COLUMN "AuditRequest"."reportData" IS 'Full report stored as JSON (Railway-safe, no filesystem dependency)';
