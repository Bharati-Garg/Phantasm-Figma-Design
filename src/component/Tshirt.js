import React from "react";
import LastOrder from "./LastOrder";
import TotalOrder from "./TotalOrder";
import View from "./View";

const Tshirt = () => {
  return (
    <div>
      <div className="row mt-5">
        <div className="col-md-1 me-5">
          <img src="/Image/tshirt.png" className="tshirt" />
        </div>
        <div className="col-md-3 bg-white p-3 rounded rounded-4 ms-5">
          <LastOrder />
        </div>
        <div className="col-md-3 bg-white p-3 rounded rounded-4 ms-5">
          <TotalOrder />
        </div>
        <div className="col-md-3 bg-white p-3 rounded rounded-4 ms-5">
          <View />
        </div>
      </div>
    </div>
  );
};

export default Tshirt;
