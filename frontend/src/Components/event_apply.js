import React, { Component, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";

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
    e.preventDefault();
    props.handlecApply();
    props.handlesApplyAccepted();

  }


  return (
    <div>
      <Modal show={props.handleshowApply} onHide={props.handlecApply}>
        <Modal.Header className="modal-header">
          <Modal.Title className="ModalTitle">Inschrijven</Modal.Title>
          <button className="closeButton" onClick={props.handlecApply}>X</button>
        </Modal.Header>
        <Modal.Body className="popupBody">
          <Form onSubmit={handleSubmit}>

            <Row>
              <Form.Group as={Col} >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="mail"
                  placeholder="Vul hier je email in..." />
                <Form.Control.Feedback type="invalid" />
              </Form.Group>
            </Row>
            <button type="button" class="btn btn-dark button" variant="secondary" onClick={() => { props.handlesEventInfo() }}>
              Terug
            </button>

            {/* <button type="button" class="btn btn-dark button" variant="secondary" onClick={() => {
              handleSubmit();
              props.handlecApply();
              props.handlesApplyAccepted();
            }}>
              Verzenden
            </button> */}

            <button
              type="submit"
              class="btn btn-dark button"
              variant="secondary"
              className="submitButton">
              Versturen
            </button>

          </Form>
        </Modal.Body>
        <Modal.Footer className="popupFooter" class="col text-center">

          <br />
          <p className="white">.</p>
        </Modal.Footer>
      </Modal>
    </div>)
}

export default EventApply;