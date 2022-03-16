import React, { useState } from "react";

import { Link } from "gatsby";

import "../styles/Footer.css";

import Subscribe from "../components/Subscribe";
import Copyright from "./Copyright";

import { content } from "../content/languages";

import arrow from "../images/arrow-right.png";
import flagEn from "../images/icon-en.png";
import flagFr from "../images/icon-fr.png";
import instagram from "../images/instagram.svg";
import facebook from "../images/facebook.svg";
import footerLogo from "../images/footerLogo.png";

const Footer = (props) => {
  let { language, setLanguage, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  function handleSetLanguage(language) {
    setLanguage(language);
    setIsShown(false);
    localStorage.setItem("languageInStorage", language);
  }

  let [isShown, setIsShown] = useState(false);

  return (
    <div className="footer">
      <div className="footer-links-total">
        <img src={footerLogo} alt="Logo" className="footer-logo" />

        <div className="footer-links">
          <div className="footer-link-column">
            <Link to="/#about">{languageToUse.about}</Link>
            <Link to="/#insta">{languageToUse.pictures}</Link>
            <Link to="/#contact">{languageToUse.contact}</Link>
          </div>
          <div className="footer-link-column footer-link-column-middle">
            <Link to="/products">Originals</Link>
            <Link to="/shells">Shells and Shanties</Link>
          </div>

          <div className="footer-link-column "></div>
        </div>
        <div className="social-links">
          <a
            href="https://www.facebook.com/Claire-Turner-Design-726633950744427/"
            target="_blank"
          >
            <img src={facebook} alt="facebook link" className="social-link" />
          </a>
          <a
            href="https://www.instagram.com/claireturnerdesign/"
            target="_blank"
          >
            <img src={instagram} alt="instagram link" className="social-link" />
          </a>
        </div>
        <Subscribe />
      </div>
      <div className="contact-footer">
        <div>
          <p>Check out: </p>
          <p>Friends</p>
          <p>or partners</p>
        </div>
        <div className="set-language-footer">
          <img
            src={flagEn}
            onClick={() => handleSetLanguage("english")}
            className={`flag ${
              languageToUse.language === "english" ? "opaque" : "fade"
            } `}
          />
          <img
            src={flagFr}
            onClick={() => handleSetLanguage("french")}
            className={`flag ${
              languageToUse.language === "french" ? "opaque" : "fade"
            } `}
          />
        </div>
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
