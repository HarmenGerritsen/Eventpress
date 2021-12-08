import React from "react";
import Modal from "react-bootstrap/Modal";

function EventSuggestAccepted(props) {

    return (
      <div>
        <Modal show={props.handleshow6} onHide={ props.handlec6 }>
          <Modal.Header className="modal-header">
            <Modal.Title className="ModalTitle">Suggereren</Modal.Title>
            <button className="closeButton" onClick={ props.handlec6 }>X</button>
          </Modal.Header>
          <Modal.Body>
            <p>Evenement gesuggereerd!</p>
          </Modal.Body>
          <Modal.Footer class="col text-center">
            <button type="button" class="btn btn-dark button" variant="secondary" onClick={ props.handlec6 }>
              Sluiten
            </button>
            <br />
            <p className="white">.</p>
          </Modal.Footer>
        </Modal>
      </div>)
}

export default EventSuggestAccepted;