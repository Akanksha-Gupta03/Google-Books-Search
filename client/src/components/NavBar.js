import React, { useState }  from 'react';
import { Link, useLocation } from "react-router-dom";
import "../style/NavBar.css";

/* activePage  | changePage-call-back */
function NavBar(props) {
  const location = useLocation();
  const [isShown, setShown] = useState(false);
  let showClass = !isShown ? `collapse navbar-collapse`: `collapse navbar-collapse show`;
  const style = {
    logo: { width: '160 px', height: '64px' }
}

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <img src= "https://upload.wikimedia.org/wikipedia/commons/3/38/Google_Books_logo_2015.PNG" alt="google logo" style={style.logo} />
      </Link>
      {/* <a class="navbar-brand" href="#" onClick={ function(){ props.changePage('AboutPage')} }>Pupster</a> */}
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setShown(!isShown)}>
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class={showClass} id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto special">
          <li className="nav-item active">
            <Link to="/search" className={location.pathname === "/search" ? "nav-link active" : "nav-link"}>
             <p class="p">Search</p>
            </Link>
          </li>          
          <li className="nav-item">
            <Link to="/saved" className={location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
              <p class="p">Saved</p>
            </Link>
          </li>                                    
        </ul>
      </div>
    </nav>
  )
}
export default NavBar;