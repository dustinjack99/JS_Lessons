import React, { useState, useEffect } from "react";

const IncDecFunc = () => {
  const [counter, setCounter] = useState(66);
  const [truth, setTruth] = useState(false);
  const [weak, setWeak] = useState(false);

  useEffect(() => {
    if (counter > 70) {
      setTruth(true);
    } else {
      setTruth(false);
    }
    if (counter < 60) {
      setWeak(true);
    } else {
      setWeak(false);
    }
  }, [counter]);

  return (
    <div>
      <h1>Increment / Decrement</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      {truth ? <p>TOO POWERFUL</p> : <p>Counter: {counter}</p>}
      {weak ? <p>YOUR WEAKNESS DISGUSTS ME</p> : null}
    </div>
  );
};

export default IncDecFunc;
