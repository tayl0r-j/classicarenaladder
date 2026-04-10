export type WoWClass =
  | 'DeathKnight'
  | 'Druid'
  | 'Hunter'
  | 'Mage'
  | 'Paladin'
  | 'Priest'
  | 'Rogue'
  | 'Shaman'
  | 'Warlock'
  | 'Warrior';

export type ArenaBracket = '2v2' | '3v3' | '5v5';

export interface ArenaPlayer {
  rank: number;
  name: string;
  realm: string;
  class: WoWClass;
  spec: string;
  rating: number;
  wins: number;
  losses: number;
  seasonHigh: number;
}
