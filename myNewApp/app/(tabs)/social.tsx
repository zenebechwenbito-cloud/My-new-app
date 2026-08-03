// app/(tabs)/social.tsx
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const CONNECTIONS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Software Developer",
    avatar: "👩‍💻",
    status: "online",
    mutualConnections: 12,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "UX Designer",
    avatar: "👨‍🎨",
    status: "online",
    mutualConnections: 8,
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Product Manager",
    avatar: "👩‍💼",
    status: "offline",
    mutualConnections: 15,
  },
  {
    id: 4,
    name: "James Rodriguez",
    role: "Data Scientist",
    avatar: "👨‍🔬",
    status: "online",
    mutualConnections: 6,
  },
];

const ACTIVITIES = [
  {
    id: 1,
    user: "Sarah Johnson",
    action: "completed",
    target: "Web Development Bootcamp",
    time: "2 hours ago",
    icon: "🎉",
  },
  {
    id: 2,
    user: "Michael Chen",
    action: "shared",
    target: "UI Design Resources",
    time: "5 hours ago",
    icon: "🔗",
  },
  {
    id: 3,
    user: "Emma Wilson",
    action: "joined",
    target: "Business Analytics",
    time: "1 day ago",
    icon: "✨",
  },
];

export default function Social() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Microlink</Text>
        <Text style={styles.subtitle}>Connect and collaborate</Text>
      </View>

      {/* Your Network Stats */}
      <View style={styles.statsCard}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>127</Text>
          <Text style={styles.statLabel}>Connections</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>45</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>89</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
      </View>

      {/* Online Now */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Online Now</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.onlineList}
        >
          {CONNECTIONS.filter((c) => c.status === "online").map(
            (connection) => (
              <TouchableOpacity key={connection.id} style={styles.onlineCard}>
                <View style={styles.onlineAvatar}>
                  <Text style={styles.onlineAvatarText}>
                    {connection.avatar}
                  </Text>
                  <View style={styles.onlineIndicator} />
                </View>
                <Text style={styles.onlineName}>
                  {connection.name.split(" ")[0]}
                </Text>
              </TouchableOpacity>
            ),
          )}
        </ScrollView>
      </View>

      {/* Your Connections */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Your Connections</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        {CONNECTIONS.map((connection) => (
          <TouchableOpacity key={connection.id} style={styles.connectionCard}>
            <View style={styles.connectionLeft}>
              <View style={styles.connectionAvatar}>
                <Text style={styles.connectionAvatarText}>
                  {connection.avatar}
                </Text>
                {connection.status === "online" && (
                  <View style={styles.statusDot} />
                )}
              </View>

              <View style={styles.connectionInfo}>
                <Text style={styles.connectionName}>{connection.name}</Text>
                <Text style={styles.connectionRole}>{connection.role}</Text>
                <Text style={styles.mutualConnections}>
                  {connection.mutualConnections} mutual connections
                </Text>
              </View>
            </View>

            <TouchableOpacity style={styles.messageButton}>
              <Text style={styles.messageIcon}>💬</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>

      {/* Recent Activity */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>

        {ACTIVITIES.map((activity) => (
          <View key={activity.id} style={styles.activityCard}>
            <Text style={styles.activityIcon}>{activity.icon}</Text>
            <View style={styles.activityContent}>
              <Text style={styles.activityText}>
                <Text style={styles.activityUser}>{activity.user}</Text>
                {" " + activity.action + " "}
                <Text style={styles.activityTarget}>{activity.target}</Text>
              </Text>
              <Text style={styles.activityTime}>{activity.time}</Text>
            </View>
          </View>
        ))}
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
    padding: 24,
    paddingTop: 60,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
  statsCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: 20,
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
  },
  statDivider: {
    width: 1,
    backgroundColor: "#f0f0f0",
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  seeAll: {
    fontSize: 14,
    color: "#007AFF",
    fontWeight: "600",
  },
  onlineList: {
    gap: 12,
    paddingBottom: 4,
  },
  onlineCard: {
    alignItems: "center",
  },
  onlineAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
    borderWidth: 2,
    borderColor: "#34C759",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  onlineAvatarText: {
    fontSize: 32,
  },
  onlineIndicator: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#34C759",
    borderWidth: 2,
    borderColor: "#fff",
  },
  onlineName: {
    fontSize: 12,
    color: "#1a1a1a",
    fontWeight: "500",
  },
  connectionCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  connectionLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  connectionAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  connectionAvatarText: {
    fontSize: 28,
  },
  statusDot: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#34C759",
    borderWidth: 2,
    borderColor: "#fff",
  },
  connectionInfo: {
    flex: 1,
  },
  connectionName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 2,
  },
  connectionRole: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  mutualConnections: {
    fontSize: 12,
    color: "#999",
  },
  messageButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  messageIcon: {
    fontSize: 20,
  },
  activityCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  activityIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityText: {
    fontSize: 14,
    color: "#1a1a1a",
    marginBottom: 4,
    lineHeight: 20,
  },
  activityUser: {
    fontWeight: "600",
  },
  activityTarget: {
    color: "#007AFF",
  },
  activityTime: {
    fontSize: 12,
    color: "#999",
  },
  spacer: {
    height: 20,
  },
});
