import React from "react";
import PageNavigation from "./PageNavigation";

const Header = () => {
  const data = "Inventory";
  return (
    <>
      <div className="header">
        <div>
          <h2>Inventory</h2>
        </div>
        <div className="d-flex mt-2">
          <div>
            <select id="country" name="country" className="nanny">
              <option value="australia">Nanny's Shop</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
          </div>
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
