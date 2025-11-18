/**
 * MCP Context Manager
 * Optimizes token usage and manages conversation context
 */

import { MCPContext } from './types';

export class ContextManager {
  private contexts: Map<string, MCPContext> = new Map();

  /**
   * Create or get existing context
   */
  getOrCreateContext(
    conversationId: string,
    userId: string,
    maxTokens: number = 100000
  ): MCPContext {
    let context = this.contexts.get(conversationId);
    
    if (!context) {
      context = {
        conversationId,
        userId,
        tools: [],
        maxTokens,
        currentTokens: 0,
      };
      this.contexts.set(conversationId, context);
    }
    
    return context;
  }

  /**
   * Update token count
   */
  addTokens(conversationId: string, tokens: number): void {
    const context = this.contexts.get(conversationId);
    if (context) {
      context.currentTokens += tokens;
    }
  }

  /**
   * Check if context has room for more tokens
   */
  hasCapacity(conversationId: string, requiredTokens: number): boolean {
    const context = this.contexts.get(conversationId);
    if (!context) return true;
    
    return (context.currentTokens + requiredTokens) <= context.maxTokens;
  }

  /**
   * Reset context token count
   */
  resetContext(conversationId: string): void {
    const context = this.contexts.get(conversationId);
    if (context) {
      context.currentTokens = 0;
    }
  }

  /**
   * Remove old contexts to free memory
   */
  cleanup(maxAgeMs: number = 3600000): number {
    // Implementation would track creation time
    // For now, simple cleanup
    return 0;
  }

  /**
   * Get context statistics
   */
  getStats(conversationId: string) {
    const context = this.contexts.get(conversationId);
    if (!context) return null;

    return {
      currentTokens: context.currentTokens,
      maxTokens: context.maxTokens,
      utilization: (context.currentTokens / context.maxTokens) * 100,
      remaining: context.maxTokens - context.currentTokens,
    };
  }
}

export const globalContextManager = new ContextManager();

