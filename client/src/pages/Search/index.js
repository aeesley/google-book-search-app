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

        console.log("we are typing", e.target.value);
        setState({...state, search:  e.target.value})
    }
    // Helper function to search the user input with the API and save the book results to the books aray in state
    const handleClick = (e) => {
        e.preventDefault()

        console.log("we got clicked", state.search);

        API.getBook(state.search).then((data) => {
            console.log('data ??? from api ??' , data)
            setState({...state, books: data.data.items})
        })

    }


    console.log('this is our state!!', state)

    // Map over every book that came up in the search results from the API
    state.books.map((singleBook) => {
        console.log("looooping", singleBook);
    })

 
  return (
    <div className="card">
    <Header />
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
  <h3 class="">Book Search</h3>
        <p class="lead">Enter a book title to search!</p>
        <form 
            class="example" action="action_page.php">
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
    </div>


 
    <div class="jumbotron jumbotron-fluid">
    <div class="container ">
        <h3 class="">Search Results</h3>
        <p class="lead"></p>

        {state.books.map((singleBook) => {
        console.log("looooping", singleBook);
            return (
                <SearchResult book={singleBook} title={singleBook.volumeInfo.title} author={singleBook.volumeInfo.authors} description={singleBook.searchInfo.textSnippet} />
            )
        })}

    </div>
    </div>
  </div>
  );
}

export default Search;
