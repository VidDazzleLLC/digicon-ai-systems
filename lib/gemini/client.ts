/**
 * Gemini API Client
 * Wrapper for Google's Generative AI API
 */

import { GoogleGenerativeAI } from '@google/generative-ai';

export interface GeminiConfig {
  apiKey: string;
  model?: string;
}

export interface GenerateContentOptions {
  temperature?: number;
  maxOutputTokens?: number;
  topP?: number;
  topK?: number;
}

export class GeminiClient {
  private genAI: GoogleGenerativeAI;
  private defaultModel: string;

  constructor(config: GeminiConfig) {
    this.genAI = new GoogleGenerativeAI(config.apiKey);
    this.defaultModel = config.model || 'gemini-pro';
  }

  /**
   * Generate content from text prompt
   */
  async generateContent(
    prompt: string,
    options?: GenerateContentOptions
  ): Promise<string> {
    try {
      const model = this.genAI.getGenerativeModel({ 
        model: this.defaultModel,
        generationConfig: {
          temperature: options?.temperature ?? 0.7,
          maxOutputTokens: options?.maxOutputTokens ?? 1024,
          topP: options?.topP ?? 0.8,
          topK: options?.topK ?? 40,
        },
      });

      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      throw new Error(
        `Gemini API error: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }

  /**
   * Generate embeddings for text
   */
  async generateEmbedding(text: string): Promise<number[]> {
    try {
      const model = this.genAI.getGenerativeModel({ 
        model: 'embedding-001' 
      });
      
      const result = await model.embedContent(text);
      return result.embedding.values;
    } catch (error) {
      throw new Error(
        `Embedding generation error: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }

  /**
   * Chat with conversation history
   */
  async chat(messages: Array<{ role: string; content: string }>) {
    try {
      const model = this.genAI.getGenerativeModel({ 
        model: this.defaultModel 
      });
      
      const chat = model.startChat({
        history: messages.slice(0, -1).map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }],
        })),
      });

      const lastMessage = messages[messages.length - 1];
      const result = await chat.sendMessage(lastMessage.content);
      const response = await result.response;
      return response.text();
    } catch (error) {
      throw new Error(
        `Chat error: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }
}

/**
 * Create Gemini client from environment
 */
export function createGeminiClient(): GeminiClient {
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is required');
  }

  return new GeminiClient({ apiKey });
}

