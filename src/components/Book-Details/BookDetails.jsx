import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import './BookDetails.css'
import { addToCart } from '../../store/reducers/cartSlice'
import Related from './related-section'

export default function BookDetails() {
  const { id } = useParams()

  const book = useSelector((state) =>
    state.books.find((book) => book.id === +id)
  )

  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  /// handle -> zoom in & zoom out
  const handleZoom = (e) => {
    const zoomer = e.currentTarget ;
    const offsetX = e.nativeEvent.offsetX ? e.nativeEvent.offsetX : e.touches[0].pageX ;
    const offsetY = e.nativeEvent.offsetY ? e.nativeEvent.offsetY : e.touches[0].pageY ;
    const x = (offsetX / zoomer.offsetWidth) * 100 ;
    const y = (offsetY / zoomer.offsetHeight) * 100 ;
    zoomer.style.backgroundPosition = `${x}% ${y}%`
  }

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
          <li className="breadcrumb-item">
            <a href="#">NOVELS & ADULTS FICTION</a>
            {/* <NavLink to="/store" className="nav-link">FANTASY</NavLink> */}
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {book?.title}
          </li>
        </ol>
      </nav>
      
      <div className="container">
        <section>
          <div className="container pt-2">
            <div className="row text-center">
              <div className="heading d-flex flex-column align-items-center mb-1">
                <div>
                  <h1>{book?.title}</h1>
                </div>
                <div className="small"></div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container  my-5">
            <div className="row  gx-lg-5 ">
              <div className="col-md-4">
                <div className="zoom " onMouseMove={(e) => handleZoom(e)}
                  style={{ borderRadius: '12px', backgroundImage: `url(${book?.cover_image})`}}>
                  <img className="card-img-top mb-md-0" src={book?.cover_image} alt="Book Cover"/>
                </div>
              </div>
              <div className="col-md-8"><br /><br/>
                <div className="fs-5 d-flex flex-column mb-3">
                  <span className="text-decoration-line-through p-2">{book?.price2}.00</span>
                  <span className="price">{book?.price}.00 EGP</span>
                </div>
                <div>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                  <i className="bi bi-star"></i>
                </div><br/>
                <ul className="list-unstyled">
                  <li>
                    <span>Pages : {book?.pages}</span>
                  </li>
                  <li>
                    <span>Category : Horror Story </span>
                  </li>
                  <li>
                    <span>Publication : {book?.releaseDate}</span>
                  </li>
                  <li>
                    {/* <span>Brand :</span> <a href="#">محمد صلاح</a> */}
                  </li>
                  <li>
                    <span>SKU :</span>
                    <span id="productSku" data-sku="9789778616187">9789778616187</span>
                  </li>
                  <li
                    id="productShipping"
                    data-unique-id="63131a99c06d4"
                    data-weight="kg"
                    data-length="cm">
                    <div className="product-shipping-content">
                      <span className="shipping-title">Shipping : </span>
                      <span className="first-option">
                        Shipping Cairo - Giza (3 Working Days)
                      </span>
                    </div>
                  </li>
                  <li id="returnPolicyInfo">
                    <div className="return-policy-content">
                      <span className="return-policy-title">
                        Return Policy :
                      </span><br/>
                      <span className="product-return-policy" data-more="1">
                        - No returns or Exchange for Books & Printed Materials
                        as per Egyptian Law <br/>
                        - For Non Books Items: return to
                        store within 14 days in its same condition and package
                      </span>
                    </div>
                    <hr />
                  </li>
                </ul>
                <div className="d-flex">
                  <div className="input-container">
                    <button
                      onClick={() => { setQuantity((quantity) => quantity - 1)}}
                      className={`rounded-start ${quantity <= 0 ? 'disabled' : ''}`}
                      disabled={quantity <= 0}>
                      -
                    </button>
                    <input type="text" readOnly value={quantity} />
                    <button
                      onClick={() => {setQuantity((q) => q + 1)}}
                      className="rounded-end">
                      +
                    </button>
                  </div>
                  <button
                    className="py-0 ml-3 btn btn-outline-danger flex-shrink-0 icon"
                    type="button"
                    onClick={() => { dispatch(addToCart({ book, quantity }))}}>
                    <i className="bi-cart-fill "></i> Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="col-xs-12">
            <div className="heading d-flex flex-column align-items-center mb-5">
              <div>
                <h1>Learn More</h1>
              </div>
              <div className="small"></div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                {/* Description tab content */}
                <div className="container p-0 d-flex align-items-center justify-content-center">
                  <p style={{textAlign: 'justify', paddingTop: '10px', borderRadius: '5px',color: 'gray',}}>
                    <strong>{book?.detailes}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Related Product */}
        <section className="py-5 ">
          <div className="heading d-flex flex-column align-items-center mb-5">
            <div>
              <h1>Related Product</h1>
            </div>
            <div className="small"></div>
          </div>
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 justify-content-center h-100">
              {/* <Product /> */}
              <Related/>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
