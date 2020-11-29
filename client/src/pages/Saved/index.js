import React from "react";
import "./style.css";
import Header from "../../components/Header/index.js";
import SavedBooks from "../../components/SavedBooks/index.js";

function Saved(props) {
  return (
    <div className="card">
    <Header />
    <SavedBooks />
    </div>
  
  );
}

export default Saved;