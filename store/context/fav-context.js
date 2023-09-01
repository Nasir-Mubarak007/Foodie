import React, { createContext, useState } from "react";
import { log } from "react-native-reanimated";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export default function FavoritesContextProvider({ children }) {
  const [favMealIds, setFavMealIds] = useState([]);

  function addFavorite(id) {
    setFavMealIds((currentFavIds) => [...currentFavIds, id]);
  }
  function removeFavorite(id) {
    setFavMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
    console.log("red");
  }

  const value = {
    ids: favMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
