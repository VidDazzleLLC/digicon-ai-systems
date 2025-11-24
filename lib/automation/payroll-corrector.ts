/**
 * Payroll Corrector - AI-Powered Payroll Error Detection and Correction
 * Uses Anthropic Claude to analyze and correct payroll data
 * 
 * Features:
 * - Detects calculation errors
 * - Validates tax withholding
 * - Checks overtime calculations
 * - Verifies compliance requirements
 * - Real-time processing (<10 seconds)
 */

import Anthropic from '@anthropic-ai/sdk';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const MODEL = 'claude-3-5-sonnet-20240620';
const MAX_TOKENS = 4096;

/**
 * Payroll data structure
 */
export interface PayrollData {
  employeeId: string;
  employeeName?: string;
  hours?: number;
  rate?: number;
  overtimeHours?: number;
  overtimeRate?: number;
  grossPay?: number;
  taxWithheld?: number;
  netPay?: number;
  [key: string]: any; // Allow additional fields
}

/**
 * Correction result structure
 */
export interface CorrectionResult {
  success: boolean;
  correctionsFound: boolean;
  correctionCount: number;
  originalData: PayrollData[];
  correctedData?: PayrollData[];
  issues?: Array<{
    employeeId: string;
    field: string;
    originalValue: any;
    correctedValue: any;
    reason: string;
    severity: 'critical' | 'warning' | 'info';
  }>;
  summary?: string;
  aiTokensUsed?: number;
  processingTime: number;
  error?: string;
}

/**
 * Analyze and correct payroll data using Anthropic Claude
 * 
 * @param payrollData - Array of payroll records
 * @param apiKeyId - API key ID for tracking
 * @returns Correction result
 */
export async function correctPayrollData(
  payrollData: PayrollData[],
  apiKeyId: string
): Promise<CorrectionResult> {
  const startTime = Date.now();
  
  try {
    console.log(`🤖 Starting AI payroll correction for ${payrollData.length} records`);
    
    // Create correction record
    const correction = await prisma.payrollCorrection.create({
      data: {
        apiKeyId: apiKeyId,
        inputData: payrollData as any,
        aiModel: MODEL,
        status: 'PROCESSING',
      },
    });
    
    // Build prompt for Claude
    const prompt = buildPayrollAnalysisPrompt(payrollData);
    
    // Call Anthropic API
    console.log('📡 Calling Anthropic Claude API...');
    const response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });
    
    console.log('✅ Received response from Claude');
    
    // Extract response content
    const responseText = response.content[0].type === 'text' 
      ? response.content[0].text 
      : '';
    
    // Parse Claude's response
    const analysisResult = parseClaudeResponse(responseText, payrollData);
    
    const processingTime = Date.now() - startTime;
    
    // Update correction record
    await prisma.payrollCorrection.update({
      where: { id: correction.id },
      data: {
        outputData: analysisResult.correctedData as any,
        issuesFound: analysisResult.issues as any,
        correctionsFound: analysisResult.correctionsFound,
        correctionCount: analysisResult.correctionCount,
        aiTokensUsed: response.usage.input_tokens + response.usage.output_tokens,
        processingTime: processingTime,
        status: 'COMPLETED',
        aiRequestId: response.id,
      },
    });
    
    console.log(`✅ Payroll correction completed in ${processingTime}ms`);
    console.log(`- Corrections found: ${analysisResult.correctionCount}`);
    console.log(`- Tokens used: ${response.usage.input_tokens + response.usage.output_tokens}`);
    
    return {
      success: true,
      correctionsFound: analysisResult.correctionsFound,
      correctionCount: analysisResult.correctionCount,
      originalData: payrollData,
      correctedData: analysisResult.correctedData,
      issues: analysisResult.issues,
      summary: analysisResult.summary,
      aiTokensUsed: response.usage.input_tokens + response.usage.output_tokens,
      processingTime: processingTime,
    };
    
  } catch (error) {
    const processingTime = Date.now() - startTime;
    console.error('❌ Payroll correction failed:', error);
    
    // Try to update correction record with error
    try {
      await prisma.payrollCorrection.updateMany({
        where: {
          apiKeyId: apiKeyId,
          status: 'PROCESSING',
        },
        data: {
          status: 'FAILED',
          errorMsg: error instanceof Error ? error.message : 'Unknown error',
          processingTime: processingTime,
        },
      });
    } catch (dbError) {
      console.error('Failed to update correction record:', dbError);
    }
    
    return {
      success: false,
      correctionsFound: false,
      correctionCount: 0,
      originalData: payrollData,
      processingTime: processingTime,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Build prompt for Claude to analyze payroll data
 */
function buildPayrollAnalysisPrompt(payrollData: PayrollData[]): string {
  return `You are a payroll auditing expert. Analyze the following payroll data for errors and inconsistencies.

Check for:
1. Mathematical calculation errors (gross pay, net pay, overtime)
2. Tax withholding accuracy (typical ranges: 15-30% for federal income tax)
3. Overtime rate calculations (typically 1.5x regular rate)
4. Negative or zero values where they shouldn't be
5. Unreasonable values (e.g., $1000/hour rate)
6. Missing required fields
7. Data type inconsistencies

Payroll Data:
${JSON.stringify(payrollData, null, 2)}

Respond in the following JSON format:
{
  "correctionsFound": true/false,
  "correctionCount": <number>,
  "correctedData": [<corrected payroll records>],
  "issues": [
    {
      "employeeId": "<employee ID>",
      "field": "<field name>",
      "originalValue": <original value>,
      "correctedValue": <corrected value>,
      "reason": "<explanation>",
      "severity": "critical|warning|info"
    }
  ],
  "summary": "<brief summary of findings>"
}

IMPORTANT: 
- If no corrections are needed, set correctionsFound to false and correctionCount to 0
- Only correct actual errors, don't make changes for style or format
- Preserve all original fields that don't need correction
- Be conservative - only flag clear errors`;
}

/**
 * Parse Claude's response and extract correction data
 */
function parseClaudeResponse(
  responseText: string,
  originalData: PayrollData[]
): {
  correctionsFound: boolean;
  correctionCount: number;
  correctedData: PayrollData[];
  issues: any[];
  summary: string;
} {
  try {
    // Try to extract JSON from response
    // Claude sometimes wraps JSON in markdown code blocks
    let jsonText = responseText;
    
    // Remove markdown code blocks if present
    const jsonMatch = responseText.match(/```json\s*([\s\S]*?)\s*```/);
    if (jsonMatch) {
      jsonText = jsonMatch[1];
    } else {
      // Try to find JSON object
      const jsonObjectMatch = responseText.match(/\{[\s\S]*\}/);
      if (jsonObjectMatch) {
        jsonText = jsonObjectMatch[0];
      }
    }
    
    const parsed = JSON.parse(jsonText);
    
    return {
      correctionsFound: parsed.correctionsFound || false,
      correctionCount: parsed.correctionCount || 0,
      correctedData: parsed.correctedData || originalData,
      issues: parsed.issues || [],
      summary: parsed.summary || 'Analysis completed',
    };
    
  } catch (error) {
    console.error('Failed to parse Claude response:', error);
    console.log('Raw response:', responseText);
    
    // Return original data if parsing fails
    return {
      correctionsFound: false,
      correctionCount: 0,
      correctedData: originalData,
      issues: [],
      summary: 'Failed to parse AI response',
    };
  }
}

/**
 * Validate payroll data format
 */
export function validatePayrollData(data: any[]): { valid: boolean; error?: string } {
  if (!Array.isArray(data)) {
    return { valid: false, error: 'Data must be an array' };
  }
  
  if (data.length === 0) {
    return { valid: false, error: 'Data array is empty' };
  }
  
  if (data.length > 1000) {
    return { valid: false, error: 'Maximum 1000 records per request' };
  }
  
  // Check each record has required fields
  for (let i = 0; i < data.length; i++) {
    const record = data[i];
    
    if (!record.employeeId) {
      return { 
        valid: false, 
        error: `Record ${i} missing required field: employeeId` 
      };
    }
  }
  
  return { valid: true };
}
