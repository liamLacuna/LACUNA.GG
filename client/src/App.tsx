import React, { useState } from 'react';
import './App.css';

const API_KEY = ''

function App() {
  const [opponentChamps, setOpponentChamps] = useState("");
  const [allyChamps, setAllyChamps] = useState("");

  const [bestPick, setBestPick] = useState("");
    
  async function processMessageToChatGPT() {
    const msg = `Help me pick the best champ for winning this game, opponentChamp: ${opponentChamps}, what we had: ${allyChamps}`;
    console.log(msg);
    const apiMessage = {
      role: "user",
      content: msg
    }

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [apiMessage]
    }

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data => {
      return data.json();
    })).then(data => {
      setBestPick(data.choices[0].message.content)
    })
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
        <button onClick={processMessageToChatGPT}>
          {" "}
          Pick the Best Champoin for this game
        </button>
        <div>{bestPick}</div>
      </header>
    </div>
  );
}

export default App;
