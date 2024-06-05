import React from "react";
import "./assets/css/style.css";
import { Routes, Route } from "react-router-dom";
import LoginSignUp from "./Components/User/LoginSignUp";
import LandingPage from "./Components/LandingPage/LandingPage";
import Dashboard from "./Components/Dashboard/Dashboard";
import UserProfile from "./Components/User/UserProfile";
import Dietgoals from "./Components/Afterlogin_Dashboard/Navbarcomp/dietgoals";
import Dashboardlanding from "./Components/Afterlogin_Dashboard/Navbarcomp/dashboardlanding";
import Mealplans from "./Components/Afterlogin_Dashboard/Navbarcomp/mealplans";
import Createprofile from "./Components/Afterlogin_Dashboard/Navbarcomp/createprofile";
import './assets/css/afterlog_dash.css'
// import Afterlog_dash from "./Components/Afterlogin_Dashboard/Afterlog_dash";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginSignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/dietgoals" element={<Dietgoals />} />
      <Route path="/dashboard/mealplans" element={<Mealplans />} />
      <Route path="/dashboard/createprofile" element={<Createprofile />} />
      <Route path="/user" element={<UserProfile />} />
      <Route path="/Dashboardlanding" element={<Dashboardlanding />} />
    </Routes>
  );
}

export default App;
