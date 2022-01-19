import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

function EventInfo(props, state) {

  function refreshPage() {
    window.location.reload(false);
  }

  const [events, setEvent] = useState([{}])
  const [data, setData] = useState([]);
  const getData = () => {
    fetch('http://145.89.192.115:1337/Events'
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
          {data && data.length > 0 && data.map((item) => (
            <Modal.Title className="modal-title">
              {events.map((index) => {
                if (item.id === (props.EventID)) return (
                  <div>{item.Titel}</div>
                )
              }
              )}
            </Modal.Title>
          )
          )}
          <button className="closeButton" onClick={props.handlecEventInfo}>X</button>
        </Modal.Header>
        <Modal.Body className="popupbody">
          {data && data.length > 0 && data.map((item) => (
            <tbody>
              {events.map((index) => {
                if (item.id === (props.EventID)) return (
                  <div className="column">
                      <div className="leftcolumn">
                          <div className="datetime">{item.Datum} - {item.Tijd.slice(0, -7)}</div>
                          <br /><br />

                          <div className="subtitle">Omschrijving: </div>

                          <div className="Omschrijving EventInfo">{item.Omschrijving}</div>

                      </div>
                      <div class="rightcolumn">
                          <div className="subtitle">Categorie:  </div>
                          <div className="EventInfo">{item.Categorie}</div>

                          <div className="subtitle">Locatie:  </div>
                          <div className="EventInfo">{item.Locatie}</div>

                          <div className="subtitle">Organisator:  </div>
                          <div className="EventInfo">{item.Organisator}</div>

                          <div className="subtitle">Niveau: </div>
                          <div className="EventInfo">{item.Niveau}</div>

                          <div className="subtitle">Persoonslimiet: </div>
                          <div className="EventInfo">{item.Limiet}</div>

                          <div className="subtitle mails">Inschrijvingen: </div>
                          {item.Inschrijvingen.map((inschrijving, index) => (
                            <li className="mails" key={index} className="EventInfo">{inschrijving.usermail}
                            </li>))}
                        </div>
                      </div>
                    
                )
              }
              )}
            </tbody>
          )
          )}
          {/* <img class="img-responsive" src={imgfe1} alt=""></img> */}
        </Modal.Body>
        <Modal.Footer class="div text-center">
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