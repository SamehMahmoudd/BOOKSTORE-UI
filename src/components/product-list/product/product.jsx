import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Product = () => {
  const style = { boxShadow: '10px 10px 5px #aaaaaa' }

  const books = useSelector((state) => state.books)

  return (
    <>
      {books.map((book) => {
        return (
          <div className="col mb-5" key={book.id}>
            <div className="card h-100" style={style}>
              <img className="card-img-top" src={book.cover_image} alt="..." />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">{book.title}</h5>
                  <p className="card-text">{book.price}.00$</p>
                  <div>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <Link to={`/details/${book.id}`}>
                    <a className="btn btn-outline-dark mt-auto" target="_blank">
                      Quick View
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Product
