import { combineReducers } from 'redux';
import booksSlice from './reducers/booksSlice'
import categorySlice from './reducers/categorySlice';
import authorSlice from './reducers/authorSlice';
import cartSlice from './reducers/cartSlice';


export default combineReducers({
    books: booksSlice,
    categories: categorySlice,
    authors: authorSlice,
    cart: cartSlice
});

