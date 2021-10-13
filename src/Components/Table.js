import React from "react";
import Table from 'react-bootstrap/Table';
import TableRow from "./TableRow.js";

class EventTable extends React.Component {

    render(){
    return (

<div className="Table">
<Table bordered hover>
  <thead>
    <tr onClick={this.props.handles2}>
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
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
  </tbody>
</Table>
</div>

)
}
    }
    export default EventTable;