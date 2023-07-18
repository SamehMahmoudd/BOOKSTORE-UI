import React from "react";
import { Route, Routes } from "react-router-dom";
import BookDetails from "./components/Book-Details/BookDetails";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/footer/footer";
import About from "./components/home-page/about/about-section";
import Contact from "./components/home-page/contact/contact-section";
import Home from "./components/home-page/home";
import Navbar from "./components/navbar/navbar";
import NotFound from "./components/not-found/not-found";
import OrderRoute from "./components/order/orderRoute";
import Shop from "./components/product-list/shop/shop";
import Tranding from "./components/home-page/tranding/tranding-section";
import CLientZoneRouter from './components/clientZone/CLientZoneRouter'
import Search from './components/navbar/icons-comp/search-comp/search';
import Share from './components/navbar/icons-comp/share-comp/share';
import Call from './components/navbar/icons-comp/call-comp/call';
// import Category from "./components/home-page/category/category-section";
import LangSwitch from "./components/navbar/icons-comp/lang-comp/lang";
import Test from "./components/i18n/test";
import Categories from "./components/home-page/category/Categories";


export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category" element={<Categories />}/>
        <Route path="/store/:id" element={<Shop />} />
        <Route path="/details/:id" element={<BookDetails />} />
        <Route path="/tranding" element={<Tranding />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<OrderRoute />} />
        <Route path="/clientZone" element={<CLientZoneRouter />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
        ///////////////////////////////////////////////////////////
        <Route path="/search" element={<Search />} />
        <Route path="/lang" element={<LangSwitch />} />
        <Route path="/share" element={<Share />} />
        <Route path="/call" element={<Call/>} />
      </Routes>
      <Footer />
    </>
  );
}
