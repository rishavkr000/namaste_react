import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      // Mutating the state here
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      // Redux toolkit internally uses Immer.js, so direct mutations like splice() work as expected.
      state.items.splice(action.payload, 1);
    },
    clearCart: (state) => {
      // Redux Toolkit (RTK) - Either mutate the existing state or return a new state
      // state.items.length = 0; // => originalState = []

      return { items: [] }; // This new object will be replaced inside originalState = { items: [] }
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
