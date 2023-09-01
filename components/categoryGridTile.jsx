import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

export default function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        android_ripple={{ color: "silver" }}
        style={({ pressed }) => [
          styles.touchable,
          pressed ? styles.btnPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innercontainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    borderBottomRightRadius: 24,
    borderTopLeftRadius: 24,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.select({ ios: "visible", android: "hidden" }),
  },
  touchable: {
    flex: 1,
  },
  btnPressed: {
    opacity: 0.4,
  },
  innercontainer: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
