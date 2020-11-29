import React from "react";
import "./style.css";

function SearchBar(props) {
  return (
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
        <h3 class="">Book Search</h3>
        <p class="lead">Enter a book title to search!</p>
        <form 
            class="example" action="action_page.php">
            <input 
                type="text" 
                placeholder="Search.." 
                name="search">
                </input>
            <button type="submit">Search</button>
        </form>
    </div>
    </div>
  );
}

export default SearchBar;