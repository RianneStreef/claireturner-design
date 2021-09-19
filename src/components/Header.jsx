import React, { useEffect, useState } from "react";
import Burger from "./nav/Burger";
import banner from "../images/banner.jpg";

import "../styles/Header.css";

const Header = () => {
  const [isHeaderSticky, setIsHeaderSticky] = React.useState(false);

  useEffect(() => {
    document.addEventListener("scroll", function () {
      const nav = document.getElementById("navbar");
      let rect = nav.getBoundingClientRect();
      if (rect.top <= 0) {
        // setIsHeaderSticky(true);
        console.log("fixed");
      } else {
        console.log("not fixed");

        window.onscroll = function () {
          myFunction();
        };
        function myFunction() {
          let banner = document.getElementById("banner");
          let bannerHeight = banner.clientHeight;
          if (document.body.scrollTop < bannerHeight) {
            setIsHeaderSticky(false);
          }
        }
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
