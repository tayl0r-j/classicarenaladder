import { ArenaBracket, ArenaPlayer } from '@/types';

export type BlizzardRegion = 'us' | 'eu' | 'kr' | 'tw';

export interface BlizzardLadderEntry {
  rank: number;
  rating: number;
  season_match_statistics: {
    played: number;
    won: number;
    lost: number;
  };
  team?: {
    name: string;
    realm_id: number;
    realm_slug: string;
  };
  character: {
    name: string;
    id: number;
    realm: {
      slug: string;
      name: string;
      key: { href: string };
    };
    playable_class: {
      key: { href: string };
      name: string;
      id: number;
    };
    playable_race: {
      key: { href: string };
      name: string;
      id: number;
    };
  };
}

export interface BlizzardLadderResponse {
  entries: BlizzardLadderEntry[];
  season: { id: number };
}

/**
 * Fetches the PvP arena ladder from the Blizzard Battle.net API.
 * Requires a valid OAuth token passed via Authorization header.
 *
 * Not yet implemented — the app uses SAMPLE_LADDER_DATA from classData.ts for now.
 */
export async function fetchArenaLadder(
  bracket: ArenaBracket,
  region: BlizzardRegion = 'us',
  season: number = 4,
  _accessToken: string,
): Promise<ArenaPlayer[]> {
  throw new Error(
    `fetchArenaLadder not implemented (bracket=${bracket}, region=${region}, season=${season}). ` +
      'App is using sample data from constants/classData.ts.',
  );
}
