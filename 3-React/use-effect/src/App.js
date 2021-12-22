import { useState, useEffect } from "react";
import Timer from "./Timer";

function App() {
  const [name, setName] = useState("defaultUser");
  const [message, setMessage] = useState("Eep Bop");
  const [timerVisible, setTimerVisible] = useState(true);

  // all useEffect functions run when your component
  // is 'Mounted'.
  useEffect(() => {
    setMessage(message + "1");
    // useEffect updates by tracking the state values
    // in your dependency array
  }, [name]);

  return (
    <>
      <h1>UseEffectDemo.</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <h3>{name}</h3>
      <h3>{message}</h3>
      <h2>Kill Timer?</h2>
      <input type="checkbox" onChange={() => setTimerVisible(!timerVisible)} />
      {timerVisible ? <Timer /> : ""}
    </>
  );
}

export default App;
