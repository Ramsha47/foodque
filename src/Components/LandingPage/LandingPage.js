import React from 'react';
import Navbar from "../Navbar";
import Home from "./Home";
import About from "./About";
import Meal from "./Meal";
import Review from "../Review";
import Contact from "./Contact";
import Blog from "./Blogs";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <>

    <Navbar/>
    <Home />
    <About/>
    {/* <Meal/> */}
    {/* <Review/> */}
    <Contact/>
    {/* <Blog/> */}
    <Footer/>
    </>
  )
}

export default LandingPage