import React from "react";
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function LoopTable() {
    const [emps,setEmps]=useState([{},{},{}])
   
    const addRow=()=>{
        let newEmp={}
        setEmps([...emps,newEmp])
    }

    const [data,setData]=useState([]);

    const getData=()=>{
        fetch('data.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setData(myJson)
          });
      }
      useEffect(()=>{
        getData()
      },[])

return ( 
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
            {data && data.length>0 && data.map((item)=> (
            <tbody>
            {emps.map( (index)=> (
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
            <button className="plus plus2" onClick={addRow}>Meer</button>
            </tbody>
            )
        )}
        </Table>
    </div>);
}

export default LoopTable;