import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { CLASS_DATA } from '@/constants/classData';
import { ArenaPlayer } from '@/types';

interface Props {
  player: ArenaPlayer;
}

function getRankColor(rank: number): string {
  if (rank === 1) return '#FFD700';
  if (rank === 2) return '#C0C0C0';
  if (rank === 3) return '#CD7F32';
  if (rank <= 10) return '#C8B89A';
  return '#4A5F78';
}

export function PlayerRow({ player }: Props) {
  const router = useRouter();
  const classInfo = CLASS_DATA[player.class];
  const winPct = Math.round((player.wins / (player.wins + player.losses)) * 100);

  return (
    <Pressable
      onPress={() => router.push(`/player/${player.name.toLowerCase()}`)}
      style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
    >
      <View style={[styles.accentLine, { backgroundColor: classInfo.color }]} />

      <Text style={[styles.rank, { color: getRankColor(player.rank) }]}>
        {player.rank}
      </Text>

      <Text style={[styles.rating, { color: classInfo.textColor }]}>
        {player.rating.toLocaleString()}
      </Text>

      <View style={styles.nameCol}>
        <Text style={[styles.playerName, { color: classInfo.textColor }]} numberOfLines={1}>
          {player.name}
        </Text>
        <Text style={styles.realmText} numberOfLines={1}>
          {player.realm}
        </Text>
      </View>

      <View style={styles.specCol}>
        <Text style={styles.classIcon}>{classInfo.icon}</Text>
        <Text style={styles.specText} numberOfLines={1}>
          {player.spec}
        </Text>
      </View>

      <View style={styles.wlCol}>
        <Text style={styles.wins}>{player.wins}</Text>
        <Text style={styles.wlSep}> – </Text>
        <Text style={styles.losses}>{player.losses}</Text>
      </View>

      <Text style={styles.winPct}>{winPct}%</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 58,
    backgroundColor: '#07080F',
    borderBottomWidth: 1,
    borderBottomColor: '#0F1220',
    gap: 0,
  },
  rowPressed: {
    backgroundColor: '#0C1018',
  },
  accentLine: {
    width: 2,
    alignSelf: 'stretch',
  },
  rank: {
    width: 44,
    textAlign: 'center',
    fontFamily: 'Cinzel-Bold',
    fontSize: 13,
    letterSpacing: 0.3,
  },
  rating: {
    width: 68,
    textAlign: 'right',
    fontFamily: 'JetBrainsMono-Bold',
    fontSize: 14,
    letterSpacing: 0.5,
    paddingRight: 12,
  },
  nameCol: {
    flex: 1,
    minWidth: 0,
    paddingRight: 8,
    gap: 2,
  },
  playerName: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 13,
    letterSpacing: 0.3,
  },
  realmText: {
    fontFamily: 'JetBrainsMono-Regular',
    fontSize: 10,
    color: '#3A4F65',
    letterSpacing: 0.2,
  },
  specCol: {
    width: 130,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingRight: 8,
  },
  classIcon: {
    fontSize: 14,
  },
  specText: {
    fontFamily: 'JetBrainsMono-Regular',
    fontSize: 11,
    color: '#6B8099',
    flex: 1,
  },
  wlCol: {
    width: 88,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 12,
  },
  wins: {
    fontFamily: 'JetBrainsMono-Bold',
    fontSize: 12,
    color: '#4ADE80',
  },
  wlSep: {
    fontFamily: 'JetBrainsMono-Regular',
    fontSize: 12,
    color: '#2A3D52',
  },
  losses: {
    fontFamily: 'JetBrainsMono-Bold',
    fontSize: 12,
    color: '#FC6B6B',
  },
  winPct: {
    width: 44,
    textAlign: 'right',
    fontFamily: 'JetBrainsMono-Regular',
    fontSize: 11,
    color: '#4A5F78',
    paddingRight: 16,
  },
});
