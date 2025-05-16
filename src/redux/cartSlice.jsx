import { createSlice } from '@reduxjs/toolkit';

// Load saved cart from localStorage
let savedCart = localStorage.getItem('cart');
const initialState = savedCart && savedCart !== "undefined" ? JSON.parse(savedCart) : [];


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },

    deleteFromCart(state, action) {
      return state.filter(item => item.id !== action.payload.id);
    },

    incrementQuantity(state, action) {
      const item = state.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    decrementQuantity(state, action) {
      const item = state.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

// Action creators
export const {
  addToCart,
  deleteFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
