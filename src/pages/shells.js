import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/ShellsPage.css";

import promoVideo from "../images/promo.mp4";

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
        <title>Shells and Shanties</title>
        <meta name="robots" content="index, follow" />
        <script
          src="https://cdn2.woxo.tech/a.js#60ca0c172d51e300159c2b7c"
          async
          data-usrc
        ></script>
      </Helmet>
      <div className="shells">
        <Header
          language={language}
          setLanguage={setLanguage}
          languageToUse={languageToUse}
        />
        <h1>Shells and Shanties</h1>
        <div className="shells-video-container">
          <video controls autoplay className="shells-video">
            <source src={promoVideo} type="video/mp4" />
          </video>
        </div>
        <p className="shells-intro">
          vulputate tortor iaculis. Ut id nulla imperdiet, porta neque vitae,
          auctor nisi. Mauris neque lectus, semper a eros id, tincidunt
          consequat nibh. Curabitur iaculis metus at lectus egestas, eu ornare
          odio bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Etiam mollis accumsan pellentesque. Cras consectetur lorem
          nulla, et blandit neque dignissim vitae. Donec at pretium est.
          Maecenas cursus mattis orci eget consectetur. Morbi finibus, dui ac
          ullamcorper aliquam, sem sapien faucibus mi, quis elementum nulla
          nulla vitae augue. Proin mattis dolor neque, ac facilisis velit
          facilisis non. Vestibulum at elit vitae mi congue ultrices porta sed
          massa. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Donec vel justo massa. Curabitur ut
          eros lacus. Fusce mollis tempor erat at iaculis. Morbi in lacus quam.
          Praesent dignissim maximus gravida. Cras accumsan sapien quam, id
          cursus augue placerat quis. Ut ultricies viverra diam, sed viverra
          orci. Phasellus aliquam ac felis in faucibus.
        </p>
        <div data-mc-src="9181c193-d5e2-450f-9fe7-cca8106b39a6#instagram"></div>
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
