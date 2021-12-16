import React, { useState, useEffect } from "react";
import axios from "axios";

async function Users() {
  const users = await axios.get("https://jsonplaceholder.typicode.com/users");
  console.log(users);
  return (
    <div>
      <p>{users.name[1]}</p>
    </div>
  );
}

export default Users;
