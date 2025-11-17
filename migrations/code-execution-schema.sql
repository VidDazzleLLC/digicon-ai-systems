
    -- Create enum types
    DO $$ BEGIN
      CREATE TYPE "ConferenceRoomStatus" AS ENUM (
        'ACTIVE', 'EXPIRED', 'CLOSED_WON', 'CLOSED_LOST', 'REVOKED', 'SUSPENDED'
      );
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      CREATE TYPE "FileCategory" AS ENUM (
        'PAYROLL', 'FINANCIAL', 'HRIS', 'ERP', 'CRM', 'COMPLIANCE', 'AI_LOGS', 'OTHER'
      );
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      CREATE TYPE "AuditEventType" AS ENUM (
        'ROOM_CREATED', 'ACCESS_CODE_SENT', 'ACCESS_ATTEMPT_SUCCESS', 'ACCESS_ATTEMPT_FAILED',
        'FILE_UPLOADED', 'FILE_DOWNLOADED', 'FILE_DELETED', 'ROOM_ACCESSED', 'MFA_ENABLED',
        'MFA_VERIFIED', 'IP_WHITELIST_UPDATED', 'ROOM_EXPIRED', 'ROOM_CLOSED', 'ROOM_REVOKED',
        'SUSPICIOUS_ACTIVITY'
      );
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      CREATE TYPE "ExecutionStatus" AS ENUM (
        'QUEUED', 'RUNNING', 'SUCCESS', 'FAILED', 'TIMEOUT', 'MEMORY_ERROR', 'CANCELLED'
      );
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;
  


    CREATE TABLE IF NOT EXISTS "ToolCategory" (
      id TEXT PRIMARY KEY,
      "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      name TEXT UNIQUE NOT NULL,
      description TEXT NOT NULL,
      icon TEXT
    );

    CREATE INDEX IF NOT EXISTS "ToolCategory_name_idx" ON "ToolCategory"(name);
  


    CREATE TABLE IF NOT EXISTS "Tool" (
      id TEXT PRIMARY KEY,
      "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      name TEXT UNIQUE NOT NULL,
      description TEXT NOT NULL,
      version TEXT DEFAULT '1.0.0',
      "categoryId" TEXT NOT NULL,
      "codeTemplate" TEXT NOT NULL,
      language TEXT NOT NULL,
      "requiredPackages" TEXT[] DEFAULT '{}',
      "usageCount" INTEGER DEFAULT 0,
      "lastUsedAt" TIMESTAMP,
      "averageExecTime" DOUBLE PRECISION,
      "requiresSandbox" BOOLEAN DEFAULT true,
      "maxMemoryMB" INTEGER DEFAULT 512,
      "maxTimeoutSec" INTEGER DEFAULT 30,
      active BOOLEAN DEFAULT true,
      deprecated BOOLEAN DEFAULT false,
      FOREIGN KEY ("categoryId") REFERENCES "ToolCategory"(id) ON DELETE CASCADE
    );

    CREATE INDEX IF NOT EXISTS "Tool_categoryId_idx" ON "Tool"("categoryId");
    CREATE INDEX IF NOT EXISTS "Tool_name_idx" ON "Tool"(name);
    CREATE INDEX IF NOT EXISTS "Tool_active_idx" ON "Tool"(active);
  


    CREATE TABLE IF NOT EXISTS "CodeSnippet" (
      id TEXT PRIMARY KEY,
      "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      name TEXT UNIQUE NOT NULL,
      description TEXT NOT NULL,
      category TEXT NOT NULL,
      code TEXT NOT NULL,
      language TEXT NOT NULL,
      "usageCount" INTEGER DEFAULT 0,
      "successRate" DOUBLE PRECISION DEFAULT 100.0,
      "lastUsedAt" TIMESTAMP,
      "learnedFrom" TEXT,
      tags TEXT[] DEFAULT '{}',
      "avgExecTime" DOUBLE PRECISION,
      "avgCost" DOUBLE PRECISION
    );

    CREATE INDEX IF NOT EXISTS "CodeSnippet_name_idx" ON "CodeSnippet"(name);
    CREATE INDEX IF NOT EXISTS "CodeSnippet_category_idx" ON "CodeSnippet"(category);
    CREATE INDEX IF NOT EXISTS "CodeSnippet_tags_idx" ON "CodeSnippet" USING GIN(tags);
  


    CREATE TABLE IF NOT EXISTS "SandboxExecution" (
      id TEXT PRIMARY KEY,
      "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      "executionId" TEXT UNIQUE NOT NULL,
      "sessionId" TEXT,
      "toolId" TEXT,
      language TEXT NOT NULL,
      "codeHash" TEXT NOT NULL,
      "codeSize" INTEGER NOT NULL,
      "inputSize" INTEGER NOT NULL,
      "outputSize" INTEGER NOT NULL,
      "inputHash" TEXT NOT NULL,
      "outputHash" TEXT NOT NULL,
      "piiDetectedInput" BOOLEAN DEFAULT false,
      "piiDetectedOutput" BOOLEAN DEFAULT false,
      "piiMasked" BOOLEAN DEFAULT false,
      "piiTypes" TEXT[] DEFAULT '{}',
      status "ExecutionStatus" NOT NULL,
      "exitCode" INTEGER,
      "errorMsg" TEXT,
      "execTime" DOUBLE PRECISION NOT NULL,
      "memoryUsed" DOUBLE PRECISION NOT NULL,
      "costTokens" INTEGER DEFAULT 0,
      "costDollars" DOUBLE PRECISION DEFAULT 0.0,
      "maxMemoryMB" INTEGER DEFAULT 512,
      "timeoutSec" INTEGER DEFAULT 30,
      "timedOut" BOOLEAN DEFAULT false,
      "sandboxId" TEXT NOT NULL,
      "agentType" TEXT,
      "userId" TEXT,
      FOREIGN KEY ("toolId") REFERENCES "Tool"(id) ON DELETE SET NULL
    );

    CREATE INDEX IF NOT EXISTS "SandboxExecution_executionId_idx" ON "SandboxExecution"("executionId");
    CREATE INDEX IF NOT EXISTS "SandboxExecution_sessionId_idx" ON "SandboxExecution"("sessionId");
    CREATE INDEX IF NOT EXISTS "SandboxExecution_toolId_idx" ON "SandboxExecution"("toolId");
    CREATE INDEX IF NOT EXISTS "SandboxExecution_status_idx" ON "SandboxExecution"(status);
    CREATE INDEX IF NOT EXISTS "SandboxExecution_createdAt_idx" ON "SandboxExecution"("createdAt");
    CREATE INDEX IF NOT EXISTS "SandboxExecution_agentType_idx" ON "SandboxExecution"("agentType");
  


    CREATE TABLE IF NOT EXISTS "GeminiFileIndex" (
      id TEXT PRIMARY KEY,
      "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      "fileName" TEXT NOT NULL,
      "fileType" TEXT NOT NULL,
      "fileSize" INTEGER NOT NULL,
      "filePath" TEXT NOT NULL,
      "geminiFileId" TEXT UNIQUE NOT NULL,
      "indexStatus" TEXT DEFAULT 'INDEXING',
      "queryCount" INTEGER DEFAULT 0,
      "lastQueriedAt" TIMESTAMP,
      "expiresAt" TIMESTAMP,
      category TEXT,
      tags TEXT[] DEFAULT '{}'
    );

    CREATE INDEX IF NOT EXISTS "GeminiFileIndex_geminiFileId_idx" ON "GeminiFileIndex"("geminiFileId");
    CREATE INDEX IF NOT EXISTS "GeminiFileIndex_indexStatus_idx" ON "GeminiFileIndex"("indexStatus");
    CREATE INDEX IF NOT EXISTS "GeminiFileIndex_category_idx" ON "GeminiFileIndex"(category);
  


    CREATE TABLE IF NOT EXISTS "CostTracking" (
      id TEXT PRIMARY KEY,
      "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      date TIMESTAMP UNIQUE NOT NULL,
      period TEXT NOT NULL,
      "totalExecutions" INTEGER DEFAULT 0,
      "successfulExecutions" INTEGER DEFAULT 0,
      "failedExecutions" INTEGER DEFAULT 0,
      "totalCostDollars" DOUBLE PRECISION DEFAULT 0.0,
      "avgCostPerExecution" DOUBLE PRECISION DEFAULT 0.0,
      "totalTokens" INTEGER DEFAULT 0,
      "promptTokens" INTEGER DEFAULT 0,
      "completionTokens" INTEGER DEFAULT 0,
      "cachedTokens" INTEGER DEFAULT 0,
      "avgExecTime" DOUBLE PRECISION DEFAULT 0.0,
      "totalExecTime" DOUBLE PRECISION DEFAULT 0.0,
      "traditionalMCPCost" DOUBLE PRECISION,
      "costSavingsPercent" DOUBLE PRECISION
    );

    CREATE INDEX IF NOT EXISTS "CostTracking_date_idx" ON "CostTracking"(date);
    CREATE INDEX IF NOT EXISTS "CostTracking_period_idx" ON "CostTracking"(period);
  