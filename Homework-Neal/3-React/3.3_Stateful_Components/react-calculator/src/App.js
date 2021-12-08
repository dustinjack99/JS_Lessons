import React, { useState, useEffect } from "react";
import "./App.css";

const numerals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const functions = ["+", "-", "*", "/"];

function App() {
  let [display, setDisplay] = useState("");
  const [active, setActive] = useState(false);
  // useEffect(() => {
  //   if (counter > 70) {
  //     setTruth(true);
  //   } else {
  //     setTruth(false);
  //   }
  useState(() => {
    if ((display = "")) {
      setActive(false);
    } else if ((display = "*" || "/")) {
      setActive(false);
    } else if ((display = "0")) {
      setActive(false);
    } else {
      setActive(true);
    }
    console.log(active);
  });
  return (
    <div className="App">
      <h1>Calculator App</h1>

      <div id="display">
        <h1>{display}</h1>
      </div>
      <hr />
      <div className="Input">
        <div className="Numbers">
          {numerals.map((button) => (
            <button onClick={() => setDisplay(display + button)}>
              {button}
            </button>
          ))}
        </div>
        <div className="Functions">
          {functions.map((button) => (
            <button onClick={() => setDisplay(display + button)}>
              {button}
            </button>
          ))}
        </div>

        <div className="Functions2">
          <button
            onClick={() =>
              setDisplay(
                "OwO What's this? (notices ur " + eval(display.toString()) + ")"
              )
            }
          >
            Sexy
          </button>
          <button onClick={() => setDisplay("")}>Clear</button>

          <button
            onClick={() => {
              setDisplay(eval(display.toString()));
              console.log(display);

              // has to run calculations on the display
              // 1. switch case
              // 2. eval()
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
