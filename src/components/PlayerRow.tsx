import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { CLASS_DATA } from '@/constants/classData';
import { ArenaPlayer } from '@/types';
import { RankBadge } from './RankBadge';

interface Props {
  player: ArenaPlayer;
}

export function PlayerRow({ player }: Props) {
  const router = useRouter();
  const classInfo = CLASS_DATA[player.class];
  const winRate = Math.round((player.wins / (player.wins + player.losses)) * 100);

  return (
    <Pressable
      style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
      onPress={() => router.push(`/player/${player.name.toLowerCase()}`)}
    >
      <View style={[styles.classBar, { backgroundColor: classInfo.color }]} />

      <View style={styles.rankCol}>
        <RankBadge rank={player.rank} />
      </View>

      <Text style={styles.classIcon}>{classInfo.icon}</Text>

      <View style={styles.infoCol}>
        <Text style={styles.playerName} numberOfLines={1}>
          {player.name}
        </Text>
        <Text style={styles.realmText} numberOfLines={1}>
          {player.realm}
        </Text>
        <View style={[styles.specTag, { borderColor: classInfo.color + '60' }]}>
          <Text style={[styles.specText, { color: classInfo.textColor }]}>
            {player.spec} {classInfo.displayName}
          </Text>
        </View>
      </View>

      <View style={styles.statsCol}>
        <Text style={[styles.rating, { color: classInfo.textColor }]}>
          {player.rating.toLocaleString()}
        </Text>
        <Text style={styles.record}>
          {player.wins}W – {player.losses}L
        </Text>
        <Text style={styles.winRate}>{winRate}% WR</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0F1626',
    paddingVertical: 12,
    paddingRight: 16,
    gap: 10,
  },
  rowPressed: {
    backgroundColor: '#141E32',
  },
  classBar: {
    width: 4,
    alignSelf: 'stretch',
    borderRadius: 2,
    marginRight: 4,
  },
  rankCol: {
    width: 36,
    alignItems: 'center',
  },
  classIcon: {
    fontSize: 22,
    width: 30,
    textAlign: 'center',
  },
  infoCol: {
    flex: 1,
    gap: 2,
    minWidth: 0,
  },
  playerName: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
    color: '#E8D5A3',
    letterSpacing: 0.5,
  },
  realmText: {
    fontFamily: 'JetBrainsMono-Regular',
    fontSize: 11,
    color: '#6B8099',
  },
  specTag: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginTop: 2,
    backgroundColor: 'rgba(255,255,255,0.04)',
  },
  specText: {
    fontFamily: 'JetBrainsMono-Regular',
    fontSize: 10,
    letterSpacing: 0.3,
  },
  statsCol: {
    alignItems: 'flex-end',
    gap: 2,
    minWidth: 80,
  },
  rating: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 18,
    letterSpacing: 0.5,
  },
  record: {
    fontFamily: 'JetBrainsMono-Regular',
    fontSize: 11,
    color: '#6B8099',
  },
  winRate: {
    fontFamily: 'JetBrainsMono-Regular',
    fontSize: 10,
    color: '#4A6080',
  },
});
