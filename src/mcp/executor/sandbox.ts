import * as vm from 'vm';
import { MCPContext } from '../types';

export type SandboxExecuteOptions = {
  timeoutMs?: number;
  contextVariables?: Record<string, any>;
};

export async function executeInSandbox(
  code: string,
  ctx: MCPContext,
  options: SandboxExecuteOptions = {}
): Promise<any> {
  const timeout = options.timeoutMs ?? 1000;
  const sandbox: Record<string, any> = {
    console: {
      log: (..._args: any[]) => {
        /* optional capture */
      },
    },
    context: ctx,
    ...options.contextVariables,
  };

  const script = new vm.Script(`(async () => { ${code} })()`);

  try {
    const result = await script.runInNewContext(sandbox, { timeout });
    return result;
  } catch (err) {
    const message = err && (err as any).message ? (err as any).message : String(err);
    throw new Error(`Sandbox execution error: ${message}`);
  }
}