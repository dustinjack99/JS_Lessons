import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "./User";

const Header = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const userData = async () => {
      const jsonData = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(jsonData.data);
    };
    userData();
  }, []);

  console.log(users);

  return <TrueFa
  
  //<User userData={users} data={"name"} />;
};

export default Header;
