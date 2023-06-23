import React ,{useContext}from 'react';
import '../../clientZone/App.css'
import { ClientActivePageCntxt } from "../../clientZone/CLientZoneRouter";
import Profile from "./profile/Profile";
import MyAddress from "./myAddress/MyAddress";
import MyStore from "./myStore/MyStore";

function ClientZone() {
  // const loader = useSelector((state) => state.loader)

  const {clientActivePage,updatePage}=useContext(ClientActivePageCntxt)

  function handleActivePage(activePage) {
    updatePage(activePage);
  }
  return (
    <div className=" container page-header noBackground">
      <div className="row">
        <div className="container modulesTitleContainer">
          <div className="row modulesTitle text-center pt-4 ">
            <div className="page-header-wrap">
              <h2 className="mb-3">CLIENT ZONE</h2>
              <span className="hr m-auto mb-5 "></span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row mb-5">
          <div className="col-xs-12 col-sm-12 col-md-4">
            <div className=" clientZoneProfileImage box-primary box-text-primary text-center" >
              <div className="profile-image " style={{ position: 'relative' }}>
                <img id="profileImagePreview" src="https://cdn-cms-s.f-static.net/versions/2/wizard/clientZone/images/noImage.png" data-src="https://cdn-cms-s.f-static.net/versions/2/wizard/clientZone/images/noImage.png"
                  style={{opacity: 1, width: '100px', height: '100px',textAlign:'center' }} />
                <div className="s123-uploader">
                  <div className="s123-u-upload-btn"><i data-icon-name="camera" className="svg-m s123-icon-converter hidden" style={{}} alt="camera">&nbsp;</i>
                  </div>
                  <div className="s123-u-loading-icon" style={{ display: 'none' }}>
                    <i data-icon-name="spinner" className="svg-m ace-icon fa-spin blue fa-4x s123-icon-converter" style={{}} alt="spinner">&nbsp;</i>
                  </div>
                </div>
                <form className='client' action="#" method=''>
                  <div className="form-group">
                    <input type="file" name="upload_profile_image" accept="image/*" className="form-control hidden" />
                  </div>
                </form>
              </div>
              <div>
                <span className="email fw-bold">adelassem99@gmail.com</span>
              </div>
            </div>
            <select id="clientZone-select-tabs" className="form-control hidden-xs visible-xs " style={{ display: 'none', marginBottom: '20px' }}>
              <option value="profile">Profile </option>
              <option value="addresses">My Addresses</option>
            </select>
            <div id="clientZone-menu-tabs" className="box-primary clientZoneTabs">
            <div data-tab="profile"  className={clientActivePage === "profile"
              ?"col-xs-12 tab client-zone-box-border active "
              :"col-xs-12 tab client-zone-box-border "}
              onClick={() => {
                handleActivePage("profile");
              }}>
                <div className="icon-container" >
                <i class="bi-person-fill icons">&nbsp;</i>
                  <span>Profile</span>
                </div>
              </div>
              <div data-tab="address"  className={clientActivePage === "address"
              ?"col-xs-12 tab client-zone-box-border active "
              :"col-xs-12 tab client-zone-box-border "}
              onClick={() => {
                handleActivePage("address");
              }}>
                <div className="icon-container" >
                <i class="bi-houses-fill">&nbsp;</i>
                  <span>My Addresses</span>
                </div>
              </div>
              <div data-tab="Store"  className={clientActivePage === "Store"
              ?"col-xs-12 tab client-zone-box-border active "
              :"col-xs-12 tab client-zone-box-border "}
              onClick={() => {
                handleActivePage("Store");
              }}>
                <div className="icon-container" >
                <i className="bi-google-play icons">&nbsp;</i>
                  <span>My Store</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-8">
          {clientActivePage==='profile' &&    <Profile/> }
          {clientActivePage==='address' &&  <MyAddress/> }
          {clientActivePage==='Store' &&  <MyStore/> }

          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientZone