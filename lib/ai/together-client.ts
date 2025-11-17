// Together.ai API Client
// Provides high-volume, cost-effective AI for HRIS, CRM, and ERP systems
// Supports Llama 4 Maverick and DeepSeek-V3 fallback

import Together from 'together-ai';

// Initialize with fallback for build time
const together = new Together({
  apiKey: process.env.TOGETHER_API_KEY || 'placeholder',
});

export interface TogetherResponse {
  content: string;
  model: string;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

/**
 * Call Together.ai models (Llama 4 Maverick or DeepSeek-V3)
 * Used for: HRIS, CRM, ERP systems (high volume)
 */
export async function callTogetherAI(
  model: string,
  prompt: string,
  systemPrompt?: string
): Promise<TogetherResponse> {
  try {
    const response = await together.chat.completions.create({
      model: model || 'meta-llama/Llama-3.3-70B-Instruct-Turbo',
      messages: [
        {
          role: 'system',
          content: systemPrompt || 'You are a helpful AI assistant for enterprise systems.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 4096,
      temperature: 0.7,
      top_p: 0.7,
      top_k: 50,
      repetition_penalty: 1,
    });

    const content = response.choices[0]?.message?.content || '';

    return {
      content,
      model: response.model,
      usage: response.usage
        ? {
            prompt_tokens: response.usage.prompt_tokens,
            completion_tokens: response.usage.completion_tokens,
            total_tokens: response.usage.total_tokens,
          }
        : undefined,
    };
  } catch (error: any) {
    console.error('Together.ai API Error:', error.message);
    throw new Error(`Together.ai API failed: ${error.message}`);
  }
}

/**
 * Call Together.ai with streaming support
 */
export async function callTogetherAIStreaming(
  model: string,
  prompt: string,
  onChunk: (text: string) => void,
  systemPrompt?: string
): Promise<TogetherResponse> {
  try {
    const stream = await together.chat.completions.create({
      model: model || 'meta-llama/Llama-3.3-70B-Instruct-Turbo',
      messages: [
        {
          role: 'system',
          content: systemPrompt || 'You are a helpful AI assistant for enterprise systems.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 4096,
      temperature: 0.7,
      stream: true,
    });

    let fullContent = '';
    let finalModel = model;
    let usage: TogetherResponse['usage'] = undefined;

    for await (const chunk of stream) {
      const delta = chunk.choices[0]?.delta?.content || '';
      if (delta) {
        fullContent += delta;
        onChunk(delta);
      }
      if (chunk.model) {
        finalModel = chunk.model;
      }
      if (chunk.usage) {
        usage = {
          prompt_tokens: chunk.usage.prompt_tokens,
          completion_tokens: chunk.usage.completion_tokens,
          total_tokens: chunk.usage.total_tokens,
        };
      }
    }

    return {
      content: fullContent,
      model: finalModel,
      usage,
    };
  } catch (error: any) {
    console.error('Together.ai Streaming API Error:', error.message);
    throw new Error(`Together.ai Streaming API failed: ${error.message}`);
  }
}
