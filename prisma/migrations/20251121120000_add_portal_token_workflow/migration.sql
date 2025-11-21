-- AlterTable AuditRequest - Add Portal Token Workflow Fields
ALTER TABLE "AuditRequest" ADD COLUMN "portalToken" TEXT,
ADD COLUMN "portalTokenExpiresAt" TIMESTAMP(3),
ADD COLUMN "personalName" TEXT,
ADD COLUMN "tokenUsedAt" TIMESTAMP(3);

-- Create unique constraint for portal token
CREATE UNIQUE INDEX "AuditRequest_portalToken_key" ON "AuditRequest"("portalToken");
