import { StyleSheet, View, FlatList } from "react-native";
import MealItem from "./mealItem";

export default function MealsList({ items }) {
  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemsProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      affordability: item.affordability,
      complexity: item.complexity,
      id: item.id,
    };
    return <MealItem {...mealItemsProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
