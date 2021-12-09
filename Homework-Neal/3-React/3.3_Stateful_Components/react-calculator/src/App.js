import React, { useState, useEffect } from "react";
import "./App.css";

const numerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const functions = ["+", "-", "*", "/"];

function App() {
  let [display, setDisplay] = useState("");
  const [active, setActive] = useState(false);
  // const [sexy, setSexy] = useState();

  //Sets active/inactive state for button/function it's assigned to
  useEffect(() => {
    console.log("UseEffect Running.");
    console.log({ display });
    if (display.charAt(0) === "") {
      console.log("Setting Active: False");
      setActive(false);
    } else if (display.charAt(0) === "*" || display.charAt(0) === "/") {
      setActive(false);
    } else if (display.charAt(0) === "O") {
      setActive(false);
    } else {
      console.log("Setting Active: True");
      setActive(true);
    }
    console.log(active);
  });

  // getRandomSexy(max);{
  //   return Math.floor(Math.random() * max);
  //   }
  // }
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
            disabled={!active}
            onClick={() => {
              console.log(display);
              let result = eval(display);
              if (result === undefined) {
                setDisplay("");
              } else {
                setDisplay(result.toString());
              }

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
