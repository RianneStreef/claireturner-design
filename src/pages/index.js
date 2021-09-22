import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Contact from "../components/Contact";
import Insta from "../components/Insta";
import Footer from "../components/Footer";

import "../styles/IndexPage.css";

const IndexPage = () => {
  return (
    <div>
      <div className="landing">
        <Header />
        <h1>Children's Illustrations for all ages</h1>
      </div>
      <Intro />
      <Contact />
      <Insta />
      <Footer />
    </div>
  );
};

IndexPage.Layout = Layout;
export default IndexPage;

// insta on extra page or on index between
