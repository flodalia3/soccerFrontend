import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Referee from "./Referee";
import Player from "./Player";
import Team from "./Team";
import RefereeElement from './RefereeElement';
import TeamElement from './TeamElement';
import TopScorers from './TopScorers';
import TopAssists from './TopAssists';
import PlayerElement from './PlayerElement';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
         <Route path="player" element={<Player />}>
         <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select a player to see its information</p>
                </main>
              }
            />
            <Route path=":playerId" element={<PlayerElement />} />
         </Route>
         <Route path="player/topgoals" element={<TopScorers />} />
         <Route path="player/topassists" element={<TopAssists />} />
         <Route path="referee" element={<Referee />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select a referee to see its information</p>
                </main>
              }
            />
            <Route path=":refereeId" element={<RefereeElement />} />
         </Route>
         <Route path="team" element={<Team />}>
         <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select a team to see its information</p>
                </main>
              }
            />
            <Route path=":teamId" element={<TeamElement />} />
         </Route>
         
         <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
