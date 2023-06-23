import React from "react";

const About = () => {
  return (
    <>
    <div role="main" className="container">
        <div id="About">
            <div className="heading d-flex flex-column align-items-center mb-5">
                <div><h1>About The Store</h1></div><div className="small"></div>
            </div>
        </div>
        <h1></h1>
        <p className="text-dark text-center mt-4">
          Deem for Book Trading is the official Franchise owner of Alef
          Bookstore in New Cairo. Founded in Sept 2018,<br />
          and located in Maxim Mall We are very passionate about books,<br />
          and we will definitely guide the store visitors to the best books
          matching their taste and interests. <br />
          In Alef Bookstore,<br />
          You can only find original books with wide variety and different
          genres.<br />
          We have 3 Sections; Arabic books for all ages, <br />
          English books for all ages and a recently added small section for
          French Children Books <br />
          This is in addition to the non-books collection of Notebooks, Coloring
          Books, stationery, games and Laptop Sleeves About the store imageAbout
          the store image.
        </p>
    </div>
    <section className="p-5 d-flex justify-content-center text-center w-100 mb-5">
        <div className="lightbox"  data-mdb-zoom-level="0.25" data-id="lightbox-ah1mr9bgo">
            <div className="row">
                <div className="col-lg-4">
                    <img src="/../../../../assets/img/1.jpg" className="w-100 h-auto rounded" />
                </div>
                <div className="col-lg-4">
                    <img src="/../../../../assets/img/3.jpg" className="w-100 h-auto rounded" />
                </div>
                <div className="col-lg-4">
                    <img src="/../../../../assets/img/2.jpg" className="w-100 h-auto rounded" />
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default About;
