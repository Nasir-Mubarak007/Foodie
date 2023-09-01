import { StyleSheet, Text, View } from "react-native";

export default function MealDetails({
  duration,
  complexity,
  affordability,
  textStyle,
}) {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailItem, textStyle]}> {duration}Mins</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {" "}
        {complexity.toUpperCase()}{" "}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}{" "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 13,
  },
});
