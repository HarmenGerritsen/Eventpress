import React from "react";
import Modal from "react-bootstrap/Modal";

class EventAanmaken extends React.Component {

  render() {
    return (
      <div>
        <Modal show={this.props.handleshow1} onHide={this.props.handlec1}>
          <Modal.Header className="modal-header">
            <Modal.Title className="ModalTitle">Evenement aanmaken</Modal.Title>
            <button className="closeButton" onClick={this.props.handlec1}>X</button>
          </Modal.Header>
          <Modal.Body>
            <textarea className="textarea eventtextarea" placeholder="Vul hier je event informatie in..."></textarea>
          </Modal.Body>
          <Modal.Footer class="col text-center">
            <button type="button" class="btn btn-dark button" variant="secondary" onClick={this.props.handlec1}>
              Sluiten
            </button>
            <br />
            <p className="white">.</p>
          </Modal.Footer>
        </Modal>
      </div>)
  }
}

export default EventAanmaken;