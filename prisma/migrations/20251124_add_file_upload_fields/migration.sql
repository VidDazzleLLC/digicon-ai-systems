-- Add file upload tracking fields to AuditRequest
ALTER TABLE "AuditRequest" ADD COLUMN "originalFileName" TEXT;
ALTER TABLE "AuditRequest" ADD COLUMN "fileUploadedAt" TIMESTAMP(3);
ALTER TABLE "AuditRequest" ADD COLUMN "fileSize" INTEGER;
ALTER TABLE "AuditRequest" ADD COLUMN "fileMimeType" TEXT;
