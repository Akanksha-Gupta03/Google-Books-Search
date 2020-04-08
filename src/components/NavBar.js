import React  from 'react';
import { Link, useLocation } from "react-router-dom";

/* activePage  | changePage-call-back */
function NavBar(props) {
  const location = useLocation();
//   const [isShown, setShown] = useState(false);
//   let showClass = !isShown ? `collapse navbar-collapse`: `collapse navbar-collapse show`;
  const style = {
      logo: { width: '64px', height: '64px' }
  }

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
          <img src='https://i.pinimg.com/originals/6e/d2/43/6ed243fcb389252740f7c4c41e07b560.jpg' alt="" style={style.logo} />
      </Link>
      {/* <a class="navbar-brand" href="#" onClick={ function(){ props.changePage('AboutPage')} }>Pupster</a> */}
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
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