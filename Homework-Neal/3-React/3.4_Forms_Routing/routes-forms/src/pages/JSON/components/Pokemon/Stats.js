import { capFirst } from "./Pokemon";
const Stats = ({ foundStats }) => {
  let { order, stats, moves, abilities } = foundStats;

  return (
    <div id="statsScreen">
      <div>
        <h3 id="statsHeader">Base Stats</h3>
        <div id="statsGrid">
          {stats.map((stat, i) => {
            return stat.stat.name === "special-attack" ||
              stat.stat.name === "special-defense" ? (
              <p key={i} class="baseStats" id={"Stat" + i}>
                {capFirst(
                  stat.stat.name === "special-attack"
                    ? "sp.-attack"
                    : "sp.-defense"
                )}
                : {stat.base_stat}
              </p>
            ) : (
              <p key={i} class="baseStats" id={"Stat" + i}>
                {capFirst(stat.stat.name)}: {stat.base_stat}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
