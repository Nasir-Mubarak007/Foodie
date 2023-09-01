import { useLayoutEffect } from "react";

import { MEALS, CATEGORIES } from "../Data/dummy-data";
import MealsList from "../components/Meals List/mealsList";

export default function MealsOverviewScreen({ route, navigation }) {
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  return <MealsList items={displayedMeals} />;
}
