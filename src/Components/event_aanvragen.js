import React from "react";
import Modal from "react-bootstrap/Modal";

class EventAanvragen extends React.Component {

    render() {
      return (
          <div>
<Modal show={this.props.handleshow5} onHide={this.props.handlec5}>
          <Modal.Header className="modal-header">
            <Modal.Title className="ModalTitle">Aanvragen</Modal.Title>
            <button className="closeButton" onClick={this.props.handlec5}>X</button>
          </Modal.Header>
          <Modal.Body>
            <p>Vraag evenement aan</p>
            <textarea className="textarea" placeholder="vraag evenement aan..."></textarea>
          </Modal.Body>
          <Modal.Footer class="col text-center">
            <button type="button" class="btn btn-dark button" variant="secondary" onClick={() => { this.props.handlec5(); this.props.handles6(); }}>
              Aanvragen
            </button>
            <br />
            <p className="white">.</p>
          </Modal.Footer>
        </Modal>
        </div>)}}

export default EventAanvragen;