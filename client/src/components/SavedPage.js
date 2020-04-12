import React,{ Component } from "react";
import API from "../utils/API";

class SavedPage extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
      console.log("Books Data: "+this.state.books);
  };

  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

render(){
    return(
     <div>
        <div className="mb-3">
         <div className="container">
            <div class="card">
              <div class="row">
               <div className="col-md-2 bookImage">
                 <h1>{this.state.books.image}</h1>
                <img src=" " alt="" />
               </div>
               <div className="col-md-10">   
                <div className=" card-body bookDescription">
                 <h3>title</h3>

                 <ul>
                  <li>author</li>
                 </ul>
            
                 <p>description</p>
                 <div class = "d-flex justify-content-start">
                   <a class = "btn badge-pill btn-outline-dark mt-3" href=" ">View</a>
                   <a class="btn badge-pill btn-outline-warning mt-3 ml-3" href=" " >Unsave</a>
                 </div>
                </div>
               </div>
             </div>
            </div>
          </div>
        </div>
     </div>   
    )
}
}
export default SavedPage;