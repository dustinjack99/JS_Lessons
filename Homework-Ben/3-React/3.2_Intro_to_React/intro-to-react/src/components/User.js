import { useState } from "react";
const User = ({ data, userData }) => {
  console.log(userData);
  return (
    <>
      <h2>This is where the fun begins</h2>
      <p>
        {userData.map((singleUserData) => {
          console.log(singleUserData);
          return null;
        })}
      </p>
      {/* <p>{userData ? userData.toString() : ""}</p> */}
    </>
  );
};

export default User;
