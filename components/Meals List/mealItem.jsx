import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../mealDetails";

export default function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();

  function mealItemHandler() {
    navigation.navigate("meal Details", { mealId: id });
  }
  return (
    <View style={styles.MealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.btnPressed : null)}
        onPress={mealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>

          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btnPressed: {
    opacity: 0.4,
  },

  image: {
    width: "100%",
    height: 200,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
    borderTopLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  MealItem: {
    margin: 15,
    borderRadius: 5,
    backgroundColor: "white",
    borderTopLeftRadius: 35,
    borderBottomRightRadius: 35,
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.select({ ios: "visible", android: "hidden" }),
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 19,
    margin: 8,
  },
});
