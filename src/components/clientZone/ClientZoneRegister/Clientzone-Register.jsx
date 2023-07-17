import React, { useRef, useState, useEffect, useContext } from "react";
import { Formik, ErrorMessage, Form, Field } from "formik";
import { registerValidation } from "../../../ValidationSchema/registerValidation";
// const login_URL = "/auth/login";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function ClientzoneRegister() {
  const userRef = useRef();
  const errRef = useRef();
  const [fName, setFristName] = useState("");
  const [lName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState("");
  useEffect(() => {
    userRef?.current?.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [email, fName, lName, password, phoneNumber, address]);
  const register = async (e) => {
    e.preventDefault();
    updatePage("nav-delivery");
    console.log(e);
    try {
      const res = await axios.post("http://localhost:3001/auth/register", {
        fristName: fName,
        lastName: lName,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        address: address,
        country: country,
      });

      // console.log(res);
      setFristName("");
      setLastName("");
      setEmail("");
      setpassword("");
      setPhoneNumber("");
      setAddress("");
      setCountry("");
      setSuccess(true);
      alert("succefully registration");
    } catch (err) {
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
  function handleFormData(eve) {
    const { name, value } = eve.target;
    props.updatingData({ ...props.data, [name]: value });
    console.log(props.data);
  }

  const initialValues = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    country: "",
  };
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
      {success ? (
        <ClientzoneRegister />
      ) : (
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
                <Formik
                  className="bg-body text-center"
                  initialValues={initialValues}
                  validationSchema={registerValidation}
                  onSubmit={register}
                >
                  <Form>
                    <Field
                      type="text"
                      name="fName"
                      onChange={(e) => setFristName(e.target.value)}
                      value={fName}
                      placeholder="fristName *"
                      className="form-control mb-3 p-3"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                    <ErrorMessage
                      name="fName"
                      component="p"
                      className="text-danger"
                    />
                    <Field
                      type="text"
                      name="lName"
                      onChange={(e) => setLastName(e.target.value)}
                      value={lName}
                      placeholder="lastName *"
                      className="form-control mb-3 p-3"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                    <ErrorMessage
                      name="lName"
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
                      </span>
                    </div>
                  </Form>
                </Formik>
                {/* <form className="bg-body text-center" onSubmit={register}>
                  <p className="title fw-semibold mb-4">
                    please enter your Register:
                  </p>
                  <div class="input-group mb-3">
                    <input
                      type="file"
                      className="form-control"
                      id="inputGroupFile02"
                    />
                    <label class="input-group-text" for="inputGroupFile02">
                      Upload
                    </label>
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
                      type="text"
                      className="form-control"
                      id="validationTooltip01"
                      defaultValue="Mark"
                      required
                    />
                    <div className="valid-tooltip">Looks good!</div>
                  </div>
                  <div className="">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter your FristName"
                      required
                    />
                  </div>
                  <div className="form-group  mb-4">
                    <input
                      className="form-control"
                      type="text"
                      onChange={(e) => setLastName(e.target.value)}
                      value={lName}
                      placeholder="Enter your LastName"
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
                      onChange={(e) => setAddress(e.target.value)}
                      value=""
                      placeholder="Enter your Address"
                      required
                    />
                  </div>
                  <div className="form-group password mb-4">
                    <input
                      className="form-control"
                      type="password"
                      onChange={(e) => setpassword(e.target.value)}
                      value={password}
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="form-group request m-4 pt-3">
                    <button className="btn btn-primary">
                      <span>Register</span>
                    </button>
                  </div>
                  <div className="form-group request m-4 pt-3">
                    <span className="fw-semibold">
                      if you have Account alredy?{" "}
                      {/* <a href={navigate("/register")}>Sign in</a> */}
                {/* </span> */}
                {/* </div> */}
                {/* </form> */}
              </>
            </>
          </div>
        </div>
      )}
      ;
    </div>
  );
}
