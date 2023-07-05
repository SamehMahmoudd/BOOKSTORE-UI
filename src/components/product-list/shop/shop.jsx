import React from 'react'
import Filter from '../filter-side/sidebar'
import Product from '../product/product'
import { NavLink } from 'react-router-dom'
import Sort from '../sort/sort'

const Shop = () => {
  return (
    <>
      <nav aria-label="breadcrumb" className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink to="/home" className="nav-link">HOME</NavLink>
          </li>
          <li className="breadcrumb-item">
            <a href="#">STORE</a>
            {/* <NavLink to="/category" className="nav-link">STORE</NavLink> */}
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
        <div className="row gx-lg-4">
          <Filter />
          
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 col-9 ms-2">
            <Sort/>
           
            {/* <Sort className='position-absolute top-0 end-0'/> */}
            <Product />
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop ;
