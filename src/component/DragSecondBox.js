import React from "react";
import AdditionalImage from "./AdditionalImage";

const DragSecondBox = () => {
  return (
    <div>
      <img src="\Image\Upload Image.png" alt="Shirt" className="tshirt-img" />
      <div className="d-flex">
        <img
          src="/Image/Upload Image (1).png"
          alt="small-shirt"
          className="small-tshirt"
        />
        <AdditionalImage />
      </div>
    </div>
  );
};
export default DragSecondBox;
