import logo from "../Images/logo.png";
import React from "react";
import plus from "../Images/Plus.png";
import DropdownMenu from "./Dropdown.js";

class Sidebar extends React.Component {

  render(){
  return (

<div className="App-header">
        <img className="logo" src={logo}></img>
        <div className="menu">
          <button type="button" className="menuButton hide" onClick={this.props.handlec1}>Categorie</button>
          <button type="button" className="menuButton hide" onClick={this.props.handlec1}>Niveau</button>
          <button type="button" className="menuButton hide" onClick={this.props.handlec1}>Locatie</button>
          <button type="button" className="menuButton hide" onClick={this.props.handlec1}>Sorteren</button>
          <DropdownMenu />
        </div>
        <a href="#">
          <img className="plus plus2" onClick={this.props.handles1} src={plus} alt=''></img>
        </a>
        <button type="button" className="requestButton" onClick={this.props.handles5}><div className="hide">evenement<br /></div>aanvragen</button>
      </div>
  )
  }
      }
      export default Sidebar;