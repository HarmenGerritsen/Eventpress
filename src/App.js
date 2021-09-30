import plus from "./plus.png";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import fe1 from "./frontend1.png";
import po1 from "./productowner1.png";
import ai1 from "./artint1.png";
import be1 from "./backend1.png";
import csc1 from "./cloud1.png";
import logo from "./logo.png";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

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
        <Row classname="row">
          <Col style={{}}>
            <a href="#">
              <img onClick={handleShow2} className="fe1" src={fe1} alt=''></img>
            </a>
          </Col>
          <Col style={{}}>
            <a href="#">
              <img onClick={handleShow2} className="fe1" src={fe1} alt=''></img>
            </a>
          </Col>
          <Col style={{}}>
            <a href="#">
              <img onClick={handleShow2} className="be1" src={be1} alt=''></img>
            </a>
          </Col>
          <Col style={{}}>
            <a href="#">
              <img onClick={handleShow2} className="fe1" src={fe1} alt=''></img>
            </a>
          </Col>
          <Col style={{}}>
            <a href="#">
              <img onClick={handleShow2} className="be1" src={be1} alt=''></img>
            </a>
          </Col>
        </Row>
        <Row classname="row">
          <Col style={{}}>
            <a href="#">
              <img onClick={handleShow2} className="po1" src={po1} alt=''></img>
            </a>
          </Col>
          <Col style={{}}>
            <a href="#">
              <img onClick={handleShow2} className="ai1" src={ai1} alt=''></img>
            </a>
          </Col>
          <Col style={{}}>
            <a href="#">
              <img onClick={handleShow2} className="csc1" src={csc1} alt=''></img>
            </a>
          </Col>
          <Col style={{}}>
            <a href="#">
              <img onClick={handleShow2} className="ai1" src={ai1} alt=''></img>
            </a>
          </Col>
          <Col style={{}}>
            <a href="#">
              <img onClick={handleShow2} className="fe1" src={fe1} alt=''></img>
            </a>
          </Col>
        </Row>
        <Row classname="row">
          <Col style={{}}>
            <a href="#">
              <img onClick={handleShow2} className="fe1" src={fe1} alt=''></img>
            </a>
          </Col>
          <Col style={{}}>
            <a href="#">
              <img onClick={handleShow2} className="be1" src={be1} alt=''></img>
            </a>
          </Col>
          <Col style={{}}>
            <a href="#">
              <img onClick={handleShow2} className="csc1" src={csc1} alt=''></img>
            </a>
          </Col>
          <Col style={{}}>
            <a href="#">
              <img onClick={handleShow2} className="ai1" src={ai1} alt=''></img>
            </a>
          </Col>
          <Col style={{}}>
            <a href="#">
              <img onClick={handleShow2} className="po1" src={po1} alt=''></img>
            </a>
          </Col>
        </Row>
      </div>

      <div>
        <Modal show={show2} onHide={handleClose2} className="modal">
          <Modal.Header className="modal-header">
            <Modal.Title className="modal-title">Evenement inzien</Modal.Title>
            <button className="closeButton" onClick={handleClose2}>X</button>
          </Modal.Header>
          <Modal.Body className="popupbody">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at rhoncus nunc, faucibus sagittis erat. Sed quis iaculis sem. Etiam sed elementum dolor, ut bibendum nunc. Sed vel mollis risus, nec consectetur dui. Aliquam finibus molestie arcu eget ornare. Vestibulum in dolor nisl. Sed quis egestas tellus.
              Nunc dolor ligula, hendrerit a enim nec, aliquet semper ipsum. Pellentesque massa dolor, venenatis at molestie nec, bibendum eu metus. Suspendisse egestas mattis varius. Maecenas id fringilla diam. Nulla placerat vehicula aliquam. Aliquam erat volutpat. Nam finibus sodales auctor. Aliquam ultrices mi sed lacus aliquam ultrices sed eu lectus. Vestibulum maximus nisl velit, sed tristique magna tristique et. Praesent sit amet rhoncus est, nec suscipit massa. Suspendisse potenti. Integer ex turpis, pretium ac dolor et, vulputate lobortis ante. Sed eu consectetur justo, vitae semper nulla. Vestibulum volutpat risus quis erat ultrices aliquam.
            </p>
          </Modal.Body>
          <Modal.Footer class="col text-center">
            <button type="button" class="btn btn-dark button" variant="secondary" onClick={() => { handleClose2(); handleShow3(); }}>
              Inschrijven
            </button>
            <button type="button" class="btn btn-dark button" variant="secondary" onClick={handleClose2}>
              Sluiten
            </button>
            <br />
            <p className="white">.</p>
          </Modal.Footer>
        </Modal>

        <Modal show={show3} onHide={handleClose3}>
          <Modal.Header className="modal-header">
            <Modal.Title className="ModalTitle">Inschrijven</Modal.Title>
            <button className="closeButton" onClick={handleClose3}>X</button>
          </Modal.Header>
          <Modal.Body className="popupBody">
            <textarea className="textarea" placeholder="vul je naam in..."></textarea>
            <textarea className="textarea" placeholder="vul je studentnummer in..."></textarea>
            <textarea className="textarea" placeholder="vul je e-mailadres in..."></textarea>
          </Modal.Body>
          <Modal.Footer className="popupFooter" class="col text-center">
          <button type="button" class="btn btn-dark button" variant="secondary" onClick={() => { handleClose3(); handleShow2(); }}>
              Terug
            </button>
            <button type="button" class="btn btn-dark button" variant="secondary" onClick={() => { handleClose3(); handleShow4(); }}>
              Verzenden
            </button>
            <br />
            <p className="white">.</p>
          </Modal.Footer>
        </Modal>

        <Modal show={show4} onHide={handleClose4}>
          <Modal.Header className="modal-header">
            <Modal.Title className="ModalTitle">Inschrijven</Modal.Title>
            <button className="closeButton" onClick={handleClose4}>X</button>
          </Modal.Header>
          <Modal.Body>
            <p>Je bent ingeschreven</p>
          </Modal.Body>
          <Modal.Footer class="col text-center">
            <button type="button" class="btn btn-dark button" variant="secondary" onClick={handleClose4}>
              Sluiten
            </button>
            <br />
            <p className="white">.</p>
          </Modal.Footer>
        </Modal>

        <Modal show={show5} onHide={handleClose5}>
          <Modal.Header className="modal-header">
            <Modal.Title className="ModalTitle">Aanvragen</Modal.Title>
            <button className="closeButton" onClick={handleClose5}>X</button>
          </Modal.Header>
          <Modal.Body>
            <p>Vraag evenement aan</p>
            <textarea className="textarea" placeholder="vraag evenement aan..."></textarea>
          </Modal.Body>
          <Modal.Footer class="col text-center">
            <button type="button" class="btn btn-dark button" variant="secondary" onClick={() => { handleClose5(); handleShow6(); }}>
              Aanvragen
            </button>
            <br />
            <p className="white">.</p>
          </Modal.Footer>
        </Modal>

        <Modal show={show6} onHide={handleClose6}>
          <Modal.Header className="modal-header">
            <Modal.Title className="ModalTitle">Aanvragen</Modal.Title>
            <button className="closeButton" onClick={handleClose6}>X</button>
          </Modal.Header>
          <Modal.Body>
            <p>Evenement aangevraagd!</p>
          </Modal.Body>
          <Modal.Footer class="col text-center">
            <button type="button" class="btn btn-dark button" variant="secondary" onClick={handleClose6}>
              Sluiten
            </button>
            <br />
            <p className="white">.</p>
          </Modal.Footer>
        </Modal>

        <Modal show={show1} onHide={handleClose1}>
            <Modal.Header className="modal-header">
              <Modal.Title className="ModalTitle">Evenement aanmaken</Modal.Title>
              <button className="closeButton" onClick={handleClose1}>X</button>
            </Modal.Header>
            <Modal.Body>
              <textarea className="textarea eventtextarea" placeholder="Vul hier je event informatie in..."></textarea>
            </Modal.Body>
            <Modal.Footer class="col text-center">
              <button type="button" class="btn btn-dark button" variant="secondary" onClick={handleClose1}>
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

