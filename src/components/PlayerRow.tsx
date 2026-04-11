import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { CLASS_DATA } from '@/constants/classData';
import { ArenaPlayer } from '@/types';

interface Props {
  player: ArenaPlayer;
}

function getRankStyle(rank: number): { color: string; fontSize: number; fontFamily: string } {
  if (rank === 1) return { color: '#FFD700', fontSize: 22, fontFamily: 'Cinzel-Bold' };
  if (rank === 2) return { color: '#C0C0C0', fontSize: 20, fontFamily: 'Cinzel-Bold' };
  if (rank === 3) return { color: '#CD7F32', fontSize: 20, fontFamily: 'Cinzel-Bold' };
  if (rank <= 10) return { color: '#E8D5A3', fontSize: 16, fontFamily: 'Cinzel-Regular' };
  return { color: '#445566', fontSize: 13, fontFamily: 'JetBrainsMono-Regular' };
}

export function PlayerRow({ player }: Props) {
  const router = useRouter();
  const classInfo = CLASS_DATA[player.class];
  const rankStyle = getRankStyle(player.rank);

  return (
    <Pressable onPress={() => router.push(`/player/${player.name.toLowerCase()}`)}>
      {({ pressed }) => (
        <LinearGradient
          colors={[classInfo.color + (pressed ? '28' : '1A'), pressed ? '#0C1018' : '#07080F']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.5, y: 0 }}
          style={styles.row}
        >
          <View style={[styles.accentLine, { backgroundColor: classInfo.color }]} />

          <View style={styles.rankCol}>
            <Text style={[styles.rankNumber, rankStyle]}>{player.rank}</Text>
          </View>

          <Text style={styles.classIcon}>{classInfo.icon}</Text>

          <View style={styles.infoCol}>
            <Text style={styles.playerName} numberOfLines={1}>
              {player.name}
            </Text>
            <Text style={styles.realmSpec} numberOfLines={1}>
              {player.realm} · {player.spec} {classInfo.displayName}
            </Text>
          </View>

          <View style={styles.statsCol}>
            <Text style={[styles.rating, { color: classInfo.textColor }]}>
              {player.rating.toLocaleString()}
            </Text>
            <Text style={styles.record}>
              {player.wins}W · {player.losses}L
            </Text>
          </View>
        </LinearGradient>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 88,
    paddingRight: 20,
    gap: 12,
  },
  accentLine: {
    width: 2,
    alignSelf: 'stretch',
  },
  rankCol: {
    width: 40,
    alignItems: 'center',
  },
  rankNumber: {
    letterSpacing: 0.5,
  },
  classIcon: {
    fontSize: 24,
    width: 32,
    textAlign: 'center',
  },
  infoCol: {
    flex: 1,
    gap: 5,
    minWidth: 0,
  },
  playerName: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 15,
    color: '#F0E6D3',
    letterSpacing: 0.5,
  },
  realmSpec: {
    fontFamily: 'JetBrainsMono-Regular',
    fontSize: 11,
    color: '#4A6080',
    letterSpacing: 0.2,
  },
  statsCol: {
    alignItems: 'flex-end',
    gap: 3,
    minWidth: 88,
  },
  rating: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 22,
    letterSpacing: 0.5,
  },
  record: {
    fontFamily: 'JetBrainsMono-Regular',
    fontSize: 11,
    color: '#4A6080',
  },
});
