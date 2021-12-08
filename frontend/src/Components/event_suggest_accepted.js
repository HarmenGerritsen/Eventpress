import React from "react";
import Modal from "react-bootstrap/Modal";

function EventSuggestAccepted(props) {

    return (
      <div>
        <Modal show={props.handleshowSuggestAccepted} onHide={ props.handlecSuggestAccepted }>
          <Modal.Header className="modal-header">
            <Modal.Title className="ModalTitle">Suggereren</Modal.Title>
            <button className="closeButton" onClick={ props.handlecSuggestAccepted }>X</button>
          </Modal.Header>
          <Modal.Body>
            <p>Evenement gesuggereerd!</p>
          </Modal.Body>
          <Modal.Footer class="col text-center">
            <button type="button" class="btn btn-dark button" variant="secondary" onClick={ props.handlecSuggestAccepted }>
              Sluiten
            </button>
            <br />
            <p className="white">.</p>
          </Modal.Footer>
        </Modal>
      </div>)
}

export default EventSuggestAccepted;