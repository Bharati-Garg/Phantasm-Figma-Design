import React from "react";

const ViewData = () => {
  return (
    <div>
      {/* <div>
        <thead>
          <tr>
            <th className="tab">
              <input type="checkbox" />
            </th>
            <th className="tab">
              Order Date <img src="/Image/sort.png" />
            </th>
            <th className="tab">
              Order Type <img src="/Image/sort.png" />
            </th>
            <th className="tab">
              Unit Price <img src="/Image/sort.png" />
            </th>
            <th className="tab">
              Qty <img src="/Image/sort.png" />
            </th>
            <th className="tab">
              Discount <img src="/Image/sort.png" />
            </th>
            <th className="tab">
              Order Total <img src="/Image/sort.png" />
            </th>
            <th className="tab">
              Status <img src="/Image/sort.png" />
            </th>
          </tr>
        </thead>
        <hr />
        <tbody>
          <tr>
            <td className="tab">
              <input type="checkbox" />
            </td>
            <td className="tab">12 Aug 2022-12:25 am</td>
            <td className="tab">Home Delivery</td>
            <td className="tab">₦25,000.00</td>
            <td className="tab">2</td>
            <td className="tab">₦0.00</td>
            <td className="tab">₦50,000.00</td>
            <td className="tab">
              <button>Compeleted</button>
            </td>
          </tr>
        </tbody>
      </div> */}

      <div>
        <div className="d-flex justify-content-between">
          <input type="checkbox" className="ms-2" />
          <p>12 Aug 2022-12:25 am</p>
          <p>Home Delivery</p>
          <p>₦25,000.00</p>
          <p>2</p>
          <p>₦0.00</p>
          <p>₦50,000.00</p>
          <button className="publish border border-none me-4">
            Compeleted
          </button>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ViewData;
