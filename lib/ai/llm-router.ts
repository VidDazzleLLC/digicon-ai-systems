// Hybrid LLM Router
// Intelligent model selection based on system type
// Routes to Claude Sonnet 4 for high accuracy, Llama 4 Maverick for high volume
// Falls back to DeepSeek-V3 if primary fails

import { callClaude } from './claude-client';
import { callTogetherAI } from './together-client';

export type SystemType = 'payroll' | 'hris' | 'erp' | 'crm' | 'compliance' | 'ai_infrastructure';

export interface LLMConfig {
  primary: string;
  fallback: string;
  provider: 'anthropic' | 'together-ai';
  costPer1M: {
    input: number;
    output: number;
  };
}

export const LLM_STRATEGY: Record<SystemType, LLMConfig> = {
  // High accuracy systems (use Claude Sonnet 4)
  payroll: {
    primary: 'claude-sonnet-4-20250514',
    fallback: 'deepseek-ai/DeepSeek-V3',
    provider: 'anthropic',
    costPer1M: { input: 3.0, output: 15.0 },
  },
  compliance: {
    primary: 'claude-sonnet-4-20250514',
    fallback: 'deepseek-ai/DeepSeek-V3',
    provider: 'anthropic',
    costPer1M: { input: 3.0, output: 15.0 },
  },
  ai_infrastructure: {
    primary: 'claude-sonnet-4-20250514',
    fallback: 'deepseek-ai/DeepSeek-V3',
    provider: 'anthropic',
    costPer1M: { input: 3.0, output: 15.0 },
  },

  // High volume systems (use Llama 4 Maverick)
  hris: {
    primary: 'meta-llama/Llama-3.3-70B-Instruct-Turbo',
    fallback: 'deepseek-ai/DeepSeek-V3',
    provider: 'together-ai',
    costPer1M: { input: 0.27, output: 0.85 },
  },
  crm: {
    primary: 'meta-llama/Llama-3.3-70B-Instruct-Turbo',
    fallback: 'deepseek-ai/DeepSeek-V3',
    provider: 'together-ai',
    costPer1M: { input: 0.27, output: 0.85 },
  },
  erp: {
    primary: 'meta-llama/Llama-3.3-70B-Instruct-Turbo',
    fallback: 'deepseek-ai/DeepSeek-V3',
    provider: 'together-ai',
    costPer1M: { input: 0.27, output: 0.85 },
  },
};

export interface LLMResponse {
  content: string;
  model: string;
  provider: string;
  usedFallback: boolean;
}

/**
 * Route prompt to appropriate LLM based on system type
 * Automatically falls back to DeepSeek-V3 if primary fails
 */
export async function routeToLLM(
  systemType: SystemType,
  prompt: string,
  systemPrompt?: string
): Promise<LLMResponse> {
  const config = LLM_STRATEGY[systemType];

  if (!config) {
    throw new Error(`Unknown system type: ${systemType}`);
  }

  try {
    // Try primary model
    if (config.provider === 'anthropic') {
      const response = await callClaude(config.primary, prompt, systemPrompt);
      return {
        content: response.content,
        model: response.model,
        provider: 'anthropic',
        usedFallback: false,
      };
    } else {
      const response = await callTogetherAI(config.primary, prompt, systemPrompt);
      return {
        content: response.content,
        model: response.model,
        provider: 'together-ai',
        usedFallback: false,
      };
    }
  } catch (error) {
    // Fallback to DeepSeek-V3
    console.log(`Primary model failed for ${systemType}, using fallback: ${config.fallback}`);
    console.error('Primary error:', error);

    try {
      const response = await callTogetherAI(config.fallback, prompt, systemPrompt);
      return {
        content: response.content,
        model: response.model,
        provider: 'together-ai',
        usedFallback: true,
      };
    } catch (fallbackError) {
      console.error('Fallback error:', fallbackError);
      throw new Error(`Both primary and fallback models failed for ${systemType}`);
    }
  }
}

/**
 * Get cost estimate for a system type based on token usage
 */
export function estimateCost(
  systemType: SystemType,
  inputTokens: number,
  outputTokens: number
): number {
  const config = LLM_STRATEGY[systemType];
  const inputCost = (inputTokens / 1_000_000) * config.costPer1M.input;
  const outputCost = (outputTokens / 1_000_000) * config.costPer1M.output;
  return inputCost + outputCost;
}

/**
 * Get LLM configuration for a system type
 */
export function getLLMConfig(systemType: SystemType): LLMConfig {
  return LLM_STRATEGY[systemType];
}
