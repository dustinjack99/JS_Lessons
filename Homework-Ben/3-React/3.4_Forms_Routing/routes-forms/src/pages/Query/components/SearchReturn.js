import { useState } from "react";
import { Carousel } from "react-carousel-minimal";
import ReturnResults from "./ReturnResults";
import searchGirl from "../assets/searchGirl.png";
import "../Query.css";

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
        <img id="searchGirl" src={searchGirl} alt="waiting for search" />
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
    <>
      <div id="returns">
        {apiJson.results.map((Preview, i) => {
          return (
            <div key={i}>
              <h2 className="title">{Preview.title}</h2>
              <img className="image" alt={Preview.title} src={Preview.image_url} />
              {/* <p>{Preview.synopsis}</p> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchReturn;
