// app/_layout.tsx
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { AuthProvider, useAuth } from "../_contexts/AuthContext";

function RootLayoutNav() {
  const { user, loading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    const inTabsGroup = segments[0] === "(tabs)";

    // Redirect logged out users trying to access protected routes
    if (!user && inTabsGroup) {
      router.replace("/login");
    }
    // Redirect logged in users away from auth pages
    else if (user && (segments[0] === "login" || segments[0] === "signup")) {
      router.replace("/(tabs)/dashboard");
    }
  }, [user, loading, segments]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}

// import { Stack } from "expo-router";
// import "react-native-reanimated";
// import { AuthProvider } from "../_contexts/AuthContext";
// import { useColorScheme } from "@/hooks/use-color-scheme";
// import {
//   ThemeProvider,
//   DarkTheme,
//   DefaultTheme,
// } from "@react-navigation/native";
// import { StatusBar } from "expo-status-bar";

// export const unstable_settings = {
//   anchor: "(tabs)",
// };

// export default function RootLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <AuthProvider>
//       <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
//         <Stack screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="login" />
//           <Stack.Screen name="signup" options={{ title: "Sign Up" }} />
//           <Stack.Screen name="(tabs)" />
//           <Stack.Screen
//             name="modal"
//             options={{ presentation: "modal", title: "Modal" }}
//           />
//         </Stack>
//         <StatusBar style="auto" />
//       </ThemeProvider>
//     </AuthProvider>
//   );
// }
