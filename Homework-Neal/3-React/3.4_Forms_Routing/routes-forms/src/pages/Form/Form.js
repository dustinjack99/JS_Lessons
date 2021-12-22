import { useState } from "react";
import AlertComponent from "./components/Alert";

const Form = () => {
  const [input, setInput] = useState("hoo baba kanda");

  //   console.log(input);
  return (
    <div>
      <h1>Form with Alert Child Component</h1>
      <form>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </form>
      <AlertComponent inputText={input} />
    </div>
  );
};

export default Form;
