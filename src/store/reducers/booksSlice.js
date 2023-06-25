import { createSlice } from "@reduxjs/toolkit";
import { getBooks } from "../../services/booksService";

const initialBooks = await getBooks();


export const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    setBooks: (state, action) => {
      return state = action.payload;
    }
  }
})

export const { setBooks } = booksSlice.actions;

export default booksSlice.reducer;

