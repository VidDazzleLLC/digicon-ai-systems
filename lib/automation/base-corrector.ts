/**
 * Base AI Corrector using Anthropic Claude
 * Shared logic for all 6 automation systems
 */

import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export type SystemType = 'payroll' | 'hris' | 'erp' | 'crm' | 'compliance' | 'ai_infrastructure';

export interface CorrectionResult {
  success: boolean;
  issuesFound: string[];
  aiReasoning: string;
  confidence: number;
  correctedData: any;
  corrections: Array<{
    field: string;
    originalValue: any;
    correctedValue: any;
    reason: string;
  }>;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: string;
  estimatedSavings?: number;
  error?: string;
}

/**
 * System-specific AI prompts
 */
const SYSTEM_PROMPTS: Record<SystemType, string> = {
  payroll: `You are an expert payroll compliance AI. Analyze payroll data and detect:
- Overtime calculation errors
- Tax withholding mistakes
- Duplicate payment entries
- Missing deductions
- Rate calculation errors
- Hours worked anomalies

Return corrections in JSON format with detailed reasoning.`,

  hris: `You are an HRIS compliance AI. Analyze employee data and detect:
- Duplicate employee records
- Benefits calculation errors
- PTO tracking mistakes
- Missing required fields
- Performance review gaps
- Inconsistent data entries

Return corrections in JSON format with detailed reasoning.`,

  erp: `You are an ERP optimization AI. Analyze business processes and detect:
- Inventory count discrepancies
- Procurement delays and inefficiencies
- Supply chain bottlenecks
- Workflow optimization opportunities
- Order processing errors
- Vendor management issues

Return corrections in JSON format with detailed reasoning.`,

  crm: `You are a CRM optimization AI. Analyze sales data and detect:
- Duplicate lead entries
- Pipeline stage errors
- Missing follow-up activities
- Data quality issues
- Opportunity value miscalculations
- Contact information inconsistencies

Return corrections in JSON format with detailed reasoning.`,

  compliance: `You are a compliance AI. Analyze regulatory data and detect:
- Policy violations
- Missing documentation
- Audit trail gaps
- Risk exposure areas
- Regulatory non-compliance
- Control deficiencies

Return corrections in JSON format with detailed reasoning.`,

  ai_infrastructure: `You are an AI infrastructure optimizer. Analyze AI systems and detect:
- Cost inefficiencies in API usage
- Model performance bottlenecks
- Suboptimal API call patterns
- Token usage optimization opportunities
- Latency issues
- Resource allocation problems

Return corrections in JSON format with detailed reasoning.`,
};

/**
 * Analyze data and generate corrections using Claude
 */
export async function analyzeCorrection(
  systemType: SystemType,
  data: any,
  recordId: string
): Promise<CorrectionResult> {
  try {
    const systemPrompt = SYSTEM_PROMPTS[systemType];
    
    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20240620',
      max_tokens: 4096,
      messages: [
        {
          role: 'user',
          content: `${systemPrompt}

RECORD ID: ${recordId}

DATA TO ANALYZE:
${JSON.stringify(data, null, 2)}

Please analyze this data and return a JSON object with the following structure:
{
  "issuesFound": ["list of issues detected"],
  "reasoning": "detailed explanation of the analysis",
  "confidence": 0.95,
  "correctedData": { ... corrected version of the data ... },
  "corrections": [
    {
      "field": "fieldName",
      "originalValue": "old value",
      "correctedValue": "new value",
      "reason": "why this correction was made"
    }
  ],
  "severity": "low|medium|high|critical",
  "category": "specific category for this system type",
  "estimatedSavings": 1234.56
}

If no issues are found, return issuesFound as an empty array and correctedData as the original data.`
        }
      ]
    });

    // Extract the JSON response from Claude
    const responseText = message.content[0].type === 'text' 
      ? message.content[0].text 
      : '';
    
    // Try to parse JSON from the response
    let aiResponse;
    try {
      // Look for JSON in the response
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        aiResponse = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('No JSON found in response');
      }
    } catch (parseError) {
      // If parsing fails, return a basic result
      return {
        success: false,
        issuesFound: [],
        aiReasoning: 'Failed to parse AI response',
        confidence: 0,
        correctedData: data,
        corrections: [],
        severity: 'low',
        category: 'parse_error',
        error: 'Failed to parse AI response'
      };
    }

    return {
      success: true,
      issuesFound: aiResponse.issuesFound || [],
      aiReasoning: aiResponse.reasoning || '',
      confidence: aiResponse.confidence || 0.5,
      correctedData: aiResponse.correctedData || data,
      corrections: aiResponse.corrections || [],
      severity: aiResponse.severity || 'low',
      category: aiResponse.category || 'general',
      estimatedSavings: aiResponse.estimatedSavings,
    };

  } catch (error) {
    console.error('AI correction error:', error);
    return {
      success: false,
      issuesFound: [],
      aiReasoning: 'AI analysis failed',
      confidence: 0,
      correctedData: data,
      corrections: [],
      severity: 'low',
      category: 'error',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Batch analyze multiple records
 */
export async function analyzeBatch(
  systemType: SystemType,
  records: Array<{ id: string; data: any }>
): Promise<CorrectionResult[]> {
  const results = await Promise.all(
    records.map(record => analyzeCorrection(systemType, record.data, record.id))
  );
  
  return results;
}
