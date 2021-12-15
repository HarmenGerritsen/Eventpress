import React from "react";
import Modal from "react-bootstrap/Modal";

function EventSuggest(props) {
    return (
      <div>
        <Modal show={props.handleshowSuggestEvent} onHide={props.handlecSuggestEvent}>
          <Modal.Header className="modal-header">
            <Modal.Title className="ModalTitle">Evenement suggereren</Modal.Title>
            <button className="closeButton" onClick={props.handlecSuggestEvent}>X</button>
          </Modal.Header>
          <Modal.Body>
            <textarea className="textarea eventtextarea" placeholder="Vul hier je event informatie in..."></textarea>
          </Modal.Body>
          <Modal.Footer class="col text-center">
            <button type="button" class="btn btn-dark button" variant="secondary" onClick={props.handlecSuggestEvent()}>
              Sluiten
            </button>
            <br />
            <p className="white">.</p>
          </Modal.Footer>
        </Modal>
      </div>)
}

export default EventSuggest;