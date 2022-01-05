import searchGirl from "../assets/searchGirl.png";
import "../Query.css";
import Spinner from "./Spinner";

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

  const data = [];
  apiJson.results.forEach((Preview) => {
    data.push({ image: Preview.image_url, caption: Preview.title });
  });

  console.log(data);
  return (
    // For grid return

    // <>
    //   <div id="returns">
    //     {apiJson.results.map((Preview, i) => {
    //       return (
    //         <div key={i}>
    //           <h2 className="title">{Preview.title}</h2>
    //           <img className="image" alt={Preview.title} src={Preview.image_url} />
    //           {/* <p>{Preview.synopsis}</p> */}
    //         </div>
    //       );
    //     })}
    //   </div>
    // </>

    // For Spinner return
    <>
      <div id="spinnerReturn">
        <Spinner id="spinner" data={data} />
      </div>
    </>
  );
};

export default SearchReturn;
