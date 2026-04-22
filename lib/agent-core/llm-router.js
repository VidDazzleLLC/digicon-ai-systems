const axios = require('axios');

class LLMDynamicRouter {
  constructor() {
    this.providers = {
      openai: { name: 'openai', cost: 0.01, latencyMs: 800, qualityScore: 0.95 },
      anthropic: { name: 'anthropic', cost: 0.015, latencyMs: 1200, qualityScore: 0.98 },
      groq: { name: 'groq', cost: 0.001, latencyMs: 200, qualityScore: 0.85 },
      ollama: { name: 'ollama', cost: 0, latencyMs: 500, qualityScore: 0.80 },
    };

    this.keys = {
      openai: process.env.OPENAI_API_KEY,
      anthropic: process.env.ANTHROPIC_API_KEY,
      groq: process.env.GROQ_API_KEY,
    };
  }

  setApiKeys(keys) {
    this.keys = { ...this.keys, ...keys };
  }

  selectBestProvider(taskCategory) {
    let candidates = Object.values(this.providers).filter(p => this.keys[p.name] || p.name === 'ollama');

    if (candidates.length === 0) {
      throw new Error('No LLM API keys configured and local Ollama is unavailable.');
    }

    switch(taskCategory) {
      case 'high_quality':
        candidates.sort((a, b) => b.qualityScore - a.qualityScore);
        break;
      case 'fast_response':
        candidates.sort((a, b) => a.latencyMs - b.latencyMs);
        break;
      case 'low_cost':
      default:
        candidates.sort((a, b) => a.cost - b.cost);
        break;
    }

    return candidates[0];
  }

  async executeTask(taskCategory, prompt) {
    const provider = this.selectBestProvider(taskCategory);
    console.log(`[LLM Router] Selected ${provider.name} for task category: ${taskCategory}`);

    try {
      return await this.callProvider(provider, prompt);
    } catch (error) {
      console.warn(`[LLM Router] Primary provider ${provider.name} failed:`, error.message);
      console.log('[LLM Router] Attempting fallback...');

      const fallbackProviders = Object.values(this.providers).filter(p =>
        (this.keys[p.name] || p.name === 'ollama') && p.name !== provider.name
      );

      if (fallbackProviders.length > 0) {
          return await this.callProvider(fallbackProviders[0], prompt);
      }

      throw new Error('All LLM providers failed.');
    }
  }

  async callProvider(provider, prompt) {
     if (provider.name === 'openai') {
         return `Mock OpenAI Response for: ${prompt}`;
     } else if (provider.name === 'anthropic') {
         return `Mock Anthropic Response for: ${prompt}`;
     } else if (provider.name === 'groq') {
         return `Mock Groq Response for: ${prompt}`;
     } else if (provider.name === 'ollama') {
         return `Mock Ollama Response for: ${prompt}`;
     }
  }
}

module.exports = new LLMDynamicRouter();
