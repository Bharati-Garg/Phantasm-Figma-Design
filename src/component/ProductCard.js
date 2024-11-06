import React from "react";

const ProductCard = ({ details }) => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <input type="checkbox" />
        <p>
          <img src={details.img} />
          {details.name}
        </p>
        <p>{details.category}</p>
        <p>{details.price}</p>
        <p>{details.stock}</p>
        <p>{details.discount}</p>
        <p>{details.value}</p>
        <button className="px-4 mb-3 publishbtn">{details.action}</button>
        <button className="px-4 mb-3 statusbtn">{details.status}</button>
      </div>
    </div>
  );
};

export default ProductCard;
