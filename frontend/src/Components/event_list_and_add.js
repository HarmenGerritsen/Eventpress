import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Modal from "react-bootstrap/Modal";
import moment from 'moment';
import { DatePicker, TimePicker } from '@buffetjs/core';

function EventListAndAdd(props) {

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
  const [value, setState] = useState(moment([2021, 11, 14]));
  const [val, setValue] = useState('');

  const handleSubmit = (e) => {
    const newData = { Datum, Tijd, Titel, Omschrijving, Categorie, Locatie, Organisator, Inschrijvingen };

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

            <p>Maak evenement aan</p>

            <div className="Prikker">
              <Form.Control type="date"
                onChange={(e) => setDatum(e.target.value)}
                value={Datum}
              />
              <TimePicker
                onChange={(e) => setTijd(e.target.value)}
                seconds={false}
                value={Tijd}
              />
            </div>
            
            <textarea className="textarea" placeholder="Titel" value={Titel} onChange={(e) => setTitel(e.target.value)}></textarea>
            <textarea className="textarea" placeholder="Omschrijving" value={Omschrijving} onChange={(e) => setOmschrijving(e.target.value)}></textarea>
            <textarea className="textarea" placeholder="Categorie" value={Categorie} onChange={(e) => setCategorie(e.target.value)}></textarea>
            <textarea className="textarea" placeholder="Locatie" value={Locatie} onChange={(e) => setLocatie(e.target.value)}></textarea>
            <textarea className="textarea" placeholder="Organisator" value={Organisator} onChange={(e) => setOrganisator(e.target.value)}></textarea>
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
export default EventListAndAdd;