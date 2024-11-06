import React from "react";

const AdditionalImage = () => {
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
      <div
        id="additional"
        onDrop={drop}
        onDragOver={allowDrop}
        className="drago"
      >
        <img src="/Image/Image.png" className="d-flex upload_img" />
        <img src="/Image/fi_upload-cloud.png" className="upload" />
        <span className="text-primary ms-2 mt-5">Upload Image</span>
      </div>
      <br />
    </div>
  );
};
export default AdditionalImage;
