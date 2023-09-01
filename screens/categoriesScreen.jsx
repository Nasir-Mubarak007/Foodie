import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

import { CATEGORIES } from "../Data/dummy-data";
import CategoryGridTile from "../components/categoryGridTile";

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function navigateHandler() {
      navigation.navigate("Meals Overview", { categoryId: itemData.item.id });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={navigateHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({});
