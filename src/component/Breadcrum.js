import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

const Breadcrum = () => {
  return (
    <div>
      <div className="home">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <Link to="/" class="breadcrumb-item active" aria-current="page">
              <Home />
            </Link>
            <Link class="breadcrumb-item">
              <a href="#"> Inventory</a>
            </Link>
            <Link class="breadcrumb-item">
              <a href="#">New Inventory</a>
            </Link>
            <Link class="breadcrumb-item">
              <a href="#">View Inventory</a>
            </Link>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrum;
