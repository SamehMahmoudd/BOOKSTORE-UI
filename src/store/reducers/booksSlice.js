import { createSlice } from "@reduxjs/toolkit";
import { getBooks } from "../../services/booksService";

const initialBooks = await getBooks();


export const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks
})


export default booksSlice.reducer;