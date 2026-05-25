import { Stack } from "expo-router";
import "../global.css";
import {
  useFonts,
  LibreCaslonText_400Regular,
  LibreCaslonText_700Bold,
  LibreCaslonText_400Regular_Italic,
} from "@expo-google-fonts/libre-caslon-text";

import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import { View } from "react-native";


export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    LibreCaslonText_400Regular,
    LibreCaslonText_700Bold,
    LibreCaslonText_400Regular_Italic,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) return null;

  return (
    <View className="flex-1 font-montserrat">
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}
