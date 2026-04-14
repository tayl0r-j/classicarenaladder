import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RankBadge } from '@/components/RankBadge';
import { CLASS_DATA, SAMPLE_LADDER_DATA } from '@/constants/classData';
import { ArenaBracket } from '@/types';

const BRACKETS: ArenaBracket[] = ['2v2', '3v3', '5v5'];

export default function PlayerDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const bracketEntries = useMemo(() => {
    return BRACKETS.flatMap((bracket) => {
      const match = SAMPLE_LADDER_DATA[bracket].find(
        (p) => p.name.toLowerCase() === id?.toLowerCase(),
      );
      return match ? [{ bracket, player: match }] : [];
    });
  }, [id]);

  // Primary = highest-rating appearance
  const primary = bracketEntries.reduce<(typeof bracketEntries)[0] | null>(
    (best, cur) => (!best || cur.player.rating > best.player.rating ? cur : best),
    null,
  );

  const BackButton = (
    <Pressable
      onPress={() => router.back()}
      style={({ pressed }) => [styles.backBtn, pressed && styles.backBtnPressed]}
    >
      <Text style={styles.backArrow}>←</Text>
      <Text style={styles.backLabel}>LADDER</Text>
    </Pressable>
  );

  if (!primary) {
    return (
      <LinearGradient colors={['#080C14', '#0D1525', '#080C14']} style={styles.gradient}>
        <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
          {BackButton}
          <View style={styles.notFound}>
            <Text style={styles.notFoundIcon}>⚔️</Text>
            <Text style={styles.notFoundTitle}>Player Not Found</Text>
            <Text style={styles.notFoundSub}>{id}</Text>
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }

  const { player } = primary;
  const classInfo = CLASS_DATA[player.class];
  const totalGames = player.wins + player.losses;
  const winRate = player.wins / totalGames;
  const winPct = Math.round(winRate * 100);

  return (
    <LinearGradient colors={['#080C14', '#0D1525', '#080C14']} style={styles.gradient}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        {BackButton}

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* ── Hero ── */}
          <LinearGradient
            colors={[classInfo.color + '38', '#080C14']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.hero}
          >
            <View style={[styles.heroAccentBar, { backgroundColor: classInfo.color }]} />
            <View style={styles.heroContent}>
              <View style={styles.heroLeft}>
                <Text style={styles.heroIcon}>{classInfo.icon}</Text>
                <Text style={styles.heroName}>{player.name}</Text>
                <Text style={styles.heroRealm}>{player.realm}</Text>
                <View style={[styles.heroSpecTag, { borderColor: classInfo.color + '70' }]}>
                  <Text style={[styles.heroSpecText, { color: classInfo.textColor }]}>
                    {player.spec} {classInfo.displayName}
                  </Text>
                </View>
              </View>
              <View style={styles.heroRankBadge}>
                <RankBadge rank={player.rank} />
                <Text style={styles.heroRankLabel}>#{player.rank}</Text>
              </View>
            </View>
          </LinearGradient>

          {/* ── Stats Bar ── */}
          <View style={styles.statsCard}>
            <View style={styles.statCol}>
              <Text style={[styles.statValue, { color: classInfo.textColor }]}>
                {player.rating.toLocaleString()}
              </Text>
              <Text style={styles.statLabel}>RATING</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statCol}>
              <Text style={styles.statValueGold}>
                {player.seasonHigh.toLocaleString()}
              </Text>
              <Text style={styles.statLabel}>PEAK</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statCol}>
              <Text style={styles.statValueMuted}>{primary.bracket}</Text>
              <Text style={styles.statLabel}>BRACKET</Text>
            </View>
          </View>

          {/* ── Win Rate ── */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>WIN RATE</Text>
            <View style={styles.winRateRow}>
              <Text style={styles.winRatePct}>{winPct}%</Text>
              <Text style={styles.winRateRecord}>
                {player.wins}W – {player.losses}L
              </Text>
            </View>
            <View style={styles.winTrack}>
              <LinearGradient
                colors={['#C8A84B', '#A07030']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.winFill, { flex: winRate }]}
              />
              <View style={[styles.lossFill, { flex: 1 - winRate }]} />
            </View>
            <View style={styles.winTrackLabels}>
              <Text style={styles.winLabel}>Wins</Text>
              <Text style={styles.lossLabel}>Losses</Text>
            </View>
          </View>

          {/* ── Bracket Performance ── */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>BRACKET PERFORMANCE</Text>
            {BRACKETS.map((bracket) => {
              const entry = bracketEntries.find((e) => e.bracket === bracket);
              return (
                <View key={bracket} style={styles.bracketCard}>
                  <View style={styles.bracketPill}>
                    <Text style={styles.bracketPillText}>{bracket}</Text>
                  </View>
                  {entry ? (
                    <>
                      <View style={styles.bracketRankBadge}>
                        <RankBadge rank={entry.player.rank} />
                      </View>
                      <View style={styles.bracketStats}>
                        <Text style={[styles.bracketRating, { color: classInfo.textColor }]}>
                          {entry.player.rating.toLocaleString()}
                        </Text>
                        <Text style={styles.bracketRecord}>
                          {entry.player.wins}W – {entry.player.losses}L
                        </Text>
                      </View>
                      <Text style={styles.bracketWinPct}>
                        {Math.round(
                          (entry.player.wins / (entry.player.wins + entry.player.losses)) * 100,
                        )}
                        %
                      </Text>
                    </>
                  ) : (
                    <Text style={styles.bracketUnranked}>Not ranked</Text>
                  )}
                </View>
              );
            })}
          </View>

          {/* ── Class & Spec ── */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>CLASS & SPECS</Text>
            <View style={styles.classCard}>
              <View style={styles.classHeader}>
                <View style={[styles.classColorDot, { backgroundColor: classInfo.color }]} />
                <Text style={styles.classDisplayName}>{classInfo.displayName}</Text>
                <Text style={styles.classIcon}>{classInfo.icon}</Text>
              </View>
              <View style={styles.specList}>
                {classInfo.specs.map((spec) => {
                  const isActive = spec.name === player.spec;
                  return (
                    <View
                      key={spec.name}
                      style={[
                        styles.specPill,
                        { borderColor: classInfo.color + '60' },
                        isActive && { backgroundColor: classInfo.color + '28' },
                      ]}
                    >
                      <Text style={styles.specPillIcon}>{spec.icon}</Text>
                      <Text
                        style={[
                          styles.specPillName,
                          isActive && { color: classInfo.textColor },
                        ]}
                      >
                        {spec.name}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>

          <View style={styles.bottomPad} />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  // Back button
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
    alignSelf: 'flex-start',
  },
  backBtnPressed: {
    opacity: 0.6,
  },
  backArrow: {
    fontFamily: 'JetBrainsMono_700Bold',
    fontSize: 18,
    color: '#C8A84B',
  },
  backLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 11,
    color: '#6B8099',
    letterSpacing: 1.5,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 0,
  },
  // Hero
  hero: {
    flexDirection: 'row',
    paddingBottom: 28,
    paddingTop: 8,
  },
  heroAccentBar: {
    width: 4,
    alignSelf: 'stretch',
    borderRadius: 2,
    marginRight: 14,
  },
  heroContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingRight: 16,
  },
  heroLeft: {
    flex: 1,
    gap: 4,
  },
  heroIcon: {
    fontSize: 36,
    marginBottom: 4,
  },
  heroName: {
    fontFamily: 'Inter_700Bold',
    fontSize: 26,
    color: '#E8D5A3',
    letterSpacing: 1,
  },
  heroRealm: {
    fontFamily: 'JetBrainsMono_400Regular',
    fontSize: 13,
    color: '#6B8099',
  },
  heroSpecTag: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginTop: 4,
    backgroundColor: 'rgba(255,255,255,0.04)',
  },
  heroSpecText: {
    fontFamily: 'JetBrainsMono_400Regular',
    fontSize: 11,
    letterSpacing: 0.3,
  },
  heroRankBadge: {
    alignItems: 'center',
    gap: 6,
    paddingTop: 4,
  },
  heroRankLabel: {
    fontFamily: 'JetBrainsMono_400Regular',
    fontSize: 10,
    color: '#6B8099',
  },
  // Stats card
  statsCard: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#0F1626',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1A2540',
    overflow: 'hidden',
  },
  statCol: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 16,
    gap: 4,
  },
  statDivider: {
    width: 1,
    backgroundColor: '#1A2540',
    marginVertical: 12,
  },
  statValue: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    letterSpacing: 0.5,
  },
  statValueGold: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: '#C8A84B',
    letterSpacing: 0.5,
  },
  statValueMuted: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: '#E8D5A3',
    letterSpacing: 0.5,
  },
  statLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 9,
    color: '#4A6080',
    letterSpacing: 1.5,
  },
  // Section wrapper
  section: {
    marginHorizontal: 16,
    marginBottom: 16,
    gap: 10,
  },
  sectionTitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 10,
    color: '#4A6080',
    letterSpacing: 2,
  },
  // Win rate
  winRateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  winRatePct: {
    fontFamily: 'JetBrainsMono_700Bold',
    fontSize: 20,
    color: '#C8A84B',
  },
  winRateRecord: {
    fontFamily: 'JetBrainsMono_400Regular',
    fontSize: 13,
    color: '#6B8099',
  },
  winTrack: {
    flexDirection: 'row',
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: '#1A2540',
  },
  winFill: {
    borderRadius: 4,
  },
  lossFill: {
    backgroundColor: '#1A2540',
  },
  winTrackLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  winLabel: {
    fontFamily: 'JetBrainsMono_400Regular',
    fontSize: 10,
    color: '#4A6080',
  },
  lossLabel: {
    fontFamily: 'JetBrainsMono_400Regular',
    fontSize: 10,
    color: '#4A6080',
  },
  // Bracket cards
  bracketCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0F1626',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1A2540',
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 12,
  },
  bracketPill: {
    backgroundColor: '#1A2540',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    minWidth: 44,
    alignItems: 'center',
  },
  bracketPillText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#C8A84B',
    letterSpacing: 0.5,
  },
  bracketRankBadge: {
    // Wrapper for RankBadge alignment
  },
  bracketStats: {
    flex: 1,
    gap: 2,
  },
  bracketRating: {
    fontFamily: 'Inter_700Bold',
    fontSize: 18,
    letterSpacing: 0.5,
  },
  bracketRecord: {
    fontFamily: 'JetBrainsMono_400Regular',
    fontSize: 11,
    color: '#6B8099',
  },
  bracketWinPct: {
    fontFamily: 'JetBrainsMono_700Bold',
    fontSize: 13,
    color: '#C8A84B',
  },
  bracketUnranked: {
    fontFamily: 'JetBrainsMono_400Regular',
    fontSize: 13,
    color: '#3A4F65',
    flex: 1,
    marginLeft: 4,
  },
  // Class card
  classCard: {
    backgroundColor: '#0F1626',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1A2540',
    padding: 16,
    gap: 12,
  },
  classHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  classColorDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  classDisplayName: {
    fontFamily: 'Inter_700Bold',
    fontSize: 16,
    color: '#E8D5A3',
    flex: 1,
    letterSpacing: 0.5,
  },
  classIcon: {
    fontSize: 20,
  },
  specList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  specPill: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    gap: 6,
    backgroundColor: 'rgba(255,255,255,0.03)',
  },
  specPillIcon: {
    fontSize: 14,
  },
  specPillName: {
    fontFamily: 'JetBrainsMono_400Regular',
    fontSize: 12,
    color: '#6B8099',
    letterSpacing: 0.3,
  },
  // Not found
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  notFoundIcon: {
    fontSize: 40,
  },
  notFoundTitle: {
    fontFamily: 'Inter_700Bold',
    fontSize: 18,
    color: '#E8D5A3',
    letterSpacing: 1,
  },
  notFoundSub: {
    fontFamily: 'JetBrainsMono_400Regular',
    fontSize: 13,
    color: '#6B8099',
  },
  bottomPad: {
    height: 40,
  },
});
