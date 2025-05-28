import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.count += 1;
      } else {
        state.cart.push({ ...action.payload, count: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
    },

    decreaseTheCount: (state, action) => {
      let existingProduct = state.cart.find(
        (product) => product.id === action.payload
      );

      if (existingProduct && existingProduct.count > 1) {
        existingProduct.count -= 1;
      } else {
        // If count is 1, remove from cart
        state.cart = state.cart.filter(
          (product) => product.id !== action.payload
        );
      }
    },
  },
});

export const { addToCart, removeFromCart, decreaseTheCount } =
  cartSlice.actions;

export default cartSlice.reducer;
