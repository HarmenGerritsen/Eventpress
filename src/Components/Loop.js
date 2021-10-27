import React from "react";
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function LoopTable() {
    const [emps,setEmps]=useState([
        {date:"14-11",time:"14:00-15:00",title:"NodeJS",text:"Dit is een placeholder",category:"FE",location:"Lokaal 4.094",name:"Gert"},
        {date:"17-11",time:"11:00-13:30",title:"JavaScript",text:"Open-ICT is ok",category:"FE",location:"Ergens in Utrecht",name:"Arno"},
        {date:"12-11",time:"12:00-13:00",title:"React",text:"React en alles erbij",category:"FE",location:"Frontend Discord",name:"Jan"},
    ])
   
    const addRow=()=>{
        let newEmp={date:"date",time:"time",title:"title",text:"description",category:"category",location:"location",name:"name"}
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
            <tbody>
            {emps.map( (emp,index)=> (
                <tr key={index}>
                    {data && data.length>0 && data.map((item)=>
                    <td>{item.date}</td>)}
                    {data && data.length>0 && data.map((item)=>
                    <td>{item.time}</td>)}
                    {data && data.length>0 && data.map((item)=>
                    <td>{item.title}</td>)}
                    <td className="hide">{emp.text}</td>
                    <td className="hide">{emp.category}</td>
                    <td className="hide">{emp.location}</td>
                    <td className="hide">{emp.name}</td>
                </tr>
                )
            )}
            <button className="plus plus2" onClick={addRow}>Meer</button>
            </tbody>
        </Table>
    </div>);
}

export default LoopTable;