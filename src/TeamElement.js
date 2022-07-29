import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
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
    let players = params.playerDTOs;

    return (
        <main style={{ padding: "1rem" }}>
            <h2>{team.name}</h2>
            <p>
               Motto: {team.motto} <br />
               Titoli vinti: {team.titles} <br />
               Città: {team.cityName} <br />
               Punti in classifica: {team.points} <br />
               
            </p>
        </main>
    )
}
//da inserire l'immagine del logo
//logo: {team.logo}
/*{
               players
               .map((player) => (
                <NavLink
                    style={({ isActive }) => ({
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : "",
                    })}
                    to={`/player/${player.id}`}
                    key={player.id}
                >
                    {player.name} {player.surname}
                </NavLink>
            ))
               } */ 