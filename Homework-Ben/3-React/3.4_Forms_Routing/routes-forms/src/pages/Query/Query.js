import { useState, useEffect } from "react";
import SearchReturn from "./components/SearchReturn";

const Query = () => {
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");
  return (
    <div>
      <h1>Search the title of an Anime!</h1>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}></input>
      <button onClick={() => setSearch(true)}>Search</button>
      {search ? <SearchReturn query={query} /> : <div></div>}
    </div>
  );
};

export default Query;
