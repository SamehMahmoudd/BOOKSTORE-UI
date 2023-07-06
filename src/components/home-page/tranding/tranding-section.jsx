import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Tranding = () => {
  const books = useSelector((state) => state.books)

  return (
    <div id="trending">
      <div className="heading d-flex flex-column align-items-center" id="Trending">
        <div>
          <h1>Trending Now</h1>
        </div>
        <div className="small"></div>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mt-5">
          {books.slice(0, 4).map((book) => {
            return (
              <div className="col mb-5" key={book.id}>
                <div className="card h-100">
                  <img className="card-img-top" src={book.cover_image} style={{height:'350px'}}/>
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{book.title}</h5>
                      <p className="card-text">{book.price}.00$</p>
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <Link to={`/details/${book.id}`} className="btn btn-outline-dark mt-auto">View options</Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Tranding
