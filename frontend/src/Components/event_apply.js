import React from "react";
import Modal from "react-bootstrap/Modal";

function EventApply(props) {

    return (
      <div>
        <Modal show={props.handleshowApply} onHide={props.handlecApply}>
          <Modal.Header className="modal-header">
            <Modal.Title className="ModalTitle">Inschrijven</Modal.Title>
            <button className="closeButton" onClick={props.handlecApply}>X</button>
          </Modal.Header>
          <Modal.Body className="popupBody">
            <input className="textarea" type="text" placeholder="vul je email in..." />
          </Modal.Body>
          <Modal.Footer className="popupFooter" class="col text-center">
            <button type="button" class="btn btn-dark button" variant="secondary" onClick={() => {
              props.handlecApply(); props.handlesApplyAccepted(); 
              }}>
              Verzenden
            </button>
            <br />
            <p className="white">.</p>
          </Modal.Footer>
        </Modal>
      </div>)
}

export default EventApply;