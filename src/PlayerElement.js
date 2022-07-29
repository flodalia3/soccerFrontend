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
               Date of Birth: {player.dob} <br />
               Birth city: {player.birthCity} <br />
               Jersey number: {player.jersey} <br />
                Current Team: {player.teamName} <br />
               Main role: {player.roleName} <br />
               Goals: {player.numGoals} <br />
               Assists: {player.numAssists} <br />
            </p>
            <p></p>
        </main>
    )
}