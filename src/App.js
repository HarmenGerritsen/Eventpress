import plus from "./plus.png";
import Modal from "react-bootstrap/Modal";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import fe1 from "./frontend1.png";

function App() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <div className="App">
      <div className="App-header">
        <p className="title">
          Eventpress
        </p>
        <a href="#">
          <img className="plus" onClick={handleShow1} src={plus} alt=''>
          </img>
        </a>
      </div>

      <div className="App">
        <a href="#">
          <img onClick={handleShow2} className="fe1" src={fe1} alt=''>
          </img>
        </a>
      </div>

      <div>
      <Modal show={show1} onHide={handleClose1}>

        <Modal.Header className="popup">
          <Modal.Title className="ModalTitle">Evenement aanmaken</Modal.Title>
          <button className="closeButton" onClick={handleClose1}>X</button>
        </Modal.Header>

        <Modal.Body>
          <textarea className="textarea" placeholder="Vul hier je event informatie in..."></textarea>
        </Modal.Body>

        <Modal.Footer class="col text-center">
          <button  type="button" class="btn btn-dark button" variant="secondary" onClick={handleClose1}>
            Sluiten
          </button>
          <br />
          <p className="white">.</p>
        </Modal.Footer>

      </Modal>

      <Modal show={show2} onHide={handleClose2}>

        <Modal.Header className="popup">
          <Modal.Title className="ModalTitle">Evenement inzien</Modal.Title>
          <button className="closeButton" onClick={handleClose2}>X</button>
        </Modal.Header>

        <Modal.Body>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at rhoncus nunc, faucibus sagittis erat. Sed quis iaculis sem. Etiam sed elementum dolor, ut bibendum nunc. Sed vel mollis risus, nec consectetur dui. Aliquam finibus molestie arcu eget ornare. Vestibulum in dolor nisl. Sed quis egestas tellus.
          Nunc dolor ligula, hendrerit a enim nec, aliquet semper ipsum. Pellentesque massa dolor, venenatis at molestie nec, bibendum eu metus. Suspendisse egestas mattis varius. Maecenas id fringilla diam. Nulla placerat vehicula aliquam. Aliquam erat volutpat. Nam finibus sodales auctor. Aliquam ultrices mi sed lacus aliquam ultrices sed eu lectus. Vestibulum maximus nisl velit, sed tristique magna tristique et. Praesent sit amet rhoncus est, nec suscipit massa. Suspendisse potenti. Integer ex turpis, pretium ac dolor et, vulputate lobortis ante. Sed eu consectetur justo, vitae semper nulla. Vestibulum volutpat risus quis erat ultrices aliquam.
          </p>
        </Modal.Body>

        <Modal.Footer class="col text-center">
          <button type="button" class="btn btn-dark button" variant="secondary">
            Inschrijven
          </button>
          <button  type="button" class="btn btn-dark button" variant="secondary" onClick={handleClose2}>
            Sluiten
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
