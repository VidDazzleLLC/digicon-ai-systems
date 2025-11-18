import { ToolRegistry } from './index';

/**
 * Attempts to dynamically import known integration modules and register MCP adapters.
 * This preserves existing integration code (no modifications) and wraps them.
 */
export async function wireAdapters(registry: ToolRegistry): Promise<void> {
  // Candidate module paths for each integration. Adjust if your repo uses different layout.
  const missionXCandidates = [
    'src/integrations/missionx',
    'src/integrations/mission-x',
    'lib/missionx',
    'integrations/missionx',
  ];

  const aitableCandidates = [
    'src/integrations/aitable',
    'src/integrations/airtable',
    'integrations/aitable',
  ];

  const albatoCandidates = [
    'src/integrations/albato',
    'integrations/albato',
    'lib/albato',
  ];

  const confRoomCandidates = [
    'src/integrations/conferenceRooms',
    'src/integrations/conference_rooms',
    'integrations/conferenceRooms',
    'integrations/conference_rooms',
  ];

  async function tryImport<T = any>(candidates: string[]): Promise<T | null> {
    for (const p of candidates) {
      try {
        // dynamic import; adjust relative prefix if necessary
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const mod = await import(`../../${p}`).catch(() => null);
        if (mod) return mod as unknown as T;
      } catch (_err) {
        // ignore and try next
      }
    }
    return null;
  }

  // MissionX
  const missionx = await tryImport<any>(missionXCandidates);
  if (missionx) {
    const run = missionx.run ?? missionx.default?.run ?? missionx.execute ?? null;
    registry.register(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (await import('./index')).MissionXAdapter(run ? { run } : null) as any
    );
  }

  // AITable
  const aitable = await tryImport<any>(aitableCandidates);
  if (aitable) {
    const call = aitable.call ?? aitable.default?.call ?? aitable.execute ?? null;
    registry.register((await import('./index')).AITableAdapter(call ? { call } : null));
  }

  // Albato
  const albato = await tryImport<any>(albatoCandidates);
  if (albato) {
    const invoke = albato.invoke ?? albato.default?.invoke ?? albato.execute ?? null;
    registry.register((await import('./index')).AlbatoAdapter(invoke ? { invoke } : null));
  }

  // Conference Rooms
  const conf = await tryImport<any>(confRoomCandidates);
  if (conf) {
    const schedule = conf.schedule ?? conf.default?.schedule ?? conf.book ?? null;
    registry.register((await import('./index')).ConferenceRoomsAdapter(schedule ? { schedule } : null));
  }
}
