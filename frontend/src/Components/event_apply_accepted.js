import React from "react";
import Modal from "react-bootstrap/Modal";

function EventApplyAccepted(props) {

    return (
      <div>
        <Modal show={props.handleshowApplyAccepted} onHide={props.handlecApplyAccepted}>
          <Modal.Header className="modal-header">
            <Modal.Title className="ModalTitle">Inschrijven</Modal.Title>
            <button className="closeButton" onClick={props.handlecApplyAccepted}>X</button>
          </Modal.Header>
          <Modal.Body>
            <p>Je bent ingeschreven</p>
          </Modal.Body>
          <Modal.Footer class="col text-center">
            <button type="button" class="btn btn-dark button" variant="secondary" onClick={props.handlecApplyAccepted}>
              Sluiten
            </button>
            <br />
            <p className="white">.</p>
          </Modal.Footer>
        </Modal>
      </div>)
}

export default EventApplyAccepted;