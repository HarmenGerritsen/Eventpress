import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import imgfe1 from '../Images/FE1.png';
import data from '../event_aanmaken.js';


function EventInzien(props, state) {
  
  const [data] = useState([{}]);
  console.log (data);

    return (
      <div>
        <Modal show={props.handleshow2} onHide={props.handlec2} className="modal">
          <Modal.Header className="modal-header">
            <Modal.Title className="modal-title">Evenement inzien</Modal.Title>
            <button className="closeButton" onClick={props.handlec2}>X</button>
          </Modal.Header>
          <Modal.Body className="popupbody">
            { data && data.length > 0 && data.map(item => {
              return(
            <div key={ item.id }>
              { item.titel}
            </div>
            )})}
            <h4>
            datum
            </h4>
            <h5>
              React intro en andere dingen
            </h5>
            <img class="img-responsive" src={imgfe1} alt=""></img>
          </Modal.Body>
          <Modal.Footer class="col text-center">
            <button type="button" class="btn btn-dark button" variant="secondary" onClick={() => { props.handlec2(); props.handles3(); }}>
              Inschrijven
            </button>
            <button type="button" class="btn btn-dark button" variant="secondary" onClick={props.handlec2}>
              Sluiten
            </button>
            <br />
            <p className="white">.</p>
          </Modal.Footer>
        </Modal>
      </div>)
}

export default EventInzien;