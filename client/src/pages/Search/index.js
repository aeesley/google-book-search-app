import React from "react";
import "./style.css";
import Header from "../../components/Header/index.js";
import SearchBar from "../../components/SearchBar/index.js";
import SearchResults from "../../components/SearchResults/index.js";

function Search(props) {
  return (
    <div className="card">
    <Header />
    <SearchBar />
    <SearchResults />
  </div>
  );
}

export default Search;
