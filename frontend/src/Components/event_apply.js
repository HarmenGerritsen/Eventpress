import React, { Component, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

function EventApply(props) {
  
  const [Email, setEmail] = useState('');
  //const (Event) = 

  const handleSubmit = (e) => {

    fetch('http://localhost:1337/mails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        usermail: Email,
        //events: Event
      
      }),
    })
    .then(response => response.json())
    .then(data => console.log(data));
  }
  

    return (
      <div>
        <Modal show={props.handleshowApply} onHide={props.handlecApply}>
          <Modal.Header className="modal-header">
            <Modal.Title className="ModalTitle">Inschrijven</Modal.Title>
            <button className="closeButton" onClick={props.handlecApply}>X</button>
          </Modal.Header>
          <Modal.Body className="popupBody">
            <textarea className="textarea" placeholder="Vul hier je email in" value={Email} onChange={(e) => setEmail(e.target.value)}></textarea>
          </Modal.Body>
          <Modal.Footer className="popupFooter" class="col text-center">
          <button type="button" class="btn btn-dark button" variant="secondary" onClick={() => {props.handlesEventInfo()}}>
              Terug
            </button>
            <button type="button" class="btn btn-dark button" variant="secondary" onClick={() => {
              handleSubmit();
              props.handlecApply();
              props.handlesApplyAccepted(); 
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