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
    // onClick, useState, YES
    // useEffect, NO
    // for useState, 2 separate calls (query text, result from server
    // VVV at top of component
    // let [queryText, setQueryText]=useState(''));
    // let apiJson, setApiJson = useState(null);
    // async function onSubmit(query) {
    // let response = await axios.get("http://www.address.com/q=" + query)
    // setApiJson(response)}
    // // ^^^ at Top of component
    // // inside component:

    // <>
    // <input onChange={(e) => setQueryText(e.target.value)} /><button onClick={() => onSubmit(queryText)}>Submit</button></>
    // function pokemonList(props){
    // return <></>;
    // }

    <div id="App">
      <div id="dexSideBoard">
        <button
          id="searchBtn"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setSubmit(!submit);
          }}
        >
          SEARCH
        </button>
        <input type="checkbox" class="checkBtn" id="check01" />
        <input type="checkbox" class="checkBtn" id="check02" />
        <input type="checkbox" class="checkBtn" id="check03" />
        <input type="checkbox" class="checkBtn" id="check04" />
      </div>
      {/* <hr /> */}
      <label id="searchLabel" for="search">
        Enter Pokemon Name.
      </label>
      <input
        type="text"
        name="search"
        onChange={(e) => setDexEntry(e.target.value)}
      >
        {}
      </input>
      <div id="dexBody">
        {Object.keys(apiJson).length && Object.keys(apiJson).length !== 0 ? (
          <h2 id="mainHeader"> Pokemon Found!</h2>
        ) : (
          <h1 id="mainHeader">
            Hello World. <br /> This is the API Pokedex Page.
          </h1>
        )}
        {/* <label for="search">Enter Pokemon Name.</label>
        <input
          type="text"
          name="search"
          onChange={(e) => setDexEntry(e.target.value)}
        >
          {}
        </input> */}

        {Object.keys(apiJson).length !== 0 ? null : <div id="mainScreen" />}
        {Object.keys(apiJson).length === 0 ? null : (
          <div id="mainScreen">
            <Pokemon foundPokemon={apiJson} />
          </div>
        )}
      </div>
    </div>
  );
};

export default JSON;
