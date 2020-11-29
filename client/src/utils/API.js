import axios from "axios";

export default {
  // gets book based on the user query
  getBook: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },

  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("http://localhost:9001/savedbooks", bookData)
  },

};
