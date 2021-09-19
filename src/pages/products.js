import React, { useState } from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

import "../styles/ProductPage.css";

const ProductsPage = (props) => {
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

  const productList = products.map((product) => {
    return (
      <div
        key={product.id}
        className="product-card"
        style={{
          backgroundImage: `url(${product.productImage.file.url})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="product-price">{product.productPrice}</p>
        {/* <h3 className="product-name">{product.productName}</h3> */}
        <p className="hide product-description">{product.productDescription}</p>
      </div>
    );
  });

  return (
    <>
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
