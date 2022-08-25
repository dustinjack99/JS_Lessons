import { useState, useRef } from "react";

const RefComponent = () => {
  const [stateNumber, setStateNumber] = useState(0);
  // Remember that useRef will give you the most current value
  // across all rerenders.
  const numRef = useRef(0);

  function incrementAndDelayLogging() {
    setStateNumber(stateNumber + 1);
    numRef.current++;
    setTimeout(
      () => alert(`state: ${stateNumber} | ref: ${numRef.current}`),
      1000
    );
  }

  return (
    <div className="mt-2 mb-2">
      <h1 className="bold text-3xl">useRef Example</h1>
      <button
        className="rounded-full bg-green-400 shadow-lg px-3 py-1 m-1 text-lg text-white hover:bg-green-300"
        onClick={incrementAndDelayLogging}
      >
        delay logging
      </button>
      <h4 className="text-lg">state: {stateNumber}</h4>
      <h4 className="text-lg">ref: {numRef.current}</h4>
    </div>
  );
};

export default RefComponent;
