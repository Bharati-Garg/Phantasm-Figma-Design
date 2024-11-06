import React from "react";

const NewInventory = () => {
  return (
    <div className="p-3 mt-2">
      <div className="d-flex justify-content-between container-fluid">
        <div>
          <h6>Inventory Summary</h6>
        </div>
        <div>
          <button className="text-white bg-dark border border-0 button">
            Save as Draft
          </button>
          <button className="text-white bg-primary border border-0 button">
            Save & Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewInventory;
