import React from "react";
import Modal from "react-bootstrap/Modal";

class EventInzien extends React.Component {

  render() {
    return (
      <div>
        <Modal show={this.props.handleshow2} onHide={this.props.handlec2} className="modal">
          <Modal.Header className="modal-header">
            <Modal.Title className="modal-title">Evenement inzien</Modal.Title>
            <button className="closeButton" onClick={this.props.handlec2}>X</button>
          </Modal.Header>
          <Modal.Body className="popupbody">
            <h1>
            React 15:30
            </h1>
            <h4>
            Datum: 20-11 Lokaal: 4.094
            </h4>
            <h3>
            React intro en andere dingen
            </h3>
          </Modal.Body>
          <Modal.Footer class="col text-center">
            <button type="button" class="btn btn-dark button" variant="secondary" onClick={() => { this.props.handlec2(); this.props.handles3(); }}>
              Inschrijven
            </button>
            <button type="button" class="btn btn-dark button" variant="secondary" onClick={this.props.handlec2}>
              Sluiten
            </button>
            <br />
            <p className="white">.</p>
          </Modal.Footer>
        </Modal>
      </div>)
  }
}

export default EventInzien;