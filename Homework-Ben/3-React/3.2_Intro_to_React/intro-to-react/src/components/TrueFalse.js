import { useState } from "react";

const TrueFalse = () => {
  const [boolean, setBoolean] = useState(false);
  let [counter, setCounter] = useState(0);
  return (
    <div>
      <p>{boolean.toString()}</p>
      <button onClick={() => setBoolean(!boolean)}>Switch</button>
      <p>{counter}</p>
      <button onClick={() => setCounter(++counter)}>Up 1</button>
      <button onClick={() => setCounter(--counter)}>Down 1</button>
    </div>
  );
};

export default TrueFalse;
