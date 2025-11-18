/**
 * File Processor - Handles uploaded payroll files from MissionX
 * Extracts data, validates format, and triggers payroll correction
 */

import { PrismaClient } from '@prisma/client';
import Papa from 'papaparse';
import { correctPayrollData, validatePayrollData, PayrollData } from './payroll-corrector';

const prisma = new PrismaClient();

// Maximum file size for processing (10MB)
const MAX_FILE_SIZE = 10 * 1024 * 1024;

/**
 * File upload data from MissionX webhook
 */
export interface MissionXFileUploadData {
  fileId?: string;
  clientId?: string;
  userId?: string;
  fileName: string;
  fileSize?: number;
  fileType?: string;
  fileUrl?: string;
  fileContent?: string; // Base64 or text content
}

/**
 * File processing result
 */
export interface FileProcessingResult {
  success: boolean;
  uploadId: string;
  recordCount?: number;
  correctionResult?: {
    correctionsFound: boolean;
    correctionCount: number;
    correctedData?: PayrollData[];
    issues?: any[];
    summary?: string;
  };
  processingTime: number;
  error?: string;
}

/**
 * Process an uploaded payroll file from MissionX
 * 
 * @param fileData - File upload data from MissionX webhook
 * @param apiKeyId - API key ID for tracking
 * @returns Processing result
 */
export async function processPayrollFile(
  fileData: MissionXFileUploadData,
  apiKeyId?: string
): Promise<FileProcessingResult> {
  const startTime = Date.now();
  
  try {
    console.log(`📄 Processing payroll file: ${fileData.fileName}`);
    
    // Create upload record
    const upload = await prisma.missionXFileUpload.create({
      data: {
        missionxClientId: fileData.clientId,
        missionxFileId: fileData.fileId,
        missionxUserId: fileData.userId,
        fileName: fileData.fileName,
        fileSize: fileData.fileSize,
        fileType: fileData.fileType,
        fileUrl: fileData.fileUrl,
        status: 'PROCESSING',
        apiKeyId: apiKeyId,
      },
    });
    
    console.log(`✅ Upload record created: ${upload.id}`);
    
    // Extract payroll data from file
    let extractedData: PayrollData[];
    
    try {
      extractedData = await extractPayrollData(fileData);
      console.log(`✅ Extracted ${extractedData.length} payroll records`);
      
      // Update upload with extracted data
      await prisma.missionXFileUpload.update({
        where: { id: upload.id },
        data: {
          extractedData: extractedData as any,
          recordCount: extractedData.length,
        },
      });
      
    } catch (error) {
      console.error('❌ Failed to extract payroll data:', error);
      
      await prisma.missionXFileUpload.update({
        where: { id: upload.id },
        data: {
          status: 'FAILED',
          errorMsg: error instanceof Error ? error.message : 'Failed to extract data',
          processingTime: Date.now() - startTime,
        },
      });
      
      return {
        success: false,
        uploadId: upload.id,
        processingTime: Date.now() - startTime,
        error: error instanceof Error ? error.message : 'Failed to extract data',
      };
    }
    
    // Validate extracted data
    const validation = validatePayrollData(extractedData);
    if (!validation.valid) {
      console.log(`❌ Invalid payroll data: ${validation.error}`);
      
      await prisma.missionXFileUpload.update({
        where: { id: upload.id },
        data: {
          status: 'FAILED',
          errorMsg: validation.error,
          processingTime: Date.now() - startTime,
        },
      });
      
      return {
        success: false,
        uploadId: upload.id,
        recordCount: extractedData.length,
        processingTime: Date.now() - startTime,
        error: validation.error,
      };
    }
    
    // Process with AI correction engine if apiKeyId is provided
    if (apiKeyId) {
      console.log('🤖 Starting AI payroll correction...');
      
      const correctionResult = await correctPayrollData(extractedData, apiKeyId);
      
      if (correctionResult.success) {
        console.log(`✅ AI correction completed`);
        
        // Link correction to upload
        await prisma.missionXFileUpload.update({
          where: { id: upload.id },
          data: {
            status: 'COMPLETED',
            processedAt: new Date(),
            processingTime: Date.now() - startTime,
            correctionId: await getCorrectionId(apiKeyId, extractedData),
          },
        });
        
        return {
          success: true,
          uploadId: upload.id,
          recordCount: extractedData.length,
          correctionResult: {
            correctionsFound: correctionResult.correctionsFound,
            correctionCount: correctionResult.correctionCount,
            correctedData: correctionResult.correctedData,
            issues: correctionResult.issues,
            summary: correctionResult.summary,
          },
          processingTime: Date.now() - startTime,
        };
        
      } else {
        console.log(`❌ AI correction failed: ${correctionResult.error}`);
        
        await prisma.missionXFileUpload.update({
          where: { id: upload.id },
          data: {
            status: 'FAILED',
            errorMsg: correctionResult.error,
            processingTime: Date.now() - startTime,
          },
        });
        
        return {
          success: false,
          uploadId: upload.id,
          recordCount: extractedData.length,
          processingTime: Date.now() - startTime,
          error: correctionResult.error,
        };
      }
    } else {
      // No API key - just store extracted data
      console.log('ℹ️ No API key provided, skipping AI correction');
      
      await prisma.missionXFileUpload.update({
        where: { id: upload.id },
        data: {
          status: 'COMPLETED',
          processedAt: new Date(),
          processingTime: Date.now() - startTime,
        },
      });
      
      return {
        success: true,
        uploadId: upload.id,
        recordCount: extractedData.length,
        processingTime: Date.now() - startTime,
      };
    }
    
  } catch (error) {
    const processingTime = Date.now() - startTime;
    console.error('❌ File processing failed:', error);
    
    return {
      success: false,
      uploadId: '',
      processingTime: processingTime,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Extract payroll data from file content
 * Supports CSV and JSON formats
 */
async function extractPayrollData(fileData: MissionXFileUploadData): Promise<PayrollData[]> {
  // If fileContent is provided, parse it
  if (fileData.fileContent) {
    return parseFileContent(fileData.fileContent, fileData.fileType || fileData.fileName);
  }
  
  // If fileUrl is provided, fetch and parse it
  if (fileData.fileUrl) {
    console.log(`📥 Fetching file from URL: ${fileData.fileUrl}`);
    
    const response = await fetch(fileData.fileUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.statusText}`);
    }
    
    const content = await response.text();
    return parseFileContent(content, fileData.fileType || fileData.fileName);
  }
  
  throw new Error('No file content or URL provided');
}

/**
 * Parse file content based on file type
 */
function parseFileContent(content: string, fileTypeOrName: string): PayrollData[] {
  const lowerType = fileTypeOrName.toLowerCase();
  
  // JSON format
  if (lowerType.includes('json') || lowerType.endsWith('.json')) {
    try {
      const parsed = JSON.parse(content);
      return Array.isArray(parsed) ? parsed : [parsed];
    } catch (error) {
      throw new Error('Invalid JSON format');
    }
  }
  
  // CSV format
  if (lowerType.includes('csv') || lowerType.endsWith('.csv')) {
    return parseCSV(content);
  }
  
  // Default to CSV parsing
  return parseCSV(content);
}

/**
 * Parse CSV content to payroll data
 */
function parseCSV(csvContent: string): PayrollData[] {
  const result = Papa.parse(csvContent, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header: string) => {
      // Normalize header names
      return header
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '_')
        .replace(/[^\w_]/g, '');
    },
  });
  
  if (result.errors.length > 0) {
    console.warn('CSV parsing warnings:', result.errors);
  }
  
  if (!result.data || result.data.length === 0) {
    throw new Error('No data found in CSV file');
  }
  
  // Map CSV columns to PayrollData structure
  const payrollData: PayrollData[] = result.data.map((row: any) => {
    // Try to map common column names to expected fields
    return {
      employeeId: row.employee_id || row.employeeid || row.emp_id || row.id || '',
      employeeName: row.employee_name || row.name || row.employee || '',
      hours: parseFloat(row.hours || row.regular_hours || 0),
      rate: parseFloat(row.rate || row.hourly_rate || row.pay_rate || 0),
      overtimeHours: parseFloat(row.overtime_hours || row.overtime || row.ot_hours || 0),
      overtimeRate: parseFloat(row.overtime_rate || row.ot_rate || 0),
      grossPay: parseFloat(row.gross_pay || row.gross || row.total_pay || 0),
      taxWithheld: parseFloat(row.tax_withheld || row.tax || row.taxes || 0),
      netPay: parseFloat(row.net_pay || row.net || row.take_home || 0),
      // Include any additional fields
      ...row,
    };
  });
  
  return payrollData;
}

/**
 * Get the most recent correction ID for the given API key and data
 */
async function getCorrectionId(apiKeyId: string, data: PayrollData[]): Promise<string | undefined> {
  try {
    const correction = await prisma.payrollCorrection.findFirst({
      where: {
        apiKeyId: apiKeyId,
        status: 'COMPLETED',
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    
    return correction?.id;
  } catch (error) {
    console.error('Failed to get correction ID:', error);
    return undefined;
  }
}
