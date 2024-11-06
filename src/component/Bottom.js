import React from "react";
import BottomLeft from "./BottomLeft";
import BottomRight from "./BottomRight";

const Bottom = () => {
  return (
    <div className="d-flex justify-content-between">
      <BottomLeft />
      <BottomRight />
    </div>
  );
};

export default Bottom;
