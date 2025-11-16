import { NextRequest, NextResponse } from 'next/server';
import Papa from 'papaparse';

// CSV Upload Endpoint - Accepts anonymized company data for audit
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.name.endsWith('.csv')) {
      return NextResponse.json(
        { error: 'Only CSV files are accepted' },
        { status: 400 }
      );
    }

    // Read and parse CSV
    const text = await file.text();
    const parsed = Papa.parse(text, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true
    });

    if (parsed.errors.length > 0) {
      return NextResponse.json(
        { error: 'CSV parsing failed', details: parsed.errors },
        { status: 400 }
      );
    }

    // Return upload ID for processing
    const uploadId = `audit_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    return NextResponse.json({
      success: true,
      uploadId,
      rowCount: parsed.data.length,
      columns: parsed.meta.fields,
      message: 'File uploaded successfully. Audit processing initiated.'
    });

  } catch (error: any) {
    return NextResponse.json(
      { error: 'Upload failed', message: error.message },
      { status: 500 }
    );
  }
}
