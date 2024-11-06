import React from "react";

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
        <img src="/Image/Frame 5798.png" className="px-5 mx-1" />
      </div>
    </>
  );
};
export default BottomRight;
