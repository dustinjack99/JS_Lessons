import React, { useState, useEffect } from "react";

const IncDecFunc = () => {
  const [counter, setCounter] = useState(98);
  const [truth, setTruth] = useState(false);

  useEffect(() => {
    if (counter > 70) {
      setTruth(true);
    } else {
      setTruth(false);
    }
  }, [counter]);

  return (
    <div>
      <h1>Increment / Decrement</h1>
      <button onClick={() => setCounter(counter + 1000)}>Increment</button>
      <button onClick={() => setCounter(counter - 84)}>Decrement</button>
      {true ? <p>TOO Powerful</p> : <p>Counter: {counter}</p>}
    </div>
  );
};

export default IncDecFunc;
