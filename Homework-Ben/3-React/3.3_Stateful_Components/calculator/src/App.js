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
            <button
              class="nButton buttons"
              onClick={() => setDisplay(display.toString() + nButton)}
            >
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
            id="equalButton"
            className="buttons specialButtons"
            onClick={
              () => {
                // Equal still goes off and crashes if +-*/ isn't present
                if (
                  !isNaN(display.split("").pop()) &&
                  (display.split("").includes("+") ||
                    display.split("").includes("-") ||
                    display.split("").includes("*") ||
                    display.split("").includes("/"))
                ) {
                  console.log("hello there");
                  console.log(display.split("").pop());
                  console.log(display.split(""));
                  console.log(display.split("").includes("+" || "-" || "*" || "/"));
                  // eslint-disable-next-line no-eval
                  setDisplay(eval(display).toString());
                } else {
                  console.log(display.split("").pop());
                  console.log(display.split(""));
                  console.log(display.split("").includes("+" || "-" || "*" || "/"));
                  console.log("failed");
                }
              }
              // () => setDisplay(eval(display))
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
