import { useState, useEffect } from "react";
import axios from "axios";
import users from "./components/users";

const getJSON = async (setApiJson) => {
  const jsonData = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  setApiJson(jsonData.data);
};

const JSON = () => {
  const [apiJson, setApiJson] = useState([]);

  useEffect(() => {
    if(apiJson.lenth === 0) {
    getJSON(setApiJson);
    }
  }, []);
  console.log(apiJson.data);
  {apiJson.length === 0 ?}
  return (
    <div>
      <h1>This is our JSON page</h1>
      <Users allUsers={apiJson}/>
    </div>
  );
};

export default JSON;
