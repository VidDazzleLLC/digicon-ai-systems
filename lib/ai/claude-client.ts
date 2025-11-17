// Anthropic Claude API Client
// Provides high-accuracy AI for payroll, compliance, and AI infrastructure systems

import Anthropic from '@anthropic-ai/sdk';

// Initialize with fallback for build time
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || 'sk-ant-placeholder',
});

export interface ClaudeResponse {
  content: string;
  model: string;
  usage?: {
    input_tokens: number;
    output_tokens: number;
  };
}

/**
 * Call Claude Sonnet 4 for high-accuracy tasks
 * Used for: Payroll, Compliance, AI Infrastructure systems
 */
export async function callClaude(
  model: string,
  prompt: string,
  systemPrompt?: string
): Promise<ClaudeResponse> {
  try {
    const response = await anthropic.messages.create({
      model: model || 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      system: systemPrompt || 'You are a helpful AI assistant for enterprise systems.',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    const content = response.content[0];
    const textContent = content.type === 'text' ? content.text : '';

    return {
      content: textContent,
      model: response.model,
      usage: {
        input_tokens: response.usage.input_tokens,
        output_tokens: response.usage.output_tokens,
      },
    };
  } catch (error: any) {
    console.error('Claude API Error:', error.message);
    throw new Error(`Claude API failed: ${error.message}`);
  }
}

/**
 * Call Claude with streaming support
 */
export async function callClaudeStreaming(
  model: string,
  prompt: string,
  onChunk: (text: string) => void,
  systemPrompt?: string
): Promise<ClaudeResponse> {
  try {
    const stream = await anthropic.messages.stream({
      model: model || 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      system: systemPrompt || 'You are a helpful AI assistant for enterprise systems.',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    let fullContent = '';
    for await (const chunk of stream) {
      if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
        const text = chunk.delta.text;
        fullContent += text;
        onChunk(text);
      }
    }

    const finalMessage = await stream.finalMessage();

    return {
      content: fullContent,
      model: finalMessage.model,
      usage: {
        input_tokens: finalMessage.usage.input_tokens,
        output_tokens: finalMessage.usage.output_tokens,
      },
    };
  } catch (error: any) {
    console.error('Claude Streaming API Error:', error.message);
    throw new Error(`Claude Streaming API failed: ${error.message}`);
  }
}
