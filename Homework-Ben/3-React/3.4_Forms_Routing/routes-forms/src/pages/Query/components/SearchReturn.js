import { useState } from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import ReturnResults from "./ReturnResults";

const SearchReturn = ({ apiJson }) => {
  // const [apiJson, setApiJson] = useState(null);

  // useEffect(() => {
  //   console.log("Inside use effect");
  //   if (apiJson.length === 0) {
  //     console.log("Inside use effect if condition");
  //     getJSON({ query }, setApiJson);
  //   }
  // }, [query, apiJson]);
  // console.log(apiJson);
  if (apiJson === null) {
    return (
      <div>
        <p>Waiting for search</p>
      </div>
    );
  }
  if (apiJson.results.length === 0) {
    return (
      <div>
        <p>No title found</p>
      </div>
    );
  }

  return (
    <Carousel>
      {/* <ReturnResults titles={titles} /> */}
      <div>
        <h2>{apiJson.results[0].title}</h2>
        <img
          alt={`${apiJson.results[0].title}`}
          src={`${apiJson.results[0].image_url}`}
        />
      </div>
      <div>
        <h2>{apiJson.results[1].title}</h2>
        <img
          alt={`${apiJson.results[1].title}`}
          src={`${apiJson.results[1].image_url}`}
        />
      </div>
    </Carousel>
  );
};

export default SearchReturn;
