import React from "react";
import banner from "../images/banner.jpg";

import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={banner} alt="Zebra Logo" className="banner" />
    </div>
  );
};

export default Header;
