import React, { useEffect } from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  height: 55px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: center;
`;

const Navbar = () => {
  useEffect(() => {
    document.addEventListener("scroll", function () {
      const nav = document.getElementById("navbar");
      let rect = nav.getBoundingClientRect();
      if (rect.top <= 0) {
        nav.classList.add("fixed_navbar");
      } else {
        window.onscroll = function () {
          myFunction();
        };

        function myFunction() {
          if (document.body.scrollTop < 300) {
            nav.classList.remove("fixed_navbar");
          }
        }
      }
    });
  });

  return (
    <Nav id="navbar">
      <Burger />
    </Nav>
  );
};

export default Navbar;
