import React from "react";
import "./style.css";
import API from "../../utils/API.js"

function SearchResult(props) {

// Helper function to save specific book when the user hits the save button
  const handleClick = (e) => {
    e.preventDefault()

    API.saveBook(props.book).then((data) => {
    })

  }

  return (  
    <div className="container">
        <br></br>
        <h3 className="">{props.title}</h3>
        <p className="">{props.author}</p>
        <p className="">{props.description}</p>
        <button onClick={handleClick}>Save</button>
        <br></br>
        <br></br>
    </div>
    
  );
}

export default SearchResult;