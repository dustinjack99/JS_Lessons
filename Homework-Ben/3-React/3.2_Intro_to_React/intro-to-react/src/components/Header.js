import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "./User";
import "./Header.css";
import TrueFalse from "./TrueFalse";

const Header = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const userData = async () => {
      const jsonData = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(jsonData.data);
    };
    userData();
  }, []);

  return (
    <>
      <div className="allUsers">
        <User userData={users} />
      </div>
    </>
  );
};

export default Header;
