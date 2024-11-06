import React from "react";
import DropDown from "./DropDown";

const InventoryItems = () => {
  const title = "Bulk Action";
  return (
    <div>
      <div className="container-fluid p-3 d-flex justify-content-between mt-4">
        <div>
          <h6>Inventory Items</h6>
        </div>
        <div className="d-flex">
          <input type="text" placeholder="Search" className="mx-2" />
          <button className="btn btn-white border border-2 mx-2 side-btn">
            <img src="/Image/fi_filter.png" />
            Filter
          </button>
          <button className="btn btn-white border border-2 mx-2 side-btn">
            <img src="/Image/Calendar.png" />
            filter
          </button>
          <button className="btn btn-white border border-2 mx-2 side-btn">
            <img src="/Image/Send.png" />
            Share
          </button>
          <DropDown title={title} />
        </div>
      </div>
    </div>
  );
};

export default InventoryItems;
