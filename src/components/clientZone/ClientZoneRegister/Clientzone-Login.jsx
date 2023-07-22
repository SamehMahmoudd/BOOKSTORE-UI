import React, { useRef, useState, useEffect } from "react";
import swal from "sweetalert";
// import axiosroot from "../../../config/axiosConfigs";
// const Login_URL = "/auth/login";
import "../../../main";
import axios from "axios";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../../hooks/useAuth";
import { useTranslation } from "react-i18next";
export default function ClientzoneLogin() {
  const { setAuth } = UseAuth();
  const emailRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [profile, setprofile] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    emailRef?.current?.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [email, password]);
  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/auth/login", {
        email: email,
        password: password,
      });
      const accessToken = res?.data?.token;
      const accessuserId = res?.data?.userId;
      console.log(res);
      localStorage.setItem("user", accessToken);
      localStorage.setItem("userid", accessuserId);
      setEmail("");
      setPassword("");
      setAuth({ email, password, accessToken });
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.res) {
        setErrMsg("No Server is Response");
      } else if (err.res?.status === 400) {
        setErrMsg("Missing Email or Password ");
      } else if (err.res?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Faild ");
      }
      errRef.current.focus();
    }
  };
  const { t } = useTranslation();
  return (
    <div className="mb-5">
      <div className="container-fluid page-header noBackground mb-5">
        <div className="row">
          <div className="container modulesTitleContainer">
            <div className="row modulesTitle text-center pt-4 pb-3">
              <div className="page-header-wrap">
                <h2 className="mb-3">{t("client-zone.client.log-title")}</h2>
                <span className="hr m-auto"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-8 m-auto mt-4 ">
        <div className="row login-forms box box-primary w-100 m-auto mb-lg">
          <>
            <div
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </div>
            <>
              <form className="bg-body text-center" onSubmit={login}>
                <p className="title fw-semibold mb-4">
                  {t('client-zone.client.reg-email')}
                </p>
                <div className="form-group email mb-4">
                  <input
                    className="form-control"
                    type="email"
                    name="example"
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="example@example.com"
                    required
                  />
                </div>
                <div className="form-group password mb-4">
                  <input
                    className="form-control"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder={t('client-zone.client.reg-pass')}
                    required
                  />
                </div>
                <div className="form-group request m-4 pt-3">
                  <button className="btn btn-primary">
                    <span>{t('client-zone.client.reg-btn-login')}</span>
                  </button>
                </div>
                <div className="form-group request m-4 pt-3">
                  <span className="fw-semibold">
                    {t('client-zone.client.reg-account')} <Link to="/register"> {t('client-zone.client.sign')}</Link>
                  </span>
                </div>
                <div className="login-box pt-3">
                  <div className="social">
                    <span className="mb-15 fw-semibold"> {t('client-zone.client.reg-continue-using')}</span>
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
                      console.log(data);
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
            </>
          </>
        </div>
      </div>
    </div>
  );
}
