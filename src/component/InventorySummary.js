import React from "react";
import Active from "./Active";
import LowStock from "./LowStock";
import { Link } from "react-router-dom";

const InventorySummary = () => {
  return (
    <div className="p-3 mt-2">
      <div className="d-flex justify-content-between container-fluid">
        <h6>Inventory Summary</h6>
        <Link to="/NewProduct">
          <button className="text-white border border-0 button">
            + Add a New Product
          </button>
        </Link>
      </div>
      <div className="row twobox">
        <div className="col-md-6">
          <Active />
        </div>
        <div className="col-md-6">
          <LowStock />
        </div>
      </div>
    </div>
  );
};

export default InventorySummary;
