import React, { useState } from "react";

import "../styles/global.css";

const Layout = ({ children }) => {
  let [language, setLanguage] = useState("english");
  let languageToUse = "english";

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      language,
      setLanguage,
      languageToUse,
    })
  );
  return (
    <div className="layout">
      <section className="content">{childrenWithProps}</section>
    </div>
  );
};

export default Layout;
