import Address from "./Address";

const Breweries = (props) => {
  return (
    <div>
      <h3>Breweries</h3>
      {props.allBreweries.map((brewery) => {
        const { name, website_url } = brewery;
        return (
          <div>
            <h2>{name}</h2>
            {website_url === null ? null : <a href={website_url}>Website</a>}
            <Address {...brewery} />
          </div>
        );
      })}
    </div>
  );
};

export default Breweries;
