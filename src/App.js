import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import TableReferees from './TableReferees';
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {

  return (
    
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="referee">Referee</Link> |{" "}
        <Link to="player">Player</Link> |{" "}
        <Link to="team">Team</Link> |{" "}
        <Link to="player/topgoals">TopScorers</Link>
      </nav>
      <Outlet />
      
    </div>
  );
}
//<TableReferees />
export default App;
