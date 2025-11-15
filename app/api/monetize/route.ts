import { NextResponse } from 'next/server';
import Together from 'together-ai';

export async function POST(req: Request) {
  const apiKey = process.env.TOGETHER_API_KEY;
  
  if (!apiKey) {
    return NextResponse.json(
      { error: 'TOGETHER_API_KEY is not configured' },
      { status: 500 }
    );
  }

  const together = new Together({ apiKey });
  const { post } = await req.json();
  const completion = await together.chat.completions.create({
    model: 'meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo',
    messages: [{ role: 'user', content: `Monetize this post into 10 variants (ads, NFTs, affiliate): ${post}` }],
  });
  return NextResponse.json({ variants: completion.choices[0].message.content });
}
