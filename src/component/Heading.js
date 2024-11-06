import React from "react";

const Heading = () => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <input type="checkbox" />
        <p className="heading">
          Product Name <img src="/Image/sort.png" />
        </p>
        <p className="heading">
          Category <img src="/Image/sort.png" />
        </p>
        <p className="heading">
          Unit Price <img src="/Image/sort.png" />
        </p>
        <p className="heading">
          In-Stock <img src="/Image/sort.png" />
        </p>
        <p className="heading">
          Discount <img src="/Image/sort.png" />
        </p>
        <p className="heading">
          Total Value <img src="/Image/sort.png" />
        </p>
        <p className="pe-5 heading">
          Action <img src="/Image/sort.png" />
        </p>
        <p className="heading">
          Status <img src="/Image/sort.png" />
        </p>
      </div>
      <hr />
    </div>
  );
};

export default Heading;
