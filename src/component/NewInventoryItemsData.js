import React from "react";
import NewInventoryItemsLeft from "./NewInventoryItemsLeft";
import NewInventoryItemsRight from "./NewInventoryItemsRight";
import NewInventoryImageField from "./NewInventoryImageField";

const NewInventoryItemsData = () => {
  return (
    <>
      <div className="container-fluid ms-4">
        <div className="row">
          <div className="col-md-8 bg-white d-flex column-one">
            <NewInventoryItemsLeft />
            <NewInventoryItemsRight />
          </div>
          <div className="col-md-3 bg-white ms-5 column-two">
            <NewInventoryImageField />
          </div>
        </div>
      </div>
    </>
  );
};
export default NewInventoryItemsData;
