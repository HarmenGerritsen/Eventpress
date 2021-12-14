import logo from "../Images/logo.png";
import React from "react";
import plus from "../Images/Plus.png";
import SidebarMenu from "./sidebar_menu.js";

function Sidebar(props) {

    return (

      <div className="App-header">
        <img className="logo" src={logo}></img>
        <div className="menu">
          <button type="button" className="menuButton hide" onClick={props.handlecSuggestEvent}>Categorie</button>
          <button type="button" className="menuButton hide" onClick={props.handlecSuggestEvent}>Niveau</button>
          <button type="button" className="menuButton hide" onClick={props.handlecSuggestEvent}>Locatie</button>
          <button type="button" className="menuButton hide" onClick={props.handlecSuggestEvent}>Sorteren</button>
          <SidebarMenu />
        </div>
        <a href="#">
          <img className="plus plus2" onClick={props.handlesAddEvent} src={plus} alt=''></img>
        </a>
        <button type="button" className="requestButton" onClick={props.handlesSuggestEvent}><div className="hide">Evenement<br /></div>suggereren</button>
      </div>
    )
}
export default Sidebar;