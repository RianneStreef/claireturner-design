import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Contact from "../components/Contact";
import Insta from "../components/Insta";
import Footer from "../components/Footer";

import "../styles/IndexPage.css";

import bunting from "../images/bunting.jpeg";
import { content } from "../content/languages";

const IndexPage = (props) => {
  let { language, setLanguage, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <div>
      <div className="landing">
        <Header
          language={language}
          setLanguage={setLanguage}
          languageToUse={languageToUse}
        />
        <h1>Children's Illustrations for all ages</h1>
        <div className="bunting" />
      </div>
      <Intro language={language} languageToUse={languageToUse} />
      <Contact language={language} languageToUse={languageToUse} />
      <Insta language={language} languageToUse={languageToUse} />
      <Footer
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
    </div>
  );
};

IndexPage.Layout = Layout;
export default IndexPage;
