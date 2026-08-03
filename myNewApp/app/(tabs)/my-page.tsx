// app/(tabs)/my-page.tsx
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useAuth } from "../../_contexts/AuthContext";

export default function MyPage() {
  const { user } = useAuth();

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {user?.email?.charAt(0).toUpperCase() || "U"}
            </Text>
          </View>
        </View>
        <Text style={styles.name}>{user?.email?.split("@")[0] || "User"}</Text>
        <Text style={styles.email}>{user?.email}</Text>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Account Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Information</Text>

        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoValue}>{user?.email}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Account Status</Text>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>Active</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Member Since</Text>
            <Text style={styles.infoValue}>
              {new Date().toLocaleDateString()}
            </Text>
          </View>
        </View>
      </View>

      {/* Preferences */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>

        <TouchableOpacity style={styles.preferenceCard}>
          <Text style={styles.preferenceIcon}>🔔</Text>
          <Text style={styles.preferenceText}>Notifications</Text>
          <Text style={styles.preferenceArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.preferenceCard}>
          <Text style={styles.preferenceIcon}>🎨</Text>
          <Text style={styles.preferenceText}>Appearance</Text>
          <Text style={styles.preferenceArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.preferenceCard}>
          <Text style={styles.preferenceIcon}>🔒</Text>
          <Text style={styles.preferenceText}>Privacy & Security</Text>
          <Text style={styles.preferenceArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.preferenceCard}>
          <Text style={styles.preferenceIcon}>❓</Text>
          <Text style={styles.preferenceText}>Help & Support</Text>
          <Text style={styles.preferenceArrow}>›</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.spacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 32,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
  },
  editButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 20,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 12,
  },
  infoCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  infoLabel: {
    fontSize: 14,
    color: "#666",
  },
  infoValue: {
    fontSize: 14,
    color: "#1a1a1a",
    fontWeight: "500",
  },
  statusBadge: {
    backgroundColor: "#34C759",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  divider: {
    height: 1,
    backgroundColor: "#f0f0f0",
  },
  preferenceCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  preferenceIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  preferenceText: {
    flex: 1,
    fontSize: 16,
    color: "#1a1a1a",
  },
  preferenceArrow: {
    fontSize: 24,
    color: "#ccc",
  },
  spacer: {
    height: 20,
  },
});
