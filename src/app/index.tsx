
import { SpotCard } from "@/components/spot-card";
import { CATEGORY_EMOJI, SPOTS, type Category } from "@/data/spots";
import { ScrollView, StyleSheet, Text } from "react-native";


const categorySummary = (Object.keys(CATEGORY_EMOJI) as Category[])
  .map((category) => {
    const count = SPOTS.filter((spot) => spot.category === category).length;
    return `${category}: ${count}`;
  })
  .join(" · ");

export default function Index() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.subtitle}>{SPOTS.length} places worth visiting</Text>
      <Text style={styles.categorySummary}>{categorySummary}</Text>

<ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  style={styles.chipsRow}
  contentContainerStyle={styles.chipsContent}
>
  {(Object.keys(CATEGORY_EMOJI) as Category[]).map((category) => (
    <Text key={category} style={styles.chip}>
      {CATEGORY_EMOJI[category]} {category}
    </Text>
  ))}
</ScrollView>

      {SPOTS.map((spot) => (
        <SpotCard key={spot.id} spot={spot} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f6f6f4",
  },
  content: {
    padding: 16,
  },
  subtitle: {
    marginBottom: 16,
    color: "#666",
  },
  categorySummary: {
  marginBottom: 16,
  color: "#666",
  fontSize: 13,
},

chipsRow: {
  marginBottom: 16,
},
chipsContent: {
  gap: 8,
},
chip: {
  backgroundColor: "white",
  borderRadius: 20,
  paddingHorizontal: 12,
  paddingVertical: 8,
  overflow: "hidden",
},

});
