import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
};
const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
      console.log("payload-added:", action.payload.id);
    },

    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
      console.log("payload-removed", action.payload.id);
    },
  },
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;
