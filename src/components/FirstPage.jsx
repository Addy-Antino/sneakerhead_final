import React from "react";
import "./FirstPage.css";
import Shoes from "./Shoes/Shoes";
import Login from "./Login/Login";

const FirstPage = ({ setIsAuthenticated }) => {
  return (
    <div id="firstPage" className="container-fluid">
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-6">
          <Shoes />
        </div>

        <div
          id="loginDiv"
          style={{ height: "660px" }}
          className="col-sm-6 col-md-6 col-lg-6"
        >
          <Login setIsAuthenticated={setIsAuthenticated} />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
