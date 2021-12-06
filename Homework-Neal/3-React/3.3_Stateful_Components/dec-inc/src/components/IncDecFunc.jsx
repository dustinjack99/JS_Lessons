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
  }, [counter]);
  useEffect(() => {
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
      {truth ? <p>UNNNNLIMITED POWERRRRRRRRR!</p> : <p>Counter: {counter}</p>}
      {weak ? <p>Oh... I can't... t-too weak... don't kill meeeee</p> : null}
    </div>
  );
};

export default IncDecFunc;
