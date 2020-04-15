import React,{useState} from "react";
import BookList from "./BookList";
import API from '../utils/API';
import axios from 'axios';

function SearchPage(props){
    const [searchBook,setSearchBook]=useState("");
    const [bookList,setBookList]=useState([]);
    // const [showList,setShowList]=useState([]);

    function handleInputChange(e){
        
        const input=e.target.value;
        setSearchBook(input);
    }
    async function setBooksResult(){
        const result= await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchBook}`).then(result=>result.json())
        setBookList(result.items);
    }
    // async function testingApi(){
    //     const mybook = {
    //         title : 'test',
    //         description: 'testing',
    //         author: 'somebody',
    //         previewLink: 'empty',
    //         imageLink: 'link'
    //     }
    //     const result = await axios.post('/api/create', mybook)
    //     console.log(result);
    // }
    return(
        <div>
        <div className="container">
           
                <div class="form-group">
                    <label htmlfor="search">Search books of your Interest</label>
                    <input type="text" name="search" class="form-control" id="search" placeholder="Search your Book" onChange={handleInputChange} value={searchBook} />
                    <button className="btn btn-dark mt-3 mb-5" onClick={function(){setBooksResult()}}>Search</button>
                </div>
                
        </div>
        <BookList bookList={bookList}/>
        </div>
    );
}
export default SearchPage;