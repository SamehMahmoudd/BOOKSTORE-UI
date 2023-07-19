import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const foundBook = state.find(product => product.book.id === action.payload.book.id)
      if (foundBook) {
        return state = increaseQuantity(state, action)
      } else {
        return state = [...state, action.payload]
      }
    },
    increaseBookQuantity: (state, action) => {
      return state = state.map(product => {
        if (product.book.id === action.payload.book.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product
      })
    },
    decreaseBookQuantity: (state, action) => {
      return state = state.map(product => {
        if (product.book.id === action.payload.book.id) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product
      })
    },
    removeFromCart: (state, action) => {
      return state = []
    },
    
    emptyCart: (state, action) => {
      return state = []
    }
  }
})



const increaseQuantity = (state, action) => {
  return state.map(product => {
    if (product.book.id === action.payload.book.id) {
      return { ...product, quantity: product.quantity + action.payload.quantity };
    }
    return product
  })
}

export const { addToCart, increaseBookQuantity, decreaseBookQuantity, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;