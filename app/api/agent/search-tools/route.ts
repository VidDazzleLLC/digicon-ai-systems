import { NextRequest, NextResponse } from 'next/server';

// Search Tools API Endpoint
// Find specific tools by query string
// Returns minimal metadata to avoid context pollution

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('q');

    if (!query || query.trim().length === 0) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Search query is required',
          message: 'Please provide a search query using the "q" parameter'
        },
        { status: 400 }
      );
    }

    // Mock implementation - in production, this would query the database
    const tools = searchMockTools(query);

    return NextResponse.json({
      success: true,
      query,
      count: tools.length,
      tools: tools.map(tool => ({
        id: tool.id,
        name: tool.name,
        description: tool.description,
        language: tool.language,
        category: tool.category
      })),
      message: `Found ${tools.length} tools matching "${query}"`
    });

  } catch (error: any) {
    return NextResponse.json(
      { 
        success: false,
        error: 'Search failed',
        message: error.message 
      },
      { status: 500 }
    );
  }
}

// Mock tool search - in production, this would use database full-text search
function searchMockTools(query: string) {
  const allTools = [
    { id: '1', name: 'CSV Parser', description: 'Parse and validate CSV files', language: 'python', category: 'data' },
    { id: '2', name: 'JSON Transformer', description: 'Transform JSON data structures', language: 'javascript', category: 'data' },
    { id: '3', name: 'Stripe Payment', description: 'Process payments via Stripe', language: 'python', category: 'api' },
    { id: '4', name: 'Twilio SMS', description: 'Send SMS messages via Twilio', language: 'javascript', category: 'api' },
    { id: '5', name: 'PDF Extractor', description: 'Extract text from PDF files', language: 'python', category: 'documents' },
    { id: '6', name: 'Excel Reader', description: 'Read and parse Excel spreadsheets', language: 'python', category: 'documents' },
    { id: '7', name: 'Statistical Analyzer', description: 'Calculate statistical metrics', language: 'python', category: 'analytics' },
    { id: '8', name: 'Trend Detector', description: 'Detect trends in time series data', language: 'python', category: 'analytics' },
    { id: '9', name: 'Email Sender', description: 'Send emails via SMTP', language: 'python', category: 'automation' },
    { id: '10', name: 'File Watcher', description: 'Monitor directory for file changes', language: 'javascript', category: 'automation' },
    { id: '11', name: 'Data Validator', description: 'Validate data against schemas', language: 'python', category: 'automation' },
  ];

  const lowerQuery = query.toLowerCase();
  
  return allTools.filter(tool => 
    tool.name.toLowerCase().includes(lowerQuery) ||
    tool.description.toLowerCase().includes(lowerQuery) ||
    tool.category.toLowerCase().includes(lowerQuery)
  );
}
