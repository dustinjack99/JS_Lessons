import { Box, Button, Divider } from "@mui/material";
import { useState, useEffect } from "react";
import barbRage from "../../assets/barb-rage.jpeg";
import barb from "../../assets/barb.jpeg";
import orc from "../../assets/orc.jpeg";
import skelly from "../../assets/skelly.jpeg";
import "./Fighter.css";

const Fighter = ({ name, canRage, fighters, setFighters, opponent }) => {
  const [rage, setRage] = useState(false);

  useEffect(() => {
    //Somehow make our Barbarian RAGE!!!
    //Do this during this 'Update' part of lifecycle.
  }, []);

  return (
    <>
      {fighters[name] <= 0 ? (
        <Box className={`${name}-container`}>
          <h1>{name.toUpperCase()}</h1>
          <h3 className="status">Your {name} ancestors are shamed.</h3>
          <Divider sx={{ height: 3 }} />
          <img alt={`${name}-skelly`} src={skelly} />
          <Button
            onClick={(e) => {
              e.preventDefault();
              setFighters({ ...fighters, [name]: 100 });
            }}
            variant="contained"
          >
            Revive {name.toUpperCase()}
          </Button>
        </Box>
      ) : (
        <Box className={`${name}-container`}>
          <h1>{name.toUpperCase()}</h1>
          <h2 className="status">
            HP: {fighters[name]} {canRage && rage && <i>(RAGE)</i>}
          </h2>
          <Divider sx={{ height: 3, color: "primary" }} />

          <img
            alt={`${name}-rage`}
            src={canRage && rage ? barbRage : name === "barbarian" ? barb : orc}
          />
          <Button
            onClick={() =>
              setFighters({
                ...fighters,
                [opponent]:
                  canRage && rage
                    ? fighters[opponent] - 50
                    : fighters[opponent] - 25,
              })
            }
            variant="contained"
          >
            PUNCH {opponent.toUpperCase()}
          </Button>
        </Box>
      )}
    </>
  );
};

export default Fighter;
