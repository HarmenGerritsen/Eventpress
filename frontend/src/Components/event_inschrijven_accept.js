import React from "react";
import Modal from "react-bootstrap/Modal";

function EventInschrijvenAccept(props) {

    return (
      <div>
        <Modal show={props.handleshow4} onHide={props.handlec4}>
          <Modal.Header className="modal-header">
            <Modal.Title className="ModalTitle">Inschrijven</Modal.Title>
            <button className="closeButton" onClick={props.handlec4}>X</button>
          </Modal.Header>
          <Modal.Body>
            <p>Je bent ingeschreven</p>
          </Modal.Body>
          <Modal.Footer class="col text-center">
            <button type="button" class="btn btn-dark button" variant="secondary" onClick={props.handlec4}>
              Sluiten
            </button>
            <br />
            <p className="white">.</p>
          </Modal.Footer>
        </Modal>
      </div>)
}

export default EventInschrijvenAccept;