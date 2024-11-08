import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./component/Body";
import NewProduct from "./component/NewProduct";
import ViewPage from "./component/ViewPage";
import ThirdPage from "./component/ThirdPage";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/NewProduct" element={<NewProduct />} />
          <Route path="/ThirdPage" element={<ThirdPage />} />
          <Route path="/viewpage" element={<ViewPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
