import { useState, useEffect } from "react";
import SearchReturn from "./components/SearchReturn";
import axios from "axios";

const Query = () => {
  const [query, setQuery] = useState("");
  const [apiJson, setApiJson] = useState(null);
  const getJSON = async (query) => {
    // const jsonData = await axios.get("https://jsonplaceholder.typicode.com/users");
    const jsonData = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${query}`);

    setApiJson(jsonData.data);
    console.log(jsonData.data);
    console.log(apiJson);
  };
  return (
    <div>
      <h1>Search the title of an Anime!</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          console.log(e.target.value);
          setQuery(e.target.value);
        }}
      ></input>

      <button onClick={() => getJSON(query)}>Search</button>
      <SearchReturn apiJson={apiJson} />
    </div>
  );
};

export default Query;
