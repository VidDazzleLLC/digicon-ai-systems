import { NextRequest, NextResponse } from 'next/server';

// Save Pattern API Endpoint
// Saves code patterns for agent learning and reuse
// Key feature: Enables continuous improvement through pattern reuse

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      description,
      code,
      language = 'python',
      category = 'general',
      tags = []
    } = body;

    // Validate inputs
    if (!name || name.trim().length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Pattern name is required',
          message: 'Please provide a name for the pattern'
        },
        { status: 400 }
      );
    }

    if (!code || code.trim().length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Code is required',
          message: 'Please provide code for the pattern'
        },
        { status: 400 }
      );
    }

    // Mock save - in production, this would use WorkflowController
    const snippetId = await mockSavePattern({
      name,
      description,
      code,
      language,
      category,
      tags
    });

    return NextResponse.json({
      success: true,
      snippetId,
      name,
      message: `Pattern '${name}' saved successfully. Use GET /api/agent/get-pattern?name=${name} to retrieve it.`,
      usage: `getPattern('${name}')`
    });

  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to save pattern',
        message: error.message
      },
      { status: 500 }
    );
  }
}

// Mock save function - in production, this would use the WorkflowController
async function mockSavePattern(pattern: any) {
  const snippetId = `snippet_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  // Simulate database save delay
  await new Promise(resolve => setTimeout(resolve, 50));

  // In production, this would insert into code_snippets table
  console.log('Saved pattern:', {
    snippetId,
    name: pattern.name,
    language: pattern.language,
    category: pattern.category
  });

  return snippetId;
}
