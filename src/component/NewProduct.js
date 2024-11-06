import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const NewProduct = () => {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="container-fluid">
          <div className="body">
            <Header />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
