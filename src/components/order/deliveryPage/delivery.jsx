import { useContext ,useState} from "react"
import "./delivery.css"
import { orderActivePageCntxt } from "../orderRoute"
import { Formik,ErrorMessage,Form,Field } from  "formik";
import * as yup from "yup";
import { useSelector } from "react-redux";


function DeliveryComponent(props) {
  const {updatePage}=useContext(orderActivePageCntxt)
  const cart = useSelector((state) => state.cart);
  const [optionSelected,setOptionSelected]=useState(false)

    function handleSubmit(evnt){


      props.updatingOrder({...props.order,  address:evnt.dOption })
        console.log(evnt);
       updatePage('nav-payment')

    }

    const validationSchema = yup.object().shape({
      dOption: yup.string().required('Please select a delivery option !'),
    });

    return <>
    <div className="row flex-column  flex-md-row" id="delivery-page">
        <div className="col-12 col-md-8 ">

            <Formik initialValues={{dOption:''}} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form id="delivery-options" >
            <div> <label>
                <Field type="radio" name="dOption" value='cairo'  /><span>Shipping Cairo-Giza</span>
                &nbsp;
                <span>(5 working days)</span> </label>
              <span style={{float: 'right'}}>45 EGP</span>
            </div>
            <div>
              <label>
                <Field type="radio" name="dOption" value='alex' /><span>Shipping Alexandria</span>
                &nbsp;
                <span>(5 working days)</span> </label>
              <span style={{float: 'right'}}>60 EGP</span>
            </div>
            <div> <label>
                <Field type="radio" name="dOption" value='canal' /><span>Shipping Canal Cities</span>
                &nbsp;
                <span>(5 working days)</span> </label>
              <span style={{float: 'right'}}>65 EGP</span>
            </div>
            <div> <label>
                <Field type="radio" name="dOption" value='upper-egypt' /><span>Shipping Upper Egypt</span>
                &nbsp;
                <span>(5 working days)</span> </label>
              <span style={{float: 'right'}}>90 EGP</span>
            </div>
            <div> <label>
                <Field type="radio" name="dOption"  value='sinai' /><span>Shipping Sinai and Red Sea</span>
                &nbsp;
                <span>(5 working days)</span> </label>
              <span style={{float: 'right'}}>10 EGP</span>
            </div>
            <div> <label>
                <Field type="radio" name="dOption" value='delta' /><span>Shipping Delta Region</span>
                &nbsp;
                <span>(5 working days)</span> </label>
              <span style={{float: 'right'}}>60 EGP</span>
            </div>
              <ErrorMessage name="dOption" component={'p'} className="text-danger"/>
            <button className="btn btn-custom btn-lg m-2" type="submit" id="delivery-save">SAVE AND CONTINUE</button>
          </Form>
          </Formik>
        </div>
        <div className="col-12 col-md-4" >
          <div id="order-container-delivery">
        {cart.map((product) => {
          return (
            
              <div
                className="card d-flex flex-row mt-3 order-details h-25"
                key={product.book.id}
              >
                <img
                  src={product.book.cover_image}
                  className="card-img-top w-50"
                  style={{objectFit:"contain" , height:'100%'}}
                />
                <div className="card-body">
                  <h5>{product.book.title}</h5>
                  <span>Quantity:{product.quantity}</span>
                  <h5 style={{ color: "#900c3f" }}>
                    {Number(product.book.price) * product.quantity}.00 EGP
                  </h5>
                </div>
              </div>
            
           
          );
        })}
        </div>
        <div className="row m-5 " id="total">
                <div className="col-4">
                  <h5>Total:</h5>
                </div>
                <div className="col-8" id="total-price">
                  <h5 style={{ color: "#900c3f" }}>
                    
                    {cart.reduce((total, product) => {
                      return (
                        total + Number(product.book.price) * product.quantity
                      );
                    }, 0)}.00 EGP
                    
                  </h5>
                </div>
              </div>
      </div>
      </div>
    </>
}

export default DeliveryComponent;