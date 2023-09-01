import { StyleSheet, Text, View, Image } from "react-native";
import { useSelector } from "react-redux";

import MealsList from "../components/Meals List/mealsList";
import { MEALS } from "../Data/dummy-data";

export default function FavoritesScreen() {
  const favMealIds = useSelector((state) => state.favoriteMeals.ids);
  console.log(favMealIds);
  const favoriteMeals = MEALS.filter((meal) => favMealIds.includes(meal.id));
  console.log("favMealIds", favMealIds);

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/broken-image.png")}
            style={styles.image}
          />
        </View>
        <Text style={styles.text}>No favorite Meals Yet...</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
  // return <Text>hi</Text>;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 100,
    aspectRatio: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 19,
    fontWeight: "bold",
    color: "white",
  },
});
