import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import moment from 'moment';
import logo from "../Images/logo.png";
import plus from "../Images/Plus.png";
import SidebarMenu from "./sidebar_menu.js";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

function EventListAndAddEvent(props) {

  const refreshPage = () => {
    window.location.reload(false);
  }

  const [events, setevents] = useState([{}])
  const [data, setData] = useState([]);
  const getData = () => {
    fetch('http://localhost:1337/events/'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',

        }
      }
    )
      .then(function (response) {
        return response.json()
      })
      .then(function (myJson) {
        setData(myJson)
      })
  }
  useEffect(() => { getData() }, [])

  const [order, setorder] = useState("ASC");

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted)
      setorder("DSC")
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted)
      setorder("ASC")
    }
  };

  const [Datum, setDatum] = useState('');
  const [Tijd, setTijd] = useState('');
  const [Titel, setTitel] = useState('');
  const [Omschrijving, setOmschrijving] = useState('');
  const [Categorie, setCategorie] = useState('');
  const [Locatie, setLocatie] = useState('');
  const [Organisator, setOrganisator] = useState('');
  const [Inschrijvingen, setInschrijvingen] = useState('');
  const [Limiet, setLimiet] = useState('');
  const [Niveau, setNiveau] = useState('');

  const handleSubmit = (e) => {
    var newTijd = moment(Tijd, "hh:mm").format('HH:mm:ss.SSS');
    const newData = {
      Datum,
      Tijd: newTijd,
      Titel,
      Omschrijving,
      Categorie,
      Locatie,
      Organisator,
      Inschrijvingen,
      Limiet,
      Niveau
    };

    fetch('http://localhost:1337/events/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData)
    }).then(() => {
      console.log('new data added')
    });
    e.preventDefault();
    refreshPage();
  }

  return (
    <div className="body">
      <div className="Table">
        <Table className="table table-borderless">
          <thead>
            <tr>
              <th>Datum</th>
              <th>Tijd</th>
              <th>Titel</th>
              <th className="Omschrijving">Omschrijving</th>
              <th onClick={() => sorting("Categorie")}>Categorie</th>
              <th>Locatie</th>
              <th>Organisator</th>
            </tr>
          </thead>
          {data && data.length > 0 && data.map((item) => (
            <tbody>
              {events.map((index) => (
                <tr className="hover" key={index} onClick={() => { props.seteventid(item.id); props.handlesEventInfo(item.Datum); }}>
                  <td>{moment(item.Datum).format("DD/MM/YYYY")}</td>
                  <td>{item.Tijd.slice(0, -7)}</td>
                  <td>{item.Titel}</td>
                  <td className="Omschrijving">{item.Omschrijving}</td>
                  <td>{item.Categorie}</td>
                  <td>{item.Locatie}</td>
                  <td>{item.Organisator}</td>
                </tr>
              )
              )}
            </tbody>
          )
          )}
        </Table>
      </div>

      {/* Event Aanmaken */}

      <div>
        <Modal show={props.handleshowAddEvent} onHide={props.handlecAddEvent}>
          <Modal.Header className="modal-header">
            <Modal.Title className="ModalTitle">Evenement Aanmaken</Modal.Title>
            <button className="closeButton" onClick={props.handlecAddEvent}>X</button>
          </Modal.Header>
          <Modal.Body>
            <p>Maak evenement aan:</p>
            <div className="Prikker">
              <form onSubmit={handleSubmit}>

                <Row>
                  <Col lg="2">
                    <Form.Label>Datum:</Form.Label>
                    <Form.Group as={Col} >
                      <Form.Control
                        required
                        type="date"
                        onChange={(e) => setDatum(e.target.value)}
                        value={Datum}
                      />
                      <Form.Control.Feedback type="invalid" />
                    </Form.Group>
                  </Col>
                  <Col lg="2">
                    <Form.Label>Tijdstip:</Form.Label>
                    <Form.Group as={Col} >
                      <Form.Control
                        required
                        type="time"
                        onChange={(e) => setTijd(e.target.value)}
                        seconds={true}
                        value={Tijd}
                      />
                      <Form.Control.Feedback type="invalid" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group as={Col} >
                      <Form.Label>Locatie</Form.Label>
                      <Form.Control
                        required
                        value={Locatie}
                        onChange={(e) => setLocatie(e.target.value)}
                        type="title"
                        placeholder="Locatie van event..." />
                      <Form.Control.Feedback type="invalid" />
                    </Form.Group>
                  </Col>
                </Row>

                <br />

                <Row>
                  <Form.Group as={Col} >
                    <Form.Label>Titel</Form.Label>
                    <Form.Control
                      required
                      value={Titel}
                      onChange={(e) => setTitel(e.target.value)}
                      type="title"
                      placeholder="Titel van event..." />
                    <Form.Control.Feedback type="invalid" />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Organisator</Form.Label>
                    <Form.Control
                      required
                      value={Organisator}
                      onChange={(e) => setOrganisator(e.target.value)}
                      type="title"
                      placeholder="Organisator van event..." />
                    <Form.Control.Feedback type="invalid" />
                  </Form.Group>
                </Row>

                <br />

                <Row>
                  <Col>
                    <Form.Group controlId="formBasicSelect">
                      <Form.Label>Categorie</Form.Label>
                      <Form.Control
                        required
                        as="select"
                        value={Categorie}
                        onChange={(e) => setCategorie(e.target.value)}>
                        <option>Kies een optie...</option>
                        <option>Overig</option>
                        <option>Frontend</option>
                        <option>Backend</option>
                      </Form.Control>
                      <Form.Control.Feedback type="invalid" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formBasicSelect">
                      <Form.Label>Niveau</Form.Label>
                      <Form.Control
                        required
                        as="select"
                        value={Niveau}
                        onChange={(e) => setNiveau(e.target.value)}>
                        <option>Kies een optie...</option>
                        <option>Overig</option>
                        <option>Beginner</option>
                        <option>Gevorderd</option>
                        <option>Expert</option>
                      </Form.Control>
                      <Form.Control.Feedback type="invalid" />
                    </Form.Group>
                  </Col>
                </Row>

                <br />

                <Row>
                  <Form.Group as={Col} >
                    <Form.Label>Omschrijving</Form.Label>
                    <Form.Control
                      required
                      value={Omschrijving}
                      onChange={(e) => setOmschrijving(e.target.value)}
                      as="textarea"
                      rows={7}
                      type="title"
                      placeholder="Omschrijving van event..." />
                    <Form.Control.Feedback type="invalid" />
                  </Form.Group>
                </Row>

                <br />

                <Row>
                  <Form.Group as={Col} >
                    <Form.Label>Persoonslimiet</Form.Label>
                    <Form.Control
                      required
                      value={Limiet}
                      onChange={(e) => setLimiet(e.target.value)}
                      type="number"
                      placeholder="Maximaal aantal deelnemers..." />
                  </Form.Group>
                  <Col></Col>
                  <Col></Col>
                </Row>

                <button
                  type="submit"
                  class="btn btn-dark button"
                  variant="secondary"
                  className="submitButton">
                  Aanmaken
                </button>

              </form>
            </div>
          </Modal.Body>

          <Modal.Footer class="col text-center">

            <br />
            <p className="white">.</p>
          </Modal.Footer>

        </Modal>
      </div>
      <div className="App-header">
        <img className="logo" src={logo}></img>
        <div className="menu">
          {/* {['start'].map((direction) => (
            <DropdownButton
              className="menuButton hide"
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              title={` Sorteren `}
              type="button"
            >
              <Dropdown.Item eventKey="1" onClick={() => sorting("Categorie")}>Categorie</Dropdown.Item>
              <Dropdown.Item eventKey="2" onClick={() => sorting("Locatie")}>Locatie</Dropdown.Item>
              <Dropdown.Item eventKey="3" onClick={() => sorting("Organisator")}>Organisator</Dropdown.Item>
            </DropdownButton>
          ))} */}
          <div class="dropdown">
            <button class="menuButton">Sorteren</button>
            <div class="dropdown-content">
              <p className="sorterenTitle">Sorteren op:</p>
              <a href="#" onClick={() => sorting("Categorie")}>Categorie</a>
              <a href="#" onClick={() => sorting("Locatie")}>Locatie</a>
              <a href="#" onClick={() => sorting("Organisator")}>Organisator</a>
            </div>
          </div>
          <SidebarMenu />
        </div>
        <a href="#">
          <img className="plus plus2" onClick={props.handlesAddEvent} src={plus} alt=''></img>
        </a>
        {/* <button type="button" className="requestButton" onClick={props.handlesSuggestEvent}><div className="hide">Evenement<br /></div>suggereren</button> */}
      </div>
    </div>
  );
}
export default EventListAndAddEvent;