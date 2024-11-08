import React from "react";

const ViewData = () => {
  return (
    <div>
      <div>
        <div className="d-flex justify-content-between">
          <input type="checkbox" className="ms-2" />
          <p>12 Aug 2022-12:25 am</p>
          <p>Home Delivery</p>
          <p>₦25,000.00</p>
          <p>2</p>
          <p>₦0.00</p>
          <p>₦50,000.00</p>
          <button className="publish border border-none me-4">
            Compeleted
          </button>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ViewData;
