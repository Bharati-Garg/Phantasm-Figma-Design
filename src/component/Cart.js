import React from "react";
import Pending from "./Pending";
import Returned from "./Returned";

const Cart = () => {
  return (
    <div>
      <div className="row mt-5 ms-3">
        <div className="col-md-5 bg-white rounded rounded-4 me-5 p-3">
          <Pending />
        </div>
        <div className="col-md-6 bg-white rounded rounded-4 p-3">
          <Returned />
        </div>
      </div>
    </div>
  );
};

export default Cart;
