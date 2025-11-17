import { NextRequest, NextResponse } from 'next/server';

// Get Pattern API Endpoint
// Retrieves saved code patterns for reuse
// Key feature: Agent learning - reuse successful patterns instead of rewriting

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get('name');

    if (!name || name.trim().length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Pattern name is required',
          message: 'Please provide a pattern name using the "name" parameter'
        },
        { status: 400 }
      );
    }

    // Mock retrieval - in production, this would use WorkflowController
    const pattern = await mockGetPattern(name);

    if (!pattern) {
      return NextResponse.json(
        {
          success: false,
          error: 'Pattern not found',
          message: `No pattern found with name '${name}'`
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      pattern: {
        name: pattern.name,
        description: pattern.description,
        code: pattern.code,
        language: pattern.language,
        category: pattern.category,
        tags: pattern.tags,
        metadata: {
          usageCount: pattern.usageCount,
          successRate: pattern.successRate,
          avgExecTime: pattern.avgExecTime,
          lastUsedAt: pattern.lastUsedAt
        }
      },
      message: `Pattern '${name}' retrieved successfully`
    });

  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to retrieve pattern',
        message: error.message
      },
      { status: 500 }
    );
  }
}

// Mock retrieval function - in production, this would query the database
async function mockGetPattern(name: string) {
  // Simulate database query delay
  await new Promise(resolve => setTimeout(resolve, 50));

  // Mock patterns - in production, these would come from code_snippets table
  const mockPatterns: Record<string, any> = {
    'payroll-duplicate-detector': {
      name: 'payroll-duplicate-detector',
      description: 'Detects duplicate entries in payroll data',
      code: `
import pandas as pd
import json

def detect_duplicates(data):
    df = pd.DataFrame(data)
    duplicates = df[df.duplicated()]
    return {
        'success': True,
        'duplicateCount': len(duplicates),
        'duplicates': duplicates.to_dict('records')
    }

# Execute
result = detect_duplicates(input_data)
print(json.dumps(result))
      `.trim(),
      language: 'python',
      category: 'data-processing',
      tags: ['payroll', 'duplicates', 'data-quality'],
      usageCount: 15,
      successRate: 98.5,
      avgExecTime: 0.234,
      lastUsedAt: new Date().toISOString()
    },
    'csv-analyzer': {
      name: 'csv-analyzer',
      description: 'Analyzes CSV files and returns statistics',
      code: `
import pandas as pd
import json

def analyze_csv(file_path):
    df = pd.read_csv(file_path)
    stats = {
        'rowCount': len(df),
        'columnCount': len(df.columns),
        'columns': df.columns.tolist(),
        'preview': df.head(5).to_dict('records')
    }
    return {'success': True, 'data': stats}

result = analyze_csv(input_file)
print(json.dumps(result))
      `.trim(),
      language: 'python',
      category: 'data-processing',
      tags: ['csv', 'analysis', 'statistics'],
      usageCount: 23,
      successRate: 99.1,
      avgExecTime: 0.156,
      lastUsedAt: new Date().toISOString()
    }
  };

  return mockPatterns[name] || null;
}
