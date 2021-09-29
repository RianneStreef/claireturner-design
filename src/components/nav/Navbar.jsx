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
  return (
    <Nav>
      <Burger />
    </Nav>
  );
};

export default Navbar;
