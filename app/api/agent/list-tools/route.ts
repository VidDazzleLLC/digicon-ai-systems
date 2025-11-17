import { NextRequest, NextResponse } from 'next/server';

// List Tools API Endpoint
// Browse available tools by category without loading full code into context
// This is the key feature that reduces context pollution by 200:1

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');

    // Mock implementation - in production, this would query the database
    // Using the tools from seed-tools.js
    const tools = getMockTools(category);

    return NextResponse.json({
      success: true,
      count: tools.length,
      category: category || 'all',
      tools: tools.map(tool => ({
        id: tool.id,
        name: tool.name,
        description: tool.description,
        language: tool.language,
        category: tool.category
      })),
      message: `Found ${tools.length} tools${category ? ` in category '${category}'` : ''}`
    });

  } catch (error: any) {
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to list tools',
        message: error.message 
      },
      { status: 500 }
    );
  }
}

// Mock tool data - in production, this would come from database
function getMockTools(category: string | null) {
  const allTools = [
    // Data category
    { id: '1', name: 'CSV Parser', description: 'Parse and validate CSV files', language: 'python', category: 'data' },
    { id: '2', name: 'JSON Transformer', description: 'Transform JSON data structures', language: 'javascript', category: 'data' },
    
    // API category
    { id: '3', name: 'Stripe Payment', description: 'Process payments via Stripe', language: 'python', category: 'api' },
    { id: '4', name: 'Twilio SMS', description: 'Send SMS messages via Twilio', language: 'javascript', category: 'api' },
    
    // Documents category
    { id: '5', name: 'PDF Extractor', description: 'Extract text from PDF files', language: 'python', category: 'documents' },
    { id: '6', name: 'Excel Reader', description: 'Read and parse Excel spreadsheets', language: 'python', category: 'documents' },
    
    // Analytics category
    { id: '7', name: 'Statistical Analyzer', description: 'Calculate statistical metrics', language: 'python', category: 'analytics' },
    { id: '8', name: 'Trend Detector', description: 'Detect trends in time series data', language: 'python', category: 'analytics' },
    
    // Automation category
    { id: '9', name: 'Email Sender', description: 'Send emails via SMTP', language: 'python', category: 'automation' },
    { id: '10', name: 'File Watcher', description: 'Monitor directory for file changes', language: 'javascript', category: 'automation' },
    { id: '11', name: 'Data Validator', description: 'Validate data against schemas', language: 'python', category: 'automation' },
  ];

  if (!category) {
    return allTools;
  }

  return allTools.filter(tool => tool.category === category);
}
