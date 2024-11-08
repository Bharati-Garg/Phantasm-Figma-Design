import React from "react";
import { Link } from "react-router-dom";
import ThirdPageFullData from "./ThirdPageFullData";

const ThirdPageTop = () => {
  return (
    <div className="p-3 mt-2 bg-light">
      <div className="d-flex justify-content-between container-fluid">
        <div>
          <h6>Inventory Summary</h6>
        </div>
        <div>
          <button className="text-white bg-dark border border-0 button">
            Save as Draft
          </button>
          <Link to="/viewpage">
            <button className="text-white bg-primary border border-0 button">
              Save & Publish
            </button>
          </Link>
        </div>
      </div>
      <ThirdPageFullData />
    </div>
  );
};

export default ThirdPageTop;
