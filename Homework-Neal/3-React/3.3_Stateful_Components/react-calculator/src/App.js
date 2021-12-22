import React, { useState, useEffect } from "react";
import "./App.css";

const numerals = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0"];
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
  // value ? doSomethingIfTrue : doSomethingIfFalse
  // }
  return (
    <div className="App">
      <h1 id="banner">A Quite Simple Calculator App</h1>

      <div id="display">
        <h1>{display}</h1>
      </div>
      <hr />
      <div id="container">
        <div className="Input">
          <div className="Numbers">
            {numerals.map((button) => (
              <button
                class="numKey"
                id={button === "." ? "decimalKey" : "num" + button}
                onClick={
                  () =>
                    display == { numerals } ||
                    display === "*" ||
                    display === "/"
                      ? setDisplay(button)
                      : setDisplay(display + button)
                  // sets display to button value if current display value is not a number, "-" or "+"
                }
              >
                {button}
              </button>
            ))}
          </div>

          <div className="Functions">
            {functions.map((button) => (
              <button
                class="funKey"
                id={button}
                onClick={() => setDisplay(display + button)}
              >
                {button}
              </button>
            ))}
          </div>

          <div className="Functions2">
            <button
              id="sexyKey"
              onClick={() => {
                if (
                  display === "" ||
                  display[0] + display[1] + display[2] == "OwO"
                ) {
                  setDisplay("UwU");
                } else if (display === "UwU") {
                } else {
                  setDisplay(
                    "OwO What's this? (notices ur " +
                      eval(display.toString()) +
                      ")"
                  );
                }
              }}
            >
              Sexy
            </button>
            <button id="clearKey" onClick={() => setDisplay("")}>
              Clear
            </button>
            <button
              id="enterKey"
              disabled={!active}
              onClick={() => {
                console.log(display);
                let result = eval(display);
                if (result === undefined) {
                  setDisplay("");
                } else if (display === "80085" || display === "58008") {
                  setDisplay("Oh, grow up.");
                } else if (display === "69") {
                  setDisplay("Nice.");
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
    </div>
  );
}

export default App;
