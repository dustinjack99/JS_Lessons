import React from "react";
import Address from "./Address";

const Users = ({ data, entries, page }) => {
  const pageData = data.slice((page - 1) * entries, page * entries);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        justifySelf: "center",
      }}
    >
      {pageData.map((user, i) => {
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
    </div>
  );
};

export default Users;
