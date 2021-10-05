import logo from "./Images/logo.png";



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