import { useState, useEffect } from "react";
import axios from "axios";
import Users from "./components/Users";
import Breweries from "./Breweries";

const JSON = () => {
  const [apiJson, setApiJson] = useState([]);

  useEffect(() => {
    const getJSON = async () => {
      const jsonData = await axios.get(
        "https://api.openbrewerydb.org/breweries"
      );
      console.log(jsonData.data);
      setApiJson(jsonData.data);
    };
    // if (apiJson.length === 0) {
    getJSON();
    // }
  }, []);

  return (
    <div>
      <h1>Good day. This is our fun JSON page.</h1>
      <Breweries allBreweries={apiJson} />
    </div>
  );
};

export default JSON;
