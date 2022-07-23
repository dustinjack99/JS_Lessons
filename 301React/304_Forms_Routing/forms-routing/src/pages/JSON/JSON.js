import React, { useState, useEffect } from "react";
import axios from "axios";
import Users from "./components/Users";

const getJSON = async (setJson) => {
  const jsonFromApi = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  setJson(jsonFromApi.data);
};

const JSON = () => {
  const [json, setJson] = useState([]);

  useEffect(() => {
    if (json.length === 0) {
      getJSON(setJson);
    }
  }, [json]);
  console.log(json);
  return (
    <div>
      <h1>This is where JSON goes.</h1>
      <Users data={json} />
    </div>
  );
};

export default JSON;
