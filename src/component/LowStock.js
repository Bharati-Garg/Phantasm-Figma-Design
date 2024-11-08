import React from "react";

const LowStock = () => {
  return (
    <div>
      <div>
        <div className="bg-white p-4 all">
          <div className="d-flex justify-content-between">
            <img src="/Image/icon (1).png" />
            <div>
              <select id="country" name="country" className="week">
                <option value="australia">This Week</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <p className="text-danger pt-3">Low Stock Alert</p>
              <h4 className="text-black">23</h4>
            </div>
            <div className="col-md-4">
              <p className="expired pt-3">Expired</p>
              <h4 className="text-black">3</h4>
            </div>
            <div className="col-md-4">
              <p className="start pt-3">1 Start Rating</p>
              <h4 className="text-black">2</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowStock;
