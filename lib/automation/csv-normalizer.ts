/**
 * CSV Format Normalizer - Auto-detects and normalizes various payroll CSV formats
 * Handles multiple naming conventions from different HR systems
 * Supports: ADP, BambooHR, Guidepoint, Workday, standard HR exports, and custom formats
 */

export interface NormalizationMap {
  employeeId: string[];
  employeeName: string[];
  hours: string[];
  rate: string[];
  overtimeHours: string[];
  overtimeRate: string[];
  grossPay: string[];
  taxWithheld: string[];
  netPay: string[];
}

// Mapping of common field names used by different payroll systems
const FIELD_MAPPINGS: Record<string, string[]> = {
  employeeId: ['employeeId', 'employee_id', 'emp_id', 'id', 'empid', 'employee number', 'staff_id', 'employee#', 'emp#'],
  employeeName: ['employeeName', 'employee_name', 'name', 'full_name', 'employee', 'staff_name', 'employee full name'],
  hours: ['hours', 'regular_hours', 'hours_worked', 'hrs', 'regular_hrs', 'total_hours', 'hours worked', 'regular hours worked'],
  rate: ['rate', 'hourly_rate', 'wage_rate', 'pay_rate', 'hourly_wage', 'rate_per_hour', 'hourly rate', 'wage'],
  overtimeHours: ['overtimeHours', 'overtime_hours', 'ot_hours', 'extra_hours', 'overtime_hrs', 'ot hours', 'overtime hours worked'],
  overtimeRate: ['overtimeRate', 'overtime_rate', 'ot_rate', 'overtime_pay_rate', 'ot pay rate'],
  grossPay: ['grossPay', 'gross_pay', 'gross', 'total_pay', 'gross_earnings', 'gross pay', 'total earnings', 'gross amount'],
  taxWithheld: ['taxWithheld', 'tax_withheld', 'taxes', 'tax', 'total_tax', 'income_tax', 'federal_withholding', 'state_withholding', 'fica_withholding', 'tax withheld', 'total tax'],
  netPay: ['netPay', 'net_pay', 'net', 'take_home', 'net_earnings', 'final_pay', 'net pay', 'take home pay', 'net earnings'],
};

/**
 * Detect the format of the CSV based on column headers
 */
export function detectCSVFormat(headers: string[]): {
  format: string;
  confidence: number;
  detectedFields: Record<string, string>;
} {
  const normalizedHeaders = headers.map(h => h.toLowerCase().trim());
  const detectedFields: Record<string, string> = {};
  let matchCount = 0;

  // Try to match headers to known field patterns
  for (const [standardField, aliases] of Object.entries(FIELD_MAPPINGS)) {
    for (let i = 0; i < normalizedHeaders.length; i++) {
      const header = normalizedHeaders[i];
      const isMatch = aliases.some(alias => 
        header === alias.toLowerCase() || 
        header.includes(alias.toLowerCase())
      );
      
      if (isMatch) {
        const originalHeader = headers[i];
        detectedFields[standardField] = originalHeader;
        matchCount++;
        break;
      }
    }
  }

  const confidence = Object.keys(detectedFields).length / Object.keys(FIELD_MAPPINGS).length;
  
  // Determine format based on detected fields
  let format = 'unknown';
  if (detectedFields.employeeId && detectedFields.grossPay) format = 'standard_payroll';
  if (detectedFields.taxWithheld && detectedFields.netPay) format = 'detailed_payroll';
  if (detectedFields.overtimeHours && detectedFields.overtimeRate) format = 'overtime_payroll';

  return { format, confidence, detectedFields };
}

/**
 * Normalize CSV data to standard format
 */
export function normalizeCSVData(
  rawData: any[],
  fieldMapping: Record<string, string>
): any[] {
  return rawData.map((row, index) => {
    const normalized: Record<string, any> = {};

    // Map each standard field to its value in the raw data
    for (const [standardField, originalField] of Object.entries(fieldMapping)) {
      if (originalField && row.hasOwnProperty(originalField)) {
        let value = row[originalField];

        // Type conversions for numeric fields
        if (['hours', 'rate', 'overtimeHours', 'overtimeRate', 'grossPay', 'taxWithheld', 'netPay'].includes(standardField)) {
          if (typeof value === 'string') {
            value = parseFloat(value.replace(/[$,]/g, ''));
          }
          value = isNaN(value) ? 0 : value;
        }

        normalized[standardField] = value;
      }
    }

    // Auto-calculate missing fields if possible
    if (normalized.rate && !normalized.overtimeRate) {
      normalized.overtimeRate = parseFloat((normalized.rate * 1.5).toFixed(2));
    }

    // Consolidate multiple tax fields if taxWithheld not directly mapped
    if (!normalized.taxWithheld) {
      let consolidatedTax = 0;
      const taxFields = ['Federal_Withholding', 'Federal Withholding', 'federal_withholding',
        'State_Withholding', 'State Withholding', 'state_withholding',
        'FICA_Withholding', 'FICA Withholding', 'fica_withholding'];
      
      for (const taxField of taxFields) {
        if (row[taxField]) {
          const taxValue = typeof row[taxField] === 'string' 
            ? parseFloat(row[taxField].replace(/[$,]/g, '')) 
            : row[taxField];
          consolidatedTax += isNaN(taxValue) ? 0 : taxValue;
        }
      }
      
      if (consolidatedTax > 0) {
        normalized.taxWithheld = parseFloat(consolidatedTax.toFixed(2));
      }
    }

    // Ensure employeeId exists
    if (!normalized.employeeId) {
      throw new Error(`Row ${index}: Cannot map employeeId - missing required identifier field`);
    }

    return normalized;
  });
}

/**
 * Validate normalized data
 */
export function validateNormalizedData(data: any[]): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  for (let i = 0; i < data.length; i++) {
    const row = data[i];

    // Check required fields
    if (!row.employeeId) {
      errors.push(`Row ${i}: Missing employeeId`);
    }

    // Validate numeric fields
    if (row.hours !== undefined && row.hours !== null) {
      if (isNaN(row.hours) || row.hours < 0) {
        errors.push(`Row ${i}: Invalid hours value: ${row.hours}`);
      }
    }

    if (row.rate !== undefined && row.rate !== null) {
      if (isNaN(row.rate) || row.rate < 0) {
        errors.push(`Row ${i}: Invalid rate value: ${row.rate}`);
      }
    }

    if (row.grossPay !== undefined && row.grossPay !== null) {
      if (isNaN(row.grossPay) || row.grossPay < 0) {
        errors.push(`Row ${i}: Invalid grossPay value: ${row.grossPay}`);
      }
    }

    if (row.netPay !== undefined && row.netPay !== null) {
      if (isNaN(row.netPay) || row.netPay < 0) {
        errors.push(`Row ${i}: Invalid netPay value: ${row.netPay}`);
      }
    }

    if (row.taxWithheld !== undefined && row.taxWithheld !== null) {
      if (isNaN(row.taxWithheld) || row.taxWithheld < 0) {
        errors.push(`Row ${i}: Invalid taxWithheld value: ${row.taxWithheld}`);
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Main function: Detect, normalize, and validate CSV data
 */
export function processCSVFormat(rawData: any[]): {
  success: boolean;
  normalizedData?: any[];
  detection?: ReturnType<typeof detectCSVFormat>;
  validation?: ReturnType<typeof validateNormalizedData>;
  errors: string[];
} {
  const errors: string[] = [];

  try {
    if (!rawData || rawData.length === 0) {
      errors.push('No data provided for normalization');
      return { success: false, errors };
    }

    // Get headers from first row
    const headers = Object.keys(rawData[0]);
    if (headers.length === 0) {
      errors.push('No headers found in CSV data');
      return { success: false, errors };
    }

    // Detect format
    const detection = detectCSVFormat(headers);
    console.log(`📋 Detected CSV format: ${detection.format} (confidence: ${(detection.confidence * 100).toFixed(0)}%)`);
    console.log(`📍 Detected fields: ${Object.keys(detection.detectedFields).join(', ')}`);

    if (detection.confidence < 0.3) {
      errors.push(`Low confidence format detection (${(detection.confidence * 100).toFixed(0)}%). CSV format may not be compatible.`);
    }

    if (!detection.detectedFields.employeeId) {
      errors.push('Cannot detect employeeId field - this is a required field');
      return { success: false, errors, detection };
    }

    // Normalize data
    const normalizedData = normalizeCSVData(rawData, detection.detectedFields);
    console.log(`✅ Normalized ${normalizedData.length} records`);

    // Validate data
    const validation = validateNormalizedData(normalizedData);
    if (!validation.valid) {
      errors.push(...validation.errors);
    }

    return {
      success: validation.valid,
      normalizedData,
      detection,
      validation,
      errors,
    };
  } catch (error) {
    errors.push(error instanceof Error ? error.message : 'Unknown error during CSV normalization');
    return { success: false, errors };
  }
}
