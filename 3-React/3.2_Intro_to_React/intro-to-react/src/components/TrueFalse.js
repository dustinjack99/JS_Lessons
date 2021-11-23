import { useState } from "react";

const TrueFalse = () => {
  const [boolean, setBoolean] = useState(false);
  let [counter, setCounter] = useState(0);

  return (
    <div>
      <p>{boolean.toString()}</p>
      <button onClick={() => setBoolean(!boolean)}>Change Bool Value</button>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  );
};

export default TrueFalse;
