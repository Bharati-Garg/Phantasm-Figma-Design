import React from "react";
import InventoryItems from "./InventoryItems";
import Heading from "./Heading";
import Product from "./Product";
import Bottom from "./Bottom";

const MainPage = () => {
  return (
    <div className="mx-4 bg-white mainpage">
      <InventoryItems />
      <hr />
      <Heading />
      <Product />
      <hr />
      <Bottom />
    </div>
  );
};

export default MainPage;
