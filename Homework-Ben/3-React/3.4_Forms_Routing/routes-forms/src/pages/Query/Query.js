import { useState, useEffect } from "react";
import SearchReturn from "./components/SearchReturn";
import Spinner from "./components/Spinner.js";
import axios from "axios";
import "./Query.css";

const Query = () => {
  const [query, setQuery] = useState("");
  const [apiJson, setApiJson] = useState(null);
  useEffect(() => {
    console.log(apiJson);
  }, [apiJson]);
  const getJSON = async (query) => {
    // const jsonData = await axios.get("https://jsonplaceholder.typicode.com/users");
    const jsonData = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${query}`);

    setApiJson(jsonData.data);
  };
  return (
    <div>
      <h1 id="searchTitle">Search the title of an Anime!</h1>
      <div id="searchInterface">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            console.log(e.target.value);
            setQuery(e.target.value);
          }}
        ></input>
        <button onClick={() => getJSON(query)}>GO!</button>
      </div>
      {/* <Spinner /> */}
      <SearchReturn apiJson={apiJson} />
    </div>
  );
};

export default Query;
