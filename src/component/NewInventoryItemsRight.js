import React from "react";

const NewInventoryItemsRight = () => {
  return (
    <>
      <div className="mt-4">
        <textarea
          typeof="text"
          placeholder="Short Description"
          className="message"
        />
        <h5>Product Long Description</h5>
        <textarea
          typeof="text"
          placeholder="Your text goes here"
          className="message"
        />
        <p>Add a long description for your product</p>
        <div className="d-flex mt-5">
          <h5>Return policy</h5>
          <div className="d-flex addiscount">
            <p className="mx-1">Add Discount</p>
            <img src=" /Image/toggle control.png" className="off" />
          </div>
        </div>
        <p>Date Addred</p>
        <input type="date" className="date" />
        <input type="time" className="date ms-5" />
      </div>
    </>
  );
};

export default NewInventoryItemsRight;
