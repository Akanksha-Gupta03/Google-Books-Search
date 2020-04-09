import React from "react";

function BookList (props){
    
    return(
        <div>
            <div className="mb-3">{props.bookList ? props.bookList.map(books=>
             <div className="container">
                 <div className="bookImage">{books.volumeInfo.imageLinks && books.volumeInfo.imageLinks.thumbnail ?
                  <img src={books.volumeInfo.imageLinks.thumbnail} alt="" />: "no image" }
             </div>
             <div className="bookDescription">
                 <h3>{books.volumeInfo.title}</h3>{books.volumeInfo.imageLinks && books.volumeInfo.authors ? 
                 <ul>{books.volumeInfo.authors.map(author =><li>{author}</li>)}</ul> : "no author"}
                 <p>{books.volumeInfo.description}</p>
                 <div class = "d-flex justify-content-start">
                     <a class = "btn" href={books.volumeInfo.previewLink}>View</a>
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