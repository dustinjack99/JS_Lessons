import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "./User";

//rafce = quick arrow function
// shift+alt+down for quick copy down
// alt+arrow for moving lines of code
//vscode hotkeys+vscode key bindings

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

  return (
    <>
      <div className="allUsers">
        <User userData={users} />
      </div>
    </>
  );
};
//<User userData={users} data={"name"} />;

export default Header;
