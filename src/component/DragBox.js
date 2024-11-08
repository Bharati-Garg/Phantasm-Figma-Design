import React from "react";

const DragBox = () => {
  return (
    <div>
      <div id="getData" className="drago">
        <img src="/Image/Image.png" className="d-flex upload-img" />
        <span className="text-primary ms-2 mt-5">
          <input type="file" name="image" accept="/Image" />
        </span>
        <div>
          <p>
            Upload a cover image for your product. File Format
            <span className="png"> jpeg, png </span>
            Recommened Size <span className="png"> 600x600 (1:1)</span>
          </p>
        </div>
      </div>
      <br />
    </div>
  );
};

export default DragBox;
