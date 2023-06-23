
import { useContext } from "react";
import { orderActivePageCntxt } from "../orderRoute";
import "./info.css";

function InfoComponent(props) {
  const {updatePage}=useContext(orderActivePageCntxt)
    function handleSubmit(evnt){
      evnt.preventDefault()

      updatePage('nav-delivery')

    }

    function handleFormData (eve){
      const { name, value } = eve.target;
      props.updatingData({...props.data,[name]:value })
      console.log(props.data);
      
          
    }
    return <>
    
    <div className="row flex-column  flex-md-row" id="info-page">
        <div className="col-12 col-md-8 ">
          <form id="info" onSubmit={(evnt)=>{handleSubmit(evnt)}}>
            <input type="email" name="email"  onChange={(eve)=>{handleFormData(eve)}}value={props.data.email  }  placeholder="Email *" className="form-control w-75 mb-3 p-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required data-msg-required="This field is required." />
            <input type="text"  onChange={(eve)=>{handleFormData(eve)}} value={props.data.fullName}  name="fullName" placeholder="Full Name *" className="form-control w-75 mb-3 p-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required data-msg-required="This field is required." />
            <input type="text" onChange={(eve)=>{handleFormData(eve)}} value={props.data.country} name="country" placeholder="Country *" className="form-control w-75 mb-3 p-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required data-msg-required="This field is required." />
            <input type="text" onChange={(eve)=>{handleFormData(eve)}} value={props.data.address} name="address" placeholder="Adress *" className="form-control w-75 mb-3 p-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required data-msg-required="This field is required." />
            <input type="text" onChange={(eve)=>{handleFormData(eve)}} value={props.data.city} name="city" placeholder="City *" className="form-control w-75 mb-3 p-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required data-msg-required="This field is required." />
            <input type="tel" onChange={(eve)=>{handleFormData(eve)}} value={props.data.phone} name="phone" placeholder="Phone *" className="form-control w-75 mb-3 p-3 intl-tel-input " aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required data-msg-required="This field is required." />
            <input type="text" onChange={(eve)=>{handleFormData(eve)}} value={props.data.landmark} name="landmark" placeholder="Landmard (optional)" className="form-control w-75 mb-5 p-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required data-msg-required="This field is required." />
            <button className="btn btn-custom btn-lg mb-5" type="submit"id="info-save" >SAVE AND CONTINUE</button>
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

export default InfoComponent;