import React from "react";

const Active = () => {
  return (
    <div>
      <div>
        <div className="bg-primary p-4 all">
          <img src="/Image/icon.png" />
          <div className="row">
            <div className="col-md-6">
              <p className="text-white pt-3">All Products</p>
              <h4 className="text-white">350</h4>
            </div>
            <div className="col-md-6">
              <p className="text-white pt-3">Active</p>
              <h4 className="text-white">
                316<span className="active"> 86%</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Active;
