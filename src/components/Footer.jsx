import React from "react";
import "../styles/Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import Subscribe from "../components/Subscribe";
import Copyright from "./Copyright";

const Footer = () => {
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
      <Copyright />
    </>
  );
};

export default Footer;
