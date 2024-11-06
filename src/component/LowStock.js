import React from "react";

const LowStock = () => {
  return (
    <div>
      <div>
        <div className="bg-white p-4 all">
          <div className="d-flex justify-content-between">
            <img src="/image/icon (1).png" />
            <div className="dropdown">
              <button
                className="btn btn-white dropdown-toggle text-secondary"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                This Week
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledBy="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <p className="text-danger pt-3">Low Stock Alert</p>
              <h4 className="text-black">23</h4>
            </div>
            <div className="col-md-4">
              <p className="expired pt-3">Expired</p>
              <h4 className="text-black">3</h4>
            </div>
            <div className="col-md-4">
              <p className="start pt-3">1 Start Rating</p>
              <h4 className="text-black">2</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowStock;
