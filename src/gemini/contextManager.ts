import { MCPContext } from '../mcp/types';

export class GeminiContextManager {
  private contexts: Map<string, MCPContext> = new Map();

  createContext(initial?: Partial<MCPContext>): MCPContext {
    const id = initial?.id ?? `ctx_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const ctx: MCPContext = {
      id,
      userId: initial?.userId,
      metadata: initial?.metadata ?? {},
    };
    this.contexts.set(id, ctx);
    return ctx;
  }

  getContext(id: string): MCPContext | undefined {
    return this.contexts.get(id);
  }

  updateContext(id: string, patch: Partial<MCPContext>): MCPContext | undefined {
    const cur = this.contexts.get(id);
    if (!cur) return undefined;
    const updated: MCPContext = { ...cur, ...patch, metadata: { ...(cur.metadata ?? {}), ...(patch.metadata ?? {}) } };
    this.contexts.set(id, updated);
    return updated;
  }

  deleteContext(id: string) {
    this.contexts.delete(id);
  }

  listContextIds(): string[] {
    return Array.from(this.contexts.keys());
  }
}
