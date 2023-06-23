import React from 'react';

export default function ClientzoneRegister(){
    
    return (
      <div className='mb-5'>
      <div className="container-fluid page-header  noBackground">
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
        <div className="col-xs-12 col-sm-12 col-md-8 m-auto mt-4 ">
          <div className="row login-forms box box-primary w-100 m-auto mb-lg">
            <form className="bg-body text-center" action="#">
              <p className="title fw-semibold mb-4">please enter your email:</p>
              <div className="form-group email mb-4">
                <input className="form-control" type="text" name="example" id placeholder="example@example.com" msg-required="Please Enter Your Email" />
              </div>
              <div className="form-group request m-4 pt-3">
                <button className="btn btn-primary">Sign in or Create an Account</button>
              </div>
              <div className="login-box pt-3">
                <div className="social">
                  <span className="mb-15 fw-semibold">Or Continue Using</span>
                </div>
                <a className="s123-client-zone-page s-facebook text-decoration-none" href='#'>
                  <div className="social-login-btn d-flex justify-content-center">
                    <div className="login-btn-logo d-flex justify-content-center align-items-center">
                      <img src="https://static1.s123-cdn-static-a.com/admin/InterfaceStatisFiles/allOther/all/facebook.svg" style={{height: '20px', width: 'auto'}} alt="" />
                    </div>
                    <div className="s-1-btn-text"> 
                      <span>Continue with Facebook</span>
                    </div>
                  </div>
                </a>
                <a className="s123-client-zone-page s-google text-decoration-none" href='#'>
                  <div className="social-login-btn d-flex justify-content-center ">
                    <div className="login-btn-logo d-flex justify-content-center align-items-center ">
                      <img src="https://static1.s123-cdn-static-a.com/admin/InterfaceStatisFiles/allOther/all/google.svg" style={{height: '20px', width: 'auto'}} alt="" />
                    </div>
                    <div className="s-1-btn-text"> 
                      <span>Continue with Google</span>
                    </div>
                  </div>
                </a>
              </div>
            </form>
          </div>
        </div>
    </div>

    )
}

