import React from "react";
import Address from "./Address";

const Users = ({ data }) => {
  return (
    <>
      {data.map((user, i) => {
        const { address, company, email, id, name, phone, username, website } =
          user;
        return (
          <div key={i + id}>
            <h2>{username}</h2>
            <p>{name}</p>
            <p>{phone}</p>
            <p>{email}</p>
            <p>{website}</p>
            <Address addressJson={address} />
          </div>
        );
      })}
    </>
  );
};

export default Users;
