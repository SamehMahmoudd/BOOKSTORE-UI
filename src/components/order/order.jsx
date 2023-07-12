import { useState ,useContext } from "react";
import "./order.css";
import InfoComponent from "./infoPage/info";
import DeliveryComponent from "./deliveryPage/delivery";
import PaymentComponent from "./paymentPage/payment";
import { orderActivePageCntxt } from "./orderRoute";
import { useTranslation } from 'react-i18next';


function Order() {

  const { t } = useTranslation();
  /////////////////////////////////////////
  const {orderActivePage,updatePage}=useContext(orderActivePageCntxt)
  const [formData,setFormData]=useState({email:'',fullName:'',country:'',address:'',city:'',phone:undefined,landmark:undefined})
  function handleActivePage(activePagee) {
    updatePage(activePagee);

  }

  return (
    <>
      <div className="heading d-flex flex-column align-items-center">
        <div>
          <h1>{t('order.title')}</h1>
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
              onClick={() => {
                handleActivePage("nav-info");
              }}
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
                  margin: "0 1rem",
                }}
              />
              <i
                className="bi bi-info-circle"
                style={{ paddingRight: "1rem" }}
              />
              <span className="nav-span mx-3">{t('order.info')}</span>
            </div>

            <div
              className={
                orderActivePage === "nav-delivery"
                  ? "col-4 d-flex align-items-center"
                  : "col-4 d-flex align-items-center in-active"
              }
              id="nav-delivery"
              onClick={() => {
                handleActivePage("nav-delivery");
              }}
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
                  margin: "0 1rem",
                }}
              />
              <i
                className="bi bi-truck"
                style={{ color: "#000000", paddingRight: "1rem" }}
              />
              <span className="nav-span mx-3">{t('order.delivery')}</span>
            </div>

            <div
              className={
                orderActivePage === "nav-payment"
                  ? "col-4 d-flex align-items-center"
                  : "col-4 d-flex align-items-center in-active"
              }
              id="nav-payment"
              onClick={() => {
                handleActivePage("nav-payment");
              }}
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
                  margin: "0 1rem",
                }}
              />
              <i
                className="bi bi-credit-card"
                style={{ color: "#000000", paddingRight: "1rem" }}
              />
              <span className="nav-span mx-3">{t('order.payment')}</span>
            </div>
          </div>
          {orderActivePage==='nav-info' &&    <InfoComponent data={formData} updatingData={setFormData} /> }
          {orderActivePage==='nav-delivery' &&  <DeliveryComponent/> }
          {orderActivePage==='nav-payment' &&  <PaymentComponent/> }
        </div>
      </div>
    </>
  );
}

export default Order;
