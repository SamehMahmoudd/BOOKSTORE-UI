import React from "react";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import "./contact.css";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8agfyk2",
        "template_6vgkcuy",
        e.target,
        "J0xLB3hMSaaXxdBYM"
      )
      .then((res) => {
        swal("message sent succesfuly!", "You clicked the button!", "success");
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <div className="content mt-5 mt-4" id="Contact">
        <div className="container">
          <div className="row">
            <div className="heading d-flex flex-column align-items-center mb-5">
              <div>
                <h1>Contact Us</h1>
              </div>
              <div className="small"></div>
            </div>
            <div className="d-flex col-md-6 mr-auto justify-content-around">
              <ul className="list-unstyled pl-md-5 mb-5">
                <li className="mb-5 text-center">
                  North Teseen Street, First New Cairo, Cairo Governorate, Egypt
                  <br />
                  90 Road North - Maxim Mall - First Floor
                </li>
                <div className="d-flex flex-column align-items-center contact-info">
                  <li className="d-flex text-black mb-2 text-danger">
                    <div>
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <a className="contact-info" href="tel:01016338149">
                      01016338149 - Alef Maxim Mall
                    </a>
                  </li>
                  <li className="d-flex text-black mb-2">
                    <div>
                      <i className="bi bi-envelope"></i>
                    </div>
                    <a
                      className="contact-info"
                      href="mailto:customerservicedeem@gmail.com"
                    >
                      customerservicedeem@gmail.com
                    </a>
                  </li>
                  <li className="d-flex text-black mb-2">
                    <li>
                      <i className="bi bi-clock"></i>10AM - 10PM
                    </li>
                  </li>
                  <div className="pt-3 pb-2">
                    <p>how can we help?</p>
                  </div>
                  <ul className="list-inline d-inline-flex ">
                    <li className="m-2">
                      <a className="mainCOlor" href="">
                        <i className="bi bi-instagram fa-2x "></i>
                      </a>
                    </li>
                    <li className="m-2">
                      <a className="mainCOlor" href="">
                        <i className="bi bi-facebook fa-2x "></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
            <div className="col-md-6">
              <form
                className="mb-5"
                method="post"
                id="contactForm"
                name="contactForm"
                onSubmit={sendEmail}
              >
                <div className="row">
                  <div className="col-md-12 form-group mb-3">
                    {/* <label htmlFor="name" className="col-form-label">Name</label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      aria-label="default input example"
                      name="name"
                      id="name"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group mb-3">
                    {/* <label htmlFor="email" className="col-form-label">Email</label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      aria-label="default input example"
                      name="email"
                      id="email"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group mb-4">
                    {/* <label htmlFor="message" className="col-form-label">Message</label> */}
                    <textarea
                      className="form-control"
                      placeholder="Message"
                      aria-label="default input example"
                      name="message"
                      id="message"
                      cols="30"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <input
                      type="submit"
                      value="Send Message"
                      className="btn btn-primary rounded-1 py-2 px-4"
                    />
                    <span className="submitting"></span>
                  </div>
                </div>
              </form>
              <div id="form-message-warning mt-4"></div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <br />
      {/* <!-- Google map --> */}
      <div className="container-fluid p-0 m-0">
        <div className="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13816.878280948631!2d31.455885!3d30.030558000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d3225f12987%3A0x3188bd7f143d6618!2sFurqan%20Mosque!5e0!3m2!1sen!2sus!4v1682495273938!5m2!1sen!2sus"
            width="400"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <br />
    </>
  );
};

export default Contact;
