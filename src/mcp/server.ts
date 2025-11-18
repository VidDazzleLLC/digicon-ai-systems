import http from 'http';
import { MCPContext, MCPServerOptions, MCPTool } from './types';

export class MCPServer {
  private tools: Map<string, MCPTool> = new Map();
  private server?: http.Server;
  private options: MCPServerOptions;

  constructor(options: MCPServerOptions = {}) {
    this.options = options;
    (options.tools || []).forEach((t) => this.registerTool(t));
  }

  registerTool(tool: MCPTool) {
    if (!tool || !tool.name) throw new Error('Tool must have a name');
    this.tools.set(tool.name, tool);
  }

  unregisterTool(name: string) {
    this.tools.delete(name);
  }

  async handleExecute(payload: { toolName: string; args?: any; context?: MCPContext }) {
    const { toolName, args, context } = payload;
    const tool = this.tools.get(toolName);
    if (!tool) throw new Error(`Tool not found: ${toolName}`);
    const ctx: MCPContext = context ?? { id: 'anonymous' };
    return await tool.execute(args, ctx);
  }

  start(): Promise<void> {
    const port = this.options.port ?? 4123;
    return new Promise((resolve) => {
      this.server = http.createServer(async (req, res) => {
        try {
          if (req.method === 'POST' && req.url === '/mcp/execute') {
            let body = '';
            req.on('data', (chunk) => (body += chunk));
            req.on('end', async () => {
              const json = body ? JSON.parse(body) : {};
              try {
                const result = await this.handleExecute(json);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ ok: true, result }));
              } catch (err: any) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ ok: false, error: err?.message ?? String(err) }));
              }
            });
            return;
          }

          res.writeHead(404);
          res.end('Not found');
        } catch (err: any) {
          res.writeHead(500);
          res.end(String(err));
        }
      });

      this.server!.listen(port, () => resolve());
    });
  }

  stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.server) return resolve();
      this.server.close((err) => (err ? reject(err) : resolve()));
    });
  }
}
