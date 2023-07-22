import { useTranslation } from "react-i18next";
import React, { useRef, useState, useEffect, useContext } from "react";
// import { Formik, ErrorMessage, Form, Field } from "formik";
// import { registerValidation } from "../../../ValidationSchema/registerValidation";
// const login_URL = "/auth/login";
import Spinner from "react-bootstrap/Spinner";
import swal from "sweetalert";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../../context/authProvider";
export default function ClientzoneRegister() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const [image, setImage] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    userRef?.current?.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [
    image,
    email,
    firstName,
    lastName,
    password,
    phoneNumber,
    address,
    country,
  ]);
  const register = async (e) => {
    e.preventDefault();
    console.log(e);
    try {
      const res = await axios.post("http://localhost:3001/auth/register", {
        image,
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        address,
        country,
      });
      console.log(res);
      setAuth({
        image,
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        address,
        country,
      });
      setImage("");
      setfirstName("");
      setLastName("");
      setEmail("");
      setpassword("");
      setPhoneNumber("");
      setAddress("");
      setCountry("");
      setSuccess(true);
      swal("succefully registration", "You clicked the button!", "success");
    } catch (err) {
      swal("registration rejected ", "You clicked the button!", "warning");
      if (!err?.res) {
        setErrMsg("No Server is Response");
      } else if (err.res?.status === 400) {
        setErrMsg("Missing Email or Password validation ");
      } else if (err.res?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Register Faild ");
      }
      errRef.current.focus();
    }
  };
  const { t } = useTranslation();
  // function handleFormData(eve) {
  //   const { name, value } = eve.target;
  //   props.updatingData({ ...props.data, [name]: value });
  //   console.log(props.data);
  // }

  // const initialValues = {
  //   firstName: "",
  //   LastName: "",
  //   email: "",
  //   password: "",
  //   phoneNumber: "",
  //   address: "",
  //   country: "",
  // };
  return (
    <div className="m-5">
      <div className="container-fluid page-header noBackground mb-5">
        <div className="row">
          <div className="container modulesTitleContainer">
            <div className="row modulesTitle text-center pt-4 pb-3">
              <div className="page-header-wrap">
                <h2 className="mb-3">{t("client-zone.client.reg-title")}</h2>
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
              {/* <Formik
                  className="bg-body text-center"
                  initialValues={initialValues}
                  validationSchema={registerValidation}
                  onSubmit={register}
                >
                  <Form>
                    <Field
                      type="text"
                      name="firstName"
                      onChange={(e) => setfirstName(e.target.value)}
                      value={firstName}
                      placeholder="firstName *"
                      className="form-control mb-3 p-3"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="p"
                      className="text-danger"
                    />
                    <Field
                      type="text"
                      name="LastName"
                      onChange={(e) => setLastName(e.target.value)}
                      value={LastName}
                      placeholder="lastName *"
                      className="form-control mb-3 p-3"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                    <ErrorMessage
                      name="LastName"
                      component="p"
                      className="text-danger"
                    />
                    <Field
                      type="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="Email *"
                      className="form-control mb-3 p-3"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-danger"
                    />
                    <Field
                      type="password"
                      name="password"
                      onChange={(e) => setpassword(e.target.value)}
                      value={password}
                      placeholder="Password *"
                      className="form-control mb-3 p-3"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                    <ErrorMessage
                      name="password"
                      component="p"
                      className="text-danger"
                    />
                    <Field
                      type="text"
                      name="phoneNumber"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
                      placeholder="phoneNumber *"
                      className="form-control mb-3 p-3"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="p"
                      className="text-danger"
                    />
                    <Field
                      type="text"
                      name="address"
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                      placeholder="Adress *"
                      className="form-control mb-3 p-3"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                    <ErrorMessage
                      name="address"
                      component="p"
                      className="text-danger"
                    />
                    <Field
                      type="text"
                      name="country"
                      onChange={(e) => setCountry(e.target.value)}
                      value={country}
                      placeholder="City *"
                      className="form-control mb-3 p-3"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                    <ErrorMessage
                      name="country"
                      component="p"
                      className="text-danger"
                    />
                    <div className="form-group request m-4 pt-3">
                      <button className="btn btn-primary" type="submit">
                        <span>Register</span>
                      </button>

                    </div>
                    <div className="form-group request m-4 pt-3">
                      <span className="fw-semibold">
                        if you have Account alredy?{" "}
                        {/* <a href={navigate("/register")}>Sign in</a> */}
              {/* </span> */}
              {/* </div> */}
              {/* </Form> */}
              {/* </Formik> */}
              <form className="bg-body text-center" onSubmit={register}>
                <p className="title fw-semibold mb-4">
                   {t('client-zone.client.reg-email')}
                </p>
                <div className="input-group mb-3">
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                    placeholder="Enter your firstName"
                    required
                  />
                </div>
                <div className="form-group  mb-4">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setfirstName(e.target.value)}
                    value={firstName}
                    placeholder="Enter your firstName"
                    required
                  />
                </div>
                <div className="form-group  mb-4">
                  <input
                    className="form-control"
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    placeholder="Enter your LastName"
                    required
                  />
                </div>
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
                <div className="form-group  mb-4">
                  <input
                    className="form-control"
                    type="password"
                    onChange={(e) => setpassword(e.target.value)}
                    value={password}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <input
                    className="form-control"
                    type="text"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    placeholder="Enter your PhoneNumber"
                    required
                  />
                </div>
                <div className="form-group  mb-4">
                  <input
                    className="form-control"
                    type="text"
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    placeholder="Enter your Address"
                    required
                  />
                </div>
                <div className="form-group  mb-4">
                  <input
                    className="form-control"
                    type="text"
                    onChange={(e) => setCountry(e.target.value)}
                    value={country}
                    placeholder="Enter your country"
                    required
                  />
                </div>
                <div className="form-group request m-4 pt-3">
                  <button className="btn btn-primary">
                    {success ? (
                      <Spinner
                        animation="border"
                        role="status"
                        className="container d-flex align-items-center justify-content-center"
                      >
                        <span className="visually-hidden ">Loading...</span>
                      </Spinner>
                    ) : (
                      <span>Register</span>
                    )}
                  </button>
                </div>
                <div className="form-group request m-4 pt-3">
                  <span className="fw-semibold">
                    if you have Account alredy? <Link to="/login">Sign in</Link>
                  </span>
                </div>
              </form>
            </>
          </>
        </div>
      </div>
    </div>
  );
}
