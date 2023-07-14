import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StarRate from "../rating/rating";
import { useTranslation } from 'react-i18next';

const Related = () => {

  const { t } = useTranslation();

  const style = { boxShadow: "10px 10px 5px #aaaaaa" };
  const books = useSelector((state) => state.books);

  return (
    <>
      {books.slice(0, 4).map((book) => {
        return (
          <div className="col mb-5" key={book.id}>
            <div className="card h-100" style={style}>
              <img className="card-img-top" src={book.cover_image} style={{height:'350px'}} />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">{book.title}</h5>
                  <p className="card-text">{book.price}.00$</p>
                  <div>
                    <StarRate/>
                  </div>
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <Link to={`/details/${book.id}`} className="btn btn-outline-dark mt-auto">{t('product-list.product.btn')}</Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Related;
