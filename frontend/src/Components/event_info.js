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
                    <h1>{item.Datum}</h1>
                    <h1>{item.Tijd}</h1>
                    <h1>{item.Omschrijving}</h1>
                    <h1>{item.Categorie}</h1>
                    <h1>{item.Locatie}</h1>
                    <h1>{item.Organisator}</h1>
                    {item.Inschrijvingen.map((inschrijving, index) => (
                      <h1 key={index}>
                        {inschrijving.usermail}
                      </h1>))}
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