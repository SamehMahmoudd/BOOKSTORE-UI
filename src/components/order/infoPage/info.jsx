
import { useContext } from "react";
import { orderActivePageCntxt } from "../orderRoute";
import { Formik,ErrorMessage,Form,Field } from  "formik";
import { orderValidation } from "../../../ValidationSchema/orderValidation";
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

      const initialValues={
        email:'',
        fullName:'',
        country:'',
        address:'',
        city:'',
        phone:undefined,
        landmark:''

      }



    return <>
    
    <div className="row flex-column  flex-md-row" id="info-page">
        <div className="col-12 col-md-8 ">
          <Formik initialValues={initialValues} validationSchema={orderValidation} onSubmit={handleSubmit} >
          <Form id="info" >
            <Field type="email" name="email"    placeholder="Email *" className="form-control w-75 mb-3 p-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            <ErrorMessage name='email' component='p' className="text-danger"/>
            <Field type="text"  name="fullName" placeholder="Full Name *" className="form-control w-75 mb-3 p-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            <ErrorMessage name='fullName' component='p' className="text-danger"/>
            <Field type="text"  name="country"  placeholder="Country *" className="form-control w-75 mb-3 p-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            <ErrorMessage name='country' component='p' className="text-danger"/>
            <Field type="text"  name="address"  placeholder="Adress *" className="form-control w-75 mb-3 p-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            <ErrorMessage name='address' component='p' className="text-danger"/>
            <Field type="text"  name="city"     placeholder="City *" className="form-control w-75 mb-3 p-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            <ErrorMessage name='city' component='p' className="text-danger"/>
            <Field type="tel"   name="phone"    placeholder="Phone *" className="form-control w-75 mb-3 p-3 intl-tel-input " aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            <ErrorMessage name='phone' component='p' className="text-danger"/>
            <Field type="text"  name="landmark" placeholder="Landmard (optional)" className="form-control w-75 p-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            <ErrorMessage name='landmark' component='p' className="text-danger"/>
            <button className="btn btn-custom btn-lg mt-5 mb-4" type="submit"id="info-save" >SAVE AND CONTINUE</button>
          </Form>
          </Formik>
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