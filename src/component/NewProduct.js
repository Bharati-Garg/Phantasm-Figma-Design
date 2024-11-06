import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import NewInventory from "./NewInventory";
import NewInventoryItemsData from "./NewInventoryItemsData";

const NewProduct = () => {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="container-fluid">
          <div className="body">
            <Header />
          </div>
          <div className="bg-light pb-5">
            <NewInventory />
            <NewInventoryItemsData />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
