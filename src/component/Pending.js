import { HiOutlineShoppingBag } from "react-icons/hi2";

const Pending = () => {
  return (
    <div>
      <div>
        <div className="d-flex justify-content-between">
          <div className="rounded rounded-2 eye">
            <HiOutlineShoppingBag />
          </div>
          <div>
            <select id="country" name="country" className="all-time">
              <option value="australia">All-Time</option>
              <option value="canada">Available</option>
              <option value="usa">12*7</option>
            </select>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <p className="total">All Orders</p>
            <h5 className="N">1</h5>
          </div>
          <div>
            <p className="total">Pending</p>
            <h5 className="N">0</h5>
          </div>
          <div>
            <p className="total">Compeleted</p>
            <h5 className="N">1</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pending;
