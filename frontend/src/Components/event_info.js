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
                {events.map((index) => {if (item.id === (props.EventID))return(
                  <div>
                    <h1>{item.Titel}</h1>
                    <h3>{item.Datum} - {item.Tijd}</h3><br/><br/>
                    <h3>Omschrijving:</h3><h3 className="Omschrijving EventInfo">{item.Omschrijving}</h3><br/>
                    <h2>Categorie:</h2><h2 className="EventInfo">{item.Categorie}</h2><br/><br/>
                    <h2>Locatie:</h2><h2 className="EventInfo">{item.Locatie}</h2><br/><br/>
                    <h2>Organisator:</h2><h2 className="EventInfo">{item.Organisator}</h2><br/><br/>
                    <h2>Inschrijvingen:</h2><br/>
                    {item.Inschrijvingen.map((inschrijving, index) => (
                      <h3 key={index} className="EventInfo">
                         <br/>{inschrijving.usermail}
                      </h3>))}
                  </div>

                )}
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