import React from "react";

import delula from "../images/logoDelula.png";

import { content } from "../content/languages";

import "../styles/Logo.css";

const Logo = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  console.log(languageToUse);

  return (
    <div>
      <h1>Logo Design</h1>
      <img src={delula} className="logo-design" />
      <p className="logo-intro">{languageToUse.logoIntro}</p>
    </div>
  );
};

export default Logo;
