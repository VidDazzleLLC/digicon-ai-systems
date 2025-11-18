export interface MCPContext {
  id: string;
  userId?: string;
  metadata?: Record<string, any>;
}

export type MCPTool = {
  name: string;
  description: string;
  execute: (args: any, ctx: MCPContext) => Promise<any>;
};

export interface MCPServerOptions {
  port?: number;
  allowRemote?: boolean;
  tools?: MCPTool[];
}
