import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    wishlist: wishlistSlice,
    cart: cartSlice,
  },
});
