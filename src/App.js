import plus from "./plus.png";
import Modal from "react-bootstrap/Modal";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import fe1 from "./frontend1.png";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <div className="App-header">
        <p className="title">
          Eventpress
        </p>
        <a href="#">
          <img className="plus" onClick={handleShow} src={plus} alt=''>
          </img>
        </a>
      </div>

      <div className="App">
        <a href="#">
          <img className="fe1" src={fe1} alt=''>
          </img>
        </a>
      </div>

      <div>
      <Modal show={show} onHide={handleClose}>

        <Modal.Header className="popup">
          <Modal.Title className="ModalTitle">Popup Titel</Modal.Title>
          <button className="closeButton" onClick={handleClose}>X</button>
        </Modal.Header>

        <Modal.Body>
          <textarea className="textarea">Vul je event informatie in...</textarea>
        </Modal.Body>

        <Modal.Footer class="col text-center">
          <button  type="button" class="btn btn-dark" variant="secondary" onClick={handleClose}>
            Verzenden
          </button>
          <br />
          <p className="white">.</p>
        </Modal.Footer>

      </Modal>
      </div>

    </div>
  );
}

export default App;
