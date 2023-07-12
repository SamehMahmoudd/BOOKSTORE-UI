import { useContext ,useState} from "react"
import "./delivery.css"
import { orderActivePageCntxt } from "../orderRoute"
import { Formik,ErrorMessage,Form,Field } from  "formik";
import * as yup from "yup";
import { useTranslation } from 'react-i18next';


function DeliveryComponent() {

  const { t } = useTranslation();
  /////////////////////////////////////////////////
  const {updatePage}=useContext(orderActivePageCntxt)
  const [optionSelected,setOptionSelected]=useState(false)

    function handleSubmit(evnt){
      console.log(evnt);
      updatePage('nav-payment')
    };

    const validationSchema = yup.object().shape({
      dOption: yup.string().required('Please select a delivery option !'),
    });

    return <>
      <div className="row flex-column flex-md-row mx-3" id="delivery-page">
      <div className="col-12 col-md-8">

        <Formik initialValues={{dOption:''}} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form id="delivery-options" >
          <div className="d-flex justify-content-between"> <label>
            <Field type="radio" name="dOption" value='cairo'/><span> {t('order.delivery-sec.cairo')}</span>
            <span>{t('order.delivery-sec.num-day')}</span> </label>
            <span>{t('order.delivery-sec.p1')}</span>
            </div>
            <div className="d-flex justify-content-between"><label>
              <Field type="radio" name="dOption" value='alex'/><span> {t('order.delivery-sec.alex')}</span>
              <span>{t('order.delivery-sec.num-day')}</span> </label>
              <span>{t('order.delivery-sec.p2')}</span>
            </div>
            <div className="d-flex justify-content-between"> <label>
              <Field type="radio" name="dOption" value='canal'/><span> {t('order.delivery-sec.canal')}</span>
              <span>{t('order.delivery-sec.num-day')}</span> </label>
              <span >{t('order.delivery-sec.p3')}</span>
            </div>
            <div className="d-flex justify-content-between"> <label>
              <Field type="radio" name="dOption" value='upper-egypt'/><span> {t('order.delivery-sec.upper-eg')}</span>
              <span>{t('order.delivery-sec.num-day')}</span> </label>
              <span >{t('order.delivery-sec.p4')}</span>
            </div>
            <div className="d-flex justify-content-between"> <label>
              <Field type="radio" name="dOption"  value='sinai'/><span> {t('order.delivery-sec.sina')}</span>
              <span>{t('order.delivery-sec.num-day')}</span> </label>
              <span>{t('order.delivery-sec.p5')}</span>
            </div>
            <div className="d-flex justify-content-between"> <label>
              <Field type="radio" name="dOption" value='delta' /><span> {t('order.delivery-sec.delta')}</span>
              <span>{t('order.delivery-sec.num-day')}</span> </label>
              <span>{t('order.delivery-sec.p6')}</span>
            </div>
            <ErrorMessage name="dOption" component={'p'} className="text-danger"/>
            <button className="btn btn-custom btn-lg mb-5" type="submit" id="delivery-save">{t('order.delivery-sec.btn')}</button>
          </Form>
          </Formik>
        </div>
        <div className="col-12 col-md-4">
          <div className="card d-flex flex-row mt-3 order-details">
            <img src="/assets/images/book.png" className="card-img-top w-50 h-50" />
            <div className="card-body">
              <h5>The power of now-Eckhart Tolle</h5>
              <span>{t('order.delivery-sec.quan')} : 1</span>
              <h5 style={{color: '#900c3f'}}>200 {t('product-details.p-egp')}</h5>
            </div>
          </div>
          <div className="row m-5 " id="total">
            <div className="col-6">
              <h5>{t('order.delivery-sec.total')} : </h5>
            </div>
            <div className="col-6" id="total-price">
              <h5 style={{color: '#900c3f'}}>200 {t('product-details.p-egp')}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
}

export default DeliveryComponent;