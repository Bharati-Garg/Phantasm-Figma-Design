import React from "react";
import Purchase from "./Purchase";
import ViewHeading from "./ViewHeading";
import ViewData from "./ViewData";

const ViewMainSection = () => {
  return (
    <div className="bg-white rounded rounded-4 ms-3 me-5 mt-5 view-main-section">
      <div className="p-5">
        <Purchase />
      </div>
      <hr />
      <ViewHeading />
      <hr />
      <ViewData />
    </div>
  );
};

export default ViewMainSection;
