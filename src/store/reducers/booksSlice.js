import { createSlice } from "@reduxjs/toolkit";
import axios from "../../config/axiosConfig";

// export const getBooksWithFilter = async () => {
//   try {
//     const result = await axios.get(`/filter`);
//     console.log('result', result.data);
//     return result.data;
//   } catch (error) {
//     console.log('error in getbooks service -> ', error)
//   }
// }

export const getBooksWithFilter = async (low, high, author) => {
  try {
    const result = await axios.get(`/filter`,{
      params:{
        low: low,
        high: high,
        author:author,
      }
    });
    console.log('result of getFilterdAuthor', result.data);
    return result.data;
  } catch (error) {
    console.log('error in getbooks service -> ', error)
  }
}






const initialBooks = await getBooksWithFilter();
const initialState ={
  books : initialBooks,
  filteredBooks : [],
  filterCount : 0,
  categoryId: '' 
}

const booksSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {
    addPriceFilter : (state , action)=>{
      const price = action.payload;
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
       state.filteredBooks = state.filteredBooks.filter(book => book.price < low || book.price > high);
       state.filterCount--
    },
    setAuthorFilter: (state, action) => {
      const author = action.payload;

      state.filteredBooks = state.filteredBooks.concat(
        state.books.filter(book => 
          book.author.name === author
        ));
      state.filterCount++;
    },
    removeAuthorFilter: (state, action) => {
      const author = action.payload;

      state.filteredBooks = state.filteredBooks.filter(book => book.author.name !== author);
      state.filterCount--;
    },

    catId:(state, action) => {
      state.categoryId = action.payload;
    },
    testSendAuthor:(state, action) => {
      const authorName = action.payload ;
      // console.log('authorName----->',authorName);
      getFilterdAuthor(authorName)
    },

  }
})
export const {setBooks,catId ,removePriceFilter,addPriceFilter,setAuthorFilter,removeAuthorFilter,testSendAuthor} = booksSlice.actions;

export default booksSlice.reducer;



