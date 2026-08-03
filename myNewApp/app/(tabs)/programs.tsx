// app/(tabs)/programs.tsx
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const PROGRAMS = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    category: "Technology",
    duration: "12 weeks",
    level: "Beginner",
    icon: "💻",
    color: "#007AFF",
  },
  {
    id: 2,
    title: "Digital Marketing",
    category: "Marketing",
    duration: "8 weeks",
    level: "Intermediate",
    icon: "📱",
    color: "#34C759",
  },
  {
    id: 3,
    title: "Data Science Fundamentals",
    category: "Technology",
    duration: "10 weeks",
    level: "Advanced",
    icon: "📊",
    color: "#FF9500",
  },
  {
    id: 4,
    title: "UI/UX Design",
    category: "Design",
    duration: "6 weeks",
    level: "Beginner",
    icon: "🎨",
    color: "#FF2D55",
  },
  {
    id: 5,
    title: "Business Analytics",
    category: "Business",
    duration: "8 weeks",
    level: "Intermediate",
    icon: "📈",
    color: "#5856D6",
  },
  {
    id: 6,
    title: "Mobile App Development",
    category: "Technology",
    duration: "14 weeks",
    level: "Advanced",
    icon: "📲",
    color: "#FF3B30",
  },
];

export default function Programs() {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "#34C759";
      case "Intermediate":
        return "#FF9500";
      case "Advanced":
        return "#FF3B30";
      default:
        return "#666";
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Programs</Text>
        <Text style={styles.subtitle}>Explore and enroll in programs</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <Text style={styles.searchPlaceholder}>Search programs...</Text>
      </View>

      {/* Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
        contentContainerStyle={styles.categoriesContent}
      >
        <TouchableOpacity
          style={[styles.categoryChip, styles.categoryChipActive]}
        >
          <Text style={styles.categoryTextActive}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryChip}>
          <Text style={styles.categoryText}>Technology</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryChip}>
          <Text style={styles.categoryText}>Design</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryChip}>
          <Text style={styles.categoryText}>Business</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryChip}>
          <Text style={styles.categoryText}>Marketing</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Programs List */}
      <View style={styles.programsContainer}>
        {PROGRAMS.map((program) => (
          <TouchableOpacity key={program.id} style={styles.programCard}>
            <View
              style={[
                styles.programIcon,
                { backgroundColor: program.color + "20" },
              ]}
            >
              <Text style={styles.programIconText}>{program.icon}</Text>
            </View>

            <View style={styles.programContent}>
              <Text style={styles.programTitle}>{program.title}</Text>
              <Text style={styles.programCategory}>{program.category}</Text>

              <View style={styles.programMeta}>
                <View style={styles.metaItem}>
                  <Text style={styles.metaIcon}>⏱️</Text>
                  <Text style={styles.metaText}>{program.duration}</Text>
                </View>
                <View
                  style={[
                    styles.levelBadge,
                    { backgroundColor: getLevelColor(program.level) + "20" },
                  ]}
                >
                  <Text
                    style={[
                      styles.levelText,
                      { color: getLevelColor(program.level) },
                    ]}
                  >
                    {program.level}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.programArrow}>
              <Text style={styles.arrowText}>›</Text>
            </View>
          </TouchableOpacity>
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 20,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  searchIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  searchPlaceholder: {
    flex: 1,
    fontSize: 16,
    color: "#999",
  },
  categoriesContainer: {
    marginBottom: 12,
  },
  categoriesContent: {
    paddingHorizontal: 20,
    gap: 8,
  },
  categoryChip: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  categoryChipActive: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
  },
  categoryText: {
    fontSize: 14,
    color: "#666",
  },
  categoryTextActive: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "600",
  },
  programsContainer: {
    padding: 20,
    paddingTop: 8,
  },
  programCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  programIcon: {
    width: 56,
    height: 56,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  programIconText: {
    fontSize: 28,
  },
  programContent: {
    flex: 1,
  },
  programTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  programCategory: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  programMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  metaIcon: {
    fontSize: 14,
    marginRight: 4,
  },
  metaText: {
    fontSize: 12,
    color: "#666",
  },
  levelBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  levelText: {
    fontSize: 12,
    fontWeight: "600",
  },
  programArrow: {
    marginLeft: 8,
  },
  arrowText: {
    fontSize: 24,
    color: "#ccc",
  },
  spacer: {
    height: 20,
  },
});
