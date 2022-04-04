import React from "react";

import "../styles/Footer.css";

import Subscribe from "../components/Subscribe";
import Copyright from "./Copyright";

import { content } from "../content/languages";

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
    localStorage.setItem("languageInStorage", language);
    console.log(languageToUse);
  }

  return (
    <div className="footer">
      <div className="footer-links-total">
        <img src={footerLogo} alt="Logo" className="footer-logo" />
        <Subscribe language={language} languageToUse={languageToUse} />
        <div className="social-links">
          {/* <a
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
          </a> */}
          <p>
            {languageToUse.visit}
            <a href="">Etsy Shop! </a>
          </p>
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
      </div>

      <Copyright language={language} languageToUse={languageToUse} />
    </div>
  );
};

export default Footer;
