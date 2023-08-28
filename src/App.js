import React from "react";
import { useState } from "react";
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import LandingPage from './landingpage';
import Slider from './Slider';
import Appdev from './appdev';
import Py from './python';
import Java from './java';
import Web from './webdev';
import Ml from './ml';
import Ai from './ai';
import Dataanalysis from './dataanalysis';
import Datascience from './datascience';
import Reset from './reset';
//import PopUpForm from './pop';
//import LandingPage from './landingpage';
//import RegisterPage from './RegisterPage';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom' ;
//import { Switch } from 'react-router-dom';



function App() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const togglePopUp = () => {
    setIsPopUpVisible(!isPopUpVisible);
  }

  return (
    
      <Router>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/register" exact element={<RegisterPage />} />
                    <Route path="/java" exact element={<Java />} />
          <Route path="/python" exact element={<Py />} />
          <Route path="/prehome" exact element={<Slider />} />
          <Route path="/webdev" exact element={<Web />} />
          <Route path="/appdev" exact element={<Appdev />} />
          <Route path="/ml" exact element={<Ml />} />
          <Route path="/ai" exact element={<Ai />} />
          <Route path="/datascience" exact element={<Datascience />} />
          <Route path="/reset" exact element={<Reset />} />
          <Route path="/dataanalysis" exact element={<Dataanalysis />} />
        </Routes>
      </Router>
    
  );
}

export default App;
