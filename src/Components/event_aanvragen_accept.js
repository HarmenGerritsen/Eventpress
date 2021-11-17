import React from "react";
import Modal from "react-bootstrap/Modal";

function EventAanvragenAccept() {

    return (
      <div>
        <Modal show={this.props.handleshow6} onHide={this.props.handlec6}>
          <Modal.Header className="modal-header">
            <Modal.Title className="ModalTitle">Aanvragen</Modal.Title>
            <button className="closeButton" onClick={this.props.handlec6}>X</button>
          </Modal.Header>
          <Modal.Body>
            <p>Evenement aangevraagd!</p>
          </Modal.Body>
          <Modal.Footer class="col text-center">
            <button type="button" class="btn btn-dark button" variant="secondary" onClick={this.props.handlec6}>
              Sluiten
            </button>
            <br />
            <p className="white">.</p>
          </Modal.Footer>
        </Modal>
      </div>)
}

export default EventAanvragenAccept;