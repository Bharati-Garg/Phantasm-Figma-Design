import React, { useState } from "react";

const DragBox = () => {
  const [drag, setDrag] = useState("Upload Image");
  function dragimage() {
    setDrag();
  }
  function allowDrop(even) {
    even.preventDefault();
  }

  function drop(even) {
    even.preventDefault();
    var fetchData = even.dataTransfer.getData("text");
    even.target.appendChild(document.getElementById(fetchData));
  }
  return (
    <div>
      <div id="getData" onDrop={drop} onDragOver={allowDrop} className="drago">
        <img src="/Image/Image.png" className="d-flex upload-img" />
        <img src="/Image/fi_upload-cloud.png" className="uploadimg" />

        <span className="text-primary ms-2 mt-5" onClick={dragimage}>
          {drag}
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
