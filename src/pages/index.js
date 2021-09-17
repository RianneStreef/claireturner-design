import React from "react";
import Layout from "../components/Layout";
import Intro from "../components/Intro";
import Contact from "../components/Contact";
import Insta from "../components/Insta";

const IndexPage = () => {
  return (
    <div>
      <Intro />
      <Contact />
      <Insta />
    </div>
  );
};

IndexPage.Layout = Layout;
export default IndexPage;

// insta on extra page or on index between
