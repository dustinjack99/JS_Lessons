import { useState, useMemo } from "react";

const fibonacci = (n) => {
  if (n <= 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

const MemoComponent = () => {
  const [num, setNum] = useState(30);
  const [isGreen, setIsGreen] = useState(true);
  const fib = useMemo(() => fibonacci(num), [num]);
  // const fib = fibonacci(num);

  return (
    <div className="mt-2 mb-2">
      <h1
        className="bold text-3xl"
        onClick={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? "limegreen" : "crimson" }}
      >
        useMemo Example
      </h1>
      <h2 className="text-lg">
        Fibonacci of {num} is {fib}
      </h2>
      <button
        className="align-middle rounded-full bg-lime-600 shadow-lg px-3 py-1 m-1 text-xl text-white hover:bg-lime-500"
        onClick={() => setNum(num + 1)}
      >
        +
      </button>
    </div>
  );
};

export default MemoComponent;
