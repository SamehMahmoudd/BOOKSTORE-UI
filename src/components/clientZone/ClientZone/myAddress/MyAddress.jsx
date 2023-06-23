import React from 'react'
export default function MyAddress() {
    return (
        <div className="addresses   box-primary " >
            <div className="addresses-container">
                <div className="row addresses-list-container">
                    <div className="address-empty-msg text-center">
                        <h4>You still did not save an address</h4>
                        <span className='line'></span>
                    </div>
                </div>
                <div style={{height : '216px'}}></div>
                <div className="address-container-btn text-center">
                    <a href="#" className="add-address-btn  btn btn-lg btn-danger">
                    <i className="bi bi-plus-lg">&nbsp;</i>
                        Add New Address
                    </a>
                </div>
            </div>
        </div>
    )
}
