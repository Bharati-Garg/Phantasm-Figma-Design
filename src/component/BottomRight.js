import { FaArrowsLeftRight } from "react-icons/fa6";

const BottomRight = () => {
  return (
    <>
      <div className="d-flex">
        <div>
          <select id="country" name="country" className="ten">
            <option value="australia">1</option>
            <option value="canada">2</option>
            <option value="usa">3</option>
          </select>
        </div>
        <p className="px-5 mx-1">of 44 pages</p>
        <FaArrowsLeftRight className="mt-2 me-4" />
      </div>
    </>
  );
};
export default BottomRight;
