import axios from "axios";

export default {
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Delete the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
//   test: function(){
//     const result = axios.post('/api/create');
//     return result;
//   }
};