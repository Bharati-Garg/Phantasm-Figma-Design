import React from "react";

const BottomLeft = () => {
  return (
    <>
      <div className="d-flex">
        <div>
          <select id="country" name="country" className="ten">
            <option value="australia">10</option>
            <option value="canada">20</option>
            <option value="usa">30</option>
          </select>
        </div>
        <p className="px-5 mx-1">Items per page</p>
        <p className="">1-10 of 200 items</p>
      </div>
    </>
  );
};

export default BottomLeft;
