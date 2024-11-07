import React from "react";

const InventoryItems = () => {
  return (
    <div>
      <div className="container-fluid p-3 inventory-item mt-4">
        <div>
          <h6>Inventory Items</h6>
        </div>
        <div className="share">
          <input type="text" placeholder="Search" className="mx-2" />
          <div className="share">
            <button className="btn btn-white border border-2 mx-2 side-btn">
              <img src="/Image/fi_filter.png" />
              Filter
            </button>
          </div>
          <div className="share">
            <button className="btn btn-white border border-2 mx-2 side-btn">
              <img src="/Image/Calendar.png" />
              filter
            </button>
          </div>
          <div className="share">
            <button className="btn btn-white border border-2 mx-2 side-btn">
              <img src="/Image/Send.png" />
              Share
            </button>
          </div>
          <div className="share">
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
    </div>
  );
};

export default InventoryItems;
