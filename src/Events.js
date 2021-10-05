import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import fe1 from "./frontend1.png";
import po1 from "./productowner1.png";
import ai1 from "./artint1.png";
import be1 from "./backend1.png";
import csc1 from "./cloud1.png";
import React from "react";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';

function Events () {
    const [setShow] = useState(false);
    const handleShow = () => setShow(true);

    return (<div><Row classname="row">
    <Col style={{}}>
      <a href="#">
        <img onClick={handleShow} className="fe1" src={fe1} alt=''></img>
      </a>
    </Col>
    <Col style={{}}>
      <a href="#">
        <img onClick={handleShow} className="fe1" src={fe1} alt=''></img>
      </a>
    </Col>
    <Col style={{}}>
      <a href="#">
        <img onClick={handleShow} className="be1" src={be1} alt=''></img>
      </a>
    </Col>
    <Col style={{}}>
      <a href="#">
        <img onClick={handleShow} className="fe1" src={fe1} alt=''></img>
      </a>
    </Col>
    <Col style={{}}>
      <a href="#">
        <img onClick={handleShow} className="be1" src={be1} alt=''></img>
      </a>
    </Col>
  </Row>
  <Row classname="row">
    <Col style={{}}>
      <a href="#">
        <img onClick={handleShow} className="po1" src={po1} alt=''></img>
      </a>
    </Col>
    <Col style={{}}>
      <a href="#">
        <img onClick={handleShow} className="ai1" src={ai1} alt=''></img>
      </a>
    </Col>
    <Col style={{}}>
      <a href="#">
        <img onClick={handleShow} className="csc1" src={csc1} alt=''></img>
      </a>
    </Col>
    <Col style={{}}>
      <a href="#">
        <img onClick={handleShow} className="ai1" src={ai1} alt=''></img>
      </a>
    </Col>
    <Col style={{}}>
      <a href="#">
        <img onClick={handleShow} className="fe1" src={fe1} alt=''></img>
      </a>
    </Col>
  </Row>
  <Row classname="row">
    <Col style={{}}>
      <a href="#">
        <img onClick={handleShow} className="fe1" src={fe1} alt=''></img>
      </a>
    </Col>
    <Col style={{}}>
      <a href="#">
        <img onClick={handleShow} className="be1" src={be1} alt=''></img>
      </a>
    </Col>
    <Col style={{}}>
      <a href="#">
        <img onClick={handleShow} className="csc1" src={csc1} alt=''></img>
      </a>
    </Col>
    <Col style={{}}>
      <a href="#">
        <img onClick={handleShow} className="ai1" src={ai1} alt=''></img>
      </a>
    </Col>
    <Col style={{}}>
      <a href="#">
        <img onClick={handleShow} className="po1" src={po1} alt=''></img>
      </a>
    </Col>
  </Row></div>)
};

export default Events;