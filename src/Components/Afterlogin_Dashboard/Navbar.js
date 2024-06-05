import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const nav = useNavigate();
  const navbarRef = useRef();
  const searchRef = useRef();

  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
  };

  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    navbarRef.current.classList.remove("active");
  };
  const handleRedirect = () => {
    nav('/');
  };
  

  return (
    <>
      <header className="header">
        <header className="header">
        <a onClick={handleRedirect} className="Foodque" style={{ cursor: 'pointer' }}>
            <h1>FoodQue</h1>
        </a>

          <nav className="navbar" ref={navbarRef}>
            <Link to="/dashboard/createprofile">Manage profile</Link>
            <Link to="/dashboard/dietgoals">Set Diet Goals</Link>
            <Link to="/dashboard">Recommended Meals</Link>
          </nav>
          <div className="icons">
            <div
              className="fas fa-search"
              id="search-btn"
              onClick={searchHandler}
            ></div>
            <Link to="/login">
              <div className="fas fa-user" id="cart-btn"></div>
            </Link>
            <div
              className="fas fa-bars"
              id="menu-btn"
              onClick={navbarHandler}
            ></div>
          </div>
          <div className="search-form" ref={searchRef}>
            <input type="search" id="search-box" placeholder="search here..." />
            <label htmlFor="search-box" className="fas fa-search"></label>
          </div>
        </header>
      </header>
    </>
  );
};

export default Navbar;

// import React, { useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Sidebar from './Dashboard/Sidebar'; // Import the Sidebar component

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if the user is logged in
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false); // State to track dropdown visibility
//   const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State to track sidebar visibility
//   const navbarRef = useRef();
//   const searchRef = useRef();

//   const navbarHandler = () => {
//     navbarRef.current.classList.toggle("active");
//     searchRef.current.classList.remove("active");
//   };

//   const searchHandler = () => {
//     searchRef.current.classList.toggle("active");
//     navbarRef.current.classList.remove("active");
//   };

//   const userIconHandler = () => {
//     setIsDropdownVisible(!isDropdownVisible); // Toggle dropdown visibility
//   };

//   const toggleSidebar = () => {
//     setIsSidebarVisible(!isSidebarVisible); // Toggle sidebar visibility
//   };

//   return (
//     <>
//       <header className='header'>
//         <a href="#" className="Foodque">
//           <h1>FoodQue</h1>
//         </a>
//         <nav className="navbar" ref={navbarRef}>
//           <a href="#home">home</a>
//           {!isLoggedIn && (
//             <>
//               <a href="#about">about</a>
//               <a href="#menu">menu</a>
//               <a href="#products">products</a>
//               <a href="#review">review</a>
//               <a href="#contact">contact</a>
//               <a href="#blogs">blogs</a>
//             </>
//           )}
//         </nav>
//         <div className="icons">
//           <div className="fas fa-search" id="search-btn" onClick={searchHandler}></div>
//           <div className="fas fa-user" id="user-btn" onClick={userIconHandler}></div>
//           <div className="fas fa-bars" id="menu-btn" onClick={navbarHandler}></div>
//           {isLoggedIn && (
//             <div className="fas fa-bars" id="sidebar-btn" onClick={toggleSidebar}></div>
//           )}
//         </div>
//         <div className="search-form" ref={searchRef}>
//           <input type="search" id="search-box" placeholder="search here..." />
//           <label htmlFor="search-box" className="fas fa-search"></label>
//         </div>
//         {isDropdownVisible && (
//           <div className="dropdown-menu">
//             {!isLoggedIn ? (
//               <Link to="/login" onClick={() => setIsDropdownVisible(false)}>
//                 Login
//               </Link>
//             ) : (
//               <>
//                 <Link to="#profile" onClick={() => setIsDropdownVisible(false)}>
//                   Profile
//                 </Link>
//                 <Link to="#logout" onClick={() => {
//                   setIsLoggedIn(false);
//                   setIsDropdownVisible(false);
//                 }}>
//                   Logout
//                 </Link>
//               </>
//             )}
//           </div>
//         )}
//       </header>
//       {isLoggedIn && <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />}
//     </>
//   );
// };

// export default Navbar;
