import React from "react";
import "../styles/Footer.css";

import Subscribe from "../components/Subscribe";

const Footer = () => {
  return (
    <div className="footer">
      <div className="subscribe">
        <Subscribe />
      </div>
      <div className="footer-logo">
        <p className="heart"> &#10084;</p>
        <h4 className="footer-title">Claire Turner Design</h4>
      </div>
      <div className="etsy">
        Visit my{" "}
        <a href="https://claireturnerdesign.patternbyetsy.com/"> Etsy shop</a>
      </div>
    </div>
  );
};

export default Footer;
