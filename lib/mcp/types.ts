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
 */
export interface SandboxOptions {
  timeoutMs?: number;
  memoryLimitMb?: number;
  allowNetwork?: boolean;
  allowedModules?: string[];
}

/**
 * Code Execution Result
 */
export interface CodeExecutionResult {
  stdout?: string;
  stderr?: string;
  exitCode?: number;
  executionTimeMs?: number;
  error?: string;
  artifacts?: Array<{ uri: string; mimeType?: string }>;
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
