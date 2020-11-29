import React from "react";
import "./style.css";
import Header from "../../components/Header/index.js";
import SearchBar from "../../components/SearchBar/index.js";

function Search(props) {
  return (
    <div className="card">
    <Header />
    <SearchBar />
  </div>
  );
}

export default Search;
