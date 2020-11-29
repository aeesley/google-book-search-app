import React from "react";
import "./style.css";
import API from "../../utils/API.js"

function SearchResult(props) {

// Helper function to save specific book when the user hits the save button
  const handleClick = (e) => {
    e.preventDefault()

    console.log("we got clicked");

    API.saveBook(props.book).then((data) => {
        console.log('data ??? from api ??' , data)
    })

  }

  return (  
    <div class="container">
        <h3 class="">{props.title}</h3>
        <p class="lead"></p>
        <p class="lead"></p>
        <button onClick={handleClick}>Save</button>
    </div>
    
  );
}

export default SearchResult;