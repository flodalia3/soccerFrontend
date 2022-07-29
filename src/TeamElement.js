import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import './TeamElement.css';

import logo from './logo.svg';
// import roma from './images/roma.svg';
import {
    NavLink,
    Outlet,
    useSearchParams,
  } from "react-router-dom";

export default function TeamElement() {
    let params = useParams();
    let id = parseInt(params.teamId, 10);
    let [team, setTeam] = useState({});
    const loadTeamFromId = () => {
        const p = axios.get(`http://localhost:8080/team/${id}`);
        p.then((res) => setTeam(res.data));
    };
    useEffect(loadTeamFromId, [id]);
    console.log("ecco i parametri", params);
    console.log("ecco il team", team);

    return (
        <main style={{ padding: "1rem" }}>
            <h2>{team.name}</h2>
            <p>
                <img className = "logo" src={`../images/${team.logo}.svg`}/> <br/>
               Motto: {team.motto} <br />
               Titoli vinti: {team.titles} <br />
               Città: {team.cityName} <br />
               Punti in classifica: {team.points} <br />
            </p>
            <ul>
            </ul>
        </main>
    )
}
//da inserire l'immagine del logo
//logo: {team.logo}
 /*              {
                team.playerDTOs.
                map((player) => (
                    <li>{player.jersey} {player.name} {player.surname}</li>
                ))
            }
            */