import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ProductUrl from "./ProductUrl";
import ViewpageBtn from "./ViewpageBtn";
import Tshirt from "./Tshirt";
import Cart from "./Cart";
import ViewMainSection from "./ViewMainSection";

const ViewPage = () => {
  return (
    <div>
      <>
        <div className="d-flex">
          <Sidebar />
          <div className="container-fluid">
            <div className="body">
              <Header />
            </div>
            <div className="bg-light pb-5">
              <div className="row">
                <div className="col-md-6">
                  <ProductUrl />
                </div>
                <div className="col-md-6">
                  <ViewpageBtn />
                </div>
              </div>
              <Tshirt />
              <Cart />
              <ViewMainSection />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ViewPage;
