import React, { useState } from "react";

const IncDecFunc = () => {
  const [counter, setCounter] = useState(66);
  return (
    <div>
      <h1>Increment / Decrement</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <p>Counter: {counter}</p>
    </div>
  );
};

export default IncDecFunc;
