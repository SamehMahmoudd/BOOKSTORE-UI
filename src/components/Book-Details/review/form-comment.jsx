import React from "react";
import { useState } from "react";
import {Rating} from "react-simple-star-rating";


function FormComment({addReview}) {
    const [name , setName] = useState('');
    const [message , setMessage] = useState('');
    const [rating , setRating] = useState(0);
    
    const handleRating = (rate) => {
        setRating(rate);
    }
    const formSubmit = (e) =>{
        e.preventDefault();
        const review = {
            id : 1 ,
            name ,
            message , 
            rating ,
        }
        console.log(review);
        addReview(review);
    }
    const isDisabled = () =>{
        if(!name || !message || !rating > 0){
            return true ;
        }
    }


  return (
    <>
    <form onSubmit={(e) => formSubmit(e)}>
        <div className="mb-3">
            <input type="text" className="form-control rounded" name="name" 
                placeholder="User Name"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
            />
        </div>
        <div>
            <textarea className="form-control rounded" name="message" rows="3" 
                value={message}
                onChange={(e)=>{setMessage(e.target.value)}}
                placeholder="Message">
            </textarea>
        </div>
        <div >
            <Rating
               size={"25px"}
               fillColor="#900c3f"
               onClick={handleRating}
               ratingValue={rating}/>
        </div>
        <div className="col-auto mt-3">
            <button type="submit" className="btn btn-primary mb-3" disabled={isDisabled()}>Submit</button>
        </div>
    </form>
        
    </>
  );
}

export default FormComment;