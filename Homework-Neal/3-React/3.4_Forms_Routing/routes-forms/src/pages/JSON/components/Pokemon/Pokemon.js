import "./Pokemon.css";
import Stats from "./Stats";

const Pokemon = ({ foundPokemon }) => {
  let { sprites, name, id, order, types, species, height, weight, stats } =
    foundPokemon;

  return (
    <div>
      <div id="spriteDisplay">
        <img id="mainArt" src={sprites.other.home.front_default} />
        <img id="sprite01" src={sprites.front_default} />{" "}
        <img id="sprite02" src={sprites.front_shiny} />
      </div>

      <div>
        <h1 className="Species">
          {species.name[0].toUpperCase() + species.name.substring(1)}
        </h1>
        <h2 className="DexNumber"># {id} </h2>
        <h2 className="Type">
          {types[0].type.name[0].toUpperCase() +
            types[0].type.name.substring(1)}
          {types[1]
            ? "/" +
              types[1].type.name[0].toUpperCase() +
              types[1].type.name.substring(1)
            : null}
        </h2>
        {height >= 10 ? <p>H: {height / 10}m</p> : <p>H: {height * 10}cm</p>}
        <p>W: {weight / 10}kg</p>
        {/* base values for height/weight are given in decimeters/hectograms... for SOME reason. */}
      </div>
      <div id="Stats">
        <Stats foundPokemon={stats} />
      </div>
    </div>
  );
};

export default Pokemon;
