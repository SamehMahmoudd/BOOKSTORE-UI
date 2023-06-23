import React from "react";


const Hero = () => {
  return (
    <>
      <div className="p-0 m-0">
        <div className="text-center p-lg-6" style={{background: "url(/../../../../assets/img/main.jpg) center"}}>
          <div className="col-xxl">
            <div className="p-0 m-0 text-light" style={{backgroundColor : "rgba(0, 0, 0, 0.542)"}}>
                <div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <h1>Alef Bookstore - New Cairo</h1>
                    <h3>
                        Maxim Mall<br />
                        Deem for Book Trading <br /> Taxation License:<br />
                        526-006-684<br />
                    </h3>
                    <br /><br /><br /><br /><br /><br />
                </div>
            </div>
            <div className="lc-block">
              <div editable="rich"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
