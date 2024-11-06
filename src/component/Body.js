import Header from "./Header";
import InventorySummary from "./InventorySummary";
import MainPage from "./MainPage";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="container-fluid">
          <div className="body">
            <Header />
          </div>
          <div className="bg-light pb-5">
            <InventorySummary />
            <MainPage />
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
