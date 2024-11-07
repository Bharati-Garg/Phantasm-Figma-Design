import React from "react";
import { LuFiles } from "react-icons/lu";

const ProductUrl = () => {
  return (
    <div>
      <div className="d-flex p-3">
        <div>
          <h6 className="mt-1">Polo T-Shirt</h6>
        </div>
        <div className="ms-3 d-flex">
          <h6 className="mt-1">Date Added</h6>
          <p className="ms-1">12 Sept 2022-12:55 pm</p>
        </div>
        <div className="ms-3 d-flex">
          <h6 className="mt-1">Product Url</h6>
          <p className="ms-1">1nancystores.com/polot-shirt</p>
          <LuFiles className="ms-2 text-primary mt-1" />
        </div>
      </div>
    </div>
  );
};

export default ProductUrl;
