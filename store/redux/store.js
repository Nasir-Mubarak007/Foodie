import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "./favorites";

const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});

export const stores = store;
