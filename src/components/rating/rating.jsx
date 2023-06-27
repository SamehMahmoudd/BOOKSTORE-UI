import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import './rating.css'

const StarRate = () => {
  const [rating, setRating] = useState(null);
  const [hoverFill, setHoverFill] = useState(null);
  const [isHover, setIsHover] = useState(null);

  //   const getReviewLabel = (rating) => {
  //     switch (rating) {
  //       case 1:
  //         return `Very bad ${String.fromCodePoint("0x1F922")}`;
  //       case 2:
  //         return `Bad ${String.fromCodePoint("0x1F97A")}`;
  //       case 3:
  //         return `Okay ${String.fromCodePoint("0x1F60C")}`;
  //       case 4:
  //         return `Good ${String.fromCodePoint("0x1F60A")}`;
  //       case 5:
  //         return `Excellent ${String.fromCodePoint("0x1F929")}`;

  //       default:
  //         return "";
  //     }
  //   };

  return (
    <div className="star-wrapper">
      <div className="star">
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;

          return (
            <button
              key={index}
              onMouseOver={() => setIsHover(ratingValue)}
              onMouseOut={() => setIsHover(null)}
              onMouseEnter={() => setHoverFill(ratingValue)}
              onMouseLeave={() => setHoverFill(null)}
              onClick={() => setRating(ratingValue)}>
              <FaStar
                className="FaStar"
                size={80}
                style={{ color: ratingValue <= (hoverFill || rating) ? "#900c3f" : "#ccc"}}
                onChange={(ratingValue) => setRating(ratingValue)}
                value={ratingValue}/>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StarRate;
