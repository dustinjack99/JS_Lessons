import { useState } from "react";

const User = ({ data, userData }) => {
  return (
    <>
      <h2>Yuuu</h2>
      <p>{userData ? userData.toString() : ""}</p>
    </>
  );
};

export default User;
