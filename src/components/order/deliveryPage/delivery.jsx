import { useContext } from "react"
import "./delivery.css"
import { orderActivePageCntxt } from "../orderRoute"


function DeliveryComponent() {
  const {updatePage}=useContext(orderActivePageCntxt)

    function handleSubmit(evnt){
      evnt.preventDefault()

      updatePage('nav-payment')

    }
    return <>
    <div className="row flex-column  flex-md-row" id="delivery-page">
        <div className="col-12 col-md-8 ">
          <form id="delivery-options" onSubmit={(evnt)=>{handleSubmit(evnt)}}>
            <div> <label>
                <input type="radio" name="d-option" /><span>Shipping Cairo-Giza</span>
                &nbsp;
                <span>(5 working days)</span> </label>
              <span style={{float: 'right'}}>45 EGP</span>
            </div>
            <div>
              <label>
                <input type="radio" name="d-option" /><span>Shipping Alexandria</span>
                &nbsp;
                <span>(5 working days)</span> </label>
              <span style={{float: 'right'}}>60 EGP</span>
            </div>
            <div> <label>
                <input type="radio" name="d-option" /><span>Shipping Canal Cities</span>
                &nbsp;
                <span>(5 working days)</span> </label>
              <span style={{float: 'right'}}>65 EGP</span>
            </div>
            <div> <label>
                <input type="radio" name="d-option" /><span>Shipping Upper Egypt</span>
                &nbsp;
                <span>(5 working days)</span> </label>
              <span style={{float: 'right'}}>90 EGP</span>
            </div>
            <div> <label>
                <input type="radio" name="d-option" /><span>Shipping Sinai and Red Sea</span>
                &nbsp;
                <span>(5 working days)</span> </label>
              <span style={{float: 'right'}}>10 EGP</span>
            </div>
            <div> <label>
                <input type="radio" name="d-option" /><span>Shipping Delta Region</span>
                &nbsp;
                <span>(5 working days)</span> </label>
              <span style={{float: 'right'}}>60 EGP</span>
            </div>
            <button className="btn btn-custom btn-lg m-2" type="submit" id="delivery-save">SAVE AND CONTINUE</button>
          </form>
        </div>
        <div className="col-12 col-md-4">
          <div className="card d-flex flex-row mt-3 order-details">
            <img src="/assets/images/book.png" className="card-img-top w-50 h-50" />
            <div className="card-body">
              <h5>The power of now-Eckhart Tolle</h5>
              <span>Quantity:1</span>
              <h5 style={{color: '#900c3f'}}>200 EGP</h5>
            </div>
          </div>
          <div className="row m-5 " id="total">
            <div className="col-6">
              <h5>Total:</h5>
            </div>
            <div className="col-6" id="total-price">
              <h5 style={{color: '#900c3f'}}>200 EGP</h5>
            </div>
          </div>
        </div>
      </div>
    </>
}

export default DeliveryComponent;