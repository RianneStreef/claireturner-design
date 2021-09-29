import React, { useState } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { graphql } from "gatsby";

import "../styles/ProductPage.css";

import { content } from "../content/languages";

const ProductsPage = (props) => {
  let { language, setLanguage, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  console.log(props);
  const { data } = props;

  const allProducts = data.allContentfulProduct.nodes;

  const emptyQuery = "";

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  });

  const handleInputChange = (event) => {
    const query = event.target.value;
    const { data } = props;

    const products = data.allContentfulProduct.nodes || [];

    const filteredData = products.filter((product) => {
      const { productCategory } = product;
      return productCategory === query;
    });
    setState({
      query,
      filteredData,
    });
  };

  const { filteredData, query } = state;
  const hasSearchResults = filteredData && query !== emptyQuery;
  const products = hasSearchResults ? filteredData : allProducts;

  let [isShown, setIsShown] = useState(false);

  const productList = products.map((product) => {
    return (
      <div
        key={product.id}
        className="product-card"
        style={{
          backgroundImage: `url(${product.productImage.file.url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        onClick={() => setIsShown(!isShown)}
      >
        <span className="product-price">{product.productPrice}</span>
        {isShown && (
          <p className="product-description">{product.productDescription}</p>
        )}
      </div>
    );
  });

  return (
    <>
      <Header language={language} languageToUse={languageToUse} />
      <div className="product-category-selection">
        <button
          className="category-select-button"
          onClick={handleInputChange}
          value="watercolors"
        >
          Watercolors
        </button>
        <button
          className="category-select-button"
          onClick={handleInputChange}
          value="digital prints"
        >
          Digital Prints
        </button>
        <button
          className="category-select-button"
          onClick={handleInputChange}
          value="ink drawings"
        >
          Ink Drawing
        </button>
        <button
          className="category-select-button"
          onClick={handleInputChange}
          value="acrylic"
        >
          Acrylic
        </button>
        <button
          className="category-select-button"
          onClick={handleInputChange}
          value="craft kits"
        >
          Craft Kits
        </button>
        <button
          className="category-select-button"
          onClick={handleInputChange}
          value="bunting"
        >
          Bunting
        </button>
        <button
          className="category-select-button"
          onClick={handleInputChange}
          value=""
        >
          All
        </button>
      </div>
      <div className="product-page">{productList}</div>
      <Footer
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
    </>
  );
};
export const productQuery = graphql`
  query productQuery {
    allContentfulProduct {
      nodes {
        productDescription
        productImage {
          file {
            url
          }
        }
        productName
        productPrice
        productCategory
        id
      }
    }
  }
`;

ProductsPage.Layout = Layout;
export default ProductsPage;
