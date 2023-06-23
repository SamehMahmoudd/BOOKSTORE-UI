import "./payment.css"

function PaymentComponent() {
    return <>
    
    <div className="row " id="payment-page">
        <div className="col-12 col-md-12 d-flex  flex-column align-items-center justify-content-center ">
          <div className="text-center">
            <h1 style={{color: '#900c3f'}}>200ج.م</h1>
            <h5>Please choose your payment method</h5>
          </div>
          <div className="small" />
          <div className="payment-method">
            <div>
              <input type="radio" defaultChecked /> <span>Cash on Delivery</span>
            </div>
          </div>
          <div>
            <button className="btn btn-custom btn-lg  m-4" type="submit" id="place-order">PLACE ORDER</button>
          </div>
        </div>
      </div>
    
    </>
}

export default PaymentComponent;