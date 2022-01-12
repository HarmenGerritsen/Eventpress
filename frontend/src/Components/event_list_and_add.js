import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'
import moment from 'moment';

function EventListAndAddEvent(props) {

  function refreshPage() {
    window.location.reload(false);
  }

  const [events] = useState([{}])
  const [data, setData] = useState([]);
  //const [mail, setMail] = useState([]);
  const getData = () => {
    fetch('http://localhost:1337/events/'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
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

  const [Datum, setDatum] = useState('');
  const [Tijd, setTijd] = useState('');
  const [Titel, setTitel] = useState('');
  const [Omschrijving, setOmschrijving] = useState('');
  const [Categorie, setCategorie] = useState('');
  const [Locatie, setLocatie] = useState('');
  const [Organisator, setOrganisator] = useState('');
  const [Inschrijvingen, setInschrijvingen] = useState('');

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
      Inschrijvingen
    };


    fetch('http://localhost:1337/events/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData)
    }).then(() => {
      console.log('new data added')
    })
  }

  return (
    <div>
      <div className="Table">
        <Table className="table table-borderless">
          <thead>
            <tr>
              <th>Datum</th>
              <th>Tijd</th>
              <th>Titel</th>
              <th className="Omschrijving">Omschrijving</th>
              <th>Categorie</th>
              <th>Locatie</th>
              <th>Organisator</th>
            </tr>
          </thead>
          {data && data.length > 0 && data.map((item) => (
            <tbody>
              {events.map((index) => (
                <tr className="hover" key={index} onClick={() => { props.seteventid(item.id); props.handlesEventInfo(item.Datum); }}>
                  <td>{item.Datum}</td>
                  <td>{item.Tijd}</td>
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
      <div>
        <Modal show={props.handleshowAddEvent} onHide={props.handlecAddEvent}>
          <Modal.Header className="modal-header">
            <Modal.Title className="ModalTitle">Evenement Aanmaken</Modal.Title>
            <button className="closeButton" onClick={props.handlecAddEvent}>X</button>
          </Modal.Header>
          <Modal.Body>
            <p>Maak evenement aan:</p>
            <div className="Prikker">

              <Row>
                <Form.Group as={Col} >
                  <Form.Control type="date"
                    onChange={(e) => setDatum(e.target.value)}
                    value={Datum}
                  />
                </Form.Group>
                <Form.Group as={Col} >
                  <Form.Control type="time"
                    onChange={(e) => setTijd(e.target.value)}
                    seconds={true}
                    value={Tijd}
                  />
                </Form.Group>
              </Row>
              <br />

              <Row>
                <Form.Group as={Col} >
                  <Form.Label>Titel</Form.Label>
                  <Form.Control value={Titel} onChange={(e) => setTitel(e.target.value)} type="title" placeholder="Titel van event..." />
                </Form.Group>
                <Form.Group as={Col} >
                  <Form.Label>Locatie</Form.Label>
                  <Form.Control value={Locatie} onChange={(e) => setLocatie(e.target.value)} type="title" placeholder="Locatie van event..." />
                </Form.Group>
                <Form.Group as={Col} >
                  <Form.Label>Organisator</Form.Label>
                  <Form.Control value={Organisator} onChange={(e) => setOrganisator(e.target.value)} type="title" placeholder="Organisator van event..." />
                </Form.Group>
              </Row>
              <br />

              <Row>
                <Form.Group controlId="formBasicSelect">
                  <Form.Label>Categorie</Form.Label>
                  <Form.Control
                    as="select"
                    value={Categorie}
                    onChange={(e) => setCategorie(e.target.value)}
                  >
                    <option value={Categorie}>Overig</option>
                    <option value={Categorie}>FE Gilde</option>
                    <option value={Categorie}>BE Gilde</option>

                  </Form.Control>
                </Form.Group>
              </Row>
              <br />

              <Row><Form.Group as={Col} >
                <Form.Label>Omschrijving</Form.Label>
                <Form.Control value={Omschrijving} onChange={(e) => setOmschrijving(e.target.value)} as="textarea" rows={7} type="title" placeholder="Omschrijving van event..." />
              </Form.Group>
              </Row>
              <br />
              {/* <Row>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Kies thumbnail*:</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Row>
              <br /> */}
              <p>* is niet vereist</p>
            </div>
          </Modal.Body>

          <Modal.Footer class="col text-center">
            <button type="button" class="btn btn-dark button" variant="secondary" onClick={() => {
              handleSubmit();
              props.handlecAddEvent();
              refreshPage();
            }}>
              Aanmaken
            </button>
            <br />
            <p className="white">.</p>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
export default EventListAndAddEvent;

//<Row>
//<Form.Group controlId="formFile" className="mb-3">
//<Form.Label>Kies thumbnail*:</Form.Label>
//<Form.Control type="file" />
//</Form.Group>
//</Row>
//<br />+
//<p>* is niet vereist</p>