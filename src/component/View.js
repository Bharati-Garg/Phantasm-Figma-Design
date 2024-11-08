import { FiEye } from "react-icons/fi";

const View = () => {
  return (
    <div>
      <div>
        <div className="d-flex justify-content-between">
          <div className="rounded rounded-2 eye">
            <FiEye />
          </div>
          <div>
            <select id="country" name="country" className="all-time">
              <option value="australia">All-Time</option>
              <option value="canada">Aviable</option>
              <option value="usa">12*7</option>
            </select>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <p className="total">Views</p>
            <h5 className="N">1,200</h5>
          </div>
          <div>
            <p className="total">Favourite</p>
            <h5 className="N">23</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
