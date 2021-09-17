import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/global.css";

const Layout = ({ children }) => {
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      // props to drill
    })
  );
  return (
    <div className="layout">
      <Header />
      <section className="content">{childrenWithProps}</section>
      <Footer />
    </div>
  );
};

export default Layout;
