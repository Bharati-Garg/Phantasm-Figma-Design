const Toggle = () => {
  return (
    <div>
      <div className="d-flex mt-3">
        <h5>Discount</h5>
        <div className="d-flex add-discount">
          <p className="mx-1">Add Discount</p>
          <img src=" /Image/toggle control.png" className="off" />
        </div>
      </div>
      <div className="d-flex mt-5">
        <h5>Expiry Date</h5>
        <div className="d-flex addiscount">
          <p className="mx-1">Add Expiry Date</p>
          <img src=" /Image/toggle control.png" className="off" />
        </div>
      </div>
    </div>
  );
};

export default Toggle;
