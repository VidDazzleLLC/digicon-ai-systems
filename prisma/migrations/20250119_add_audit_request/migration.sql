-- CreateTable AuditRequest
CREATE TABLE "AuditRequest" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "companyName" TEXT NOT NULL,
    "contactName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending'
);

-- CreateIndex AuditRequest_email_idx
CREATE INDEX "AuditRequest_email_idx" ON "AuditRequest"("email");

-- CreateIndex AuditRequest_createdAt_idx
CREATE INDEX "AuditRequest_createdAt_idx" ON "AuditRequest"("createdAt");

-- CreateIndex AuditRequest_status_idx
CREATE INDEX "AuditRequest_status_idx" ON "AuditRequest"("status");
