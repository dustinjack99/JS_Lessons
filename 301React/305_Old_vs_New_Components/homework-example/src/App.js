import React, { useState, useEffect } from "react";

const buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "/", "Sexy"];

function App() {
  const [display, setDisplay] = useState();

  return (
    <div className="App">
      <h1>Calculator App</h1>
      {buttons.map((button) => (
        <button onClick={() => setDisplay(display + button)}>{button}</button>
      ))}
      <button onClick={() => setDisplay("")}>Clear</button>
      <button
        onClick={() => {
          // has to run calculations on the display
          // 1. switch case
          // 2. eval()
        }}
      >
        =
      </button>
      <div id="display">
        <h1>{display}</h1>
      </div>
    </div>
  );
}

export default App;
