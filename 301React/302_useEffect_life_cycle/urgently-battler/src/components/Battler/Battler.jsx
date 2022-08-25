import { Box, Button, Drawer } from "@mui/material";
import React, { useState } from "react";

import BattleTimer from "../BattleTimer/BattleTimer";
import Fighter from "../Fighter/Fighter";
import Viewers from "../Viewers/Viewers";
import "./Battler.css";

const Battler = () => {
  const [fighters, setFighters] = useState({
    barbarian: 100,
    orc: 100,
  });
  const [showTimer, setShowTimer] = useState(false);
  const [showViewers, setShowViewers] = useState(false);

  return (
    <div>
      <div className="timer-container">
        <h1>Urgently Battler</h1>
        <Box>
          <Button
            className="menu-btn"
            onClick={(e) => {
              e.preventDefault();
              setShowTimer(!showTimer);
            }}
            variant="contained"
            sx={{ margin: 1 }}
          >
            Show Timer
          </Button>
          <Button
            className="menu-btn"
            onClick={(e) => {
              e.preventDefault();
              setShowViewers(!showViewers);
            }}
            variant="contained"
            sx={{ margin: 1 }}
          >
            Show Viewers
          </Button>
        </Box>
        {showTimer ? <BattleTimer /> : <div className="timer-fill"></div>}
      </div>
      <div className="fighter-container">
        <Fighter
          canRage={true}
          fighters={fighters}
          setFighters={setFighters}
          name={"barbarian"}
          opponent={"orc"}
        />
        <Fighter
          canRage={false}
          fighters={fighters}
          setFighters={setFighters}
          name={"orc"}
          opponent={"barbarian"}
        />
      </div>
      <Drawer
        open={showViewers}
        onClose={() => setShowViewers(false)}
        variant="temporary"
      >
        <Viewers />
      </Drawer>
    </div>
  );
};

export default Battler;
