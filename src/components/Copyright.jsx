import React from "react";

import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

// import { content } from "../content/languages";

import "../styles/Copyright.css";

const Copyright = () => {
  // let { language, languageToUse } = props;

  // language === "english"
  //   ? (languageToUse = content.english)
  //   : (languageToUse = content.french);
  return (
    <div className="copyright">
      <p>
        Copyright
        <sup>
          {" "}
          <FontAwesomeIcon icon={faCopyright} size="1x" />
        </sup>{" "}
        Claire Turner Design - All rights reserved.
        {/* {languageToUse.copyright} */}
      </p>
      <p>
        {/* {language.copyright2} */}
        <Link to="/legal">
          - Legal mentions
          {/* {languageToUse.mentionsLegal} */}
        </Link>
      </p>
      <p className="vts">
        Created by {/* {languageToUse.copyright3} */}
        <a href="http://www.vts-webdesign.com" target="blank">
          <b>Rianne - VTS-WebDesign</b>
        </a>
      </p>
    </div>
  );
};

export default Copyright;
