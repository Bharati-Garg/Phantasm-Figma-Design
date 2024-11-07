import { FiPieChart } from "react-icons/fi";

const TotalOrder = () => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <div className="text-primary rounded rounded-2 pie">
          <FiPieChart />
        </div>
        <div>
          <select id="country" name="country" className="all-time">
            <option value="australia">All-Time</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
        </div>
      </div>
      <div>
        <div>
          <p className="total">Total Orders</p>
          <h5 className="N">₦50,000.00</h5>
        </div>
      </div>
    </div>
  );
};

export default TotalOrder;
