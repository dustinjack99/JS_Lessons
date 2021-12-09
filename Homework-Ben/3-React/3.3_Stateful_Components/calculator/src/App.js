import React, { useState, useEffect } from "react";
import "./App.css";

const numButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const funButtons = ["+", "-", "*", "/"];

function App() {
  const [display, setDisplay] = useState("");

  return (
    <div className="App">
      <h1 id="title">The Sexyulator</h1>
      <br />
      <div id="display">
        <h1>{display}</h1>
      </div>
      <div id="inputKeys">
        <div className="numbers">
          {numButtons.map((nButton) => (
            <button class="nButton buttons" onClick={() => setDisplay(display + nButton)}>
              {nButton}
            </button>
          ))}
        </div>
        <div className="functions">
          {funButtons.map((fButton) => (
            <button class="fButton buttons" onClick={() => setDisplay(display + fButton)}>
              {fButton}
            </button>
          ))}
        </div>
        <div id="functionButtons">
          <button
            className="buttons specialButtons"
            onClick={() =>
              window
                .open("https://www.youtube.com/watch?v=cWmHcEyyKs8&t=0m30s", "_blank")
                .focus()
            }
          >
            Sexy
          </button>
          <button className="buttons specialButtons" onClick={() => setDisplay("")}>
            Clear
          </button>
          <button
            className="buttons specialButtons"
            onClick={
              // eslint-disable-next-line no-eval
              () => setDisplay(eval(display))
            }
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
