import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector } from 'react-redux'

import './../overlay.css';

function Search() {
    const books = useSelector((state) => state.books.books);
    //setInputValue(value) is called to update the inputValue with the new value.
    const [inputValue, setInputValue] = useState('');
    const [filteredBooks, setFilteredBooks] = useState(books);

    const handleInputChange  = (event) => {
        const value = event.target.value;
        setInputValue(value);
    };

    const searchQuery  = ()=>{
        const filtered  = books.filter((book) => book.bookTitle.toLowerCase().includes(inputValue.toLowerCase()));
        setFilteredBooks(filtered)
    }

    const navigate = useNavigate() 
    const handelGoBack = () => {
        navigate(-1);
    };

  return (
    <>
        <div id="overlay">
            <button className='close d-flex justify-content-end'>
                <i className ="bi bi-x-circle p-3" id ="closeBtn" onClick={handelGoBack}></i>
            </button>

            <div className ='m-5 d-flex flex-row'>
                <input onChange={handleInputChange } value={inputValue} className="form-control form-control-lg search-input" type="text" placeholder="Search" aria-label=".form-control-lg example"/>
                <button onClick={searchQuery} id='searchBtn'><i className ="bi bi-search"></i></button>
            </div>
            <div id="item-list" className='row'>
                <div className='col '>
                <ul style={{listStyleType:'none'}} > 
                    {filteredBooks.map((book) => (
                        <li key={book._id}>
                        <Link to={`/details/${book._id}`} style={{ textDecoration: 'none' }}>
                            <div className="d-flex justify-content-center">
                                <img src={book.bookImage} width={'40px'} height={'60px'} className='mb-4'/>
                                <h3 className='text-white my-3 mx-4'>{book.bookTitle}</h3>
                            </div><hr/>
                        </Link>
                        </li>
                    ))}
                </ul>
                </div>
            </div>
        </div>
    </>
  );
}

export default Search;



