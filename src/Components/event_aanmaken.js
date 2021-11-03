import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Modal from "react-bootstrap/Modal";

function LoopTable(props) {
    const [emps, setEmps] = useState([{}, {}, {}])

    const addRow = () => {
        let newEmp = {}
        setEmps([...emps, newEmp])
    }

    const [data, setData] = useState([]);

    const getData = () => {
        fetch('data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setData(myJson)
            });
    }
    useEffect(() => { getData() }, [])

    return (
        <div>
            <div className="Table">
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>Datum</th>
                            <th>Tijd</th>
                            <th>Titel</th>
                            <th className="Omschrijving hide">Omschrijving</th>
                            <th className="hide">Categorie</th>
                            <th className="hide">Locatie</th>
                            <th className="hide">Organisator</th>
                        </tr>
                    </thead>
                    {data && data.length > 0 && data.map((item) => (
                        <tbody>
                            {emps.map((index) => (
                                <tr key={index}>
                                    <td>{item.date}</td>
                                    <td>{item.time}</td>
                                    <td>{item.title}</td>
                                    <td className="hide">{item.text}</td>
                                    <td className="hide">{item.category}</td>
                                    <td className="hide">{item.location}</td>
                                    <td className="hide">{item.name}</td>
                                </tr>
                            )
                            )}
                        </tbody>
                    )
                    )}
                </Table>
            </div>
            <div>
                <Modal show={props.handleshow5} onHide={props.handlec5}>
                    <Modal.Header className="modal-header">
                        <Modal.Title className="ModalTitle">Aanvragen</Modal.Title>
                        <button className="closeButton" onClick={props.handlec5}>X</button>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Vraag evenement aan</p>
                        <textarea className="textarea" placeholder="Datum"></textarea>
                        <textarea className="textarea" placeholder="Tijd"></textarea>
                        <textarea className="textarea" placeholder="Titel"></textarea>
                        <textarea className="textarea" placeholder="Omschrijving"></textarea>
                        <textarea className="textarea" placeholder="Categorie"></textarea>
                        <textarea className="textarea" placeholder="Locatie"></textarea>
                        <textarea className="textarea" placeholder="Organisator"></textarea>
                    </Modal.Body>
                    <Modal.Footer class="col text-center">
                        <button type="button" class="btn btn-dark button" variant="secondary" onClick={() => { props.handlec5(); props.handles6(); addRow();}}>
                            Aanvragen
                        </button>
                        <br />
                        <p className="white">.</p>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}
export default LoopTable;
