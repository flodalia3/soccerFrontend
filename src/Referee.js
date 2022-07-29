import {
  NavLink,
  Outlet,
  useSearchParams,
} from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from "react";

export default function Referee() {
  let [referees, setReferees] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();
  let loadReferees = () => {
      const p = axios.get("http://localhost:8080/referee");
      p.then((res) => setReferees(res.data));
  };
  useEffect(loadReferees, []);
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
                {referees
                    .filter((referee) => {
                        let filter = searchParams.get("filter");
                        if (!filter) return true;
                        let name = referee.name.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                    })
                    .map((referee) => (
                        <NavLink
                            style={({ isActive }) => ({
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "red" : "",
                            })}
                            to={`/referee/${referee.id}`}
                            key={referee.id}
                        >
                            {referee.name} {referee.surname}
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