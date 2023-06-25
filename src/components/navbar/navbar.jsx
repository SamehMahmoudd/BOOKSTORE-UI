import React, { useState } from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom'
import SideCart from './../sideCart/sideCart'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const counter = useSelector((state) =>
    state.cart.reduce((total, product) => {
      return total + product.quantity
    }, 0)
  )

  function openCart() {
    setIsCartOpen(true)
  }

  function closeCart() {
    setIsCartOpen(false)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light px-4">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarNavDropdown" 
            aria-controls="navbarNavDropdown"
            aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="index.html">
            <img src="/assets/img/nav_img.png" alt="..." height="70" />
          </a>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link">HOME</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/store" className="nav-link">STORE</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/tranding" className="nav-link">TRENDING NOW</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">ABOUT</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">CONTACT</NavLink>
              </li>
              <div id="navy">
                <ul className="navbar-nav d-flex align-content-center flex-wrap">
                  <ul className="navbar-nav">
                    <li>
                      <a className="nav-link text-dark h5" href="#"><i className="bi bi-arrow-up-right-circle-fill"></i></a>
                    </li>
                    <li>
                      <NavLink to="/share" className="nav-link">
                        <i className="bi bi-share-fill"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/search" className="nav-link">
                      <i className="bi bi-search"></i>
                      </NavLink>
                    </li>
                    <li onClick={() => {openCart()}} style={{ position: 'relative' }}>
                        <span class="badge rounded-pill position-absolute top-0 start-60 translate-middle">{counter}</span>
                        <a className="nav-link text-dark h5" href="#">
                          <i className="bi bi-cart-fill"></i>
                        </a>
                    </li>
                    <li>
                      <NavLink to="/call" className="nav-link">
                        <i className="bi bi-telephone-fill"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/clientZone" className="nav-link">
                        <i className="bi bi-person-fill"></i>
                      </NavLink>
                    </li>
                  </ul>
                </ul>
              </div>
            </ul>
          </div>
      </div>
    </nav>
    
      <div>
        <div
          onClick={() => {
            closeCart()
          }}
          className={`sidebar-overlay ${isCartOpen ? 'active' : ''}`}
        ></div>
        <SideCart isCartOpen={isCartOpen} handleClose={closeCart} />
      </div>
    </>
  )
}

export default Navbar
