const Address = (props) => {
  const { state, county_province, city, country } = props;

  let stateOrProvince = state === null ? county_province : state;
  let addressText = city + ", " + stateOrProvince + ", " + country;

  return (
    <div>
      <h3>{addressText}</h3>
    </div>
  );
};

export default Address;
