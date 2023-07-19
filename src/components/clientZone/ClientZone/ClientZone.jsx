import React, { useContext, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import "../../clientZone/App.css";
import { ClientActivePageCntxt } from "../../clientZone/CLientZoneRouter";
import Profile from "./profile/Profile";
import MyAddress from "./myAddress/MyAddress";
import MyStore from "./myStore/MyStore";

import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import ClientzoneRegister from "../ClientZoneRegister/Clientzone-Login";
function ClientZone({ profile }) {
  const navigate = useNavigate();
  const [loading, setLogding] = useState("");
  const [user, setUser] = useState("");
  console.log(setUser);

  const handleLogout = async () => {
    try {
      navigate("/login");
      localStorage.clear();
      console.log("successfully logged out");
    } catch (err) {
      console.log(err);
    }
  };
  const { clientActivePage, updatePage } = useContext(ClientActivePageCntxt);

  function handleActivePage(activePage) {
    updatePage(activePage);
  }
  return (
    <div className=" container page-header noBackground">

      <div>
        {loading ? (
          <Spinner
            animation="border"
            role="status"
            className="container d-flex align-items-center justify-content-center"
          >
            <span className="visually-hidden ">Loading...</span>
          </Spinner>
        ) : (
          <div className="row mb-5">
            <div className="col-xs-12 col-sm-12 col-md-4">
              <div className=" clientZoneProfileImage box-primary box-text-primary text-center">
                <div
                  className="profile-image "
                  style={{ position: "relative" }}
                >
                  <img
                    className="prof-image"
                    id="profileImagePreview"
                    src={
                      profile
                        ? `${""}`
                        : `https://cdn-cms-s.f-static.net/versions/2/wizard/clientZone/images/noImage.png`
                    }
                    data-src="https://cdn-cms-s.f-static.net/versions/2/wizard/clientZone/images/noImage.png"
                  />
                  <div className="s123-uploader">
                    <div className="s123-u-upload-btn">
                      <i
                        className="bi bi-camera hidden"
                        data-icon-name="camera"
                        style={{}}
                        alt="camera"
                      >
                        &nbsp;
                      </i>
                    </div>
                    <div
                      className="s123-u-loading-icon"
                      style={{ display: "none" }}
                    >
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </div>
                  </div>
                  <form className="client" action="#">
                    <div className=" ps-5">
                      <input
                        type="file"
                        name="upload_profile_image"
                        accept="image/*"
                        className="form-control hidden"
                      />
                    </div>
                  </form>
                </div>

                <div className="clientemail">
                  <span className="email fw-bold d-block mb-2">{""}</span>
                  <i
                    class="bi-box-arrow-in-right fw-bold  logoutBtn border  p-2"
                    onClick={handleLogout}
                  >
                    &nbsp; logout
                  </i>
                </div>
              </div>
              <select
                id="clientZone-select-tabs"
                className="form-control hidden-xs visible-xs "
                style={{ display: "none", marginBottom: "20px" }}
              >
                <option value="profile">Profile </option>
                <option value="addresses">My Addresses</option>
              </select>
              <div
                id="clientZone-menu-tabs"
                className="box-primary clientZoneTabs mb-3"
              >
                <div
                  data-tab="profile"
                  className={
                    clientActivePage === "profile"
                      ? "col-xs-12 tab client-zone-box-border active "
                      : "col-xs-12 tab client-zone-box-border "
                  }
                  onClick={() => {
                    handleActivePage("profile");
                  }}
                >
                  <div className="icon-container">
                    <i class="bi-person-fill icons">&nbsp;</i>
                    <span>Profile</span>
                  </div>
                </div>
                <div
                  data-tab="address"
                  className={
                    clientActivePage === "address"
                      ? "col-xs-12 tab client-zone-box-border active "
                      : "col-xs-12 tab client-zone-box-border "
                  }
                  onClick={() => {
                    handleActivePage("address");
                  }}
                >
                  <div className="icon-container">
                    <i class="bi-houses-fill">&nbsp;</i>
                    <span>My Addresses</span>
                  </div>
                </div>
                <div
                  data-tab="Store"
                  className={
                    clientActivePage === "Store"
                      ? "col-xs-12 tab client-zone-box-border active "
                      : "col-xs-12 tab client-zone-box-border "
                  }
                  onClick={() => {
                    handleActivePage("Store");
                  }}
                >
                  <div className="icon-container">
                    <i class="bi-google-play icons">&nbsp;</i>
                    <span>My Store</span>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8">
              {clientActivePage === "profile" && <Profile />}
              {clientActivePage === "address" && <MyAddress />}
              {clientActivePage === "Store" && <MyStore />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClientZone;
