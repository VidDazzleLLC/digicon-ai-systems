/**
 * Model Context Protocol (MCP) - Type Definitions
 *
 * Consolidated and complete type definitions used across the project.
 */

/**
 * Base MCP Tool Definition
 */
export interface MCPTool {
  name: string;
  description?: string;
  inputSchema?: {
    type: 'object';
    properties: Record<
      string,
      {
        type: string;
        description?: string;
        enum?: string[];
      }
    >;
    required?: string[];
  };
  handler: (params: Record<string, any>, ctx?: MCPContext) => Promise<MCPToolResult>;
}

/**
 * Tool Execution Result
 */
export interface MCPToolResult {
  content: Array<{
    type: 'text' | 'image' | 'resource';
    text?: string;
    data?: string;
    mimeType?: string;
  }>;
  isError?: boolean;
  status?: 'ok' | 'error' | 'partial';
  metadata?: Record<string, any>;
}

/**
 * MCP Server Configuration
 */
export interface MCPServerConfig {
  name: string;
  version: string;
  capabilities: {
    tools?: boolean;
    resources?: boolean;
    prompts?: boolean;
    codeExecution?: boolean;
  };
  maxConnections?: number;
}

/**
 * Tool Registry Entry
 */
export interface ToolRegistryEntry {
  tool: MCPTool;
  category?: string;
  tags?: string[];
  usageExample?: string;
}

/**
 * Context Management
 */
export interface MCPContext {
  conversationId: string;
  userId?: string;
  tools?: string[]; // List of available tool names
  maxTokens?: number;
  currentTokens?: number;
  locale?: string;
  metadata?: Record<string, any>;
}

/**
 * Tool Execution Context
 */
export interface ToolExecutionContext {
  userId?: string;
  conversationId?: string;
  timestamp?: Date | string;
  metadata?: Record<string, any>;
}

/**
 * File System Browser Entry
 */
export interface FileSystemEntry {
  name: string;
  type: 'file' | 'directory';
  path: string;
  description?: string;
  size?: number;
  modified?: Date | string;
}

/**
 * MCP Resource Definition
 */
export interface MCPResource {
  uri: string;
  name: string;
  description?: string;
  mimeType?: string;
  size?: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

/**
 * MCP Prompt Definition
 */
export interface MCPPrompt {
  name: string;
  description?: string;
  arguments?: Array<{
    name: string;
    description?: string;
    required?: boolean;
    type?: string;
    default?: any;
  }>;
  example?: string;
}

/**
 * Sandbox Execution Options
 *
 * Backwards-compatibility: some code paths use `timeout` and `memoryLimit`.
 * Newer code may prefer `timeoutMs` and `memoryLimitMb`. Accept both names.
 */
export interface SandboxOptions {
  // primary / legacy name (milliseconds)
  timeout?: number;
  // alternative clearer name (milliseconds)
  timeoutMs?: number;

  // primary / legacy name (megabytes)
  memoryLimit?: number;
  // alternative clearer name (megabytes)
  memoryLimitMb?: number;

  // whether network access in the sandbox is allowed
  allowNetwork?: boolean;

  // modules that are allowed to be required/imported
  allowedModules?: string[];

  // environment variables for the sandboxed execution
  env?: Record<string, string>;

  // additional provider-specific options (open-ended)
  [key: string]: any;
}

/**
 * Code Execution Result
 *
 * Made backwards-compatible: many callers expect `success` and `output`.
 * Some older code uses `stdout`/`stderr` and `executionTime` (ms). We include
 * aliases for both shapes so the rest of the codebase can reference either.
 */
export interface CodeExecutionResult {
  // canonical success flag used by tools.ts and other callers
  success: boolean;

  // human-readable/text output (preferred)
  output?: string;

  // console-like fields (legacy / runtime-specific)
  stdout?: string;
  stderr?: string;

  // exit / runtime metadata
  exitCode?: number;

  // execution time in milliseconds (common name)
  executionTimeMs?: number;
  // legacy alias: executionTime
  executionTime?: number;

  // memory used in MB (common name)
  memoryUsedMb?: number;
  // legacy alias
  memoryUsed?: number;

  // error message if success is false
  error?: string;

  // provider-specific artifacts (e.g., generated files, URIs)
  artifacts?: Array<{ uri: string; mimeType?: string; metadata?: Record<string, any> }>;

  // free-form metadata for additional data
  metadata?: Record<string, any>;
}

/**
 * Tool Discovery Query
 */
export interface ToolDiscoveryQuery {
  query?: string;
  categories?: string[];
  tags?: string[];
  page?: number;
  pageSize?: number;
}

/**
 * MCP Error Types
 */
export class MCPError extends Error {
  code?: string;
  details?: any;
  constructor(message: string, code?: string, details?: any) {
    super(message);
    this.name = 'MCPError';
    this.code = code;
    this.details = details;
  }
}

export default {
  MCPTool,
  MCPToolResult,
  MCPServerConfig,
  ToolRegistryEntry,
  MCPContext,
  ToolExecutionContext,
  FileSystemEntry,
  MCPResource,
  MCPPrompt,
  SandboxOptions,
  CodeExecutionResult,
  ToolDiscoveryQuery,
  MCPError,
};
