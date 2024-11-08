import React from "react";
import DragBox from "./DragBox";
import AdditionalImage from "./AdditionalImage";
import SquareBox from "./SquareBox";

const NewInventoryImageField = () => {
  return (
    <>
      <div>
        <DragBox />
        <div className="small-drag">
          <AdditionalImage />
          <SquareBox />
        </div>
      </div>
    </>
  );
};

export default NewInventoryImageField;
