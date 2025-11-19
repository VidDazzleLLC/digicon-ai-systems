/**
 * File Processor - Downloads and processes payroll files from MissionX
 * Handles CSV and Excel files, parses data, runs AI correction, stores results
 */

import { PrismaClient } from '@prisma/client';
import { correctPayrollData, PayrollData } from './payroll-corrector';
import { detectCSVFormat, normalizeCSVData, validateNormalizedData } from './csv-normalizer';

const prisma = new PrismaClient();

interface ProcessParams {
  fileUrl: string;
  fileName: string;
  fileId: string;
  customerId: string;
  customerEmail: string;
  companyName: string;
  apiKeyId: string | null;
}

/**
 * Process a payroll file uploaded to MissionX
 * Downloads, parses, runs AI correction, and stores results
 */
export async function processPayrollFile(params: ProcessParams) {
  const startTime = Date.now();
  
  // Create file upload record
  const fileUpload = await prisma.fileUpload.create({
    data: {
      fileId: params.fileId,
      fileName: params.fileName,
      fileUrl: params.fileUrl,
      customerId: params.customerId,
      customerEmail: params.customerEmail,
      companyName: params.companyName,
      apiKeyId: params.apiKeyId,
      status: 'PROCESSING',
    },
  });

  try {
    console.log(`📂 Processing file: ${params.fileName}`);
    console.log(`- File ID: ${params.fileId}`);
    console.log(`- Customer: ${params.companyName}`);

    // 1. Download file
    console.log('⬇️  Downloading file...');
    const fileData = await fetch(params.fileUrl).then(r => r.arrayBuffer());
    const buffer = Buffer.from(fileData);
    const fileSize = buffer.length;

    console.log(`✅ Downloaded ${(fileSize / 1024).toFixed(2)} KB`);

    // Validate file size (max 10MB to mitigate ReDoS in xlsx parser)
    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
    if (fileSize > MAX_FILE_SIZE) {
      throw new Error(`File too large: ${(fileSize / 1024 / 1024).toFixed(2)}MB (max 10MB)`);
    }

    // 2. Parse based on extension
    const ext = params.fileName.split('.').pop()?.toLowerCase();
    let payrollData: PayrollData[];

    if (ext === 'csv') {
      payrollData = await parseCSV(buffer);
    } else if (ext === 'xlsx' || ext === 'xls') {
      payrollData = await parseExcel(buffer);
    } else {
      throw new Error(`Unsupported file format: ${ext}`);
    }

    console.log(`✅ Parsed ${payrollData.length} records`);

    // Validate record count
    if (payrollData.length === 0) {
      throw new Error('No data found in file');
    }
    if (payrollData.length > 1000) {
      throw new Error(`Too many records: ${payrollData.length} (max 1000)`);
    }

    // 3. Run AI correction
    if (!params.apiKeyId) {
      throw new Error('No API key associated with customer');
    }

    console.log('🤖 Running AI correction...');
    const correctionResult = await correctPayrollData(payrollData, params.apiKeyId);

    const processingTime = Date.now() - startTime;

    if (correctionResult.success) {
      // 4. Update file upload record with results
      await prisma.fileUpload.update({
        where: { id: fileUpload.id },
        data: {
          status: 'COMPLETED',
          fileSize: fileSize,
          recordsProcessed: payrollData.length,
          issuesFound: correctionResult.issues?.length || 0,
          correctionsMade: correctionResult.correctionCount,
          corrections: correctionResult.correctedData as any,
          issues: correctionResult.issues as any,
          processingTime: processingTime,
        },
      });

      console.log(`✅ File processing completed in ${processingTime}ms`);
      console.log(`- Records: ${payrollData.length}`);
      console.log(`- Issues found: ${correctionResult.issues?.length || 0}`);
      console.log(`- Corrections made: ${correctionResult.correctionCount}`);

      // 5. Log to automation log
      await prisma.automationLog.create({
        data: {
          apiKeyId: params.apiKeyId,
          eventType: 'PAYROLL_CORRECTION_COMPLETED',
          eventData: {
            fileId: params.fileId,
            fileName: params.fileName,
            recordsProcessed: payrollData.length,
            issuesFound: correctionResult.issues?.length || 0,
            correctionsMade: correctionResult.correctionCount,
          },
          endpoint: '/api/missionx/webhook',
          method: 'POST',
          ipAddress: 'missionx',
          userAgent: 'MissionX Integration',
          statusCode: 200,
          responseTime: processingTime,
          success: true,
        },
      });

      return {
        success: true,
        fileUploadId: fileUpload.id,
        recordsProcessed: payrollData.length,
        issuesFound: correctionResult.issues?.length || 0,
        correctionsMade: correctionResult.correctionCount,
        processingTime: processingTime,
      };
    } else {
      // Handle AI correction failure
      await prisma.fileUpload.update({
        where: { id: fileUpload.id },
        data: {
          status: 'FAILED',
          fileSize: fileSize,
          recordsProcessed: payrollData.length,
          errorMsg: correctionResult.error,
          processingTime: processingTime,
        },
      });

      throw new Error(correctionResult.error || 'AI correction failed');
    }
  } catch (error) {
    const processingTime = Date.now() - startTime;
    const errorMsg = error instanceof Error ? error.message : 'Unknown error';
    
    console.error('❌ File processing failed:', errorMsg);

    // Update file upload record with error
    await prisma.fileUpload.update({
      where: { id: fileUpload.id },
      data: {
        status: 'FAILED',
        errorMsg: errorMsg,
        processingTime: processingTime,
      },
    });

    // Log to automation log
    if (params.apiKeyId) {
      await prisma.automationLog.create({
        data: {
          apiKeyId: params.apiKeyId,
          eventType: 'PAYROLL_CORRECTION_COMPLETED',
          eventData: {
            fileId: params.fileId,
            fileName: params.fileName,
            error: errorMsg,
          },
          endpoint: '/api/missionx/webhook',
          method: 'POST',
          ipAddress: 'missionx',
          userAgent: 'MissionX Integration',
          statusCode: 500,
          responseTime: processingTime,
          success: false,
          errorMsg: errorMsg,
        },
      });
    }

    return {
      success: false,
      fileUploadId: fileUpload.id,
      error: errorMsg,
      processingTime: processingTime,
    };
  }
}

/**
 * Parse CSV file using PapaParse
 */
async function parseCSV(buffer: Buffer): Promise<PayrollData[]> {
  const Papa = require('papaparse');
  
  const csvText = buffer.toString('utf-8');
  const result = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
    dynamicTyping: true,
    transformHeader: (header: string) => header.trim(),
  });

  if (result.errors && result.errors.length > 0) {
    console.warn('CSV parsing warnings:', result.errors);
  }

// Detect and normalize CSV format
  const headers = Object.keys(result.data[0] || {});
  const detection = detectCSVFormat(headers);
  
  console.log(`📋 Detected CSV format: ${detection.format} (confidence: ${(detection.confidence * 100).toFixed(0)}%)`);
  
  const normalizedData = normalizeCSVData(result.data, detection.detectedFields);
  const validation = validateNormalizedData(normalizedData);
  
  if (!validation.valid) {
    throw new Error(`Data validation failed:\n${validation.errors.join('\n')}`);
  }
  
  return normalizedData;
}

/**
 * Parse Excel file using xlsx
 */
async function parseExcel(buffer: Buffer): Promise<PayrollData[]> {
  const XLSX = require('xlsx');
  
  const workbook = XLSX.read(buffer, { type: 'buffer' });
  
  // Get the first sheet
  const sheetName = workbook.SheetNames[0];
  if (!sheetName) {
    throw new Error('Excel file has no sheets');
  }
  
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet, {
    raw: false,
    defval: null,
  });

// Detect and normalize Excel format
  const headers = data.length > 0 ? Object.keys(data[0] || {}) : [];
  
  if (headers.length === 0) {
    throw new Error('No data found in Excel file');
  }
  
  const detection = detectCSVFormat(headers);
  
  console.log(`📋 Detected Excel format: ${detection.format} (confidence: ${(detection.confidence * 100).toFixed(0)}%)`);
  
  const normalizedData = normalizeCSVData(data, detection.detectedFields);
  const validation = validateNormalizedData(normalizedData);
  
  if (!validation.valid) {
    throw new Error(`Data validation failed:\n${validation.errors.join('\n')}`);
  }
  
  return normalizedData;
}