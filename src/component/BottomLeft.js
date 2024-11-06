import React from "react";

const BottomLeft = () => {
  return (
    <>
      <div className="d-flex">
        <button className="bottom px-5 mx-4">10 </button>
        <p className="px-5 mx-1">Items per page</p>
        <p className="px-5 mx-1">1-10 of 200 items</p>
      </div>
    </>
  );
};

export default BottomLeft;
