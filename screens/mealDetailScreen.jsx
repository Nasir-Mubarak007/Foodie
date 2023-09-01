import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { MEALS } from "../Data/dummy-data";
import MealDetails from "../components/mealDetails";
import Title from "../components/Meal Detail/title";
import List from "../components/Meal Detail/list";
import IconBtn from "../components/iconBtn";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

function MealDetailScreen({ route, navigation }) {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealIds.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
      console.log({ id: mealId });
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconBtn
            icon={mealIsFavorite ? "heart" : "hearto"}
            color="orange"
            onTap={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Title>Ingredients</Title>
          <List data={selectedMeal.ingredients} />
          <Title>Steps</Title>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 34,
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  recipeContainer: {
    alignItems: "center",
  },
  recipees: {
    width: "80%",
    alignContent: "center",
  },
  detailText: {
    color: "white",
  },
});
