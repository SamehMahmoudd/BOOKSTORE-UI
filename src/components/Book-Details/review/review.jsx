import React from "react";
import ListReview from "./list-review";
import { useState } from "react";
import FormComment from "./form-comment";
import { useTranslation } from 'react-i18next';

function Review() {

    const { t } = useTranslation();
    ////////////////////////////////////////////
    const [reviews,setReviews] = useState([]);
    const addReview = (review) =>{
        setReviews([review,...reviews]);
    }
  return (
    <>
    <div className="container">
        <div className="row" style={{width:"50%"}}>
            <div className="heading d-flex flex-column align-items-start">
                <div><h2>{t('review.title')}</h2></div><div className="small"></div>
            </div>
            <FormComment addReview={addReview}/>
            <ListReview reviews={reviews}/>
        </div>
    </div>
    </>
  );
}

export default Review;
