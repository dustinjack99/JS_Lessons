import { useState, useEffect } from "react";
import axios from "axios";

const getJSON = async ({ query }, setApiJson) => {
  // const jsonData = await axios.get("https://jsonplaceholder.typicode.com/users");
  const jsonData = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${query}`);

  setApiJson(jsonData.data);
};

const SearchReturn = () => {
  const [apiJson, setApiJson] = useState([]);

  useEffect(() => {
    if (apiJson.length === 0) {
      getJSON(setApiJson);
    }
  }, [apiJson]);
  console.log(apiJson);
  return (
    <div>
      <h2>{apiJson.results[0].title}</h2>
      <img alt={`${apiJson.results[0].title}`} src={`${apiJson.results[0].image_url}`} />
    </div>
  );
};

export default SearchReturn;
