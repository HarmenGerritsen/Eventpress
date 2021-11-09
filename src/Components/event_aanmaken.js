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
        fetch('http://localhost:8000/Events'
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

    const [datum, setDatum] = useState('');
    const [tijd, setTijd] = useState('');
    const [titel, setTitel] = useState('');
    const [omschrijving, setOmschrijving] = useState('');
    const [categorie, setCategorie] = useState('');
    const [locatie, setLocatie] = useState('');
    const [organisator, setOrganisator] = useState('');

    const handleSubmit = (e) => {
        const newData = { datum, tijd, titel, omschrijving, categorie, locatie, organisator };

        fetch('http://localhost:8000/Events/', {
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
                                <tr key={index}  onClick={() => { props.handles2(); }}>
                                    <td>{item.datum}</td>
                                    <td>{item.tijd}</td>
                                    <td>{item.titel}</td>
                                    <td className="hide">{item.omschrijving}</td>
                                    <td className="hide">{item.categorie}</td>
                                    <td className="hide">{item.locatie}</td>
                                    <td className="hide">{item.organisator}</td>
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
                        <Modal.Title className="ModalTitle">Evenement Aanmaken</Modal.Title>
                        <button className="closeButton" onClick={props.handlec5}>X</button>
                    </Modal.Header>
                    <Modal.Body>
                        
                        <p>Maak evenement aan</p>
                        <textarea className="textarea" placeholder="Datum" value={datum} onChange={(e) => setDatum(e.target.value)} ></textarea>
                        <textarea className="textarea" placeholder="Tijd" value={tijd} onChange={(e) => setTijd(e.target.value)}></textarea>
                        <textarea className="textarea" placeholder="Titel" value={titel} onChange={(e) => setTitel(e.target.value)}></textarea>
                        <textarea className="textarea" placeholder="Omschrijving" value={omschrijving} onChange={(e) => setOmschrijving(e.target.value)}></textarea>
                        <textarea className="textarea" placeholder="Categorie" value={categorie} onChange={(e) => setCategorie(e.target.value)}></textarea>
                        <textarea className="textarea" placeholder="Locatie" value={locatie} onChange={(e) => setLocatie(e.target.value)}></textarea>
                        <textarea className="textarea" placeholder="Organisator" value={organisator} onChange={(e) => setOrganisator(e.target.value)}></textarea>
                        </Modal.Body>
                    
                        <Modal.Footer class="col text-center">
                        <button type="button" class="btn btn-dark button" variant="secondary" onClick={() => {handleSubmit(); props.handlec5(); props.handles6(); addRow();}}>
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
export default LoopTable;
