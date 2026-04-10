import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ExploreScreen() {
  return (
    <LinearGradient colors={['#080C14', '#0D1525', '#080C14']} style={styles.gradient}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.center}>
          <Text style={styles.icon}>⚔️</Text>
          <Text style={styles.title}>EXPLORE</Text>
          <Text style={styles.sub}>Coming soon</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  safeArea: { flex: 1 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 },
  icon: { fontSize: 40 },
  title: { fontSize: 20, color: '#C8A84B', letterSpacing: 2 },
  sub: { fontSize: 13, color: '#6B8099' },
});
