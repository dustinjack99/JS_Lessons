import "./Pokemon.css";
import Stats from "./Stats";
import Moves from "./Moves";

export function capFirst(foundPokemon) {
  // console.log(foundPokemon.split("-"));
  // store "foundPokemon.split" as a variable, iterate over that variable
  let entries = foundPokemon.split("-");
  let cappedEntries = [];
  for (let entry of entries) {
    let cappedEntry = hpCaps(entry);
    cappedEntries.push(cappedEntry);
  }
  return cappedEntries.join(" ");
  // capitalizes each word, returns joined array with the dash

  // several iterator functions that can solve this problem - map() is not one of them
}
function hpCaps(entry) {
  let cappedEntry;
  if (entry === "hp") {
    cappedEntry = entry.toUpperCase();
  } else {
    cappedEntry = entry[0].toUpperCase() + entry.substring(1);
  }
  return cappedEntry;
}
//^^^ Capitalizes "HP" when rendering stat names with loop
const Pokemon = ({ foundPokemon }) => {
  // console.log(foundPokemon);
  let {
    sprites,
    // name,
    id,
    order,
    types,
    species,
    height,
    weight,
    // stats,
    // moves,
    // abilities,
  } = foundPokemon;
  // console.log(stats);
  // NOTE: moves, stats, types, abilities are arrays of objects;
  // generate html tags with the selected data

  //   let {base_stat, stat, name} = stats
  // }
  let originalArtworkSource = sprites.other["official-artwork"].front_default;
  // console.log("Original Art Src:" + " " + originalArtworkSource);
  return (
    <div class="screen">
      <div id="spriteDisplay">
        <img id="mainArt" src={originalArtworkSource} />
        {/* <img id="mainArt" src={sprites.other.home.front_default} /> */}
        <hr />
        <div id="spriteArt">
          <img id="Default" src={sprites.front_default} />{" "}
          <img id="Shiny" src={sprites.front_shiny} />
        </div>
      </div>

      <div>
        <h1 className="Species">{capFirst(species.name)}</h1>
        <h2 className="DexNumber">
          Kanto: # {id} National: #{order}
        </h2>
        <h2 className="Type">
          {capFirst(types[0].type.name)}
          {types[1] ? "/" + capFirst(types[1].type.name) : null}
        </h2>
        {height >= 10 ? <p>H: {height / 10}m</p> : <p>H: {height * 10}cm</p>}
        <p>W: {weight / 10}kg</p>
        {/* base values for height/weight are given in decimeters/hectograms... for SOME reason. */}
      </div>
      <div id="dataDisplay">
        <Stats foundStats={foundPokemon} />
        <Moves foundMoves={foundPokemon} />
        {/* {stats.map((stat, i) => {
          return (
            <p key={i} id={"Stat" + i}>
              {stat.stat.name}: {stat.base_stat}
            </p>
          );
        })} */}
      </div>
    </div>
  );
};
export default Pokemon;
