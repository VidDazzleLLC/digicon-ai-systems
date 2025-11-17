// Code Execution Architecture - Agent Toolkit
// Simplified API for AI agents (Claude, GPT-4, Gemini)
//
// Key Features:
// - High-level API for agents
// - Auto-generates agent prompts
// - Handles tool discovery and execution
// - Manages learning patterns

const WorkflowController = require('./workflow-controller');

class AgentToolkit {
  constructor(options = {}) {
    this.workflow = new WorkflowController(options);
    this.agentType = options.agentType || 'unknown';
    this.userId = options.userId || null;
  }

  // ===== TOOL MANAGEMENT =====

  /**
   * List available tools by category
   * Returns minimal metadata to avoid context pollution
   * @param {string} category - Optional category filter
   * @returns {Promise<Object>} Tool listing
   */
  async listTools(category = null) {
    const tools = await this.workflow.discoverTools(category);

    return {
      success: true,
      count: tools.length,
      category: category || 'all',
      tools: tools.map(tool => ({
        id: tool.id,
        name: tool.name,
        description: tool.description,
        language: tool.language
      })),
      usage: this._generateToolListPrompt(tools)
    };
  }

  /**
   * Search for specific tools
   * @param {string} query - Search query
   * @returns {Promise<Object>} Search results
   */
  async searchTools(query) {
    const tools = await this.workflow.searchTools(query);

    return {
      success: true,
      query,
      count: tools.length,
      tools: tools.map(tool => ({
        id: tool.id,
        name: tool.name,
        description: tool.description,
        language: tool.language
      }))
    };
  }

  /**
   * Get full tool definition (loads code into context)
   * Only call when you're ready to use the tool
   * @param {string} toolId - Tool identifier
   * @returns {Promise<Object>} Complete tool definition
   */
  async getTool(toolId) {
    const tool = await this.workflow.loadTool(toolId);

    return {
      success: true,
      tool: {
        id: tool.id,
        name: tool.name,
        description: tool.description,
        language: tool.language,
        code: tool.codeTemplate,
        requiredPackages: tool.requiredPackages,
        usage: this._generateToolUsagePrompt(tool)
      }
    };
  }

  // ===== CODE EXECUTION =====

  /**
   * Execute code in secure sandbox
   * @param {Object} config - Execution configuration
   * @returns {Promise<Object>} Execution results
   */
  async executeCode(config) {
    const {
      code,
      language = 'python',
      inputs = {},
      toolId = null,
      sessionId = null
    } = config;

    try {
      const result = await this.workflow.executeTask({
        code,
        language,
        inputs,
        toolId,
        sessionId,
        agentType: this.agentType,
        userId: this.userId
      });

      return {
        success: result.success,
        executionId: result.executionId,
        output: result.output,
        metadata: {
          execTime: result.execTime,
          memoryUsed: result.memoryUsed,
          piiDetected: result.piiDetected,
          piiTypes: result.piiTypes,
          cost: result.cost
        }
      };

    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Process large data files without loading into context
   * Returns summary only
   * @param {string} filePath - Path to data file
   * @param {Object} options - Processing options
   * @returns {Promise<Object>} Data summary
   */
  async processData(filePath, options = {}) {
    try {
      const result = await this.workflow.processLargeData(filePath, {
        ...options,
        sessionId: options.sessionId
      });

      return {
        success: true,
        summary: result.summary,
        rowCount: result.rowCount,
        columnCount: result.columnCount,
        findings: result.findings,
        execTime: result.execTime
      };

    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // ===== PATTERN LEARNING =====

  /**
   * Save code pattern for future reuse
   * @param {Object} pattern - Pattern to save
   * @returns {Promise<Object>} Save result
   */
  async savePattern(pattern) {
    const {
      name,
      description,
      code,
      language = 'python',
      category = 'general',
      tags = []
    } = pattern;

    try {
      const snippetId = await this.workflow.saveSnippet({
        name,
        description,
        code,
        language,
        category,
        tags
      });

      return {
        success: true,
        snippetId,
        message: `Pattern '${name}' saved successfully. Use getPattern('${name}') to reuse.`
      };

    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Get saved pattern for reuse
   * @param {string} name - Pattern name
   * @returns {Promise<Object>} Pattern definition
   */
  async getPattern(name) {
    try {
      const snippet = await this.workflow.getSnippet(name);

      return {
        success: true,
        pattern: {
          name: snippet.name,
          description: snippet.description,
          code: snippet.code,
          language: snippet.language,
          category: snippet.category,
          tags: snippet.tags,
          metadata: {
            usageCount: snippet.usageCount,
            successRate: snippet.successRate,
            avgExecTime: snippet.avgExecTime,
            lastUsedAt: snippet.lastUsedAt
          }
        }
      };

    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * List all saved patterns by category
   * @param {string} category - Optional category filter
   * @returns {Promise<Object>} Pattern list
   */
  async listPatterns(category = null) {
    // This would query the database
    // For now, return mock implementation
    return {
      success: true,
      category: category || 'all',
      patterns: [
        {
          name: 'payroll-duplicate-detector',
          description: 'Detects duplicate entries in payroll data',
          category: 'data-processing',
          usageCount: 15,
          successRate: 98.5
        }
      ]
    };
  }

  // ===== DOCUMENT SEARCH (GEMINI FILE SEARCH) =====

  /**
   * Index document for semantic search
   * @param {string} filePath - Path to document
   * @param {Object} metadata - Optional metadata
   * @returns {Promise<Object>} Index result
   */
  async indexDocument(filePath, metadata = {}) {
    try {
      const fileId = await this.workflow.indexFile(filePath);

      return {
        success: true,
        fileId,
        message: `Document indexed successfully. Use searchDocuments() to query.`
      };

    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Search documents with semantic understanding
   * Powered by Gemini File Search API
   * @param {string} query - Search query
   * @param {Array<string>} fileIds - Document IDs to search
   * @param {Object} options - Search options
   * @returns {Promise<Object>} Search results with citations
   */
  async searchDocuments(query, fileIds, options = {}) {
    try {
      const results = await this.workflow.searchWithCitations(query, fileIds, {
        topK: options.topK || 5,
        returnCitations: options.returnCitations !== false
      });

      return {
        success: true,
        query,
        answer: results.answer,
        sources: results.sources,
        citations: results.citations,
        metadata: {
          filesSearched: fileIds.length,
          topK: options.topK || 5
        }
      };

    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // ===== AGENT PROMPT GENERATION =====

  /**
   * Generate agent prompt for tool list
   * @param {Array} tools - Tool list
   * @returns {string} Agent prompt
   */
  _generateToolListPrompt(tools) {
    return `
Available Tools (${tools.length}):

${tools.map((tool, i) => `${i + 1}. ${tool.name}
   ${tool.description}
   Language: ${tool.language}`).join('\n\n')}

Usage:
- To use a tool: getTool('toolId')
- To search tools: searchTools('query')
- To execute code: executeCode({code, language, inputs})
    `.trim();
  }

  /**
   * Generate usage prompt for specific tool
   * @param {Object} tool - Tool definition
   * @returns {string} Usage prompt
   */
  _generateToolUsagePrompt(tool) {
    return `
Tool: ${tool.name}
Description: ${tool.description}
Language: ${tool.language}

Required Packages:
${tool.requiredPackages.length > 0 ? tool.requiredPackages.map(pkg => `- ${pkg}`).join('\n') : '- None'}

Code Template:
\`\`\`${tool.language}
${tool.codeTemplate}
\`\`\`

Usage Example:
await executeCode({
  code: <modify template above>,
  language: '${tool.language}',
  inputs: {
    // Your input data
  }
});
    `.trim();
  }

  /**
   * Generate complete agent system prompt
   * @returns {string} System prompt for agent
   */
  generateSystemPrompt() {
    return `
You are an AI agent with access to a powerful Code Execution Architecture.

CAPABILITIES:
1. On-Demand Tool Loading
   - Browse tools without loading them into context
   - Only load tools when you need them
   - Avoids context pollution

2. Secure Sandbox Execution
   - Execute Python/JavaScript code in isolated sandbox
   - Process unlimited data (50MB+ files)
   - Automatic PII protection (HIPAA/GDPR/CCPA compliant)

3. Agent Learning
   - Save successful code patterns for reuse
   - Retrieve patterns for similar tasks
   - Improve over time

4. Document Understanding (Gemini File Search)
   - Index documents for semantic search
   - Query with natural language
   - Get answers with automatic citations

AVAILABLE FUNCTIONS:
- listTools(category) - Browse available tools
- searchTools(query) - Find specific tools
- getTool(toolId) - Load complete tool definition
- executeCode({code, language, inputs}) - Run code in sandbox
- processData(filePath, options) - Process large files
- savePattern({name, code, description}) - Save for reuse
- getPattern(name) - Retrieve saved pattern
- indexDocument(filePath) - Index for search
- searchDocuments(query, fileIds) - Search with citations

WORKFLOW:
1. Browse tools: listTools('data')
2. Find what you need: searchTools('csv parser')
3. Load tool: getTool(toolId)
4. Execute code: executeCode({...})
5. Save if successful: savePattern({...})
6. Reuse next time: getPattern(name)

COST OPTIMIZATION:
- Only load tools you need (not all 50+ upfront)
- Return summaries, not full data
- Reuse patterns instead of rewriting
- Cost: ~$0.18 per request (vs $2.25 traditional)

SECURITY:
- All code runs in isolated sandbox
- Automatic PII detection and masking
- Never send sensitive data to model servers
- Full audit trail of all executions

Remember: You have unlimited data processing capability. Process 50MB files 
easily by running analysis in the sandbox and returning only summaries.
    `.trim();
  }

  // ===== COST TRACKING =====

  /**
   * Get cost summary
   * @param {string} period - 'daily' or 'monthly'
   * @returns {Promise<Object>} Cost summary
   */
  async getCostSummary(period = 'daily') {
    // This would query the cost tracking table
    // For now, return mock data
    return {
      success: true,
      period,
      summary: {
        totalExecutions: 150,
        totalCost: 27.00,
        avgCostPerExecution: 0.18,
        traditionalMCPCost: 337.50,
        savings: 310.50,
        savingsPercent: 92
      }
    };
  }
}

module.exports = AgentToolkit;
