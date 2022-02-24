import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

const LogoPage = (props) => {
  let { language, setLanguage, languageToUse } = props;

  return (
    <div>
      <Header />
      <Logo />
      <Footer
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
    </div>
  );
};

LogoPage.Layout = Layout;
export default LogoPage;
