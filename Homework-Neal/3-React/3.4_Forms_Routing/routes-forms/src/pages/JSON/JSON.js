import { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from "./components/Pokemon/Pokemon";
import { Howl, Howler } from "howler";

const dexLoad = new Howl({
  src: ["./src/assets/sounds/SFX_DEX_PAGE_ADDED.wav"],
  volume: 0.8,
});

const typeSound = new Howl({
  srs: ["./src/assets/sounds/SFX_PRESS_AB.wav"],
  volume: 0.8,
});

const JSON = () => {
  const [apiJson, setApiJson] = useState({});
  const [dexEntry, setDexEntry] = useState("");
  const [submit, setSubmit] = useState(false);

  // VVV API CALL "SEARCH" BAR
  useEffect(() => {
    const getJSON = async () => {
      const jsonData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${dexEntry.toLowerCase()}`
      );
      console.log(jsonData.data);
      setApiJson(jsonData.data);
    };
    if (dexEntry === "") {
      return null;
    } else {
      getJSON();
      dexLoad.play();
    }
  }, [submit]);
  // console.log(apiJson.data);

  // VVV RANDOM BUTTON CODE
  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  useEffect(() => {
    // const getRandom = async () => {
    const getJSON = async () => {
      const jsonData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${getRandom(1, 1118)}`
      );
      console.log(jsonData.data);
      setApiJson(jsonData.data);
    };
  }, [submit]);

  // ^^^ If I uncomment this code placed here as a UseEffect function, the search button returns requested search, followed by a random entry. What the fuck.

  return (
    // onClick, useState, YES
    // useEffect, NO
    // for useState, 2 separate calls (query text, result from server
    // VVV at top of component
    // let [queryText, setQueryText]=useState(''));
    // let apiJson, setApiJson = useState(null);
    // async function onSubmit(query) {
    // let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${dexEntry.toLowerCase()}`)
    // setApiJson(response)}
    // // ^^^ at Top of component
    // // inside component:

    // <>
    // <input onChange={(e) => setQueryText(e.target.value)} /><button onClick={() => onSubmit(queryText)}>Submit</button></>
    // function pokemonList(props){
    // return <></>;
    // }
    <div id="Border">
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
          <input
            type="button"
            class="checkBtn"
            id="FormeBtn"
            // onClick={(e) => {
            //   dexLoad.play(e);
            // }}
          />
          <input type="button" class="checkBtn" id="ArtBtn" />
          <input type="button" class="checkBtn" id="check03" />
          <input type="button" class="checkBtn" id="check04" />
          <div id="speaker">
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
          </div>
        </div>
        {/* <hr /> */}
        <div id="dexBody">
          {Object.keys(apiJson).length && Object.keys(apiJson).length !== 0 ? (
            <h2 id="mainHeader"> Pokemon Found!</h2>
          ) : (
            <h1 id="mainHeader">
              Hello World. <br /> This is the API Pokedex Page.
            </h1>
          )}
          {/* <label id="searchLabel" for="search">
          Enter Pokemon Name.
        </label> */}
          <input
            id="inputBar"
            type="text"
            name="search"
            onChange={(e) => setDexEntry(e.target.value)}
          >
            {}
          </input>
          <div id="inputBtns">
            <button
              id="inputRandom"
              onClick={(e) => getRandom()}
              //sets dex Entry to empty obj like reset button
              // Random Number Generator is working! Now to hook it up to the "setDexEntry" function somehow
            >
              Random
            </button>
            <button id="inputReset" onClick={(e) => setApiJson({})}>
              Reset
            </button>
          </div>
          {/* <label for="search">Enter Pokemon Name.</label>
        <input
          type="text"
          name="search"
          onChange={(e) => setDexEntry(e.target.value)}
        >
          {}
        </input> */}

          {Object.keys(apiJson).length !== 0 ? null : (
            <div id="mainScreenEmpty" />
          )}
          {Object.keys(apiJson).length === 0 ? null : (
            <div id="mainScreen">
              <Pokemon foundPokemon={apiJson} />
            </div>
          )}
        </div>
        <div id="labLogo">
          <h2>Pine Labs</h2>
          <hr />
          {/* <input type="button" class="checkBtn" id="check01" />
        <input type="button" class="checkBtn" id="check02" /> */}
        </div>
        <div id="dPad">
          <button class="dPadBtn" id="dPad01">
            ^
          </button>
          <button class="dPadBtn" id="dPad02">
            v
          </button>
          <button class="dPadBtn" id="dPad03">
            {"<"}
          </button>
          <button class="dPadBtn" id="dPad04">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JSON;
