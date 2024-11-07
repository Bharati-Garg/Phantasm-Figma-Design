import React from "react";
import productData from "../utils/ProductData";
import ProductCard from "./ProductCard";

const Product = () => {
  return (
    <>
      {productData.map((value, index) => {
        return <ProductCard details={value} key={index} />;
      })}
    </>
  );
};

export default Product;
