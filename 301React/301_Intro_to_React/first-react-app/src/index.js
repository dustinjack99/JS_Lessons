import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  //ignore this for right now, this is JSX! JavaScript XML. Does it look a little bit like HTML? More on that later...
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //This is where our root div gets pulled into, and rendered in the Vitrual DOM
  document.getElementById("root")
);
