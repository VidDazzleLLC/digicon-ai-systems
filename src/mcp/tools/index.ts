import { MCPTool, MCPContext } from '../types';

/**
 * ToolRegistry: register/wrap existing integration modules as MCPTool adapters.
 */

export class ToolRegistry {
  private tools: Map<string, MCPTool> = new Map();

  register(tool: MCPTool) {
    if (!tool || !tool.name) throw new Error('Tool must have a name');
    this.tools.set(tool.name, tool);
  }

  unregister(name: string) {
    this.tools.delete(name);
  }

  get(name: string): MCPTool | undefined {
    return this.tools.get(name);
  }

  list(): MCPTool[] {
    return Array.from(this.tools.values());
  }
}

export const MissionXAdapter = (internalImpl: { run: (args: any) => Promise<any> } | null): MCPTool => ({
  name: 'missionx',
  description: 'MissionX integration adapter (wrapper)',
  execute: async (args: any, ctx: MCPContext) => {
    if (!internalImpl) return { ok: false, message: 'MissionX implementation not wired' };
    return await internalImpl.run({ ...args, _mcpContext: ctx });
  },
});

export const AITableAdapter = (internalImpl: { call: (args: any) => Promise<any> } | null): MCPTool => ({
  name: 'aitable',
  description: 'AITable.ai integration adapter (wrapper)',
  execute: async (args: any, ctx: MCPContext) => {
    if (!internalImpl) return { ok: false, message: 'AITable implementation not wired' };
    return await internalImpl.call({ ...args, _mcpContext: ctx });
  },
});

export const AlbatoAdapter = (internalImpl: { invoke: (args: any) => Promise<any> } | null): MCPTool => ({
  name: 'albato',
  description: 'Albato integration adapter (wrapper)',
  execute: async (args: any, ctx: MCPContext) => {
    if (!internalImpl) return { ok: false, message: 'Albato implementation not wired' };
    return await internalImpl.invoke({ ...args, _mcpContext: ctx });
  },
});

export const ConferenceRoomsAdapter = (internalImpl: { schedule: (args: any) => Promise<any> } | null): MCPTool => ({
  name: 'conference_rooms',
  description: 'Conference Rooms integration adapter (wrapper)',
  execute: async (args: any, ctx: MCPContext) => {
    if (!internalImpl) return { ok: false, message: 'Conference Rooms implementation not wired' };
    return await internalImpl.schedule({ ...args, _mcpContext: ctx });
  },
});
