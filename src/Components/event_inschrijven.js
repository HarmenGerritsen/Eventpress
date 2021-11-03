import React from "react";
import Modal from "react-bootstrap/Modal";

class EventInschrijven extends React.Component {

    render() {
      return (
          <div>
<Modal show={this.props.handleshow3} onHide={this.props.handlec3}>
          <Modal.Header className="modal-header">
            <Modal.Title className="ModalTitle">Inschrijven</Modal.Title>
            <button className="closeButton" onClick={this.props.handlec3}>X</button>
          </Modal.Header>
          <Modal.Body className="popupBody">
            <input className="textarea" type="text" placeholder="vul je naam in..." />
            <input className="textarea" type="text" placeholder="vul je studentnummer in..." />
            <input className="textarea" type="text" placeholder="vul je email in..." />
          </Modal.Body>
          <Modal.Footer className="popupFooter" class="col text-center">
            <button type="button" class="btn btn-dark button" variant="secondary" onClick={() => { this.props.handlec3(); this.props.handles2(); }}>
              Terug
            </button>
            <button type="button" class="btn btn-dark button" variant="secondary" onClick={() => { this.props.handlec(); this.props.handles4(); }}>
              Verzenden
            </button>
            <br />
            <p className="white">.</p>
          </Modal.Footer>
        </Modal>
        </div>)}}

export default EventInschrijven;