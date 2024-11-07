import React from "react";

const Heading = () => {
  return (
    <div>
      <div className="items">
        <input type="checkbox" />
        <p className="heading col-md-2 image">
          Product Name <img src="/Image/sort.png" />
        </p>
        <p className="heading col-md-1 img">
          Category <img src="/Image/sort.png" />
        </p>
        <p className="heading col-md-1">
          Unit Price <img src="/Image/sort.png" />
        </p>
        <p className="heading col-md-1 image">
          In-Stock <img src="/Image/sort.png" />
        </p>
        <p className="heading col-md-1 img">
          Discount <img src="/Image/sort.png" />
        </p>
        <p className="heading col-md-1">
          Total Value <img src="/Image/sort.png" />
        </p>
        <p className="pe-5 heading col-md-1 img">
          Action <img src="/Image/sort.png" />
        </p>
        <p className="heading col-md-1 image">
          Status <img src="/Image/sort.png" />
        </p>
      </div>
      <hr />
    </div>
  );
};

export default Heading;
