'use server';
/**
 * Sandbox Code Executor
 * 
 * Safely executes code in an isolated environment with security measures
 */

import { SandboxOptions, CodeExecutionResult } from '../mcp/types';
import { VM } from 'vm2';

/**
 * Execute code in a sandboxed environment
 * Uses vm2 for secure code execution
 */
export async function executeCode(
  code: string,
  options: SandboxOptions
): Promise<CodeExecutionResult> {
  const startTime = Date.now();

  try {
    // Create a new VM instance with security options
    const vm = new VM({
      timeout: options.timeout,
      sandbox: {
        console: {
          log: (...args: any[]) => output.push(...args.map(String)),
          error: (...args: any[]) => errors.push(...args.map(String)),
          warn: (...args: any[]) => output.push(...args.map(String)),
          info: (...args: any[]) => output.push(...args.map(String)),
        },
        ...(options.env || {}),
      },
      eval: false,
      wasm: false,
    });

    const output: string[] = [];
    const errors: string[] = [];

    // Execute the code
    const result = vm.run(code);

    // If there's a return value, add it to output
    if (result !== undefined) {
      output.push(String(result));
    }

    const executionTime = Date.now() - startTime;

    if (errors.length > 0) {
      return {
        success: false,
        error: errors.join('\n'),
        executionTime,
      };
    }

    return {
      success: true,
      output: output.join('\n') || '(no output)',
      executionTime,
    };
  } catch (error) {
    const executionTime = Date.now() - startTime;
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
      executionTime,
    };
  }
}

/**
 * Validate code before execution
 * Checks for potentially dangerous operations
 */
export function validateCode(code: string): { valid: boolean; reason?: string } {
  // Check for dangerous patterns
  const dangerousPatterns = [
    /require\s*\(/gi,
    /import\s+/gi,
    /eval\s*\(/gi,
    /Function\s*\(/gi,
    /process\./gi,
    /child_process/gi,
    /fs\./gi,
    /__dirname/gi,
    /__filename/gi,
  ];

  for (const pattern of dangerousPatterns) {
    if (pattern.test(code)) {
      return {
        valid: false,
        reason: `Code contains potentially dangerous operation: ${pattern}`,
      };
    }
  }

  return { valid: true };
}

/**
 * Execute code with automatic validation
 */
export async function executeCodeSafe(
  code: string,
  options: SandboxOptions
): Promise<CodeExecutionResult> {
  const validation = validateCode(code);
  
  if (!validation.valid) {
    return {
      success: false,
      error: `Code validation failed: ${validation.reason}`,
      executionTime: 0,
    };
  }

  return executeCode(code, options);
}

