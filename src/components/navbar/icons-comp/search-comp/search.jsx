import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector } from 'react-redux'

import './../overlay.css';

function Search() {
    const books = useSelector((state) => state.books);
    //setInputValue(value) is called to update the inputValue with the new value.
    const [inputValue, setInputValue] = useState('');
    const [filteredBooks, setFilteredBooks] = useState(books);

    const handleInputChange  = (event) => {
        const value = event.target.value;
        setInputValue(value);
    };

    const searchQuery  = ()=>{
        const filtered  = books.filter((book) => book.title.toLowerCase().includes(inputValue.toLowerCase()));
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
                <input onChange={handleInputChange } value={inputValue} className="form-control form-control-lg rounded-start" type="text" placeholder="Search" aria-label=".form-control-lg example"/>
                <button onClick={searchQuery} id='searchBtn' className='rounded-end'><i className ="bi bi-search"></i></button>
            </div>
            <div id="item-list" className='row'>
                <div className='col d-flex  text-white'>
                    <ul>
                        {filteredBooks .map((book)=>(
                            <ol key={book.id}>
                                <h3>{book.title}</h3>
                            </ol>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </>
  );
}

export default Search;



