import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  rank: number;
}

const MEDAL_GRADIENTS: Record<number, readonly [string, string]> = {
  1: ['#FFD700', '#B8860B'] as const,
  2: ['#D8D8D8', '#909090'] as const,
  3: ['#CD7F32', '#7B4A1A'] as const,
};

export function RankBadge({ rank }: Props) {
  if (rank <= 3) {
    return (
      <LinearGradient colors={MEDAL_GRADIENTS[rank]} style={styles.medalBadge}>
        <Text style={styles.medalText}>{rank}</Text>
      </LinearGradient>
    );
  }

  return (
    <View style={styles.normalBadge}>
      <Text style={styles.normalText}>{rank}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  medalBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  medalText: {
    fontFamily: 'JetBrainsMono-Bold',
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  normalBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F1626',
    borderWidth: 1,
    borderColor: '#1A2540',
  },
  normalText: {
    fontFamily: 'JetBrainsMono-Regular',
    fontSize: 12,
    color: '#6B8099',
  },
});
