import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

import "../styles/ProductPage.css";

const ProductsPage = (props) => {
  let products = props.data.allContentfulProduct.nodes;

  const productList = products.map((product) => {
    return (
      <div key={product.id} className="product-card">
        <h3 className="product-name">{product.productName}</h3>
        <p className="product-description">{product.productDescription}</p>
        <img
          src={product.productImage.file.url}
          alt={product.productName}
          className="product-img"
        />
        <p className="product-price">{product.productPrice}</p>
      </div>
    );
  });

  return <div className="product-page">{productList}</div>;
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
        id
      }
    }
  }
`;

ProductsPage.Layout = Layout;
export default ProductsPage;
