import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function PlayerElement() {
    let params = useParams();
    let id = parseInt(params.playerId, 10);
    let [player, setPlayer] = useState({});
    const loadPlayerFromId = () => {
        const p = axios.get(`http://localhost:8080/player/${id}`);
        p.then((res) => setPlayer(res.data));
    };
    useEffect(loadPlayerFromId, [id]);

    return (
        <main style={{ padding: "1rem" }}>
            <h2>{player.name} {player.surname}</h2>
            <p> 
               Data di nascita: {player.dob} <br />
               Luogo di nascita: {player.birthCity} <br />
               Numero di maglia: {player.jersey} <br />
               Squadra: {player.jersey} <br />
               Ruolo: {player.roleName} <br />
               Numero di goals: {player.numGoals} <br />
               Numero di assist: {player.numAssists} <br />
            </p>
            <p></p>
        </main>
    )
}