import { NavLink } from "react-router-dom";
import Home from "./Home";

const PageNavigation = ({ data }) => {
  return (
    <div className="home">
      <NavLink to="/">
        <Home />
      </NavLink>
      /{data}
    </div>
  );
};

export default PageNavigation;
