import React from "react";

const InventoryItems = () => {
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

export default InventoryItems;
