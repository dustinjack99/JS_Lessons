import { capFirst } from "./Pokemon";
const Stats = ({ foundStats }) => {
  let { order, stats, moves, abilities } = foundStats;

  return (
    <div id="mainScreen">
      <div>
        <h3>Base Stats</h3>
        {stats.map((stat, i) => {
          return (
            <p key={i} class="baseStats" id={"Stat" + i}>
              {capFirst(stat.stat.name)}: {stat.base_stat}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
