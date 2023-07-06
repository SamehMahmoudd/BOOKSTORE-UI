import React from "react";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import ClientZone from "../ClientZone/ClientZone";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login";
export default function ClientzoneRegister() {
  const [profile, setprofile] = useState(null);

  const [email, setEmail] = useState("");
  return (
    <div className="mb-5">
      <div className="container-fluid page-header noBackground mb-5">
        <div className="row">
          <div className="container modulesTitleContainer">
            <div className="row modulesTitle text-center pt-4 pb-3">
              <div className="page-header-wrap">
                <h2 className="mb-3">CLIENT ZONE</h2>
                <span className="hr m-auto"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!profile ? (
        <div className="col-xs-12 col-sm-12 col-md-8 m-auto mt-4 ">
          <div className="row login-forms box box-primary w-100 m-auto mb-lg">
            <form className="bg-body text-center" action="#">
              <p className="title fw-semibold mb-4">
                please enter your email: {email}
              </p>
              <div className="form-group email mb-4">
                <input
                  className="form-control"
                  type="text"
                  name="example"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@example.com"
                  msg-required="Please Enter Your Email"
                />
              </div>
              <div className="form-group request m-4 pt-3">
                <button className="btn btn-primary">
                  Sign in or Create an Account
                </button>
              </div>
              <div className="login-box pt-3">
                <div className="social">
                  <span className="mb-15 fw-semibold">Or Continue Using</span>
                </div>
                <LoginSocialGoogle
                  client_id={
                    "720953758849-av80tdajd4u9k5hgqqnh9dmj78dha5bu.apps.googleusercontent.com"
                  }
                  scope="openid profile email"
                  discoveryDocs="claims_supported"
                  access_type="offline"
                  onResolve={({ provider, data }) => {
                    console.log(provider, data);
                    setprofile(data);
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}
                >
                  <div className="social-login-btn m-auto">
                    <div className="mb-3">
                      <GoogleLoginButton />
                    </div>
                  </div>
                </LoginSocialGoogle>
                <LoginSocialFacebook
                  appId="920872289211071"
                  onResolve={({ data }) => {
                    console.log( data);
                    setprofile(data);
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}
                >
                  <div className="social-login-btn m-auto">
                    <div className="mb-3">
                      <FacebookLoginButton />
                    </div>
                  </div>
                </LoginSocialFacebook>
            
              </div>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
      {profile ? <ClientZone profile={profile} /> : ""}
    </div>
  );
}
