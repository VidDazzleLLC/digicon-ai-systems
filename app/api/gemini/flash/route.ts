import { NextRequest } from 'next/server';
import { executeGeminiFlash } from '../../../../src/gemini/flashExecutor';
import { GeminiContextManager } from '../../../../src/gemini/contextManager';
import { MCPContext } from '../../../../src/mcp/types';

const contextManager = new GeminiContextManager();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { prompt, code, contextId, context } = body as {
      prompt?: string;
      code?: string;
      contextId?: string;
      context?: Partial<MCPContext>;
    };

    let ctx: MCPContext;
    if (contextId) {
      const found = contextManager.getContext(contextId);
      if (!found) {
        return new Response(JSON.stringify({ ok: false, error: 'Context not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
      }
      ctx = found;
    } else {
      ctx = contextManager.createContext(context);
    }

    const result = await executeGeminiFlash({ prompt, code }, ctx);

    return new Response(JSON.stringify({ ok: true, result }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (err: any) {
    return new Response(JSON.stringify({ ok: false, error: err?.message ?? String(err) }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
