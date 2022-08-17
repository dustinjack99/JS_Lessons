import { render } from "react-dom";
import Context from "./Context";
import Ref from "./Ref";
import Reducer from "./Reducer";
import Memo from "./Memo";
import Callback from "./Callback";
import ParentComponent from "./memo/ParentComponent";

// import "./styles.css";

function App() {
  return (
    <div className="App">
      <Context />
      <hr />
      <Ref />
      <hr />
      <Reducer />
      <hr />
      <Memo />
      <hr />
      <Callback />
      <hr />
      <ParentComponent />
      <hr />
    </div>
  );
}

render(<App />, document.getElementById("root"));
