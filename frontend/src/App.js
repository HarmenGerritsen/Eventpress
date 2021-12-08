import React from "react";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from "./Components/sidebar.js";
import EventInfo from "./Components/event_info.js";
import EventApply from "./Components/event_apply.js";
import EventApplyAccepted from "./Components/event_apply_accepted.js";
import EventSuggestEventAccepted from "./Components/event_suggest_accepted.js";
import EventSuggestEvent from "./Components/event_suggest.js";
import EventListAndAddEvent from "./Components/event_list_and_add.js";

document.body.style.backgroundColor = "rgb(247, 248, 250)";

function App() {
  const [showSuggestEvent, setShowSuggestEvent] = useState(false);//1
  const [showEventInfo, setShowEventInfo] = useState(false);//2
  const [showApply, setShowApply] = useState(false);//3
  const [showApplyAccepted, setShowApplyAccepted] = useState(false);//4
  const [showAddEvent, setShowAddEvent] = useState(false);//5
  const [showSuggestAccepted, setShowSuggestAccepted] = useState(false);//6

  const HandleCloseSuggestEvent = () => setShowSuggestEvent(false);
  const HandleShowSuggestEvent = () => setShowSuggestEvent(true);

  const handleCloseEventInfo = () =>  setShowEventInfo(false);
  const handleShowEventInfo = () =>  setShowEventInfo(true);

  const handleCloseApply = () => setShowApply(false);
  const handleShowApply = () => setShowApply(true);

  const handleCloseApplyAccepted = () => setShowApplyAccepted(false);
  const handleShowApplyAccepted = () => setShowApplyAccepted(true);

  const handleCloseAddEvent = () => setShowAddEvent(false);
  const handleShowAddEvent = () => setShowAddEvent(true);

  const handleCloseSuggestAccepted = () => setShowSuggestAccepted(false);
  const handleShowSuggestAccepted = () => setShowSuggestAccepted(true);

  const [EventID, setEventID] = useState("")

  return (
    <div className="App">
      <Sidebar handlecSuggestEvent={HandleCloseSuggestEvent} handlesSuggestEvent={HandleShowSuggestEvent} handlesAddEvent={handleShowAddEvent} />
      <EventListAndAddEvent handlesEventInfo={handleShowEventInfo} seteventid={setEventID} handleshowAddEvent={showAddEvent} handlecAddEvent={handleCloseAddEvent} handlesSuggestAccepted={handleShowSuggestAccepted} />
      <div>
        <EventInfo handleshowEventInfo={showEventInfo} EventID={EventID} handlecEventInfo={handleCloseEventInfo} handlesApply={handleShowApply} />
        <EventApply handleshowApply={showApply} handlecApply={handleCloseApply} handlesEventInfo={handleShowEventInfo} handlesApplyAccepted={handleShowApplyAccepted} />
        <EventApplyAccepted handleshowApplyAccepted={showApplyAccepted} handlecApplyAccepted={handleCloseApplyAccepted} />
        <EventSuggestEventAccepted handlesSuggestAccepted={handleShowSuggestAccepted} handlecSuggestAccepted={handleCloseSuggestAccepted} />
        <EventSuggestEvent HandleShowSuggestEvent={showSuggestEvent} handlecSuggestEvent={HandleCloseSuggestEvent} />
      </div>
    </div>
  );
}

export default App;