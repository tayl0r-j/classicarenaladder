import { ArenaBracket, ArenaPlayer, WoWClass } from '@/types';

export interface SpecInfo {
  name: string;
  icon: string;
}

export interface ClassInfo {
  color: string;
  textColor: string;
  icon: string;
  displayName: string;
  specs: SpecInfo[];
}

export const CLASS_DATA: Record<WoWClass, ClassInfo> = {
  DeathKnight: {
    color: '#C41E3A',
    textColor: '#FF6B7A',
    icon: '💀',
    displayName: 'Death Knight',
    specs: [
      { name: 'Blood', icon: '🩸' },
      { name: 'Frost', icon: '❄️' },
      { name: 'Unholy', icon: '☠️' },
    ],
  },
  Druid: {
    color: '#FF7C0A',
    textColor: '#FFA040',
    icon: '🐻',
    displayName: 'Druid',
    specs: [
      { name: 'Balance', icon: '🌙' },
      { name: 'Feral', icon: '🐾' },
      { name: 'Restoration', icon: '🌿' },
    ],
  },
  Hunter: {
    color: '#AAD372',
    textColor: '#C0E880',
    icon: '🏹',
    displayName: 'Hunter',
    specs: [
      { name: 'Beast Mastery', icon: '🐺' },
      { name: 'Marksmanship', icon: '🎯' },
      { name: 'Survival', icon: '🗡️' },
    ],
  },
  Mage: {
    color: '#3FC7EB',
    textColor: '#60D8F8',
    icon: '🔮',
    displayName: 'Mage',
    specs: [
      { name: 'Arcane', icon: '✨' },
      { name: 'Fire', icon: '🔥' },
      { name: 'Frost', icon: '❄️' },
    ],
  },
  Paladin: {
    color: '#F48CBA',
    textColor: '#FFB0D0',
    icon: '⚔️',
    displayName: 'Paladin',
    specs: [
      { name: 'Holy', icon: '✝️' },
      { name: 'Protection', icon: '🛡️' },
      { name: 'Retribution', icon: '⚔️' },
    ],
  },
  Priest: {
    color: '#E8D5A3',
    textColor: '#FFFFFF',
    icon: '✨',
    displayName: 'Priest',
    specs: [
      { name: 'Discipline', icon: '🕊️' },
      { name: 'Holy', icon: '☀️' },
      { name: 'Shadow', icon: '🌑' },
    ],
  },
  Rogue: {
    color: '#FFF468',
    textColor: '#FFE840',
    icon: '🗡️',
    displayName: 'Rogue',
    specs: [
      { name: 'Assassination', icon: '⚗️' },
      { name: 'Combat', icon: '🏴‍☠️' },
      { name: 'Subtlety', icon: '🌫️' },
    ],
  },
  Shaman: {
    color: '#0070DD',
    textColor: '#4090FF',
    icon: '⚡',
    displayName: 'Shaman',
    specs: [
      { name: 'Elemental', icon: '⚡' },
      { name: 'Enhancement', icon: '🪓' },
      { name: 'Restoration', icon: '💧' },
    ],
  },
  Warlock: {
    color: '#8788EE',
    textColor: '#A0A8FF',
    icon: '👁️',
    displayName: 'Warlock',
    specs: [
      { name: 'Affliction', icon: '🕸️' },
      { name: 'Demonology', icon: '😈' },
      { name: 'Destruction', icon: '💥' },
    ],
  },
  Warrior: {
    color: '#C69B3A',
    textColor: '#E0B84A',
    icon: '🛡️',
    displayName: 'Warrior',
    specs: [
      { name: 'Arms', icon: '⚔️' },
      { name: 'Fury', icon: '💢' },
      { name: 'Protection', icon: '🛡️' },
    ],
  },
};

export const REALMS = [
  'Stormrage', 'Illidan', "Mal'Ganis", 'Tichondrius', 'Sargeras',
  'Area 52', "Kel'Thuzad", 'Barthilas', 'Whitemane', 'Benediction',
  'Mankrik', 'Grobbulus', 'Faerlina', 'Sulfuras', 'Skyfury',
];

export const SAMPLE_LADDER_DATA: Record<ArenaBracket, ArenaPlayer[]> = {
  '2v2': [
    { rank: 1,  name: 'Shadowblade',   realm: 'Tichondrius',  class: 'Rogue',       spec: 'Subtlety',     rating: 2891, wins: 348, losses: 82,  seasonHigh: 2904 },
    { rank: 2,  name: 'Pyroclasm',     realm: 'Sargeras',     class: 'Mage',        spec: 'Fire',         rating: 2847, wins: 312, losses: 95,  seasonHigh: 2871 },
    { rank: 3,  name: 'Voidweaver',    realm: "Mal'Ganis",    class: 'Priest',      spec: 'Shadow',       rating: 2821, wins: 289, losses: 103, seasonHigh: 2835 },
    { rank: 4,  name: 'Bloodthirst',   realm: 'Stormrage',    class: 'Warrior',     spec: 'Arms',         rating: 2798, wins: 445, losses: 134, seasonHigh: 2812 },
    { rank: 5,  name: 'Hydraxis',      realm: 'Illidan',      class: 'Shaman',      spec: 'Elemental',    rating: 2776, wins: 401, losses: 142, seasonHigh: 2798 },
    { rank: 6,  name: 'Moonwhisper',   realm: 'Grobbulus',    class: 'Druid',       spec: 'Balance',      rating: 2754, wins: 378, losses: 119, seasonHigh: 2781 },
    { rank: 7,  name: 'Deathcoil',     realm: 'Faerlina',     class: 'DeathKnight', spec: 'Unholy',       rating: 2731, wins: 335, losses: 127, seasonHigh: 2754 },
    { rank: 8,  name: 'Glacialis',     realm: 'Benediction',  class: 'Mage',        spec: 'Frost',        rating: 2718, wins: 291, losses: 108, seasonHigh: 2740 },
    { rank: 9,  name: 'Felstorm',      realm: "Kel'Thuzad",   class: 'Warlock',     spec: 'Affliction',   rating: 2704, wins: 518, losses: 178, seasonHigh: 2721 },
    { rank: 10, name: 'Ravenwing',     realm: 'Whitemane',    class: 'Paladin',     spec: 'Retribution',  rating: 2689, wins: 304, losses: 131, seasonHigh: 2710 },
    { rank: 11, name: 'Stormstrike',   realm: 'Mankrik',      class: 'Shaman',      spec: 'Enhancement',  rating: 2671, wins: 412, losses: 161, seasonHigh: 2695 },
    { rank: 12, name: 'Obliterate',    realm: 'Sulfuras',     class: 'DeathKnight', spec: 'Frost',        rating: 2658, wins: 287, losses: 119, seasonHigh: 2672 },
    { rank: 13, name: 'Vendetta',      realm: 'Skyfury',      class: 'Rogue',       spec: 'Assassination',rating: 2644, wins: 395, losses: 154, seasonHigh: 2661 },
    { rank: 14, name: 'Willowbark',    realm: 'Grobbulus',    class: 'Druid',       spec: 'Restoration',  rating: 2629, wins: 326, losses: 143, seasonHigh: 2644 },
    { rank: 15, name: 'Demonfire',     realm: 'Barthilas',    class: 'Warlock',     spec: 'Destruction',  rating: 2612, wins: 477, losses: 198, seasonHigh: 2635 },
    { rank: 16, name: 'Steadyshot',    realm: 'Stormrage',    class: 'Hunter',      spec: 'Marksmanship', rating: 2597, wins: 341, losses: 148, seasonHigh: 2619 },
    { rank: 17, name: 'Holynova',      realm: 'Faerlina',     class: 'Priest',      spec: 'Discipline',   rating: 2584, wins: 318, losses: 142, seasonHigh: 2601 },
    { rank: 18, name: 'Furysworn',     realm: 'Tichondrius',  class: 'Warrior',     spec: 'Fury',         rating: 2568, wins: 389, losses: 171, seasonHigh: 2589 },
    { rank: 19, name: 'Arcanova',      realm: 'Sargeras',     class: 'Mage',        spec: 'Arcane',       rating: 2551, wins: 302, losses: 138, seasonHigh: 2570 },
    { rank: 20, name: 'Lightbringer',  realm: "Mal'Ganis",    class: 'Paladin',     spec: 'Holy',         rating: 2538, wins: 441, losses: 196, seasonHigh: 2558 },
    { rank: 21, name: 'Feralheart',    realm: 'Area 52',      class: 'Druid',       spec: 'Feral',        rating: 2522, wins: 367, losses: 164, seasonHigh: 2541 },
    { rank: 22, name: 'Hexweaver',     realm: 'Whitemane',    class: 'Shaman',      spec: 'Restoration',  rating: 2509, wins: 298, losses: 135, seasonHigh: 2528 },
    { rank: 23, name: 'Soulshatter',   realm: 'Illidan',      class: 'Warlock',     spec: 'Demonology',   rating: 2494, wins: 414, losses: 191, seasonHigh: 2512 },
    { rank: 24, name: 'Eagleeye',      realm: 'Benediction',  class: 'Hunter',      spec: 'Beast Mastery',rating: 2480, wins: 328, losses: 152, seasonHigh: 2499 },
    { rank: 25, name: 'Ironguard',     realm: "Kel'Thuzad",   class: 'Warrior',     spec: 'Protection',   rating: 2465, wins: 271, losses: 128, seasonHigh: 2482 },
  ],
  '3v3': [
    { rank: 1,  name: 'Deathwhisper',  realm: 'Illidan',      class: 'DeathKnight', spec: 'Unholy',       rating: 2934, wins: 512, losses: 108, seasonHigh: 2951 },
    { rank: 2,  name: 'Frostfire',     realm: 'Tichondrius',  class: 'Mage',        spec: 'Frost',        rating: 2908, wins: 478, losses: 112, seasonHigh: 2929 },
    { rank: 3,  name: 'Gladiusbane',   realm: 'Faerlina',     class: 'Rogue',       spec: 'Subtlety',     rating: 2882, wins: 441, losses: 118, seasonHigh: 2898 },
    { rank: 4,  name: 'Thunderlord',   realm: 'Mankrik',      class: 'Shaman',      spec: 'Enhancement',  rating: 2857, wins: 389, losses: 121, seasonHigh: 2874 },
    { rank: 5,  name: 'Seraphine',     realm: 'Benediction',  class: 'Priest',      spec: 'Discipline',   rating: 2831, wins: 502, losses: 142, seasonHigh: 2849 },
    { rank: 6,  name: 'Nightclaw',     realm: 'Grobbulus',    class: 'Druid',       spec: 'Feral',        rating: 2809, wins: 418, losses: 138, seasonHigh: 2828 },
    { rank: 7,  name: 'Dawnbreaker',   realm: 'Whitemane',    class: 'Paladin',     spec: 'Retribution',  rating: 2786, wins: 361, losses: 128, seasonHigh: 2804 },
    { rank: 8,  name: 'Vileblood',     realm: 'Sargeras',     class: 'DeathKnight', spec: 'Blood',        rating: 2761, wins: 432, losses: 151, seasonHigh: 2779 },
    { rank: 9,  name: 'Infernus',      realm: "Mal'Ganis",    class: 'Warlock',     spec: 'Destruction',  rating: 2739, wins: 498, losses: 172, seasonHigh: 2758 },
    { rank: 10, name: 'Rapidfire',     realm: 'Barthilas',    class: 'Hunter',      spec: 'Marksmanship', rating: 2715, wins: 374, losses: 138, seasonHigh: 2734 },
    { rank: 11, name: 'Stormcaller',   realm: 'Skyfury',      class: 'Shaman',      spec: 'Elemental',    rating: 2694, wins: 441, losses: 162, seasonHigh: 2712 },
    { rank: 12, name: 'Wraithblade',   realm: "Kel'Thuzad",   class: 'DeathKnight', spec: 'Frost',        rating: 2671, wins: 318, losses: 121, seasonHigh: 2689 },
    { rank: 13, name: 'Lunarmend',     realm: 'Stormrage',    class: 'Druid',       spec: 'Restoration',  rating: 2654, wins: 529, losses: 198, seasonHigh: 2670 },
    { rank: 14, name: 'Shadowflame',   realm: 'Area 52',      class: 'Warlock',     spec: 'Affliction',   rating: 2638, wins: 487, losses: 184, seasonHigh: 2656 },
    { rank: 15, name: 'Divinity',      realm: 'Faerlina',     class: 'Paladin',     spec: 'Holy',         rating: 2619, wins: 398, losses: 154, seasonHigh: 2638 },
    { rank: 16, name: 'Bladestorm',    realm: 'Tichondrius',  class: 'Warrior',     spec: 'Arms',         rating: 2601, wins: 341, losses: 135, seasonHigh: 2619 },
    { rank: 17, name: 'Mindbreaker',   realm: 'Illidan',      class: 'Priest',      spec: 'Shadow',       rating: 2584, wins: 372, losses: 148, seasonHigh: 2602 },
    { rank: 18, name: 'Soulreaper',    realm: 'Mankrik',      class: 'Warlock',     spec: 'Demonology',   rating: 2567, wins: 428, losses: 171, seasonHigh: 2585 },
    { rank: 19, name: 'Barrage',       realm: 'Grobbulus',    class: 'Hunter',      spec: 'Beast Mastery',rating: 2549, wins: 301, losses: 124, seasonHigh: 2568 },
    { rank: 20, name: 'Frostbite',     realm: 'Sulfuras',     class: 'Mage',        spec: 'Frost',        rating: 2532, wins: 414, losses: 167, seasonHigh: 2549 },
    { rank: 21, name: 'Windfury',      realm: 'Whitemane',    class: 'Shaman',      spec: 'Restoration',  rating: 2518, wins: 356, losses: 146, seasonHigh: 2536 },
    { rank: 22, name: 'Backstab',      realm: 'Benediction',  class: 'Rogue',       spec: 'Assassination',rating: 2502, wins: 389, losses: 161, seasonHigh: 2521 },
    { rank: 23, name: 'Ironforge',     realm: 'Sargeras',     class: 'Warrior',     spec: 'Fury',         rating: 2486, wins: 317, losses: 132, seasonHigh: 2504 },
    { rank: 24, name: 'Starweave',     realm: "Mal'Ganis",    class: 'Druid',       spec: 'Balance',      rating: 2469, wins: 441, losses: 185, seasonHigh: 2488 },
    { rank: 25, name: 'Lightshield',   realm: 'Barthilas',    class: 'Paladin',     spec: 'Protection',   rating: 2451, wins: 278, losses: 120, seasonHigh: 2470 },
  ],
  '5v5': [
    { rank: 1,  name: 'Colossus',      realm: 'Barthilas',    class: 'Warrior',     spec: 'Arms',         rating: 2748, wins: 612, losses: 142, seasonHigh: 2771 },
    { rank: 2,  name: 'Pestilence',    realm: 'Grobbulus',    class: 'DeathKnight', spec: 'Unholy',       rating: 2719, wins: 584, losses: 158, seasonHigh: 2741 },
    { rank: 3,  name: 'Archmage',      realm: 'Faerlina',     class: 'Mage',        spec: 'Arcane',       rating: 2694, wins: 541, losses: 149, seasonHigh: 2718 },
    { rank: 4,  name: 'Thornweald',    realm: 'Whitemane',    class: 'Druid',       spec: 'Feral',        rating: 2668, wins: 499, losses: 161, seasonHigh: 2692 },
    { rank: 5,  name: 'Shadowmeld',    realm: 'Skyfury',      class: 'Rogue',       spec: 'Subtlety',     rating: 2644, wins: 458, losses: 153, seasonHigh: 2669 },
    { rank: 6,  name: 'Chainlightning',realm: 'Mankrik',      class: 'Shaman',      spec: 'Elemental',    rating: 2619, wins: 521, losses: 181, seasonHigh: 2644 },
    { rank: 7,  name: 'Ashbringer',    realm: 'Sulfuras',     class: 'Paladin',     spec: 'Retribution',  rating: 2594, wins: 478, losses: 168, seasonHigh: 2618 },
    { rank: 8,  name: 'Haunt',         realm: 'Area 52',      class: 'Warlock',     spec: 'Affliction',   rating: 2571, wins: 612, losses: 214, seasonHigh: 2596 },
    { rank: 9,  name: 'Mending',       realm: 'Benediction',  class: 'Priest',      spec: 'Holy',         rating: 2548, wins: 441, losses: 158, seasonHigh: 2572 },
    { rank: 10, name: 'Fletchling',    realm: 'Stormrage',    class: 'Hunter',      spec: 'Survival',     rating: 2524, wins: 389, losses: 144, seasonHigh: 2549 },
    { rank: 11, name: 'Obliterator',   realm: 'Tichondrius',  class: 'DeathKnight', spec: 'Frost',        rating: 2501, wins: 502, losses: 188, seasonHigh: 2527 },
    { rank: 12, name: 'Berserker',     realm: 'Illidan',      class: 'Warrior',     spec: 'Fury',         rating: 2478, wins: 418, losses: 161, seasonHigh: 2502 },
    { rank: 13, name: 'Blizzard',      realm: "Kel'Thuzad",   class: 'Mage',        spec: 'Frost',        rating: 2454, wins: 367, losses: 145, seasonHigh: 2479 },
    { rank: 14, name: 'Fervor',        realm: 'Sargeras',     class: 'Paladin',     spec: 'Holy',         rating: 2432, wins: 498, losses: 199, seasonHigh: 2458 },
    { rank: 15, name: 'Spiritwalker',  realm: "Mal'Ganis",    class: 'Shaman',      spec: 'Restoration',  rating: 2409, wins: 441, losses: 179, seasonHigh: 2435 },
    { rank: 16, name: 'Lunacy',        realm: 'Faerlina',     class: 'Druid',       spec: 'Balance',      rating: 2387, wins: 389, losses: 162, seasonHigh: 2412 },
    { rank: 17, name: 'Silentblade',   realm: 'Grobbulus',    class: 'Rogue',       spec: 'Combat',       rating: 2364, wins: 341, losses: 148, seasonHigh: 2389 },
    { rank: 18, name: 'Doomguard',     realm: 'Barthilas',    class: 'Warlock',     spec: 'Demonology',   rating: 2341, wins: 412, losses: 179, seasonHigh: 2367 },
    { rank: 19, name: 'Convergence',   realm: 'Whitemane',    class: 'Priest',      spec: 'Discipline',   rating: 2318, wins: 368, losses: 161, seasonHigh: 2344 },
    { rank: 20, name: 'Broadside',     realm: 'Skyfury',      class: 'Hunter',      spec: 'Beast Mastery',rating: 2295, wins: 312, losses: 141, seasonHigh: 2321 },
    { rank: 21, name: 'Permafrost',    realm: 'Mankrik',      class: 'DeathKnight', spec: 'Blood',        rating: 2272, wins: 389, losses: 178, seasonHigh: 2298 },
    { rank: 22, name: 'Warcry',        realm: 'Sulfuras',     class: 'Warrior',     spec: 'Protection',   rating: 2249, wins: 341, losses: 161, seasonHigh: 2275 },
    { rank: 23, name: 'Cascadefall',   realm: 'Area 52',      class: 'Shaman',      spec: 'Enhancement',  rating: 2228, wins: 302, losses: 147, seasonHigh: 2254 },
    { rank: 24, name: 'Brilliance',    realm: 'Benediction',  class: 'Mage',        spec: 'Arcane',       rating: 2205, wins: 278, losses: 138, seasonHigh: 2231 },
    { rank: 25, name: 'Sanctuary',     realm: 'Stormrage',    class: 'Paladin',     spec: 'Protection',   rating: 2183, wins: 412, losses: 208, seasonHigh: 2209 },
  ],
};
