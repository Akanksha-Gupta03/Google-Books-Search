import React from "react";

function BookList (props){
    
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
                     <a class="btn badge-pill btn-outline-warning mt-3 ml-3" href="/saved" >Save</a>
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