import { useState, useEffect } from "react";
import { LinearProgress, styled } from "@mui/material";
import "./BattleTimer.css";

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 20,
  borderRadius: 5,
}));

const BattleTimer = () => {
  const [time, setTime] = useState(100);

  useEffect(() => {
    //Uh oh! Our timer is broken!
    //Perhaps we need to clean up the logic in the 'Unmounting' phase.
    setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      }
    }, 1000);
  });

  return (
    <>
      <span className="time-amount">Fight Clock: {time}</span>
      <BorderLinearProgress
        className="time-progress"
        variant="determinate"
        value={time}
      />
    </>
  );
};

export default BattleTimer;
