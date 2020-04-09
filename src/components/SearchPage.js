import React from "react";

function SearchPage(props){
    return(
        <div className="container">
            <form>
                <div class="form-group">
                    <label for="search">Search books of your Interest</label>
                    <input type="text" name="search" class="form-control" id="search" placeholder="Search your Book" />
                    <button>Search</button>
                </div>
            </form>        
        </div>
    );
}
export default SearchPage;