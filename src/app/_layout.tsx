/**
 * Root layout — loads custom fonts then renders the app.
 *
 * To enable custom fonts, download from Google Fonts → assets/fonts/ then
 * uncomment the useFonts block below:
 *   Cinzel-Regular.ttf + Cinzel-Bold.ttf   https://fonts.google.com/specimen/Cinzel
 *   JetBrainsMono-Regular.ttf + JetBrainsMono-Bold.ttf  https://fonts.google.com/specimen/JetBrains+Mono
 */
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

// Uncomment when font files are present in assets/fonts/:
// import { useFonts } from 'expo-font';
// const [fontsLoaded] = useFonts({
//   'Cinzel-Regular':        require('../../assets/fonts/Cinzel-Regular.ttf'),
//   'Cinzel-Bold':           require('../../assets/fonts/Cinzel-Bold.ttf'),
//   'JetBrainsMono-Regular': require('../../assets/fonts/JetBrainsMono-Regular.ttf'),
//   'JetBrainsMono-Bold':    require('../../assets/fonts/JetBrainsMono-Bold.ttf'),
// });
// if (!fontsLoaded) return null;

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
