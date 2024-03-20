import ActiveCustomerProvider from "@/contexts/active";
import CustomerProvider from "@/contexts/customers";
import KhataProvider from "@/contexts/data";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "./global.css";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    bold: require("@/assets/fonts/Bold.ttf"),
    black: require("@/assets/fonts/Black.ttf"),
    extraBold: require("@/assets/fonts/ExtraBold.ttf"),
    light: require("@/assets/fonts/Light.ttf"),
    medium: require("@/assets/fonts/Medium.ttf"),
    regular: require("@/assets/fonts/Regular.ttf"),
    semiBold: require("@/assets/fonts/SemiBold.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return <Stack />;
}
