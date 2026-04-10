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

const ROW_HEIGHT = 82;

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
    <LinearGradient colors={['#080C14', '#0D1525', '#080C14']} style={styles.gradient}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        {/* ── Header ── */}
        <LinearGradient colors={['#0A1628', '#060C18']} style={styles.header}>
          <View style={styles.headerTop}>
            <Text style={styles.headerTitle}>ARENA LADDER</Text>
            <View style={styles.seasonBadge}>
              <Text style={styles.seasonText}>S4</Text>
            </View>
          </View>
          <Text style={styles.headerSub}>WoW Classic · Season 4</Text>
        </LinearGradient>

        {/* ── Bracket Tabs ── */}
        <BracketTabs selectedBracket={bracket} onSelect={setBracket} />

        {/* ── Search ── */}
        <View style={styles.searchRow}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search players, realms, specs..."
            placeholderTextColor="#3A4F65"
            value={search}
            onChangeText={setSearch}
            returnKeyType="search"
            clearButtonMode="while-editing"
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>

        {/* ── Column Headers ── */}
        <View style={styles.columnHeader}>
          <View style={styles.colRankSpace} />
          <Text style={[styles.colLabel, styles.colPlayer]}>Player</Text>
          <Text style={[styles.colLabel, styles.colRating]}>Rating</Text>
        </View>

        <View style={styles.divider} />

        {/* ── Player List ── */}
        <FlatList
          data={players}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          getItemLayout={getItemLayout}
          ItemSeparatorComponent={Separator}
          ListEmptyComponent={EmptyState}
          contentContainerStyle={players.length === 0 ? styles.emptyContainer : undefined}
          showsVerticalScrollIndicator={Platform.OS !== 'web'}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
          removeClippedSubviews
        />
      </SafeAreaView>
    </LinearGradient>
  );
}

function Separator() {
  return <View style={styles.separator} />;
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
  },
  // Header
  header: {
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1A2540',
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontFamily: 'Cinzel-Bold',
    fontSize: 26,
    color: '#C8A84B',
    letterSpacing: 2,
  },
  seasonBadge: {
    backgroundColor: '#1A2540',
    borderWidth: 1,
    borderColor: '#C8A84B',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  seasonText: {
    fontFamily: 'JetBrainsMono-Bold',
    fontSize: 12,
    color: '#C8A84B',
    letterSpacing: 1,
  },
  headerSub: {
    fontFamily: 'JetBrainsMono-Regular',
    fontSize: 12,
    color: '#6B8099',
    marginTop: 4,
    letterSpacing: 0.5,
  },
  // Search
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 10,
    backgroundColor: '#0F1626',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1A2540',
    paddingHorizontal: 12,
    height: 42,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'JetBrainsMono-Regular',
    fontSize: 13,
    color: '#E8D5A3',
    paddingVertical: 0,
  },
  // Column headers
  columnHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  colRankSpace: {
    width: 4 + 10 + 36 + 10 + 30 + 10, // classBar + gaps + rankBadge + icon
  },
  colLabel: {
    fontFamily: 'Cinzel-Regular',
    fontSize: 10,
    color: '#4A6080',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  colPlayer: {
    flex: 1,
  },
  colRating: {
    width: 80,
    textAlign: 'right',
  },
  divider: {
    height: 1,
    backgroundColor: '#1A2540',
    marginHorizontal: 0,
  },
  separator: {
    height: 1,
    backgroundColor: '#111827',
    marginLeft: 4 + 10 + 36, // align with content after class bar + rank
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
    color: '#E8D5A3',
    letterSpacing: 1,
  },
  emptySubtitle: {
    fontFamily: 'JetBrainsMono-Regular',
    fontSize: 13,
    color: '#6B8099',
  },
});
