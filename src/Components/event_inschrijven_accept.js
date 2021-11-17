import React from "react";
import Modal from "react-bootstrap/Modal";

function EventInschrijvenAccept() {

    return (
      <div>
        <Modal show={this.props.handleshow4} onHide={this.props.handlec4}>
          <Modal.Header className="modal-header">
            <Modal.Title className="ModalTitle">Inschrijven</Modal.Title>
            <button className="closeButton" onClick={this.props.handlec4}>X</button>
          </Modal.Header>
          <Modal.Body>
            <p>Je bent ingeschreven</p>
          </Modal.Body>
          <Modal.Footer class="col text-center">
            <button type="button" class="btn btn-dark button" variant="secondary" onClick={this.props.handlec4}>
              Sluiten
            </button>
            <br />
            <p className="white">.</p>
          </Modal.Footer>
        </Modal>
      </div>)
}

export default EventInschrijvenAccept;