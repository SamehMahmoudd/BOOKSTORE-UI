import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    setCategories: (state, action) => {
      console.log('action', action);
      return state = action.payload;
    }
  }
})

export const { setCategories } = categorySlice.actions;

export default categorySlice.reducer;