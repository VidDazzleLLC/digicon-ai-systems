#!/usr/bin/env node

/**
 * API Key Verification Script
 * 
 * This script validates the format of all required API keys and secrets
 * WITHOUT making actual API calls. It checks format only.
 * 
 * Usage:
 *   node scripts/verify-keys.js
 *   npm run verify-keys
 */

const crypto = require('crypto');

/**
 * Verify all API keys and secrets
 */
function verifyKeys() {
  const results = [];
  let hasErrors = false;

  console.log('Verifying API Keys and Secrets...\n');

  // ===========================================
  // AI/LLM API Keys
  // ===========================================
  
  // Anthropic Claude
  if (process.env.ANTHROPIC_API_KEY) {
    if (process.env.ANTHROPIC_API_KEY.startsWith('sk-ant-')) {
      results.push('✅ Anthropic API Key: Valid format');
    } else {
      results.push('❌ Anthropic API Key: Invalid format (should start with sk-ant-)');
      hasErrors = true;
    }
  } else {
    results.push('⚠️  Anthropic API Key: Not set');
  }

  // Google Gemini
  if (process.env.GEMINI_FILE_SEARCH_API_KEY) {
    if (process.env.GEMINI_FILE_SEARCH_API_KEY.startsWith('AIzaSy')) {
      results.push('✅ Gemini API Key: Valid format');
    } else {
      results.push('❌ Gemini API Key: Invalid format (should start with AIzaSy)');
      hasErrors = true;
    }
  } else {
    results.push('⚠️  Gemini API Key: Not set');
  }

  // Together.ai
  if (process.env.TOGETHER_AI_API_KEY) {
    if (process.env.TOGETHER_AI_API_KEY.length > 10) {
      results.push('✅ Together.ai API Key: Valid format');
    } else {
      results.push('❌ Together.ai API Key: Too short');
      hasErrors = true;
    }
  } else {
    results.push('⚠️  Together.ai API Key: Not set');
  }

  // OpenAI (Optional)
  if (process.env.OPENAI_API_KEY) {
    if (process.env.OPENAI_API_KEY.startsWith('sk-')) {
      results.push('✅ OpenAI API Key: Valid format (optional)');
    } else {
      results.push('❌ OpenAI API Key: Invalid format (should start with sk-)');
      hasErrors = true;
    }
  }

  // ===========================================
  // Stripe API Keys
  // ===========================================
  
  // Stripe Secret Key
  if (process.env.STRIPE_SECRET_KEY) {
    if (process.env.STRIPE_SECRET_KEY.startsWith('sk_')) {
      // Check if live or test
      if (process.env.STRIPE_SECRET_KEY.startsWith('sk_live_')) {
        results.push('✅ Stripe Secret Key: Valid format (LIVE mode)');
      } else if (process.env.STRIPE_SECRET_KEY.startsWith('sk_test_')) {
        results.push('✅ Stripe Secret Key: Valid format (TEST mode)');
      } else {
        results.push('⚠️  Stripe Secret Key: Valid format (unknown mode)');
      }
    } else {
      results.push('❌ Stripe Secret Key: Invalid format (should start with sk_)');
      hasErrors = true;
    }
  } else {
    results.push('⚠️  Stripe Secret Key: Not set');
  }

  // Stripe Publishable Key
  if (process.env.STRIPE_PUBLISHABLE_KEY) {
    if (process.env.STRIPE_PUBLISHABLE_KEY.startsWith('pk_')) {
      results.push('✅ Stripe Publishable Key: Valid format');
    } else {
      results.push('❌ Stripe Publishable Key: Invalid format (should start with pk_)');
      hasErrors = true;
    }
  } else {
    results.push('⚠️  Stripe Publishable Key: Not set');
  }

  // Stripe Webhook Secret
  if (process.env.STRIPE_WEBHOOK_SECRET) {
    if (process.env.STRIPE_WEBHOOK_SECRET.startsWith('whsec_')) {
      results.push('✅ Stripe Webhook Secret: Valid format');
    } else {
      results.push('❌ Stripe Webhook Secret: Invalid format (should start with whsec_)');
      hasErrors = true;
    }
  } else {
    results.push('⚠️  Stripe Webhook Secret: Not set');
  }

  // ===========================================
  // Security Secrets
  // ===========================================
  
  // Encryption Secret (must be 64 hex chars = 32 bytes)
  if (process.env.ENCRYPTION_SECRET) {
    if (process.env.ENCRYPTION_SECRET.length === 64 && /^[0-9a-fA-F]+$/.test(process.env.ENCRYPTION_SECRET)) {
      results.push('✅ Encryption Secret: Valid length (64 hex chars)');
    } else if (process.env.ENCRYPTION_SECRET.length === 64) {
      results.push('❌ Encryption Secret: Contains non-hex characters');
      hasErrors = true;
    } else {
      results.push(`❌ Encryption Secret: Invalid length (${process.env.ENCRYPTION_SECRET.length} chars, need 64)`);
      hasErrors = true;
    }
  } else {
    results.push('❌ Encryption Secret: Not set (CRITICAL)');
    hasErrors = true;
  }

  // JWT Secret (must be 64 hex chars = 32 bytes)
  if (process.env.JWT_SECRET) {
    if (process.env.JWT_SECRET.length === 64 && /^[0-9a-fA-F]+$/.test(process.env.JWT_SECRET)) {
      results.push('✅ JWT Secret: Valid length (64 hex chars)');
    } else if (process.env.JWT_SECRET.length === 64) {
      results.push('❌ JWT Secret: Contains non-hex characters');
      hasErrors = true;
    } else {
      results.push(`❌ JWT Secret: Invalid length (${process.env.JWT_SECRET.length} chars, need 64)`);
      hasErrors = true;
    }
  } else {
    results.push('❌ JWT Secret: Not set (CRITICAL)');
    hasErrors = true;
  }

  // Session Secret (optional but recommended)
  if (process.env.SESSION_SECRET) {
    if (process.env.SESSION_SECRET.length === 64 && /^[0-9a-fA-F]+$/.test(process.env.SESSION_SECRET)) {
      results.push('✅ Session Secret: Valid length (64 hex chars)');
    } else if (process.env.SESSION_SECRET.length >= 32) {
      results.push('✅ Session Secret: Adequate length');
    } else {
      results.push('⚠️  Session Secret: Too short (should be 64 hex chars)');
    }
  }

  // Webhook Secret (optional)
  if (process.env.WEBHOOK_SECRET) {
    if (process.env.WEBHOOK_SECRET.length === 64 && /^[0-9a-fA-F]+$/.test(process.env.WEBHOOK_SECRET)) {
      results.push('✅ Webhook Secret: Valid length (64 hex chars)');
    } else if (process.env.WEBHOOK_SECRET.length >= 32) {
      results.push('✅ Webhook Secret: Adequate length');
    } else {
      results.push('⚠️  Webhook Secret: Too short (should be 64 hex chars)');
    }
  }

  // ===========================================
  // Database Configuration
  // ===========================================
  
  if (process.env.DATABASE_URL) {
    if (process.env.DATABASE_URL.startsWith('postgresql://') || 
        process.env.DATABASE_URL.startsWith('postgres://')) {
      results.push('✅ Database URL: Valid PostgreSQL format');
    } else {
      results.push('❌ Database URL: Invalid format (should start with postgresql:// or postgres://)');
      hasErrors = true;
    }
  } else {
    results.push('⚠️  Database URL: Not set');
  }

  // ===========================================
  // Application Configuration
  // ===========================================
  
  if (process.env.NODE_ENV) {
    const validEnvs = ['development', 'production', 'test'];
    if (validEnvs.includes(process.env.NODE_ENV)) {
      results.push(`✅ NODE_ENV: ${process.env.NODE_ENV}`);
    } else {
      results.push(`⚠️  NODE_ENV: ${process.env.NODE_ENV} (should be development, production, or test)`);
    }
  } else {
    results.push('⚠️  NODE_ENV: Not set (will default to development)');
  }

  if (process.env.BASE_URL) {
    try {
      new URL(process.env.BASE_URL);
      results.push('✅ BASE_URL: Valid URL format');
    } catch {
      results.push('❌ BASE_URL: Invalid URL format');
      hasErrors = true;
    }
  } else {
    results.push('⚠️  BASE_URL: Not set');
  }

  // ===========================================
  // Print Results
  // ===========================================
  
  results.forEach(result => console.log(result));
  console.log('');

  // ===========================================
  // Summary
  // ===========================================
  
  const criticalErrors = results.filter(r => r.includes('❌') && r.includes('CRITICAL')).length;
  const totalErrors = results.filter(r => r.includes('❌')).length;
  const warnings = results.filter(r => r.includes('⚠️')).length;
  const passed = results.filter(r => r.includes('✅')).length;

  console.log('===========================================');
  console.log('Summary:');
  console.log(`  ✅ Passed: ${passed}`);
  if (warnings > 0) console.log(`  ⚠️  Warnings: ${warnings}`);
  if (totalErrors > 0) console.log(`  ❌ Errors: ${totalErrors}`);
  if (criticalErrors > 0) console.log(`  🚨 Critical Errors: ${criticalErrors}`);
  console.log('===========================================\n');

  if (criticalErrors > 0) {
    console.log('⛔ CRITICAL: Cannot proceed with deployment. Fix critical errors first.\n');
    return false;
  } else if (totalErrors > 0) {
    console.log('⚠️  WARNING: Some errors found. Fix before deploying to production.\n');
    return false;
  } else if (warnings > 0) {
    console.log('✓ Basic validation passed, but some optional keys are missing.\n');
    return true;
  } else {
    console.log('✓ All checks passed! Ready for deployment. 🚀\n');
    return true;
  }
}

/**
 * Generate example secrets
 */
function generateSecrets() {
  console.log('Generating example secrets:\n');
  console.log('ENCRYPTION_SECRET=' + crypto.randomBytes(32).toString('hex'));
  console.log('JWT_SECRET=' + crypto.randomBytes(32).toString('hex'));
  console.log('SESSION_SECRET=' + crypto.randomBytes(32).toString('hex'));
  console.log('WEBHOOK_SECRET=' + crypto.randomBytes(32).toString('hex'));
  console.log('\nCopy these to your .env.production file');
}

// ===========================================
// Main Execution
// ===========================================

// Check if running directly
if (require.main === module) {
  // Check command line arguments
  const args = process.argv.slice(2);
  
  if (args.includes('--generate') || args.includes('-g')) {
    generateSecrets();
  } else if (args.includes('--help') || args.includes('-h')) {
    console.log(`
API Key Verification Script

Usage:
  node scripts/verify-keys.js           # Verify all keys
  node scripts/verify-keys.js -g        # Generate new secrets
  node scripts/verify-keys.js --help    # Show this help

Options:
  -g, --generate    Generate example encryption secrets
  -h, --help        Show this help message

Environment Variables Checked:
  - ANTHROPIC_API_KEY
  - GEMINI_FILE_SEARCH_API_KEY
  - TOGETHER_AI_API_KEY
  - OPENAI_API_KEY (optional)
  - STRIPE_SECRET_KEY
  - STRIPE_PUBLISHABLE_KEY
  - STRIPE_WEBHOOK_SECRET
  - ENCRYPTION_SECRET (critical)
  - JWT_SECRET (critical)
  - SESSION_SECRET
  - WEBHOOK_SECRET
  - DATABASE_URL
  - NODE_ENV
  - BASE_URL
    `);
  } else {
    const success = verifyKeys();
    process.exit(success ? 0 : 1);
  }
}

// Export for use in other scripts
module.exports = { verifyKeys, generateSecrets };
