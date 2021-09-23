import React from "react";
import "../styles/Footer.css";

import Subscribe from "../components/Subscribe";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <p className="heart"> &#10084;</p>
        <h4 className="footer-title">Claire Turner Design</h4>
      </div>
      <div className="subscribe">
        <Subscribe />
      </div>

      <div className="etsy">
        <p>
          Visit my{" "}
          <a
            href="https://claireturnerdesign.patternbyetsy.com/"
            target="_blank"
            rel="noreferrer"
          >
            Etsy shop
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
