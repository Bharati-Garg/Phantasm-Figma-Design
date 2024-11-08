import React from "react";

const ViewpageBtn = () => {
  return (
    <div className="d-flex mt-3 justify-content-end me-3">
      <div>
        <select
          id="country"
          name="country"
          className="bg-dark text-white button"
        >
          <option value="australia">Edit Product</option>
          <option value="canada">iPhone 13 Pro</option>
          <option value="usa">iPhone 12 Pro</option>
        </select>
      </div>
      <div>
        <button className="btn btn-danger button">Unpublish Product</button>
      </div>
    </div>
  );
};

export default ViewpageBtn;
