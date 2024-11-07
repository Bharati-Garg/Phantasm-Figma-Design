import React from "react";

const ViewHeading = () => {
  return (
    <div>
      <div>
        <div className="d-flex justify-content-between">
          <input type="checkbox" className="ms-2" />
          <p className="heading">
            Order Date <img src="/Image/sort.png" />
          </p>
          <p className="heading">
            Order Type <img src="/Image/sort.png" />
          </p>
          <p className="heading">
            Unit Price <img src="/Image/sort.png" />
          </p>
          <p className="heading">
            Qty <img src="/Image/sort.png" />
          </p>
          <p className="heading">
            Discount <img src="/Image/sort.png" />
          </p>
          <p className="heading">
            Order Total <img src="/Image/sort.png" />
          </p>
          <p className="heading me-4">
            Status <img src="/Image/sort.png" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewHeading;
