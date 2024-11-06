import React from "react";
import productData from "../utils/ProductData";
import ProductCard from "./ProductCard";

const Product = () => {
  return (
    <div>
      {productData.map((value, index) => {
        return <ProductCard details={value} key={index} />;
      })}
    </div>
  );
};

export default Product;
