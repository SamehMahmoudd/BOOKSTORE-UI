import React from "react";
import { useState } from "react";
import AddNewAddress from "./addNewAddress";
export default function MyAddress() {
  const [showaddress, setShowAddress] = useState(false);

  return (
    <div className="addresses box-primary ">
      {!showaddress ? (
        <div className="addresses-container">
          <div className="row addresses-list-container">
            <div className="address-empty-msg text-center">
              <h4>You still did not save an address</h4>
              <span className="line"></span>
            </div>
          </div>
          <div style={{ height: "216px" }}></div>
          <div className="address-container-btn text-center btn-danger">
            <button
              onClick={() => setShowAddress(true)}
              className="add-address-btn btn btn-lg text-white  "
            >
              <i className="bi bi-plus-lg ">&nbsp;</i>
              Add New Address
            </button>
          </div>
        </div>
      ) : (
        <AddNewAddress
          isVisable={showaddress}
          onClose={() => setShowAddress(false)}
        />
      )}
    </div>
  );
}
