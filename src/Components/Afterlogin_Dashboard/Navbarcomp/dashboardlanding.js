import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";
import Afterlog_dash from "../Afterlog_dash";
import Footer from "../../LandingPage/Footer";

const Dashboardlanding = () => {
  return (
    <>
      <Navbar />
      <Afterlog_dash />
      <Footer />
    </>
  );
};
export default Dashboardlanding;
