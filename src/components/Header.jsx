import React, { useEffect } from "react";
import styled from "styled-components";
import Burger from "./nav/Burger";
import banner from "../images/banner.jpg";

import "../styles/Header.css";

const Nav = styled.nav`
  height: 55px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: center;
`;

const Header = () => {
  useEffect(() => {
    document.addEventListener("scroll", function () {
      const nav = document.getElementById("navbar");
      let rect = nav.getBoundingClientRect();
      console.log("rect");
      console.log(rect);
      if (rect.top <= 0) {
        // nav.classList.add("fixed_navbar");
        console.log("fixed");
      } else {
        console.log("not fixed");

        window.onscroll = function () {
          myFunction();
        };
        function myFunction() {
          let banner = document.getElementById("banner");
          let bannerHeight = banner.clientHeight;
          console.log("bannerHeight");
          console.log(bannerHeight);
          if (document.body.scrollTop < bannerHeight) {
            nav.classList.remove("fixed_navbar");
          }
        }
      }
    });
  });

  return (
    <div className="header">
      <img src={banner} alt="Zebra Logo" className="banner" id="banner" />
      <Nav id="navbar">
        <Burger />
      </Nav>
    </div>
  );
};

export default Header;
