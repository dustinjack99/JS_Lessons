import "./Pokemon.css";
const Pokemon = ({ foundPokemon }) => {
  let { sprites, name, order, types, species } = foundPokemon;
  //   weight, size,

  return (
    <div>
      <img id="sprite01" src={sprites.front_default} />{" "}
      <img id="sprite02" src={sprites.front_shiny} />
      <h1 className="Species">{species.name}</h1>
      <h2 className="Type">
        {types[0].type.name}
        {types[1] ? "/" + types[1].type.name : null}
      </h2>
    </div>
  );
};

export default Pokemon;
