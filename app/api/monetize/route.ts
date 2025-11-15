import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.GROK_API_KEY });

export async function POST(req: Request) {
  const { post } = await req.json();
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini', // Route to Grok via MCP
    messages: [{ role: 'user', content: 'Monetize this post into 10 variants (ads, NFTs, affiliate)' }],
  });
  return NextResponse.json({ variants: completion.choices[0].message.content });
}
