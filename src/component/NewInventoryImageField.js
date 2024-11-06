import React from "react";
import DragBox from "./DragBox";
import AdditionalImage from "./AdditionalImage";
import SquareBox from "./SquareBox";

const NewInventoryImageField = () => {
  return (
    <>
      <div>
        <DragBox />
        <div className="d-flex">
          <AdditionalImage />
          <SquareBox />
        </div>
      </div>
    </>
  );
};

export default NewInventoryImageField;
