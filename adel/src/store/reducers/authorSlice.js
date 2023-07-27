import { createSlice } from "@reduxjs/toolkit";
import { getAuthors } from "../../services/authorService";

const initailAuthors = await getAuthors()

export const authorSlice = createSlice({
  name: 'authors',
  initialState: initailAuthors,
  reducers: {
    setAuthors: (state, action) => {
      return state = action.payload;
    }
  }
})

export const { setAuthors } = authorSlice.actions;

export default authorSlice.reducer;