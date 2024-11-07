import React from "react";

const ProductCard = ({ details }) => {
  return (
    <div>
      {/* <div className="d-flex justify-content-between">
        <input type="checkbox" />
        <p>
          <img src={details.img} className="me-2" />
          {details.name}
        </p>
        <p>{details.category}</p>
        <p>{details.price}</p>
        <p>{details.stock}</p>
        <p>{details.discount}</p>
        <p>{details.value}</p>
        <select id="country" name="country" className="publishbtn px-4 mb-3">
          <option value="publish">{details.action}</option>
          <option value="unpublish">Unpublish</option>
        </select>
        <button className="px-3 mb-3 statusbtn">{details.status}</button>
      </div> */}
      <div className="items">
        <input type="checkbox" />
        <div className="col-md-2 image">
          <img src={details.img} className="me-2" />
          {details.name}
        </div>
        <div className="col-md-1 img">{details.category}</div>
        <div className="col-md-1">{details.price}</div>
        <div className="col-md-1 image">{details.stock}</div>
        <div className="col-md-1 img">{details.discount}</div>
        <div className="col-md-1">{details.value}</div>
        <div className="col-md-1 img">
          <select
            id="country"
            name="country"
            className="mb-3 publishbtn px-3 py-2"
          >
            <option value="publish">{details.action}</option>
            <option value="unpublish">Unpublish</option>
          </select>
        </div>
        <div className="col-md-1 image">
          <button className="statusbtn px-3 py-2">{details.status}</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
