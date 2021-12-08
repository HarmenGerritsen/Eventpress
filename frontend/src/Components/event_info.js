import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Table from 'react-bootstrap/Table';
import imgfe1 from '../Images/FE1.png';
import data from './event_list_and_add.js'


function EventInfo(props, state) {

  function refreshPage() {
    window.location.reload(false);
  }

  const [events, setEvent] = useState([{}])
  const [data, setData] = useState([]);
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

  const [datum, setDatum] = useState('');
  const [tijd, setTijd] = useState('');
  const [titel, setTitel] = useState('');
  const [omschrijving, setOmschrijving] = useState('');
  const [categorie, setCategorie] = useState('');
  const [locatie, setLocatie] = useState('');
  const [organisator, setOrganisator] = useState('');

  const handleSubmit = (e) => {
    const newData = { datum, tijd, titel, omschrijving, categorie, locatie, organisator };

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
      <Modal show={props.handleshowEventInfo} onHide={props.handlecEventInfo} className="modal">
        <Modal.Header className="modal-header">
          <Modal.Title className="modal-title">Evenement inzien</Modal.Title>
          <button className="closeButton" onClick={props.handlecEventInfo}>X</button>
        </Modal.Header>
        <Modal.Body className="popupbody">
          <Table bordered hover>

            {data && data.length > 0 && data.map((item) => (
              <tbody>
                {events.map((index) => (
                  <div>
                    <h1>{item.Titel}</h1>
                    <h1>{item.Datum}</h1>
                    <hEventInfo>{item.Tijd}</hEventInfo>
                    <hApply>{item.Omschrijving}</hApply>
                    <hApply>{item.Categorie}</hApply>
                    <hApply>{item.Locatie}</hApply>
                    <hApply>{item.Organisator}</hApply>
                    {item.Inschrijvingen.map((inschrijving, index) => (
                      <hApply key={index}>
                        {inschrijving.usermail}
                      </hApply>))}
                  </div>

                )
                )}
              </tbody>
            )
            )}
          </Table>
          <img class="img-responsive" src={imgfe1} alt=""></img>
        </Modal.Body>
        <Modal.Footer class="col text-center">
          <button type="button" class="btn btn-dark button" variant="secondary" onClick={() => { props.handlecEventInfo(); props.handlesApply(); }}>
            Inschrijven
          </button>
          <button type="button" class="btn btn-dark button" variant="secondary" onClick={props.handlecEventInfo}>
            Sluiten
          </button>
          <br />
          <p className="white">.</p>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EventInfo;