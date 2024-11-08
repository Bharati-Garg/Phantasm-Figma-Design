import NewInventoryItemsLeft from "./NewInventoryItemsLeft";
import NewInventoryItemsRight from "./NewInventoryItemsRight";
import ThirdPageImageField from "./ThirdPageImageField";

const ThirdPageFullData = () => {
  return (
    <>
      <div className="container-fluid ms-4">
        <div className="row">
          <div className="col-md-8 bg-white column-one col-sm-8 pb-sm-4 mt-5">
            <div className="row">
              <div className="col-lg-6 ">
                <NewInventoryItemsLeft />
              </div>
              <div className="col-lg-6">
                <NewInventoryItemsRight />
              </div>
            </div>
          </div>
          <div className="col-md-3 bg-white column-two col-sm-4 mt-sm-5">
            <ThirdPageImageField />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdPageFullData;
