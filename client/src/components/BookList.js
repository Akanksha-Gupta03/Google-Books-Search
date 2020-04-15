import React,{useState} from "react";
import API from "../utils/API";
import axios from 'axios';

function BookList (props){

  async function handleBookSave(){
   //console.log("Props: "+JSON.stringify(props.bookList[0].volumeInfo));
   const newBook = {
      title: props.bookList[0].volumeInfo.title,
      author: props.bookList[0].volumeInfo.authors,
      description: props.bookList[0].volumeInfo.description,
      previewLink: props.bookList[0].volumeInfo.previewLink,
      imageLink: props.bookList[0].volumeInfo.imageLinks
    }

    const result = await axios.post('/api/create', newBook);
    console.log("Query Result: "+result);
  };
    
    return(
        <div>
            <div className="mb-3">{props.bookList ? props.bookList.map(books=>
             <div className="container">
                  <div class="card">
                <div class="row">
                 <div className="col-md-2 bookImage">{books.volumeInfo.imageLinks && books.volumeInfo.imageLinks.thumbnail ?
                  <img src={books.volumeInfo.imageLinks.thumbnail} alt="" />: "no image" }
             </div>
             <div className="col-md-10">   
             <div className=" card-body bookDescription">
                 <h3>{books.volumeInfo.title}</h3>{books.volumeInfo.imageLinks && books.volumeInfo.authors ? 

                 <ul>{books.volumeInfo.authors.map(author =>
                   <li>{author}</li>)}
                </ul> : "no author"}
                
                 <p>{books.volumeInfo.description}</p>
                 <div class = "d-flex justify-content-start">
                     <a class = "btn badge-pill btn-outline-dark mt-3" href={books.volumeInfo.previewLink}>View</a>
                     <a class="btn badge-pill btn-outline-warning mt-3 ml-3" href="/saved" onClick={function(){handleBookSave()}} >Save</a>
                 </div>
                </div>
                </div>
                </div>
              </div>
            </div>
            ) : "no match"
            }
         </div>
        </div>
    )
}
export default BookList;