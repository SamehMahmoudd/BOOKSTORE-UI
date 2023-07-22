import { createSlice } from "@reduxjs/toolkit";
import axios from "../../config/axiosConfig";

export const getBooksWithFilter = async () => {
  try {
    const result = await axios.get(`/filter`)
    console.log('resultxxxxxxxxx', result.data);
    return result.data;
  } catch (error) {
    console.log('error in getbooks service -> ', error)
  }
}

// const result = await getBooksWithFilter();
// console.log('resultxxxxxxxxx', result);



const initialBooks = await getBooksWithFilter();


const initialState ={
  books : initialBooks,
  filteredBooks : [],
  filterCount : 0,
  categoryId: '' // Initialize categoryId with an empty string

}

const booksSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {
    // setBooks: (state, action) => {
    //   return state = action.payload ;
    // },
    addPriceFilter : (state , action)=>{
      const price = action.payload;
      
      console.log('price:', price);
      const [low, high] = price.split('-').map(p => parseInt(p));
      
      state.filteredBooks = state.filteredBooks.concat(
        state.books.filter(book => 
          book.price >= low && book.price <= high && book.category === state.categoryId
        ));
        state.filterCount++
        
    },
    
    removePriceFilter:(state,action)=>{
      const price = action.payload;
      const [low , high] =  price.split('-').map(p=>parseInt(p))

       state.filteredBooks = state.filteredBooks.filter(
          book => book.price < low && book.price > high 
          );
          state.filterCount--
    },
    setAuthorFilter: (state, action) => {
      const author = action.payload;
      state.filteredBooks = state.books.filter(book => book.author.name === author);
      state.filterCount++;
    },
    removeAuthorFilter: (state, action) => {
      const author = action.payload;
      state.filteredBooks = state.filteredBooks.filter(book => book.author.name === author);
      state.filterCount--;
    },
    catId:(state, action) => {
      state.categoryId = action.payload;
    },
    

  }
})
export const {setBooks,catId ,removePriceFilter,addPriceFilter,setAuthorFilter,removeAuthorFilter} = booksSlice.actions;

export default booksSlice.reducer;



