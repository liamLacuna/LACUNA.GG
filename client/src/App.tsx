import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [opponentChamps, setOpponentChamps] = useState("");
  const [allyChamps, setAllyChamps] = useState("");
    
  async function getBestChamp() {
    console.log("Get Best Champ");
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <input 
          type="text"
          onChange={(e) => setOpponentChamps(e.target.value)}
        />
        <input 
          type="text"
          onChange={(e) => setAllyChamps(e.target.value)}
        />
        <button onClick={getBestChamp}>
          {" "}
          Pick the Best Champoin for this game
        </button>
      </header>
    </div>
  );
}

export default App;
