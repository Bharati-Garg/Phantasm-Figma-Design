import React from "react";
import { Link } from "react-router-dom";

const NewInventory = () => {
  return (
    <div className="p-3 mt-2">
      <div className="d-flex justify-content-between container-fluid">
        <div>
          <h3>Inventory Summary</h3>
        </div>
        <div>
          <button className="text-white bg-dark border border-0 button">
            Save as Draft
          </button>
          <Link to="/thirdpage">
            <button className="text-white bg-primary border border-0 button">
              Save & Publish
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewInventory;
