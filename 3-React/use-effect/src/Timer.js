import { useState, useEffect } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const clock = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);

    // this 'unsubscribe' function runs at the
    // 'unmounting' phase, and is used to clean
    // up running state logic in your components.
    return () => clearInterval(clock);
  }, [timer]);

  return (
    <div>
      <h2>Timer!</h2>
      <p>{timer}</p>
    </div>
  );
};

export default Timer;
