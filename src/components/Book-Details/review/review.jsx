import React from "react";
import ListReview from "./list-review";
import { useState } from "react";
import FormComment from "./form-comment";

function Review() {
    const [reviews,setReviews] = useState([]);

    const addReview = (review) =>{
        setReviews([review,...reviews]);
    }
  return (
    <>
    <div className="container">
        <div className="row" style={{width:"50%"}}>
            <div className="heading d-flex flex-column align-items-start">
                <div><h2>Reviews</h2></div><div className="small"></div>
            </div>
            <FormComment addReview={addReview}/>
            <ListReview reviews={reviews}/>
        </div>
    </div>
    </>
  );
}

export default Review;
