import { Link } from 'react-router-dom'
import './sideCart.css'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseBookQuantity, emptyCart, increaseBookQuantity, removeFromCart } from '../../store/reducers/cartSlice'
import Product from './../product-list/product/product';

function SideCart({ isCartOpen, handleClose }) {
  const cart = useSelector((state) => state.cart)
  const count = cart.reduce((total, product) => {
    return total + product.quantity
  }, 0)
  const dispatch = useDispatch()

  return (
    <>
      <div className='continer'>
        <div className = {`side-cart ${isCartOpen ? 'active' : ''}`} id="mySideCart">
          <header>
            <h3>Your cart</h3>
            <a id="closeBtn" onClick={() => { handleClose()}}>×</a>
          </header>
          <div className="side-cart-body">
            {count <= 0 ? (
              <div>
                <div className="empty-cart text-center">
                  <h4>Your shipping cart is empty</h4>
                </div>
              </div>
            ) : (
              <div className='card-product'>
              {cart.map((product)=>{
                return (
                  <div className="card mb-3" style={{maxWidth: "480px"}} key={product.book.id}>
                    <div className="row g-0" >
                      <div className="col-md-4">
                        <img  className="img-fluid rounded-start" src={product.book.cover_image} alt="cover_image"/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <div className='d-flex justify-content-between'>
                            <h3 className="card-title">{product.book.title}</h3>
                            <i className="bi bi-trash" onClick={() => {dispatch(removeFromCart(product))}}></i>
                            {/* <i className="bi bi-trash" onClick={() => {delete(product.book)}}></i> */}
                          </div>
                          <p className="card-text price">{Number(product.book.price) * product.quantity}.00 EGP</p>
                          <div className='countbtn'>
                            <button className='rounded-start' onClick={() => {dispatch(decreaseBookQuantity(product))}}><i className="bi bi-dash"></i></button>
                            <input type="text" readOnly value={product.quantity} className='border'/>
                            <button className='rounded-end' onClick={() => {dispatch(increaseBookQuantity(product))}}><i className="bi bi-plus"></i></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                );
              })}
                <div>
                  <p className='d-flex justify-content-between'>
                    <h6>Total : </h6>
                    <h6 onClick={() => {dispatch(emptyCart())}} style={{ color: 'blue' , cursor:'pointer'}}>EMPTY CART</h6>
                  </p>
                  <p className='fs-5' style={{ fontWeight: 'bolder'}}>
                    {cart.reduce((total, product) => {
                      return (
                        total + Number(product.book.price) * product.quantity
                      )
                    }, 0)}.00 EGP
                  </p>
                </div>
                <div>
                  <Link to={`/order`}>
                    <button className="btn btn-custom btn-lg w-100 m-3" id="orderBtn" onClick={() => { handleClose()}}>MAKE AN OREDER</button>
                  </Link>
                </div>
                <button className="btn btn-custom btn-lg w-100 m-3"id="continueBtn" onClick={() => { handleClose()}}> CONTINUE SHOPPING</button>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </>
  )
}

export default SideCart
