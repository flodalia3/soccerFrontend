import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function RefereeElement() {
    let params = useParams();
    let id = parseInt(params.refereeId, 10);
    let [referee, setReferee] = useState({});
    const loadRefereeFromId = () => {
        const p = axios.get(`http://localhost:8080/referee/${id}`);
        p.then((res) => setReferee(res.data));
    };
    useEffect(loadRefereeFromId, [id]);

    return (
        <main style={{ padding: "1rem" }}>
            <h2>{referee.name} {referee.surname}</h2>
            <p> 
               Data di nascita: {referee.dob} <br />
               Luogo di nascita: {referee.cityName} <br />
               Inizio carriera: {referee.workSince} 
            </p>
            <p></p>
        </main>
    )
}