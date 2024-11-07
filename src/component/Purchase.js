import React from "react";
import InventoryItems from "./InventoryItems";

const Purchase = () => {
  return (
    <div>
      <div className="container-fluid d-flex justify-content-between">
        <div>
          <h4>Purchase</h4>
        </div>
        <div className="d-flex">
          <input type="text" placeholder="Search" className="mx-2" />
          <button className="btn btn-white border border-2 mx-2 side-btn">
            <img src="/Image/fi_filter.png" className="me-5" />
            Filter
          </button>
          <button className="btn btn-white border border-2 mx-2 side-btn">
            <img src="/Image/Calendar.png" className="me-5" />
            filter
          </button>
          <button className="btn btn-white border border-2 mx-2 side-btn">
            <img src="/Image/Send.png" className="me-5" />
            Share
          </button>
          <div>
            <select id="country" name="country" className="bulk">
              <option value="australia">Bulk Action</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
