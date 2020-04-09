import axios from "axios";

// export default {
//     getRandomDog: function() {
//       return axios.get("https://dog.ceo/api/breeds/image/random");
//     },
export default{
    getBook:function(query){
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    }
}