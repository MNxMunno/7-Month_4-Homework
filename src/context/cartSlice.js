import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addToCart(state, action) {
      let index = state.value.findIndex((el) => el.id === action?.payload?.id);
      if (index < 0) {
        state.value = [...state.value, { ...action.payload, quantity: 1 }];
      }
    },
    incrementCartQuantity() {},
    decrementCartQuantity() {},
    removeItemFromCart() {},
    removeAllItemsFromCart() {},
  },
});

export const {
  addToCart,
  incrementCartQuantity,
  decrementCartQuantity,
  removeItemFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
