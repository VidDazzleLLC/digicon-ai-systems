import { NextRequest, NextResponse } from 'next/server';

// Execute Code API Endpoint
// Executes code in secure sandbox with automatic PII protection
// Key feature: Process unlimited data (50MB+) and return only summaries

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      code,
      language = 'python',
      inputs = {},
      toolId = null,
      sessionId = null
    } = body;

    // Validate inputs
    if (!code || code.trim().length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Code is required',
          message: 'Please provide code to execute'
        },
        { status: 400 }
      );
    }

    if (!['python', 'javascript', 'nodejs'].includes(language)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid language',
          message: 'Supported languages: python, javascript, nodejs'
        },
        { status: 400 }
      );
    }

    // Mock execution - in production, this would use WorkflowController
    const result = await mockExecute({
      code,
      language,
      inputs,
      toolId,
      sessionId
    });

    return NextResponse.json(result);

  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: 'Execution failed',
        message: error.message
      },
      { status: 500 }
    );
  }
}

// Mock execution function - in production, this would use the WorkflowController
async function mockExecute(config: any) {
  const executionId = `exec_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  // Simulate execution delay
  await new Promise(resolve => setTimeout(resolve, 100));

  // Mock PII detection
  const inputStr = JSON.stringify(config.inputs);
  const piiDetected = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(inputStr);

  return {
    success: true,
    executionId,
    output: {
      result: 'Code executed successfully',
      message: 'This is a mock execution. In production, code would run in isolated sandbox.',
      data: {
        processed: true,
        timestamp: new Date().toISOString()
      }
    },
    metadata: {
      execTime: 0.123,
      memoryUsed: 45.2,
      piiDetected,
      piiTypes: piiDetected ? ['email'] : [],
      cost: 0.00015,
      language: config.language
    },
    message: 'Execution completed successfully'
  };
}
