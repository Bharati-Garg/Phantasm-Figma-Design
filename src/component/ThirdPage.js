import React from "react";
import Header from "./Header";
import ThirdPageTop from "./ThirdPageTop";
import Sidebar from "./Sidebar";
import ThirdPageFullData from "./ThirdPageFullData";

const ThirdPage = () => {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="container-fluid">
          <Header />
          <ThirdPageTop />
        </div>
      </div>
    </>
  );
};

export default ThirdPage;
