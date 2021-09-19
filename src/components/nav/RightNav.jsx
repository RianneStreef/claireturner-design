import React from "react";
import styled from "styled-components";

import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";

// import flagEn from "../../images/icon-en.png";
// import flagFr from "../../images/icon-fr.png";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: flex-end;
  z-index: 10;
  background-color: #dddbdb;
  margin-top: 0;
  padding-left: 0;

  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    background-color: transparent;
  }
  li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #000;
    font-family: "Andalemo";
    font-size: 20px;
    margin: 20px;

    a {
      color: #000;
      transition: color 500ms ease-in;
      text-decoration: none;
    }
    a:visited {
      color: #000;
      text-decoration: none;
    }
    a:hover {
      color: var(--color-highlight);
      transition: color 500ms ease-in;
    }

    p {
      margin-top: 0;
    }
    justify-content: center;
    align-items: center;
    img {
      width: 30px;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #dddbdb;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

// const Flag = styled.img`
//   width: 30px;
//   margin-right: 20px;
// `;

const Dash = styled.span`
  width: 30px;
  margin: 0 20px;
  text-align: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightNav = (props) => {
  let { open, setOpen } = props;

  return (
    <Ul open={open}>
      <li className="menu-item" onClick={() => setOpen(!open)}>
        <AnchorLink to="/#about" title="About me">
          <span>About Me</span>
        </AnchorLink>
      </li>
      <Dash>-</Dash>

      <li className="menu-item" onClick={() => setOpen(!open)}>
        <AnchorLink to="/#contact" title="Contact">
          <span>Contact</span>
        </AnchorLink>
      </li>
      <Dash>-</Dash>

      <li className="menu-item" onClick={() => setOpen(!open)}>
        <AnchorLink to="/#insta" title="Pictures">
          <span>Pictures</span>
        </AnchorLink>
      </li>
      <Dash>-</Dash>

      <li>
        <Link to="/products" onClick={() => setOpen(!open)}>
          Products
        </Link>
      </li>

      {/* <li>
        {languageToUse.language === "english" ? (
          <Flag
            className="language-icon"
            src={flagFr}
            onClick={() => handleSetLanguage("french")}
            alt="Set language to French"
          />
        ) : (
          <Flag
            className="language-icon"
            src={flagEn}
            onClick={() => handleSetLanguage("english")}
            alt="Set language to English"
          />
        )}
      </li> */}
    </Ul>
  );
};

export default RightNav;
