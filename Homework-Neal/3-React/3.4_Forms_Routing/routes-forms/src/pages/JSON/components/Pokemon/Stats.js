const Stats = (foundStats) => {
  let { order, stats, moves, abilities } = foundStats;

  return (
    <div>
      <div>
        <p>{order}</p>
        <p>{stats[0].base_stat}</p>
      </div>
    </div>
  );
};

export default Stats;
