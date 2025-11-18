/**
 * Model Context Protocol (MCP) - Tool Definitions
 * 
 * Sample tool implementations demonstrating MCP capabilities
 */

import { MCPTool, MCPToolResult } from './types';
import { executeCode } from '../sandbox/executor';

/**
 * Code Execution Tool
 * Safely executes code in a sandboxed environment
 */
export const codeExecutionTool: MCPTool = {
  name: 'execute_code',
  description: 'Execute code safely in a sandboxed environment. Supports JavaScript/TypeScript.',
  inputSchema: {
    type: 'object',
    properties: {
      code: {
        type: 'string',
        description: 'The code to execute',
      },
      language: {
        type: 'string',
        description: 'Programming language',
        enum: ['javascript', 'typescript'],
      },
      timeout: {
        type: 'number',
        description: 'Execution timeout in milliseconds (default: 5000)',
      },
    },
    required: ['code', 'language'],
  },
  handler: async (params): Promise<MCPToolResult> => {
    try {
      const result = await executeCode(params.code, {
        timeout: params.timeout || 5000,
        memoryLimit: 128,
        allowedModules: [],
      });

      if (result.success) {
        return {
          content: [
            {
              type: 'text',
              text: `Execution successful (${result.executionTime}ms):\n${result.output}`,
            },
          ],
        };
      } else {
        return {
          content: [
            {
              type: 'text',
              text: `Execution failed:\n${result.error}`,
            },
          ],
          isError: true,
        };
      }
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: `Tool error: ${error instanceof Error ? error.message : 'Unknown error'}`,
          },
        ],
        isError: true,
      };
    }
  },
};

/**
 * File Read Tool
 * Read file contents from the project
 */
export const fileReadTool: MCPTool = {
  name: 'read_file',
  description: 'Read contents of a file from the project',
  inputSchema: {
    type: 'object',
    properties: {
      path: {
        type: 'string',
        description: 'File path relative to project root',
      },
    },
    required: ['path'],
  },
  handler: async (params): Promise<MCPToolResult> => {
    try {
      const fs = await import('fs/promises');
      const path = await import('path');
      
      // Security: Prevent path traversal
      const safePath = path.resolve(process.cwd(), params.path);
      if (!safePath.startsWith(process.cwd())) {
        throw new Error('Invalid path: Path traversal detected');
      }

      const content = await fs.readFile(safePath, 'utf-8');
      return {
        content: [
          {
            type: 'text',
            text: content,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: `Error reading file: ${error instanceof Error ? error.message : 'Unknown error'}`,
          },
        ],
        isError: true,
      };
    }
  },
};

/**
 * Database Query Tool
 * Execute safe database queries
 */
export const databaseQueryTool: MCPTool = {
  name: 'query_database',
  description: 'Query the database using Prisma',
  inputSchema: {
    type: 'object',
    properties: {
      model: {
        type: 'string',
        description: 'Prisma model name (e.g., "user", "apiKey")',
      },
      operation: {
        type: 'string',
        description: 'Operation to perform',
        enum: ['findMany', 'findUnique', 'count'],
      },
      params: {
        type: 'string',
        description: 'JSON string of query parameters',
      },
    },
    required: ['model', 'operation'],
  },
  handler: async (params): Promise<MCPToolResult> => {
    try {
      const { PrismaClient } = await import('@prisma/client');
      const prisma = new PrismaClient();

      // Parse params if provided
      const queryParams = params.params ? JSON.parse(params.params) : {};

      // Execute query
      const result = await (prisma as any)[params.model][params.operation](queryParams);

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: `Database query failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
          },
        ],
        isError: true,
      };
    }
  },
};

/**
 * Get all available tools
 */
export function getAllTools(): MCPTool[] {
  return [
    codeExecutionTool,
    fileReadTool,
    databaseQueryTool,
  ];
}

