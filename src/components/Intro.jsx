import React from "react";
import IntroClaire from "../images/IntroClaire.png";

import "../styles/Intro.css";

const Intro = () => {
  return (
    <div>
      <div className="intro" id="about">
        <div className="intro-text">
          <p>
            Hi everyone my name is Claire I'm a London born artist living in
            Annecy with my hubby and two boys. I work to produce original and
            fun Children's illustrations, great for unique gifts and a brilliant
            way to decorate any nursery or playroom. My boys are my inspiration
            and my love for drawing and passion for art has made this little
            company a reality, thanks also to forced time off my regular job due
            to a pregnancy and lockdown. A Chelsea Arts college student in
            Textiles and design and victim of the financial crisis at the time,
            I started off my working career waitressing.{" "}
          </p>
          <p>
            Dreaming every year of starting my own little Label and earning
            money from doing something I love past me by, as life took over,
            with no time to work for cash and follow the ideal at the same time.
            Fifteen years later the dream is coming true woo hoo.... finally.
            The satisfaction of waking up in the morning desperate to start the
            working day is overwhelming, with ideas flowing too fast for the
            hours I have to create. Finally having a family and work life
            balance, is more perfect than I imagined, as my days are spent
            drawing with the oldest whilst the little one sleeps in his sling.
            I'm so excited to share this project with you and I really hope you
            enjoy it as much as I have enjoyed creating it for you.{" "}
          </p>{" "}
          <p>
            Thanks for your support guys and here's hoping to many years of
            sharing my illustrations with you.
          </p>
        </div>
        <div className="intro-image-container">
          <img src={IntroClaire} alt="Claire" className="intro-claire" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
