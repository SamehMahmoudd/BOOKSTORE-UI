import React from 'react'
import Filter from '../filter-side/sidebar'
import Product from '../product/product'

const Shop = () => {
  return (
    <>
      <nav aria-label="breadcrumb" className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">HOME</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">STORE</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            NOVELS & ADULTS FICTION
          </li>
        </ol>
      </nav>

      <div className="heading d-flex flex-column align-items-center mb-5">
        <div>
          <h1>NOVELS & ADULTS FICTION</h1>
        </div>
        <div className="small"></div>
      </div>

      <div className="container text-center">
        <div className="row">
          <Filter />
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 col-9 ms-2">
            <Product />
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop
