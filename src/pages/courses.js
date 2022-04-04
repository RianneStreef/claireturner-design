import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Link } from "gatsby";

import { graphql } from "gatsby";

import "../styles/CoursesPage.css";

import { content } from "../content/languages";
import { Helmet } from "react-helmet";

const ProductsPage = (props) => {
  let { language, setLanguage, languageToUse } = props;

  const { data } = props;

  let courses = data.allContentfulCourse.nodes;
  console.log(courses);
  console.log("language");
  console.log(language);

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  const coursesList = courses
    .filter((course) => course.language === languageToUse.language)
    .map((course) => {
      return (
        <div
          className="course-flyer"
          key={course.id}
          style={{
            backgroundImage: `url(${course.image.file.url})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "30vw",
            width: "20vw",
          }}
        >
          <div className={`full-banner ${!course.full ? "hidden" : ""}`}>
            {languageToUse.full}
          </div>
        </div>
      );
    });

  return (
    <>
      <Helmet>
        <title>Courses</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Children's Illustrations for all ages made by Claire Turner, in Talloires, France."
        />
        <meta
          name="keywords"
          content="children's illustrations, animal illustrations, Talloires, France, Shell and Shanties, watercolors, digital prints, ink drawing, acrylic, bunting"
        />
        <link rel="canonical" href="https://www.claireturner-design.com/" />
      </Helmet>
      <Header language={language} languageToUse={languageToUse} />
      <p className="subscribe-link">
        {languageToUse.click}
        <Link to="/#contact">{languageToUse.here}</Link>
        {languageToUse.toSubscribe}
      </p>
      <div className="courses-list">{coursesList}</div>
      <Footer
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
    </>
  );
};
export const coursesQuery = graphql`
  query coursesQuery {
    allContentfulCourse(sort: { fields: startDate }) {
      nodes {
        image {
          file {
            url
          }
        }
        language
        full
        startDate
      }
    }
  }
`;

ProductsPage.Layout = Layout;
export default ProductsPage;
