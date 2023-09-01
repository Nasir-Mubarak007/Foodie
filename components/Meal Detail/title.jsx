import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Title({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b487",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    margin: 4,
    marginHorizontal: 10,
    padding: 5,
    borderBottomWidth: 2,
    borderColor: "#e2b487",
  },
});
