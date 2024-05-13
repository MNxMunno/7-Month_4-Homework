import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    value: JSON.parse(localStorage.getItem("wishlist")) || [],
  },
  reducers: {
    toggleLike(state, action) {
      // console.log(state.value, "state");
      // console.log(action, "action");
      let index = state.value?.findIndex((el) => el.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, action.payload];
      } else {
        state.value = state.value?.filter((el) => el.id !== action.payload.id);
      }
      localStorage.setItem("wishlist", JSON.stringify(state.value));
    },
  },
});

export const { toggleLike } = wishlistSlice.actions;
export default wishlistSlice.reducer;
