import { Stack } from "expo-router";
import "../global.css";
import {
  useFonts,
  LibreCaslonText_400Regular,
  LibreCaslonText_700Bold,
  LibreCaslonText_400Regular_Italic,
} from "@expo-google-fonts/libre-caslon-text";
 

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    LibreCaslonText_400Regular,
    LibreCaslonText_700Bold,
    LibreCaslonText_400Regular_Italic,
  });

  if (!fontsLoaded) return null;
  
  return (
     <Stack screenOptions={{
      headerShown: false,
     }}  />
);
}
