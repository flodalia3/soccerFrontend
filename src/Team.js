import {
  NavLink,
  Outlet,
  useSearchParams,
} from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from "react";

export default function Team() {
  let [teams, setTeams] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();
  let loadTeams = () => {
      const p = axios.get("http://localhost:8080/team");
      p.then((res) => setTeams(res.data));
  };
  useEffect(loadTeams, []);
    return (
      <div style={{ display: "flex" }}>
            <nav className='navigationBar'
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem",
                }}
            >
                <input
                    value={searchParams.get("filter") || ""}
                    onChange={(event) => {
                        let filter = event.target.value;
                        if (filter) {
                            setSearchParams({ filter });
                        } else {
                            setSearchParams({});
                        }
                    }}
                />
                {teams
                    .filter((team) => {
                        let filter = searchParams.get("filter");
                        if (!filter) return true;
                        let name = team.name.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                    })
                    .map((team) => (
                        <NavLink
                            style={({ isActive }) => ({
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "red" : "",
                            })}
                            to={`/team/${team.id}`}
                            key={team.id}
                        >
                            {team.name} {team.surname}
                        </NavLink>
                    ))}
            </nav>
            <Outlet />
        </div>
    );

  }