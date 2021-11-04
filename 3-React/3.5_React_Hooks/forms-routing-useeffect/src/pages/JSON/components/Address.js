import React from "react";

const Address = ({ addressJson }) => {
  const { city, street, zipcode } = addressJson;
  return (
    <strong>
      <p>{city}</p>
      <p>{street}</p>
      <p>{zipcode}</p>
    </strong>
  );
};

export default Address;
