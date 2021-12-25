import { capFirst } from "./Pokemon";
const Moves = ({ foundMoves }) => {
  let { order, moves, abilities } = foundMoves;
  return (
    <div>
      <h3>Moves</h3>
      <div>
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
