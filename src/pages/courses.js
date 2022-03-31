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
        <div key={course.id} className="courses-list">
          <img className="course-flyer" src={course.image.file.url} />
          <img className="course-flyer" src={course.image.file.url} />
          <img className="course-flyer" src={course.image.file.url} />
          <img className="course-flyer" src={course.image.file.url} />
          <img className="course-flyer" src={course.image.file.url} />
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
      {coursesList}
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
    allContentfulCourse {
      nodes {
        image {
          file {
            url
          }
        }
        name
        language
      }
    }
  }
`;

ProductsPage.Layout = Layout;
export default ProductsPage;
