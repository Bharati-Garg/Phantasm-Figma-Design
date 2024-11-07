import React from "react";
import Breadcrum from "./Breadcrum";

const Header = () => {
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
          <img src="/image/profile 1.png" className="me-5" />
        </div>
      </div>
      <div>
        <hr className="mb-0 hr" />
        <Breadcrum />
      </div>
    </>
  );
};

export default Header;
