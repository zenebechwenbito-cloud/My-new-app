// app/(tabs)/_layout.tsx
import React, { useEffect } from "react";
import { Tabs, useRouter } from "expo-router";
import { useAuth } from "../../_contexts/AuthContext";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";

export default function TabLayout() {
  const { user, loading } = useAuth();
  const router = useRouter();

  // Use useEffect to redirect (not during render!)
  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [user, loading]);

  // Show loading while checking auth
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  // Don't render tabs if not authenticated
  if (!user) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "#999",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#f0f0f0",
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <View
                style={[styles.iconCircle, focused && styles.iconCircleFocused]}
              >
                <Text style={[styles.iconText, { color }]}>🏠</Text>
              </View>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="programs"
        options={{
          title: "Programs",
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <View
                style={[styles.iconCircle, focused && styles.iconCircleFocused]}
              >
                <Text style={[styles.iconText, { color }]}>📚</Text>
              </View>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="social"
        options={{
          title: "Microlink",
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <View
                style={[styles.iconCircle, focused && styles.iconCircleFocused]}
              >
                <Text style={[styles.iconText, { color }]}>👥</Text>
              </View>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="my-page"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <View
                style={[styles.iconCircle, focused && styles.iconCircleFocused]}
              >
                <Text style={[styles.iconText, { color }]}>👤</Text>
              </View>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  iconCircleFocused: {
    backgroundColor: "#007AFF10",
  },
  iconText: {
    fontSize: 20,
  },
});
