import * as ReactDOM from "react-dom/client";
import Context from "./Context";
import Ref from "./Ref";
import Reducer from "./Reducer";
import Memo from "./Memo";
import Callback from "./Callback";
import ParentComponent from "./memo/ParentComponent";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Context />
      <hr />
      <Reducer />
      <hr />
      <Ref />
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
