import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  /* position: fixed;
  top: 30px;
  right: 40px; */
  position: absolute;
  z-index: 20;
  display: none;
  @media (max-width: 1000px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    right: 20px;
    margin-top: 20px;
    top: ${({ open }) => (open ? "10px" : null)};
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#000" : "#000")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      margin: ${({ open }) => (open ? 0 : "0")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      margin: ${({ open }) => (open ? 0 : "0")};
    }
  }
`;

const Burger = (props) => {
  const [open, setOpen] = useState(false);
  let { language, languageToUse } = props;

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div className="big-margin" />
        <div className="small-margin" />
      </StyledBurger>
      <RightNav
        open={open}
        setOpen={setOpen}
        language={language}
        languageToUse={languageToUse}
      />
    </>
  );
};

export default Burger;
