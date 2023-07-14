import { useState ,useContext, useEffect } from "react";
import "./order.css";
import InfoComponent from "./infoPage/info";
import DeliveryComponent from "./deliveryPage/delivery";
import PaymentComponent from "./paymentPage/payment";
import { orderActivePageCntxt } from "./orderRoute";
import { useSelector } from 'react-redux';
import axios from "axios";



function Order() {

  const cart = useSelector((state) => state.cart);
  let total=cart.reduce((total, product) => {
    return (
      total + Number(product.book.price) * product.quantity
    );
  }, 0);

  const [order,setOrder]=useState({
    info:{email:'',fullName:'',country:'',address:'',city:'',phone:undefined,landmark:undefined},
    address:'',

    totalPrice:total,
    status:'pending',
    items:[...cart]

  })
  
  function handlePayment(){

    if(total!==0){
    axios
      .post("http://localhost:3001/orders/", order, {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzUwMTAwMTM0Y2Y0NmE4NDRiMmRkZiIsImlhdCI6MTY4NTM4OTU5NH0.26zyfxpYchRego4180tU958pVPiIu1xM0W4ayxUbzQw",
        },
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    }

  }

  const {orderActivePage,updatePage}=useContext(orderActivePageCntxt)

  useEffect(()=>{

    console.log(cart);

  },[order])

  function handleActivePage(activePagee) {
    updatePage(activePagee);

  }

  return (
    <>
      <div className="heading d-flex flex-column align-items-center">
        <div>
          <h1>COMPLETE YOUR ORDER</h1>
        </div>
        <div className="small"></div>
      </div>

      <div className="content">
        <div className="container">
          <div className="row" id="content-nav">
            <div
              className={
                orderActivePage === "nav-info"
                  ? "col-4 d-flex align-items-center"
                  : "col-4 d-flex align-items-center in-active"
              }
              id="nav-info"
             
            >
              <i
                className={
                  orderActivePage === "nav-info"
                    ? "bi bi-1-square-fill page-num"
                    : "bi bi-1-square page-num"
                }
                style={{
                  fontSize: "2rem",
                  color: "#900c3f",
                  marginRight: "1rem",
                }}
              />
              <i
                className="bi bi-info-circle"
                style={{ paddingRight: "1rem" }}
              />
              <span className="nav-span">Enter your info</span>
            </div>

            <div
              className={
                orderActivePage === "nav-delivery"
                  ? "col-4 d-flex align-items-center"
                  : "col-4 d-flex align-items-center in-active"
              }
              id="nav-delivery"
             
            >
              <i
                className={
                  orderActivePage === "nav-delivery"
                    ? "bi bi-2-square-fill page-num"
                    : "bi bi-2-square page-num"
                }
                style={{
                  fontSize: "2rem",
                  color: "#900c3f",
                  marginRight: "1rem",
                }}
              />
              <i
                className="bi bi-truck"
                style={{ color: "#000000", paddingRight: "1rem" }}
              />
              <span className="nav-span">Delivery Options</span>
            </div>

            <div
              className={
                orderActivePage === "nav-payment"
                  ? "col-4 d-flex align-items-center"
                  : "col-4 d-flex align-items-center in-active"
              }
              id="nav-payment"
              
            >
              <i
                className={
                  orderActivePage === "nav-payment"
                    ? "bi bi-3-square-fill page-num"
                    : "bi bi-3-square page-num"
                }
                style={{
                  fontSize: "2rem",
                  color: "#900c3f",
                  marginRight: "1rem",
                }}
              />
              <i
                className="bi bi-credit-card"
                style={{ color: "#000000", paddingRight: "1rem" }}
              />
              <span className="nav-span">Payment</span>
            </div>
          </div>


              {orderActivePage==='nav-info'     &&  <InfoComponent order={order} updatingOrder={setOrder} /> }
              {orderActivePage==='nav-delivery' &&  <DeliveryComponent order={order} updatingOrder={setOrder}/> }
              {orderActivePage==='nav-payment'  &&  <PaymentComponent payment={handlePayment}/> }

        </div>
      </div>
    </>
  );
}

export default Order;
