import React from 'react'
import { useTranslation } from 'react-i18next';

export default function MyStore() {
    const {t} = useTranslation();
    return (
        <div className="orders box-primary ">
            <div className="orders-container">
                <div className="client-zone-orders">
                    <h3>{t('client-zone.store.title')}</h3>
                    <div className="client-zone-orders-rows">
                        <div className="client-zone-orders-rows">
                        </div>
                    </div>
                </div>
                <div className="client-zone-orders-loader" > 
                {/* <i className="svg-m s123-icon-converter fa-spin fa-4x" 
                data-icon-name="spinner" style=" mask: url('https://static1.s123-cdn-static-a.com/ready_uploads/svg/spinner.svg?v=2');
                 -webkit-mask: url('https://static1.s123-cdn-static-a.com/ready_uploads/svg/spinner.svg?v=2');" 
                 data-ie11-classes="fa-spin fa-4x" alt="spinner">
                    &nbsp;</i> */}
                </div>
            </div>
        </div>
    )
}
