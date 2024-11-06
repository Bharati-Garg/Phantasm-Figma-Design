import React from "react";
import Toggle from "./Toggle";

const NewInventoryItemsLeft = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="col">
          <input type="text" placeholder="Product Name" className="input" />
        </div>
        <div>
          <select id="country" name="country" className="input">
            <option value="australia">Select Product Category</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
        </div>
        <div>
          <input type="text" placeholder="Selling Price" className="selling" />
          <input type="text" placeholder="Cost Price" className="cost" />
        </div>
        <input
          type="number"
          placeholder="Quantity in Stock"
          className="input"
        />
        <div>
          <select id="country" name="country" className="input">
            <option value="australia">Order Type</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
        </div>
        <Toggle />
      </div>
    </>
  );
};

export default NewInventoryItemsLeft;
