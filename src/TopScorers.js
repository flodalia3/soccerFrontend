import {
    NavLink,
    Outlet,
    useSearchParams,
  } from "react-router-dom";
  import axios from 'axios';
  import React, { useState, useEffect } from "react";
  
  export default function TopScorers() {
    let [players, setPlayers] = useState([]);
    let [searchParams, setSearchParams] = useSearchParams();
    let loadPlayers = () => {
        const p = axios.get("http://localhost:8080/player/topgoals");
        p.then((res) => setPlayers(res.data));
    };
    useEffect(loadPlayers, []);
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
                  {players
                      .filter((player) => {
                          let filter = searchParams.get("filter");
                          if (!filter) return true;
                          let name = player.name.toLowerCase();
                          return name.startsWith(filter.toLowerCase());
                      })
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
                      ))}
              </nav>
              <Outlet />
          </div>
      );
  
      /*<main style={{ padding: "1rem 0" }}>
          <TableReferees />
        </main>*/
  
      /*  <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem",
          }}
        >
        </nav>
        <main style={{ padding: "1rem 0" }}>
          <TableReferees />
        </main>
      </div>*/
    }