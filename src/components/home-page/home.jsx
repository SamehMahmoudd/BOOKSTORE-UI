import React from "react";
import Category from "./category/category-section";
import Hero from "./hero/hero-section";
import About from "./about/about-section";
import Contact from "./contact/contact-section";
import Tranding from "./tranding/tranding-section";



const Home = () => {
  return (
    <>
      <Hero/>
      <Category/>
      <Tranding/>
      <About/>
      <Contact/>
    </>
  );
};

export default Home;