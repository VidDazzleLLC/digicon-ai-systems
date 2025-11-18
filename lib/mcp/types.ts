/**
 * Model Context Protocol (MCP) - Type Definitions
 * 
 * Comprehensive type system for MCP implementation
 * Provides type safety for all MCP operations
 */

/**
 * Base MCP Tool Definition
 */
export interface MCPTool {
  name: string;
  description: string;
  inputSchema: {
    type: 'object';
    properties: Record<string, {
      type: string;
      description: string;
      enum?: string[];
    }>;
    required?: string[];
  };
  handler: (params: Record<string, any>) => Promise<MCPToolResult>;
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
  };
}

/**
 * Tool Registry Entry
 */
export interface ToolRegistryEntry {
  tool: MCPTool;
  category: string;
  tags: string[];
  usageExample: string;
}

/**
 * Context Management
 */
export interface MCPContext {
  conversationId: string;
  userId: string;
  tools: string[]; // List of available tool names
  maxTokens: number;
  currentTokens: number;
}

/**
 * Tool Execution Context
 */
export interface ToolExecutionContext {
  userId: string;
  conversationId: string;
  timestamp: Date;
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
  modified?: Date;
}

/**
 * MCP Resource Definition
 */
export interface MCPResource {
  uri: string;
  name: string;
  description?: string;
  mimeType?: string;
}

/**
 * MCP Prompt Definition
 */
export interface MCPPrompt {
  name: string;
  description: string;
  arguments?: Array<{
    name: string;
    description: string;
    required: boolean;
  }>;
}

/**
 * Sandbox Execution Options
 */
export interface SandboxOptions {
  timeout: number; // milliseconds
  memoryLimit: number; // MB
  allowedModules: string[];
  env?: Record<string, string>;
}

/**
 * Code Execution Result
 */
export interface CodeExecutionResult {
  success: boolean;
  output?: string;
  error?: string;
  executionTime: number; // milliseconds
  memoryUsed?: number; // MB
}

/**
 * Tool Discovery Query
 */
export interface ToolDiscoveryQuery {
  category?: string;
  tags?: string[];
  searchTerm?: string;
}

/**
 * MCP Error Types
 */
export class MCPError extends Error {
  constructor(
    message: string,
    public code: string,
    public details?: any
  ) {
    super(message);
    this.name = 'MCPError';
  }
}

