import React from "react";
import "../styles/global.css";

const Layout = ({ children }) => {
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      // props to drill
    })
  );
  return (
    <div className="layout">
      <h2>Header</h2>
      <section className="content">{childrenWithProps}</section>
      <h2>Footer</h2>
    </div>
  );
};

export default Layout;
