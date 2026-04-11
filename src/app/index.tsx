import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BracketTabs } from '@/components/BracketTabs';
import { PlayerRow } from '@/components/PlayerRow';
import { useArenaLadder } from '@/hooks/useArenaLadder';
import { ArenaBracket, ArenaPlayer } from '@/types';

const ROW_HEIGHT = 58;

export default function LadderScreen() {
  const [bracket, setBracket] = useState<ArenaBracket>('2v2');
  const [search, setSearch] = useState('');
  const players = useArenaLadder(bracket, search);

  function renderItem({ item }: ListRenderItemInfo<ArenaPlayer>) {
    return <PlayerRow player={item} />;
  }

  function keyExtractor(item: ArenaPlayer) {
    return `${bracket}-${item.rank}`;
  }

  function getItemLayout(_: ArrayLike<ArenaPlayer> | null | undefined, index: number) {
    return { length: ROW_HEIGHT, offset: ROW_HEIGHT * index, index };
  }

  return (
    <LinearGradient colors={['#07080F', '#0B0F1A', '#07080F']} style={styles.gradient}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        <View style={styles.content}>

        {/* ── Header ── */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Text style={styles.headerTitle}>ARENA LADDER</Text>
            <View style={styles.seasonBadge}>
              <Text style={styles.seasonText}>S4</Text>
            </View>
          </View>
          <View style={styles.goldRule} />
          <Text style={styles.headerSub}>WoW Classic · Season 4</Text>
        </View>

        {/* ── Bracket Tabs ── */}
        <BracketTabs selectedBracket={bracket} onSelect={setBracket} />

        {/* ── Search ── */}
        <View style={styles.searchRow}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search players, realms, specs..."
            placeholderTextColor="#2A3D52"
            value={search}
            onChangeText={setSearch}
            returnKeyType="search"
            clearButtonMode="while-editing"
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>

        {/* ── Column Headers ── */}
        <View style={styles.colHeader}>
          <View style={styles.colAccentSpace} />
          <Text style={[styles.colLabel, styles.colRank]}>RANK</Text>
          <Text style={[styles.colLabel, styles.colRating]}>RATING</Text>
          <Text style={[styles.colLabel, styles.colName]}>PLAYER</Text>
          <Text style={[styles.colLabel, styles.colSpec]}>SPEC</Text>
          <Text style={[styles.colLabel, styles.colWL]}>W – L</Text>
          <Text style={[styles.colLabel, styles.colWinPct]}>WIN%</Text>
        </View>

        <View style={styles.colHeaderDivider} />

        {/* ── Player List ── */}
        <FlatList
          data={players}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          getItemLayout={getItemLayout}
          ListEmptyComponent={EmptyState}
          contentContainerStyle={players.length === 0 ? styles.emptyContainer : undefined}
          showsVerticalScrollIndicator={Platform.OS !== 'web'}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
          removeClippedSubviews
        />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

function EmptyState() {
  return (
    <View style={styles.emptyState}>
      <Text style={styles.emptyIcon}>⚔️</Text>
      <Text style={styles.emptyTitle}>No players found</Text>
      <Text style={styles.emptySubtitle}>Try a different name or realm</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
    maxWidth: 860,
  },
  // Header
  header: {
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 20,
    backgroundColor: '#07080F',
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 32,
    color: '#C8A84B',
    letterSpacing: 3,
  },
  goldRule: {
    height: 1,
    width: 48,
    backgroundColor: '#C8A84B',
    opacity: 0.5,
    marginTop: 10,
  },
  seasonBadge: {
    backgroundColor: '#0B0F1A',
    borderWidth: 1,
    borderColor: '#C8A84B',
    borderRadius: 3,
    paddingHorizontal: 9,
    paddingVertical: 3,
  },
  seasonText: {
    fontFamily: 'JetBrainsMono-Bold',
    fontSize: 12,
    color: '#C8A84B',
    letterSpacing: 1,
  },
  headerSub: {
    fontFamily: 'JetBrainsMono-Regular',
    fontSize: 11,
    color: '#3A4F65',
    marginTop: 8,
    letterSpacing: 0.5,
  },
  // Search
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 8,
    backgroundColor: '#0B0F1A',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1C2333',
    paddingHorizontal: 12,
    height: 44,
  },
  searchIcon: {
    fontSize: 15,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'JetBrainsMono-Regular',
    fontSize: 13,
    color: '#F0E6D3',
    paddingVertical: 0,
  },
  // Column headers — widths must match PlayerRow exactly
  colHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#07080F',
  },
  colAccentSpace: {
    width: 2,
  },
  colLabel: {
    fontFamily: 'JetBrainsMono-Regular',
    fontSize: 9,
    color: '#2A3D52',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  colRank: {
    width: 44,
    textAlign: 'center',
  },
  colRating: {
    width: 68,
    textAlign: 'right',
    paddingRight: 12,
  },
  colName: {
    flex: 1,
    paddingRight: 8,
  },
  colSpec: {
    width: 130,
    paddingRight: 8,
  },
  colWL: {
    width: 88,
    textAlign: 'right',
    paddingRight: 12,
  },
  colWinPct: {
    width: 44,
    textAlign: 'right',
    paddingRight: 16,
  },
  colHeaderDivider: {
    height: 1,
    backgroundColor: '#1C2333',
  },
  // Empty state
  emptyContainer: {
    flex: 1,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    gap: 10,
  },
  emptyIcon: {
    fontSize: 40,
  },
  emptyTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 18,
    color: '#F0E6D3',
    letterSpacing: 1,
  },
  emptySubtitle: {
    fontFamily: 'JetBrainsMono-Regular',
    fontSize: 13,
    color: '#6B8099',
  },
});
