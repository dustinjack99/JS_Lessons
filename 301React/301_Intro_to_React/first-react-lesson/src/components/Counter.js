import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [boolean, setBoolean] = useState(false);

  return (
    <div>
      <h2>{boolean.toString()}</h2>
      <button onClick={() => setBoolean(!boolean)}>Change True/False</button>
      <h2>{counter.toString()}</h2>
      <button onClick={() => setCounter(counter + 1)}>Incremement</button>
      <button onClick={() => setCounter(counter - 1)}>Decremement</button>
    </div>
  );
};

export default Counter;
