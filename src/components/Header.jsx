import React from "react";
import banner from "../images/banner.jpg";
import Navbar from "../components/nav/Navbar";

import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={banner} alt="Zebra Logo" className="banner" />
      <Navbar />
    </div>
  );
};

export default Header;
