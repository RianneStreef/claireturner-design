import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/IndexPage.css";

import { content } from "../content/languages";
import { Helmet } from "react-helmet";

const ShellsPage = (props) => {
  let { language, setLanguage, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div>
      <Helmet>
        <title>Claire Turner Design</title>
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="shells">
        <Header
          language={language}
          setLanguage={setLanguage}
          languageToUse={languageToUse}
        />
        Shells and Shanties
      </div>
      <Footer
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
    </div>
  );
};

ShellsPage.Layout = Layout;
export default ShellsPage;
