import React, { useState, useEffect } from "react";
import barbRage from "../assets/barb-rage.jpeg";
import barb from "../assets/barb.jpeg";
import orc from "../assets/orc.jpeg";
import skelly from "../assets/skelly.jpeg";
import "./Battler.css";

const Battler = () => {
  const [barbarianHealth, setBarbarianHealth] = useState(100);
  const [orcHealth, setOrcHealth] = useState(100);
  const [barbarianRage, setBarbarianRage] = useState(false);

  useEffect(() => {
    if (barbarianHealth <= 30) {
      setBarbarianRage(true);
    } else {
      setBarbarianRage(false);
    }
  }, [barbarianHealth]);

  return (
    <div>
      <div className="fighter-container">
        {barbarianHealth <= 0 ? (
          <div className="barb-container">
            <h1>Barbarian</h1>
            <h3 className="status">Your ancestors are shamed.</h3>
            <img src={skelly} />
            <button
              onClick={() => {
                setBarbarianHealth(100);
              }}
            >
              Revive Barbarian
            </button>
          </div>
        ) : (
          <div className="barb-container">
            <h1>Barbarian</h1>
            {barbarianRage && (
              <h3 className="status">
                <i>RAGE ACTIVATED</i>
              </h3>
            )}
            <h2>{barbarianHealth}</h2>
            <img src={barbarianRage ? barbRage : barb} />
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
          <div className="orc-container">
            <h1>Orc</h1>
            <h3 className="status">
              You see a pile of green porridge that used to be an Orc.
            </h3>
            <img src={skelly} />
            <button onClick={() => setOrcHealth(100)}>Revive Orc</button>
          </div>
        ) : (
          <div className="orc-container">
            <h1>Orc</h1>
            <h2>{orcHealth}</h2>
            <img src={orc} />
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
