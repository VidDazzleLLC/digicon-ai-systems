/**
 * Model Context Protocol (MCP) - Server Implementation
 * 
 * Core MCP server that handles tool registration, execution, and management
 */

import {
  MCPTool,
  MCPToolResult,
  MCPServerConfig,
  MCPContext,
  ToolExecutionContext,
  MCPError,
} from './types';

/**
 * MCP Server Class
 * Manages tools, resources, and prompts for the MCP protocol
 */
export class MCPServer {
  private tools: Map<string, MCPTool> = new Map();
  private config: MCPServerConfig;
  private contexts: Map<string, MCPContext> = new Map();

  constructor(config: MCPServerConfig) {
    this.config = config;
  }

  /**
   * Register a new tool
   */
  registerTool(tool: MCPTool): void {
    if (this.tools.has(tool.name)) {
      throw new MCPError(
        `Tool ${tool.name} is already registered`,
        'DUPLICATE_TOOL'
      );
    }
    this.tools.set(tool.name, tool);
  }

  /**
   * Register multiple tools
   */
  registerTools(tools: MCPTool[]): void {
    for (const tool of tools) {
      this.registerTool(tool);
    }
  }

  /**
   * Get list of all available tools
   */
  listTools(): MCPTool[] {
    return Array.from(this.tools.values());
  }

  /**
   * Get a specific tool by name
   */
  getTool(name: string): MCPTool | undefined {
    return this.tools.get(name);
  }

  /**
   * Execute a tool with given parameters
   */
  async executeTool(
    toolName: string,
    params: Record<string, any>,
    context: ToolExecutionContext
  ): Promise<MCPToolResult> {
    const tool = this.tools.get(toolName);
    
    if (!tool) {
      throw new MCPError(
        `Tool ${toolName} not found`,
        'TOOL_NOT_FOUND'
      );
    }

    // Validate required parameters
    if (tool.inputSchema.required) {
      for (const required of tool.inputSchema.required) {
        if (!(required in params)) {
          throw new MCPError(
            `Required parameter ${required} is missing`,
            'MISSING_PARAMETER',
            { required, tool: toolName }
          );
        }
      }
    }

    try {
      const result = await tool.handler(params);
      return result;
    } catch (error) {
      throw new MCPError(
        `Tool execution failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
        'EXECUTION_ERROR',
        { tool: toolName, error }
      );
    }
  }

  /**
   * Create or update a context for a conversation
   */
  createContext(
    conversationId: string,
    userId: string,
    maxTokens: number = 100000
  ): MCPContext {
    const context: MCPContext = {
      conversationId,
      userId,
      tools: Array.from(this.tools.keys()),
      maxTokens,
      currentTokens: 0,
    };
    
    this.contexts.set(conversationId, context);
    return context;
  }

  /**
   * Get context for a conversation
   */
  getContext(conversationId: string): MCPContext | undefined {
    return this.contexts.get(conversationId);
  }

  /**
   * Update token usage for a context
   */
  updateTokenUsage(conversationId: string, tokensUsed: number): void {
    const context = this.contexts.get(conversationId);
    if (context) {
      context.currentTokens += tokensUsed;
    }
  }

  /**
   * Get server capabilities
   */
  getCapabilities(): MCPServerConfig['capabilities'] {
    return this.config.capabilities;
  }

  /**
   * Get server info
   */
  getInfo(): MCPServerConfig {
    return this.config;
  }

  /**
   * Clear all contexts (useful for cleanup)
   */
  clearContexts(): void {
    this.contexts.clear();
  }

  /**
   * Remove a specific context
   */
  removeContext(conversationId: string): boolean {
    return this.contexts.delete(conversationId);
  }
}

/**
 * Create a default MCP server instance
 */
export function createMCPServer(): MCPServer {
  const config: MCPServerConfig = {
    name: 'Digicon AI MCP Server',
    version: '1.0.0',
    capabilities: {
      tools: true,
      resources: true,
      prompts: true,
    },
  };

  return new MCPServer(config);
}

