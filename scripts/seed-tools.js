// Seed Tools Database
// Creates sample tools for the Code Execution Architecture
// 10-15 tools across 5 categories: data, api, documents, analytics, automation

const crypto = require('crypto');

// Tool Categories
const CATEGORIES = [
  {
    name: 'data',
    description: 'Data processing and transformation tools',
    icon: '📊'
  },
  {
    name: 'api',
    description: 'External API integrations',
    icon: '🔌'
  },
  {
    name: 'documents',
    description: 'Document parsing and extraction',
    icon: '📄'
  },
  {
    name: 'analytics',
    description: 'Data analysis and insights',
    icon: '📈'
  },
  {
    name: 'automation',
    description: 'Workflow automation tools',
    icon: '⚙️'
  }
];

// Sample Tools
const TOOLS = [
  // === DATA CATEGORY ===
  {
    name: 'CSV Parser',
    description: 'Parse and validate CSV files with automatic type detection',
    category: 'data',
    language: 'python',
    version: '1.0.0',
    requiredPackages: ['pandas', 'numpy'],
    codeTemplate: `
import pandas as pd
import json
import sys

def parse_csv(file_path, **options):
    """Parse CSV file and return structured data"""
    try:
        # Read CSV with pandas
        df = pd.read_csv(file_path, **options)
        
        # Basic statistics
        stats = {
            'rowCount': len(df),
            'columnCount': len(df.columns),
            'columns': df.columns.tolist(),
            'dtypes': df.dtypes.astype(str).to_dict(),
            'memoryUsage': df.memory_usage(deep=True).sum(),
            'preview': df.head(5).to_dict('records')
        }
        
        return {
            'success': True,
            'data': stats,
            'message': f'Parsed {len(df)} rows successfully'
        }
    except Exception as e:
        return {
            'success': False,
            'error': str(e)
        }

# Example usage
if __name__ == '__main__':
    result = parse_csv('/path/to/file.csv')
    print(json.dumps(result))
    `,
    requiresSandbox: true,
    maxMemoryMB: 1024,
    maxTimeoutSec: 60
  },
  {
    name: 'JSON Transformer',
    description: 'Transform JSON data structures with custom mappings',
    category: 'data',
    language: 'javascript',
    version: '1.0.0',
    requiredPackages: ['lodash'],
    codeTemplate: `
const _ = require('lodash');

function transformJSON(data, mapping) {
  try {
    // Apply transformation rules
    const transformed = _.transform(data, (result, value, key) => {
      const mappedKey = mapping[key] || key;
      result[mappedKey] = value;
    }, {});
    
    return {
      success: true,
      data: transformed,
      message: 'Transformation completed'
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

// Example usage
const result = transformJSON(inputData, mappingRules);
console.log(JSON.stringify(result));
    `,
    requiresSandbox: true,
    maxMemoryMB: 512,
    maxTimeoutSec: 30
  },
  
  // === API CATEGORY ===
  {
    name: 'Stripe Payment',
    description: 'Process payments and retrieve transaction data via Stripe API',
    category: 'api',
    language: 'python',
    version: '1.0.0',
    requiredPackages: ['stripe'],
    codeTemplate: `
import stripe
import json
import os

stripe.api_key = os.getenv('STRIPE_SECRET_KEY')

def create_payment_intent(amount, currency='usd', **metadata):
    """Create a Stripe payment intent"""
    try:
        intent = stripe.PaymentIntent.create(
            amount=amount,
            currency=currency,
            metadata=metadata
        )
        
        return {
            'success': True,
            'data': {
                'id': intent.id,
                'amount': intent.amount,
                'currency': intent.currency,
                'status': intent.status,
                'client_secret': intent.client_secret
            }
        }
    except Exception as e:
        return {
            'success': False,
            'error': str(e)
        }

# Example usage
result = create_payment_intent(1000, currency='usd')
print(json.dumps(result))
    `,
    requiresSandbox: true,
    maxMemoryMB: 256,
    maxTimeoutSec: 30
  },
  {
    name: 'Twilio SMS',
    description: 'Send SMS messages via Twilio API',
    category: 'api',
    language: 'javascript',
    version: '1.0.0',
    requiredPackages: ['twilio'],
    codeTemplate: `
const twilio = require('twilio');

async function sendSMS(to, message) {
  try {
    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );
    
    const result = await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: to
    });
    
    return {
      success: true,
      data: {
        sid: result.sid,
        status: result.status,
        to: result.to
      }
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

// Example usage
sendSMS('+1234567890', 'Hello from Code Execution!')
  .then(result => console.log(JSON.stringify(result)));
    `,
    requiresSandbox: true,
    maxMemoryMB: 256,
    maxTimeoutSec: 30
  },
  
  // === DOCUMENTS CATEGORY ===
  {
    name: 'PDF Extractor',
    description: 'Extract text and metadata from PDF files',
    category: 'documents',
    language: 'python',
    version: '1.0.0',
    requiredPackages: ['PyPDF2'],
    codeTemplate: `
import PyPDF2
import json

def extract_pdf(file_path):
    """Extract text and metadata from PDF"""
    try:
        with open(file_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            
            # Extract metadata
            metadata = {
                'pageCount': len(reader.pages),
                'title': reader.metadata.get('/Title', ''),
                'author': reader.metadata.get('/Author', ''),
                'subject': reader.metadata.get('/Subject', '')
            }
            
            # Extract text from first 5 pages
            text_preview = []
            for i in range(min(5, len(reader.pages))):
                page = reader.pages[i]
                text_preview.append(page.extract_text())
            
            return {
                'success': True,
                'data': {
                    'metadata': metadata,
                    'preview': text_preview[:500]  # First 500 chars
                }
            }
    except Exception as e:
        return {
            'success': False,
            'error': str(e)
        }

# Example usage
result = extract_pdf('/path/to/file.pdf')
print(json.dumps(result))
    `,
    requiresSandbox: true,
    maxMemoryMB: 1024,
    maxTimeoutSec: 60
  },
  {
    name: 'Excel Reader',
    description: 'Read and parse Excel spreadsheets',
    category: 'documents',
    language: 'python',
    version: '1.0.0',
    requiredPackages: ['openpyxl', 'pandas'],
    codeTemplate: `
import pandas as pd
import json

def read_excel(file_path, sheet_name=0):
    """Read Excel file and return data"""
    try:
        df = pd.read_excel(file_path, sheet_name=sheet_name)
        
        return {
            'success': True,
            'data': {
                'rowCount': len(df),
                'columnCount': len(df.columns),
                'columns': df.columns.tolist(),
                'preview': df.head(10).to_dict('records')
            }
        }
    except Exception as e:
        return {
            'success': False,
            'error': str(e)
        }

# Example usage
result = read_excel('/path/to/file.xlsx')
print(json.dumps(result))
    `,
    requiresSandbox: true,
    maxMemoryMB: 1024,
    maxTimeoutSec: 60
  },
  
  // === ANALYTICS CATEGORY ===
  {
    name: 'Statistical Analyzer',
    description: 'Calculate statistical metrics and distributions',
    category: 'analytics',
    language: 'python',
    version: '1.0.0',
    requiredPackages: ['pandas', 'numpy', 'scipy'],
    codeTemplate: `
import pandas as pd
import numpy as np
from scipy import stats
import json

def analyze_statistics(data):
    """Calculate comprehensive statistics"""
    try:
        df = pd.DataFrame(data)
        numeric_cols = df.select_dtypes(include=[np.number]).columns
        
        results = {}
        for col in numeric_cols:
            results[col] = {
                'mean': float(df[col].mean()),
                'median': float(df[col].median()),
                'std': float(df[col].std()),
                'min': float(df[col].min()),
                'max': float(df[col].max()),
                'skewness': float(stats.skew(df[col].dropna())),
                'kurtosis': float(stats.kurtosis(df[col].dropna()))
            }
        
        return {
            'success': True,
            'data': results
        }
    except Exception as e:
        return {
            'success': False,
            'error': str(e)
        }

# Example usage
result = analyze_statistics(input_data)
print(json.dumps(result))
    `,
    requiresSandbox: true,
    maxMemoryMB: 512,
    maxTimeoutSec: 30
  },
  {
    name: 'Trend Detector',
    description: 'Detect trends and patterns in time series data',
    category: 'analytics',
    language: 'python',
    version: '1.0.0',
    requiredPackages: ['pandas', 'numpy'],
    codeTemplate: `
import pandas as pd
import numpy as np
import json

def detect_trends(data, date_column, value_column):
    """Detect trends in time series"""
    try:
        df = pd.DataFrame(data)
        df[date_column] = pd.to_datetime(df[date_column])
        df = df.sort_values(date_column)
        
        # Calculate trend
        x = np.arange(len(df))
        y = df[value_column].values
        slope, intercept = np.polyfit(x, y, 1)
        
        trend = 'increasing' if slope > 0 else 'decreasing'
        
        return {
            'success': True,
            'data': {
                'trend': trend,
                'slope': float(slope),
                'confidence': abs(float(slope)) / (df[value_column].std() + 1e-10)
            }
        }
    except Exception as e:
        return {
            'success': False,
            'error': str(e)
        }

# Example usage
result = detect_trends(input_data, 'date', 'value')
print(json.dumps(result))
    `,
    requiresSandbox: true,
    maxMemoryMB: 512,
    maxTimeoutSec: 30
  },
  
  // === AUTOMATION CATEGORY ===
  {
    name: 'Email Sender',
    description: 'Send emails via SMTP with attachments',
    category: 'automation',
    language: 'python',
    version: '1.0.0',
    requiredPackages: ['smtplib'],
    codeTemplate: `
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import json
import os

def send_email(to, subject, body, html=False):
    """Send email via SMTP"""
    try:
        msg = MIMEMultipart()
        msg['From'] = os.getenv('SMTP_FROM')
        msg['To'] = to
        msg['Subject'] = subject
        
        mime_type = 'html' if html else 'plain'
        msg.attach(MIMEText(body, mime_type))
        
        with smtplib.SMTP(os.getenv('SMTP_HOST'), int(os.getenv('SMTP_PORT', 587))) as server:
            server.starttls()
            server.login(os.getenv('SMTP_USER'), os.getenv('SMTP_PASS'))
            server.send_message(msg)
        
        return {
            'success': True,
            'message': 'Email sent successfully'
        }
    except Exception as e:
        return {
            'success': False,
            'error': str(e)
        }

# Example usage
result = send_email('user@example.com', 'Test Subject', 'Test body')
print(json.dumps(result))
    `,
    requiresSandbox: true,
    maxMemoryMB: 256,
    maxTimeoutSec: 30
  },
  {
    name: 'File Watcher',
    description: 'Monitor directory for file changes',
    category: 'automation',
    language: 'javascript',
    version: '1.0.0',
    requiredPackages: ['chokidar'],
    codeTemplate: `
const chokidar = require('chokidar');

function watchDirectory(path, options = {}) {
  const watcher = chokidar.watch(path, {
    ignored: /(^|[\\/\\])\\../, // ignore dotfiles
    persistent: true,
    ...options
  });
  
  const events = [];
  
  watcher
    .on('add', path => events.push({ type: 'add', path }))
    .on('change', path => events.push({ type: 'change', path }))
    .on('unlink', path => events.push({ type: 'unlink', path }));
  
  // Return events after timeout
  setTimeout(() => {
    watcher.close();
    console.log(JSON.stringify({ success: true, events }));
  }, 5000);
}

// Example usage
watchDirectory('/path/to/watch');
    `,
    requiresSandbox: true,
    maxMemoryMB: 256,
    maxTimeoutSec: 30
  },
  {
    name: 'Data Validator',
    description: 'Validate data against schemas and rules',
    category: 'automation',
    language: 'python',
    version: '1.0.0',
    requiredPackages: ['jsonschema'],
    codeTemplate: `
from jsonschema import validate, ValidationError
import json

def validate_data(data, schema):
    """Validate data against JSON schema"""
    try:
        validate(instance=data, schema=schema)
        return {
            'success': True,
            'valid': True,
            'message': 'Data is valid'
        }
    except ValidationError as e:
        return {
            'success': True,
            'valid': False,
            'error': str(e.message),
            'path': list(e.path)
        }
    except Exception as e:
        return {
            'success': False,
            'error': str(e)
        }

# Example usage
result = validate_data(input_data, validation_schema)
print(json.dumps(result))
    `,
    requiresSandbox: true,
    maxMemoryMB: 256,
    maxTimeoutSec: 30
  }
];

// Seed function
async function seedTools(database) {
  console.log('Seeding Code Execution Architecture tools...');
  
  try {
    // Insert categories
    const categoryIds = {};
    for (const category of CATEGORIES) {
      const id = await database.insert('tool_categories', {
        name: category.name,
        description: category.description,
        icon: category.icon,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      categoryIds[category.name] = id;
      console.log(`✓ Created category: ${category.name}`);
    }
    
    // Insert tools
    for (const tool of TOOLS) {
      await database.insert('tools', {
        name: tool.name,
        description: tool.description,
        version: tool.version,
        categoryId: categoryIds[tool.category],
        codeTemplate: tool.codeTemplate.trim(),
        language: tool.language,
        requiredPackages: tool.requiredPackages,
        usageCount: 0,
        requiresSandbox: tool.requiresSandbox,
        maxMemoryMB: tool.maxMemoryMB,
        maxTimeoutSec: tool.maxTimeoutSec,
        active: true,
        deprecated: false,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log(`✓ Created tool: ${tool.name} (${tool.category})`);
    }
    
    console.log(`\n✅ Successfully seeded ${CATEGORIES.length} categories and ${TOOLS.length} tools`);
    console.log('\nTools by category:');
    for (const category of CATEGORIES) {
      const count = TOOLS.filter(t => t.category === category.name).length;
      console.log(`  ${category.icon} ${category.name}: ${count} tools`);
    }
    
  } catch (error) {
    console.error('❌ Seeding failed:', error.message);
    throw error;
  }
}

// CLI usage
if (require.main === module) {
  console.log('Usage: node seed-tools.js');
  console.log('Note: This requires database connection to be configured');
  console.log('\nTool Summary:');
  console.log(`- Categories: ${CATEGORIES.length}`);
  console.log(`- Tools: ${TOOLS.length}`);
  CATEGORIES.forEach(cat => {
    const count = TOOLS.filter(t => t.category === cat.name).length;
    console.log(`  ${cat.icon} ${cat.name}: ${count} tools`);
  });
}

module.exports = { CATEGORIES, TOOLS, seedTools };
