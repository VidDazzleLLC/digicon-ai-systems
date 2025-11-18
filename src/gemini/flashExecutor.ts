import fetch from 'node-fetch';
import { MCPContext } from '../mcp/types';
import { executeInSandbox } from '../mcp/executor/sandbox';

type GeminiResponse = {
  status: string;
  output?: any;
  error?: string;
};

export async function executeGeminiFlash(input: { prompt?: string; code?: string }, ctx: MCPContext): Promise<GeminiResponse> {
  const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
  if (!apiKey) {
    if (input.code) {
      try {
        const out = await executeInSandbox(input.code, ctx, { timeoutMs: 2000 });
        return { status: 'fallback_sandbox', output: out };
      } catch (err: any) {
        return { status: 'error', error: `Sandbox fallback failed: ${err?.message ?? String(err)}` };
      }
    }
    return { status: 'error', error: 'No Gemini API key configured and no code provided for sandbox fallback.' };
  }

  const url = 'https://generativelanguage.googleapis.com/v1beta2/models/gemini-2.0/flash:generate';

  try {
    const payload: any = {};
    if (input.prompt) payload.prompt = input.prompt;
    if (input.code) payload.code = input.code;

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      return { status: 'error', error: `Gemini API error: ${res.status} ${text}` };
    }

    const json = await res.json();
    return { status: 'ok', output: json };
  } catch (err: any) {
    if (input.code) {
      try {
        const out = await executeInSandbox(input.code, ctx, { timeoutMs: 2000 });
        return { status: 'fallback_sandbox', output: out };
      } catch (err2) {
        return { status: 'error', error: `Gemini error and sandbox fallback failed: ${err?.message ?? String(err)}, ${err2?.message ?? String(err2)}` };
      }
    }
    return { status: 'error', error: `Gemini execution error: ${err?.message ?? String(err)}` };
  }
}
