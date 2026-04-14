import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ArenaBracket } from '@/types';

const BRACKETS: ArenaBracket[] = ['2v2', '3v3', '5v5'];

interface Props {
  selectedBracket: ArenaBracket;
  onSelect: (bracket: ArenaBracket) => void;
}

export function BracketTabs({ selectedBracket, onSelect }: Props) {
  return (
    <View style={styles.container}>
      {BRACKETS.map((bracket) => {
        const isActive = bracket === selectedBracket;
        return (
          <Pressable
            key={bracket}
            style={({ pressed }) => [styles.tab, pressed && styles.tabPressed]}
            onPress={() => onSelect(bracket)}
          >
            <Text style={[styles.label, isActive && styles.activeLabel]}>{bracket}</Text>
            {isActive && <View style={styles.underline} />}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#1C2333',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 14,
    paddingBottom: 12,
    gap: 0,
  },
  tabPressed: {
    opacity: 0.7,
  },
  label: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#3A4F65',
    letterSpacing: 1.5,
  },
  activeLabel: {
    fontFamily: 'Inter_600SemiBold',
    color: '#C8A84B',
  },
  underline: {
    height: 2,
    width: 28,
    backgroundColor: '#C8A84B',
    borderRadius: 1,
    marginTop: 8,
  },
});
