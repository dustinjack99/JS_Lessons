import { capFirst } from "./Pokemon";
const Moves = ({ foundMoves }) => {
  let { order, moves, abilities } = foundMoves;
  return (
    <div id="moveScreen">
      <div>
        <h3 class="Moves">Moves</h3>
        {moves.map((moves, i) => {
          return (
            <p key={i} class="Moves" id={"Move" + i}>
              {capFirst(moves.move.name)}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Moves;
