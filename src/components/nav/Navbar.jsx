import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  height: 55px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  position: fixed;
`;

const Navbar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  );
};

export default Navbar;
