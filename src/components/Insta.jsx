import React from "react";
import "../styles/Insta.css";

import { Helmet } from "react-helmet";

const Insta = () => {
  return (
    <>
      <Helmet>
        <script
          src="https://cdn2.woxo.tech/a.js#60ca0c172d51e300159c2b7c"
          async
          data-usrc
        />
      </Helmet>
      <div
        className="insta"
        id="insta"
        data-mc-src="a18fa560-8939-48e8-8966-63ed95aafd54#instagram"
      />
    </>
  );
};

export default Insta;
