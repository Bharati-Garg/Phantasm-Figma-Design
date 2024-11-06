import React from "react";
import PageNavigation from "./PageNavigation";
import DropDown from "./DropDown";

const Header = () => {
  const data = "Inventory";
  const title = "Nanny's Shop";
  return (
    <>
      <div className="header">
        <div>
          <h2>Inventory</h2>
        </div>
        <div className="d-flex mt-2">
          <DropDown title={title} />
          <img src="/image/Notification.png" className="mx-4" />
          <img src="/image/profile 1.png" />
        </div>
      </div>
      <div>
        <hr className="mb-0" />
        <PageNavigation data={data} />
      </div>
    </>
  );
};

export default Header;
