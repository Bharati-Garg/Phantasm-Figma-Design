import React from "react";

const LastOrder = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <p className="">Last Order </p>
          <h6 className="ms-2 mt-1"> 12 Sep 2022</h6>
        </div>
        <div>
          <buttton className="publish mt-3">Publish</buttton>
        </div>
      </div>

      <div className="d-flex mt-5">
        <div>
          <p className="price">Price</p>
          <h6 className="p">₦25,000.00</h6>
        </div>
        <div className="ms-5">
          <p className="stock">In-Stock</p>
          <h6 className="s">20</h6>
        </div>
      </div>
    </>
  );
};

export default LastOrder;
