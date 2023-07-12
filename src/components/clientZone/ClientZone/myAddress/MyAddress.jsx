import React from 'react'
import { useTranslation } from 'react-i18next'


export default function MyAddress() {
    const {t} = useTranslation();

    return (
        <div className="addresses   box-primary " >
            <div className="addresses-container">
                <div className="row addresses-list-container">
                    <div className="address-empty-msg text-center">
                        <h4>{t('client-zone.myaddress.address.empty-title')}</h4>
                        <span className='line'></span>
                    </div>
                </div>
                <div style={{height : '216px'}}></div>
                <div className="address-container-btn text-center">
                    <a href="#" className="add-address-btn  btn btn-lg btn-danger">
                    <i className="bi bi-plus-lg">&nbsp;</i>
                        {t('client-zone.myaddress.address.btn-add')}
                    </a>
                </div>
            </div>
        </div>
    )
}
