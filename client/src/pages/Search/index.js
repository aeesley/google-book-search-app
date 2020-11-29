import React, { useState } from 'react'
import "./style.css";
import Header from "../../components/Header/index.js";
import SearchResult from "../../components/SearchResult/index.js";
import API from "../../utils/API.js"

function Search(props) {
    // Creating the state
    const [state, setState] = useState({
        search: '',
        books:[]
    })

    // Helper function to capture the users typing
    const handleTyping = (e) => {

        setState({...state, search:  e.target.value})
    }
    // Helper function to search the user input with the API and save the book results to the books aray in state
    const handleClick = (e) => {
        e.preventDefault()

        API.getBook(state.search).then((data) => {

            setState({...state, books: data.data.items})
        })

    }

    // Map over every book that came up in the search results from the API
    state.books.map((singleBook) => {
    })

  return (
    <div className="card">
    <Header />
    <div className="container">
  <h3 className="">Book Search</h3>
        <p className="lead">Enter a book title to search!</p>
        <form 
            className="example" action="action_page.php">
            <input 
                type="text" 
                placeholder="Search.." 
                name="search"
                onChange={handleTyping}
                >
                </input>
            <button onClick={handleClick} type="submit">Search</button>
        </form>
    </div>

    <div className="container ">
        <br></br>
        <br></br>
        <h3 className="">Search Results</h3>
        <p className="lead"></p>

        {state.books.map((singleBook) => {
            return (
                <SearchResult book={singleBook} title={singleBook.volumeInfo.title} author={singleBook.volumeInfo.authors} description={singleBook.searchInfo.textSnippet} />
            )
        })}

    </div>
    <br></br>
    <br></br>
  </div>
  );
}

export default Search;
