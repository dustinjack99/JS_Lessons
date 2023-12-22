import { useState, useEffect, useCallback, memo } from "react";

const ExpensiveComputationComponent = memo(({ compute, count }) => {
  return (
    <div>
      <h1>computed: {compute(count)}</h1>
      <h4>last re-render {new Date().toLocaleTimeString()}</h4>
    </div>
  );
});

const CallbackComponent = () => {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(30);
  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  });

  const fibonacci = (n) => {
    if (n <= 1) {
      return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  return (
    <div className="mt-2 mb-2">
      <h1 className="bold text-3xl">
        useCallback Example {time.toLocaleTimeString()}
      </h1>
      <button
        className="rounded-full bg-blue-400 shadow-lg px-3 py-1 m-1 text-lg text-white hover:bg-blue-300"
        onClick={() => setCount(count + 1)}
      >
        current count: {count}
      </button>
      <ExpensiveComputationComponent
        // TODO: Uncomment this next line to test our useCallback()
        // Remember! useCallback() is for functions only :)
        // compute={useCallback(fibonacci, [])}
        compute={fibonacci}
        count={count}
      />
    </div>
  );
};

export default CallbackComponent;
