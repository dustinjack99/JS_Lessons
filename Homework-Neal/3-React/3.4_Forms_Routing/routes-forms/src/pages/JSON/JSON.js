import { useState, useEffect } from "react";
import axios from "axios";

const getJSON = async (setApiJson) => {
  const jsonData = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  setApiJson(jsonData.data);
};

const JSON = () => {
  const [apiJson, setApiJson] = useState([]);

  useEffect(() => {
    if (apiJson.length === 0) {
      getJSON(setApiJson);
    }
  }, []);

  console.log(apiJson.data);

  return (
    <div>
      <h1>Good day. This is our fun JSON page.</h1>
      <Users allUsers={apiJson.data} />
    </div>
  );
};

export default JSON;
