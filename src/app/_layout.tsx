/**
 * Root layout — loads custom fonts then renders the app.
 *
 * FONTS REQUIRED (download from Google Fonts → assets/fonts/):
 *   Cinzel-Regular.ttf   https://fonts.google.com/specimen/Cinzel
 *   Cinzel-Bold.ttf
 *   JetBrainsMono-Regular.ttf  https://fonts.google.com/specimen/JetBrains+Mono
 *   JetBrainsMono-Bold.ttf
 */
import * as Font from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'Cinzel-Regular': require('../../assets/fonts/Cinzel-Regular.ttf'),
          'Cinzel-Bold': require('../../assets/fonts/Cinzel-Bold.ttf'),
          'JetBrainsMono-Regular': require('../../assets/fonts/JetBrainsMono-Regular.ttf'),
          'JetBrainsMono-Bold': require('../../assets/fonts/JetBrainsMono-Bold.ttf'),
        });
      } catch {
        // Font files not yet in assets/fonts/ — app will render with system fonts.
      } finally {
        setReady(true);
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);

  if (!ready) return null;

  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
