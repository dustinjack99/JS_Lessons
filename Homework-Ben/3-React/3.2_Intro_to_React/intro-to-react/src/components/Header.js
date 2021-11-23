import React, { useEffect, useState } from "react";
import axios from "axios";
// import User from "./User";
import TrueFalse from "./TrueFalse";

const Header = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const userData = async () => {
      const jsonData = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(jsonData);
    };
    userData();
  }, []);

  console.log(users);

  //   return <User userData={users} data={"name"} />;
  return (
    <>
      <TrueFalse />
    </>
  );
};

export default Header;
