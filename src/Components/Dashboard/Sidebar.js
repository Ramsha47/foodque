import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isVisible, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isVisible ? 'visible' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>×</button>
      <Link to="#profile" onClick={toggleSidebar}>Profile</Link>
      <Link to="#settings" onClick={toggleSidebar}>Settings</Link>
      <Link to="#orders" onClick={toggleSidebar}>Orders</Link>
    </div>
  );
};

export default Sidebar;
