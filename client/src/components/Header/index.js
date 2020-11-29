import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="header-color jumbotron jumbotron-fluid">
    <div className="container ">
        <h1 className="display-4 header-font">Google Book Search</h1>
        <p className="lead header-body-font">Search for and Save Books of Interest!</p>
    </div>
    </div>
  );
}

export default Header;