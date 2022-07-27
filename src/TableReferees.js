import axios from 'axios';
import React, { useState } from "react";
function TableReferees(props){

    const [referees, setReferees] = useState([]);

    const loadReferee = () => {
      const p = axios.get("http://localhost:8080/referee");
      p.then((res) => setReferees(res.data));
    };

    return(
        <div>
        <button className="loadData" onClick={loadReferee}>Load Referee from Server</button>
        <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Date of Birth</th>
            <th>Career start</th>
            <th>Birth place</th>
          </tr>
        </thead>
        <tbody>
          {
            referees.map( (r) => {
              return (
                <tr key={r.id}>
                  <td>{r.name}</td>
                  <td>{r.surname}</td>
                  <td>{r.dob}</td>
                  <td>{r.workSince}</td>
                  <td>{r.cityName}</td>
                </tr>
              )
            }
            )
          }
        </tbody>
      </table>
      </div>
    )
}

export default TableReferees;