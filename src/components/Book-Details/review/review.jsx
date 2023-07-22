import React from "react";
import ListReview from "./list-review";
import { useState } from "react";
import FormComment from "./form-comment";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "../../../config/axiosConfig";

function Review() {
  const { t } = useTranslation();
  ////////////////////////////////////////////
  const { id } = useParams();
  const book = useSelector((state) => state.books.books.find((book) => book._id === id));
  const [bookReviews, setReviews] = useState([]);


  const addReview = (review) => {
    axios.post(`/review/book/${book._id}`, review).then((data) => {
      console.log(data.data.review);
      setReviews([review, ...bookReviews]);
    }).catch((err) => {
      console.log(err);
    });
    console.log(review);
  };
  console.log(book.bookReviews);

  return (
    <>
      <div className="container">
        <div className="row" style={{ width: "50%" }}>
          <div className="heading d-flex flex-column align-items-start">
            <div>
              <h2>{t("review.title")}</h2>
            </div><div className="small"></div>
          </div>
          <FormComment addReview={addReview} />
          <ListReview reviews={book.bookReviews}/>
        </div>
      </div>
    </>
  );
}

export default Review;
