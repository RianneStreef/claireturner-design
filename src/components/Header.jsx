import React, { useEffect } from "react";
import Burger from "./nav/Burger";
import banner from "../images/banner.jpg";

import "../styles/Header.css";

const Header = () => {
  const [isHeaderSticky, setIsHeaderSticky] = React.useState(false);

  useEffect(() => {
    document.addEventListener("scroll", function () {
      const banner = document.getElementById("banner");
      const bannerHeight = banner.clientHeight;
      const bannerPosition = window.scrollY;

      console.log(bannerPosition);

      if (!isHeaderSticky && bannerPosition <= bannerHeight) {
        setIsHeaderSticky(false);
        console.log("not fixed");
      }

      if (!isHeaderSticky && bannerPosition > bannerHeight) {
        setIsHeaderSticky(true);
        console.log("fixed");
      }
    });
  });

  return (
    <div className="header">
      <img src={banner} alt="Zebra Logo" className="banner" id="banner" />
      <nav
        id="navbar"
        className={`nav ${isHeaderSticky ? " fixed-navbar" : ""}`}
      >
        <Burger />
      </nav>
    </div>
  );
};

export default Header;
