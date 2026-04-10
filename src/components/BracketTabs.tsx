import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';

import { ArenaBracket } from '@/types';

const BRACKETS: ArenaBracket[] = ['2v2', '3v3', '5v5'];

interface Props {
  selectedBracket: ArenaBracket;
  onSelect: (bracket: ArenaBracket) => void;
}

export function BracketTabs({ selectedBracket, onSelect }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {BRACKETS.map((bracket) => {
        const isActive = bracket === selectedBracket;
        return (
          <Pressable key={bracket} onPress={() => onSelect(bracket)} style={styles.pressable}>
            {isActive ? (
              <LinearGradient
                colors={['#1A2F6B', '#0E1C48']}
                style={[styles.tab, styles.activeTab]}
              >
                <Text style={[styles.label, styles.activeLabel]}>{bracket}</Text>
              </LinearGradient>
            ) : (
              <LinearGradient
                colors={['#0F1626', '#080C14']}
                style={styles.tab}
              >
                <Text style={styles.label}>{bracket}</Text>
              </LinearGradient>
            )}
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 10,
  },
  pressable: {
    borderRadius: 8,
  },
  tab: {
    paddingHorizontal: 28,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1A2540',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 72,
  },
  activeTab: {
    borderColor: '#C8A84B',
    borderWidth: 1.5,
  },
  label: {
    fontFamily: 'Cinzel-Regular',
    fontSize: 14,
    color: '#6B8099',
    letterSpacing: 1,
  },
  activeLabel: {
    color: '#C8A84B',
  },
});
