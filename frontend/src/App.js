import React from "react";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from "./Components/sidebar.js";
import EventInfo from "./Components/event_info.js";
import EventApply from "./Components/event_apply.js";
import EventApplyAccepted from "./Components/event_apply_accepted.js";
import EventSuggestAccepted from "./Components/event_suggest_accepted.js";
import EventSuggest from "./Components/event_suggest.js";
import EventListAndAdd from "./Components/event_list_and_add.js";

document.body.style.backgroundColor = "rgb(247, 248, 250)";

function App() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose2 = () =>  setShow2(false);
  const handleShow2 = () =>  setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  return (
    <div className="App">
      <Sidebar handlec1={handleClose1} handles1={handleShow1} handles5={handleShow5} />
      <EventListAndAdd handles2={handleShow2} handleshow5={show5} handlec5={handleClose5} handles6={handleShow6} />
      <div>
        <EventInfo handleshow2={show2} handlec2={handleClose2} handles3={handleShow3} />
        <EventApply handleshow3={show3} handlec3={handleClose3} handles2={handleShow2} handles4={handleShow4} />
        <EventApplyAccepted handleshow4={show4} handlec4={handleClose4} />
        <EventSuggestAccepted handles6={handleShow6} handlec6={handleClose6} />
        <EventSuggest handleshow1={show1} handlec1={handleClose1} />
      </div>
    </div>
  );
}

export default App;