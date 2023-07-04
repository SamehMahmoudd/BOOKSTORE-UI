import "./payment.css"
import { PayPalButtons,PayPalScriptProvider } from "@paypal/react-paypal-js";

function PaymentComponent() {
    return <>
    
    <div className="row " id="payment-page">
        <div className="col-12 col-md-12 d-flex  flex-column align-items-center justify-content-between ">
          <div className="text-center">
            <h1 style={{color: '#900c3f'}}>200ج.م</h1>
            <h5>Please choose your payment method</h5>
          </div>
          <div className="small" />
          <form >
          <div className="payment-method">
            
            <div>
            <label >  <input type="checkbox" name='cash-delivery' value='cash-on-delivery' /> <span>Cash on Delivery</span> </label>  
            </div>
          </div>
          <div className='mt-3'>
            <PayPalScriptProvider 
            options={{'client-id':'AdtFaBF_2BB1gwNKmONqYfmYt57TdUFqNkJDAaQqq4qdj-CEJ2uCTagOqZfK3T_rZrCUA4iyt8SKA3kb'}}>
              <PayPalButtons  
              createOrder={(data, actions) => {
                    return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                      
                                        value: "200.00",
                                    },
                                },
                            ],
                        })
                       
                }}
                
                onApprove={(data,actions)=>{

                    return actions.order.capture().then(function(details){

                      alert('Transaction completed by ' + details.payer.name.given_name);

                    })

                }}  

                />
            </PayPalScriptProvider>
          </div>
          <div>
            <button className="btn btn-custom btn-lg  m-4" type="submit" id="place-order">PLACE ORDER</button>
          </div>
          </form>
        </div>
      </div>
    
    </>
}

export default PaymentComponent;