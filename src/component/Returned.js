import { HiOutlineShoppingBag } from "react-icons/hi2";

const Returned = () => {
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
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <p className="total">Canceled</p>
            <h5 className="N">0</h5>
          </div>
          <div>
            <p className="total">Returned</p>
            <h5 className="N">0</h5>
          </div>
          <div>
            <p className="total">Damaged</p>
            <h5 className="N">0</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returned;
