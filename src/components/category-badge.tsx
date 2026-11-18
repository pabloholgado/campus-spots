
import type { Category } from "@/data/spots";
import { StyleSheet, Text } from "react-native";


interface Props {
  category: Category;
}

const CATEGORY_COLORS: Record<Category, string> = {
  sight: "#FDE68A",
  food: "#FED7AA",
  park: "#BBF7D0",
  museum: "#DDD6FE",
  campus: "#BFDBFE",
  bar: "#FBCFE8",
};

export function CategoryBadge({ category }: Props) {
  return (
    <Text
      style={[
        styles.badge,
        { backgroundColor: CATEGORY_COLORS[category] },
      ]}
    >
      {category}
    </Text>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: "600",
    color: "#222",
  },
});
