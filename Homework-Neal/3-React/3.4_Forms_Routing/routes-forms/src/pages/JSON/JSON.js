import { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from "./components/Pokemon/Pokemon";
// import Users from "./examples-practice/Users";
// import Breweries from "./Breweries";

const JSON = () => {
  const [apiJson, setApiJson] = useState({});
  const [dexEntry, setDexEntry] = useState("");
  const [submit, setSubmit] = useState(false);
  useEffect(() => {
    const getJSON = async () => {
      const jsonData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${dexEntry.toLowerCase()}`
      );
      // console.log(jsonData.data);
      setApiJson(jsonData.data);
    };
    if (dexEntry === "") {
      return null;
    } else {
      getJSON();
    }
  }, [submit]);

  console.log(apiJson);

  return (
    <div>
      <input type="text" onChange={(e) => setDexEntry(e.target.value)}>
        {}
      </input>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          setSubmit(!submit);
        }}
      >
        SEARCH
      </button>
      <h1>Good day. This is our fun JSON page.</h1>
      {Object.keys(apiJson).length === 0 ? null : (
        <Pokemon foundPokemon={apiJson} />
      )}
    </div>
  );
};

export default JSON;
