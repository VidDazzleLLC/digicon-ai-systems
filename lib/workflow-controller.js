// Code Execution Architecture - Workflow Controller
// Main orchestration layer for on-demand tool loading and sandbox execution
//
// Key Features:
// - On-demand tool loading (browse without loading context)
// - Sandbox code execution (Python/Node.js)
// - Automatic PII protection
// - Cost tracking
// - Agent learning system
// - Gemini File Search integration

const crypto = require('crypto');
const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

// PII Detection Patterns
const PII_PATTERNS = {
  email: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g,
  ssn: /\b\d{3}-\d{2}-\d{4}\b/g,
  phone: /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g,
  creditCard: /\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b/g,
  address: /\b\d+\s+[\w\s]+(?:street|st|avenue|ave|road|rd|highway|hwy|square|sq|trail|trl|drive|dr|court|ct|parkway|pkwy|circle|cir|boulevard|blvd)\b/gi,
};

class WorkflowController {
  constructor(options = {}) {
    this.database = options.database || null;
    this.enablePIIProtection = options.enablePIIProtection !== false;
    this.enableCostTracking = options.enableCostTracking !== false;
    this.sandboxTimeout = options.sandboxTimeout || 30000; // 30 seconds
    this.maxMemoryMB = options.maxMemoryMB || 512;
    this.geminiApiKey = options.geminiApiKey || process.env.GEMINI_API_KEY;
  }

  // ===== TOOL DISCOVERY & SEARCH =====

  /**
   * Discover tools by category (on-demand loading)
   * Returns tool metadata WITHOUT loading full code into context
   * @param {string} category - Tool category ('data', 'api', 'documents', etc.)
   * @returns {Promise<Array>} Tool list with metadata only
   */
  async discoverTools(category = null) {
    const tools = await this._queryDatabase({
      table: 'tools',
      where: category ? { categoryId: category, active: true } : { active: true },
      select: ['id', 'name', 'description', 'version', 'language', 'categoryId']
    });

    return tools.map(tool => ({
      id: tool.id,
      name: tool.name,
      description: tool.description,
      version: tool.version,
      language: tool.language,
      category: tool.categoryId
    }));
  }

  /**
   * Search tools by query string
   * @param {string} query - Search query
   * @returns {Promise<Array>} Matching tools
   */
  async searchTools(query) {
    const allTools = await this.discoverTools();
    const lowerQuery = query.toLowerCase();
    
    return allTools.filter(tool => 
      tool.name.toLowerCase().includes(lowerQuery) ||
      tool.description.toLowerCase().includes(lowerQuery)
    );
  }

  /**
   * Load specific tool code (only when needed)
   * @param {string} toolId - Tool identifier
   * @returns {Promise<Object>} Complete tool definition with code
   */
  async loadTool(toolId) {
    const tool = await this._queryDatabase({
      table: 'tools',
      where: { id: toolId },
      select: '*'
    });

    if (!tool) {
      throw new Error(`Tool not found: ${toolId}`);
    }

    return tool;
  }

  // ===== CODE EXECUTION =====

  /**
   * Execute code in isolated sandbox
   * @param {Object} config - Execution configuration
   * @returns {Promise<Object>} Execution results with PII protection
   */
  async executeTask(config) {
    const {
      code,
      language = 'python',
      inputs = {},
      toolId = null,
      sessionId = null,
      agentType = null,
      userId = null
    } = config;

    // Generate execution ID
    const executionId = this._generateExecutionId();
    const sandboxId = this._generateSandboxId();

    // Log execution start
    const startTime = Date.now();

    try {
      // Step 1: Protect PII in inputs
      const { protectedInputs, piiDetected: inputPII } = this.enablePIIProtection
        ? this._protectPII(inputs)
        : { protectedInputs: inputs, piiDetected: [] };

      // Step 2: Execute in isolated sandbox
      const { output, exitCode, execTime, memoryUsed } = await this._executeSandbox({
        code,
        language,
        inputs: protectedInputs,
        sandboxId,
        timeout: this.sandboxTimeout,
        maxMemory: this.maxMemoryMB
      });

      // Step 3: Protect PII in output
      const { protectedData: protectedOutput, piiDetected: outputPII } = this.enablePIIProtection
        ? this._protectPII(output)
        : { protectedData: output, piiDetected: [] };

      // Step 4: Track costs
      const cost = this.enableCostTracking
        ? this._calculateCost({ code, inputs, output, execTime })
        : { tokens: 0, dollars: 0 };

      // Step 5: Log to database
      await this._logExecution({
        executionId,
        sessionId,
        toolId,
        language,
        code,
        inputs,
        output: protectedOutput,
        piiDetectedInput: inputPII.length > 0,
        piiDetectedOutput: outputPII.length > 0,
        piiTypes: [...new Set([...inputPII, ...outputPII])],
        status: exitCode === 0 ? 'SUCCESS' : 'FAILED',
        exitCode,
        execTime,
        memoryUsed,
        costTokens: cost.tokens,
        costDollars: cost.dollars,
        sandboxId,
        agentType,
        userId
      });

      return {
        success: exitCode === 0,
        executionId,
        output: protectedOutput,
        execTime,
        memoryUsed,
        piiDetected: inputPII.length > 0 || outputPII.length > 0,
        piiTypes: [...new Set([...inputPII, ...outputPII])],
        cost: cost.dollars
      };

    } catch (error) {
      // Log failed execution
      await this._logExecution({
        executionId,
        sessionId,
        toolId,
        language,
        code,
        inputs,
        output: null,
        status: 'FAILED',
        errorMsg: error.message,
        sandboxId,
        agentType,
        userId
      });

      throw error;
    }
  }

  /**
   * Process large data files in sandbox (unlimited size)
   * Returns summary instead of full data (avoids context pollution)
   * @param {string} filePath - Path to data file
   * @param {Object} options - Processing options
   * @returns {Promise<Object>} Summary of processed data
   */
  async processLargeData(filePath, options = {}) {
    const { operation = 'analyze', language = 'python' } = options;

    // Generate processing code
    const code = this._generateDataProcessingCode(filePath, operation, language);

    // Execute in sandbox
    const result = await this.executeTask({
      code,
      language,
      inputs: { filePath },
      sessionId: options.sessionId
    });

    // Return only summary (not full data)
    return {
      summary: result.output.summary || 'Data processed successfully',
      rowCount: result.output.rowCount || 0,
      columnCount: result.output.columnCount || 0,
      findings: result.output.findings || [],
      execTime: result.execTime
    };
  }

  // ===== AGENT LEARNING =====

  /**
   * Save code pattern for reuse
   * @param {Object} snippet - Code snippet to save
   * @returns {Promise<string>} Snippet ID
   */
  async saveSnippet(snippet) {
    const { name, description, code, language, category, tags = [] } = snippet;

    const snippetId = await this._insertDatabase({
      table: 'code_snippets',
      data: {
        name,
        description,
        code,
        language,
        category,
        tags,
        usageCount: 0,
        successRate: 100.0,
        createdAt: new Date()
      }
    });

    return snippetId;
  }

  /**
   * Get saved code pattern
   * @param {string} name - Snippet name
   * @returns {Promise<Object>} Code snippet
   */
  async getSnippet(name) {
    const snippet = await this._queryDatabase({
      table: 'code_snippets',
      where: { name },
      select: '*'
    });

    if (!snippet) {
      throw new Error(`Snippet not found: ${name}`);
    }

    // Update usage count
    await this._updateDatabase({
      table: 'code_snippets',
      where: { name },
      data: {
        usageCount: snippet.usageCount + 1,
        lastUsedAt: new Date()
      }
    });

    return snippet;
  }

  // ===== GEMINI FILE SEARCH INTEGRATION =====

  /**
   * Index file for semantic search
   * @param {string} filePath - Path to file
   * @returns {Promise<string>} Gemini file ID
   */
  async indexFile(filePath) {
    // This would integrate with Gemini File Search API
    // For now, return mock implementation
    const fileId = `gemini_${crypto.randomBytes(16).toString('hex')}`;

    await this._insertDatabase({
      table: 'gemini_file_index',
      data: {
        fileName: filePath.split('/').pop(),
        fileType: this._getFileType(filePath),
        fileSize: 0, // Would get actual size
        filePath,
        geminiFileId: fileId,
        indexStatus: 'READY',
        createdAt: new Date()
      }
    });

    return fileId;
  }

  /**
   * Search indexed files with semantic understanding
   * @param {string} query - Search query
   * @param {Array<string>} fileIds - Gemini file IDs to search
   * @param {Object} options - Search options
   * @returns {Promise<Object>} Search results with citations
   */
  async searchWithCitations(query, fileIds, options = {}) {
    const { topK = 5, returnCitations = true } = options;

    // This would integrate with Gemini File Search API
    // For now, return mock implementation
    return {
      answer: 'Mock answer from Gemini File Search',
      sources: fileIds.map(id => ({
        fileId: id,
        relevanceScore: 0.9
      })),
      citations: returnCitations ? [
        { text: 'Citation text', fileId: fileIds[0], page: 1 }
      ] : []
    };
  }

  // ===== PRIVATE METHODS =====

  _generateExecutionId() {
    return `exec_${Date.now()}_${crypto.randomBytes(8).toString('hex')}`;
  }

  _generateSandboxId() {
    return `sandbox_${crypto.randomBytes(16).toString('hex')}`;
  }

  _protectPII(data) {
    const dataStr = JSON.stringify(data);
    const piiDetected = [];
    let protectedStr = dataStr;

    // Detect and mask PII
    Object.entries(PII_PATTERNS).forEach(([type, pattern]) => {
      if (pattern.test(dataStr)) {
        piiDetected.push(type);
        protectedStr = protectedStr.replace(pattern, `[${type.toUpperCase()}_REDACTED]`);
      }
    });

    return {
      protectedData: JSON.parse(protectedStr),
      piiDetected
    };
  }

  async _executeSandbox(config) {
    const { code, language, inputs, sandboxId, timeout, maxMemory } = config;

    // For production, this would use Docker/Firecracker
    // For now, use simple process execution with limits
    const startTime = Date.now();

    try {
      let command;
      const inputJson = JSON.stringify(inputs);

      if (language === 'python') {
        // Write code to temp file
        const tempFile = `/tmp/${sandboxId}.py`;
        require('fs').writeFileSync(tempFile, code);
        
        // Execute with timeout
        command = `timeout ${timeout / 1000}s python3 ${tempFile}`;
      } else if (language === 'javascript' || language === 'nodejs') {
        // Write code to temp file
        const tempFile = `/tmp/${sandboxId}.js`;
        require('fs').writeFileSync(tempFile, code);
        
        // Execute with timeout
        command = `timeout ${timeout / 1000}s node ${tempFile}`;
      } else {
        throw new Error(`Unsupported language: ${language}`);
      }

      const { stdout, stderr } = await execAsync(command, {
        timeout,
        maxBuffer: maxMemory * 1024 * 1024
      });

      const execTime = (Date.now() - startTime) / 1000;

      return {
        output: stdout ? JSON.parse(stdout) : { result: 'success' },
        exitCode: 0,
        execTime,
        memoryUsed: 0 // Would track actual memory
      };

    } catch (error) {
      const execTime = (Date.now() - startTime) / 1000;

      return {
        output: { error: error.message },
        exitCode: error.code || 1,
        execTime,
        memoryUsed: 0
      };
    }
  }

  _calculateCost(execution) {
    // Simplified cost calculation
    // In production, this would integrate with model pricing
    const codeTokens = Math.ceil(execution.code.length / 4);
    const inputTokens = Math.ceil(JSON.stringify(execution.inputs).length / 4);
    const outputTokens = Math.ceil(JSON.stringify(execution.output).length / 4);
    
    const totalTokens = codeTokens + inputTokens + outputTokens;
    
    // Gemini 2.0 Flash pricing: ~$0.10 per 1M tokens
    const costPerToken = 0.0000001; // $0.10 / 1M
    const dollars = totalTokens * costPerToken;

    return {
      tokens: totalTokens,
      dollars: parseFloat(dollars.toFixed(6))
    };
  }

  _generateDataProcessingCode(filePath, operation, language) {
    if (language === 'python') {
      return `
import json
import pandas as pd

# Load data
df = pd.read_csv('${filePath}')

# Process based on operation
if '${operation}' == 'analyze':
    summary = {
        'rowCount': len(df),
        'columnCount': len(df.columns),
        'summary': df.describe().to_dict(),
        'findings': ['Data loaded successfully']
    }
else:
    summary = {'result': 'Operation not implemented'}

# Return summary (not full data)
print(json.dumps(summary))
      `;
    }

    throw new Error(`Language ${language} not supported for data processing`);
  }

  _getFileType(filePath) {
    const ext = filePath.split('.').pop().toLowerCase();
    const typeMap = {
      'pdf': 'application/pdf',
      'csv': 'text/csv',
      'json': 'application/json',
      'txt': 'text/plain',
      'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    };
    return typeMap[ext] || 'application/octet-stream';
  }

  // Database abstraction methods (to be implemented based on DB choice)
  async _queryDatabase(query) {
    // Mock implementation - replace with actual DB
    console.log('Database query:', query);
    return [];
  }

  async _insertDatabase(insert) {
    // Mock implementation - replace with actual DB
    console.log('Database insert:', insert);
    return crypto.randomBytes(16).toString('hex');
  }

  async _updateDatabase(update) {
    // Mock implementation - replace with actual DB
    console.log('Database update:', update);
    return true;
  }

  async _logExecution(log) {
    // Mock implementation - replace with actual DB
    console.log('Execution log:', {
      executionId: log.executionId,
      status: log.status,
      execTime: log.execTime
    });
    return true;
  }
}

module.exports = WorkflowController;
