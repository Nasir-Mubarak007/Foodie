import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.listText}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  listText: {
    color: "brown",
    textAlign: "center",
  },
});
