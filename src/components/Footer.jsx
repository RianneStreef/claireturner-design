import React, { useState } from "react";
import styled from "styled-components";

import "../styles/Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import Subscribe from "../components/Subscribe";
import Copyright from "./Copyright";

import { content } from "../content/languages";

import flagEn from "../images/icon-en.png";
import flagFr from "../images/icon-fr.png";

const Flag = styled.img`
  width: 30px;
  margin-right: 20px;
`;

const Footer = (props) => {
  let { language, setLanguage, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  function handleSetLanguage(language) {
    setLanguage(language);
    setIsShown(false);
  }

  let [isShown, setIsShown] = useState(false);

  return (
    <>
      <div className="footer">
        <div className="footer-logo">
          <p className="heart">
            {" "}
            <FontAwesomeIcon icon={faHeart} size="1x" />
          </p>
          <h4 className="footer-title">Claire Turner Design</h4>
        </div>
        <div className="subscribe">
          <Subscribe language={language} languageToUse={languageToUse} />
        </div>

        <div className="etsy">
          <p>
            {languageToUse.visit}{" "}
            <a
              href="https://claireturnerdesign.patternbyetsy.com/"
              target="_blank"
              rel="noreferrer"
            >
              Etsy shop
            </a>
          </p>
          <div className="set-language-footer">
            {language === "french" ? (
              <p onClick={() => setIsShown(true)} className="language-option">
                <Flag
                  className="language-icon-footer"
                  src={flagFr}
                  alt="Set language to French"
                />
                Français
              </p>
            ) : (
              <p onClick={() => setIsShown(true)} className="language-option">
                <Flag
                  className="language-icon-footer"
                  src={flagEn}
                  alt="Set language to English"
                />
                English
              </p>
            )}

            {isShown && (
              <div className="select-language-menu">
                <p onClick={() => handleSetLanguage("french")}>
                  <Flag
                    className="language-icon-footer"
                    src={flagFr}
                    alt="Set language to French"
                  />
                  Français
                </p>
                <p onClick={() => handleSetLanguage("english")}>
                  <Flag
                    className="language-icon-footer"
                    src={flagEn}
                    alt="Set language to English"
                  />
                  English
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Copyright language={language} languageToUse={languageToUse} />
    </>
  );
};

export default Footer;
