/**
 * Example: Using the MissionX Webhook Integration
 * 
 * This file demonstrates how to send payroll files to the MissionX webhook
 */

// Example 1: Send CSV file content directly
const csvExample = async () => {
  const csvContent = `employee_id,employee_name,hours,rate,overtime_hours,overtime_rate,gross_pay,tax_withheld,net_pay
E001,John Doe,40,25.00,5,37.50,1187.50,237.50,950.00
E002,Jane Smith,45,30.00,5,45.00,1575.00,315.00,1260.00
E003,Bob Johnson,38,22.00,0,0,836.00,167.20,668.80`;

  const response = await fetch('http://localhost:3000/api/missionx/webhook', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      event: 'file.uploaded',
      clientId: 'missionx_client_123',
      userId: 'user_456',
      file: {
        id: 'file_789',
        name: 'payroll_january_2024.csv',
        size: csvContent.length,
        type: 'text/csv',
        content: csvContent
      }
    })
  });

  const result = await response.json();
  console.log('CSV Upload Result:', result);
  return result;
};

// Example 2: With API key for AI correction
const withApiKeyExample = async (apiKey: string) => {
  const csvContent = `employee_id,hours,rate,gross_pay,tax_withheld,net_pay
E001,45,25,1000,50,950
E002,40,30,1500,200,1300`;

  const response = await fetch('http://localhost:3000/api/missionx/webhook', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey
    },
    body: JSON.stringify({
      event: 'file.uploaded',
      clientId: 'missionx_client_123',
      file: {
        name: 'payroll_with_errors.csv',
        type: 'text/csv',
        content: csvContent
      }
    })
  });

  const result = await response.json();
  
  if (result.success && result.data.correctionResult) {
    console.log('Corrections found:', result.data.correctionResult.correctionCount);
    console.log('Issues:', result.data.correctionResult.issues);
  }
  
  return result;
};

export { csvExample, withApiKeyExample };
