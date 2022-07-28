import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function RefereeElement() {
    let params = useParams();
    let [referee, setReferee] = useState([]);
    //sistemare il passaggio dell'url
    //const url = "http://localhost:8080/referee/" + params.idReferee;
    //url.concat(params.idReferee);
    const loadRefereeFromId = () => {
        const p = axios.get(url);
        p.then((res) => setReferee(res.data));
    };
    useEffect(loadRefereeFromId);

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