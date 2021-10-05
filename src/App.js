import plus from "./plus.png";
import React from "react";

import logo from "./logo.png";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Events from "./Events";
import Popups from "./Popup";

function App() {
  const [setShow1] = useState(false);
  const [setShow5] = useState(false);


  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleShow5 = () => setShow5(true);

  return (
    <div className="App">
      <div className="App-header">
        <img className="logo" src={logo}></img>
        <div className="menu">
          <button type="button" className="menuButton" onClick={handleClose1}>Categorie</button>
          <button type="button" className="menuButton" onClick={handleClose1}>Jaar</button>
          <button type="button" className="menuButton" onClick={handleClose1}>Locatie</button>
          <button type="button" className="menuButton" onClick={handleClose1}>Sorteren op</button>
        </div>
        <a href="#">
          <img className="plus plus2" onClick={handleShow1} src={plus} alt=''></img>
        </a>
        <button type="button" className="requestButton" onClick={handleShow5}><span className="requestButtonF">evenement<br />aanvragen</span></button>
      </div>
      <div className="rowBlock">
        <Events />
      </div>

      <div>
        <Popups />
      </div>
    </div> 
  );
}

export default App;

