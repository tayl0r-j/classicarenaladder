import { useMemo } from 'react';

import { SAMPLE_LADDER_DATA } from '@/constants/classData';
import { ArenaBracket, ArenaPlayer } from '@/types';

export function useArenaLadder(bracket: ArenaBracket, search: string): ArenaPlayer[] {
  return useMemo(() => {
    const data = SAMPLE_LADDER_DATA[bracket];
    const query = search.trim().toLowerCase();
    if (!query) return data;
    return data.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.realm.toLowerCase().includes(query) ||
        p.spec.toLowerCase().includes(query) ||
        p.class.toLowerCase().includes(query),
    );
  }, [bracket, search]);
}
