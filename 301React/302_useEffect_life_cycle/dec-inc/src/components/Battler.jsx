import React, { useState, useEffect } from "react";
import barbRage from "../../assets/barb-rage.jpeg";
import barb from "../../assets/barb.jpeg";
import orc from "../../assets/orc.jpeg";

const Battler = () => {
  const [barbarianHealth, setBarbarianHealth] = useState(100);
  const [orcHealth, setOrcHealth] = useState(100);
  const [barbarianRage, setBarbarianRage] = useState(false);

  useEffect(() => {
    if (barbarianHealth <= 30) {
      setBarbarianRage(true);
    }
  }, [barbarianHealth]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          "flex-direction": "row",
          justifyContent: "space-evenly",
        }}
      >
        {barbarianHealth <= 0 ? (
          <h1>Your ancestors are shamed.</h1>
        ) : (
          <div>
            {barbarianRage ? (
              <>
                <h1>
                  <strong>Barbarian</strong>
                </h1>
                <h2>
                  <i>RAGE ACTIVATED</i>
                </h2>
              </>
            ) : (
              <h1>Barbarian</h1>
            )}
            <h2>{barbarianHealth}</h2>
            <img src={barbarianRage ? "" : ""} />
            <button
              onClick={() =>
                setOrcHealth(barbarianRage ? orcHealth - 25 : orcHealth - 10)
              }
            >
              Barbarian Punches Orc
            </button>
          </div>
        )}
        {orcHealth <= 0 ? (
          <h1>You see a pile of green porridge that used to be an Orc.</h1>
        ) : (
          <div>
            <h1>Orc</h1>
            <h2>{orcHealth}</h2>
            <button onClick={() => setBarbarianHealth(barbarianHealth - 10)}>
              Orc Punches Barbarian
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Battler;
