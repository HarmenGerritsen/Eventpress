import plus from "./plus.png";
import Modal from "react-bootstrap/Modal";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

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

      <div>
      <Modal show={show} onHide={handleClose}>
        
        <Modal.Header className="popup" closeButton>
          <Modal.Title>Popup Titel</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Popup
        </Modal.Body>

        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>

      </Modal>
      </div>

    </div>
  );
}

export default App;
