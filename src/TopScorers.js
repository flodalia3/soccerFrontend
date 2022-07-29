/*import { useEffect, useState } from "react";
import axios from 'axios';

export default function TopScorers() {
    let [topPlayers, setTopPlayers] = useState([]);
    let loadTopScorers = () => {
      const p = axios.get("http://localhost:8080/player/topgoals");
      p.then((res) => setTopPlayers(res.data));
    };
    useEffect(loadTopScorers, []);
    return (
        <main>
            <h1>Top Scorers</h1>

        </main>
    );

}
*/
/*{topPlayers
    .map((player) => (
            <li>{player.name} {player.surname}</li>
    ))
}*/

