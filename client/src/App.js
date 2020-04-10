import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import SearchPage from "./components/SearchPage";
import SavedPage from "./components/SavedPage";


function App() {
  return (
    <Router>
     <div className="App">
      <NavBar/>
      <Header/>
      <Wrapper>
        <Route exact path={["/","/search"]} component={SearchPage} />
        <Route exact path="/saved" component={SavedPage} />
      </Wrapper>
     </div>
    </Router>
  );
}

export default App;
