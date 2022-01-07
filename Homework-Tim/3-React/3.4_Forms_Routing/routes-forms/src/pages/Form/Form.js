import { useState } from "react";
import Alert from "./components/Alert";

const Form = () => {
  const [input, setInput] = useState("hoo-ha");

  return (
    <div>
      <h1>Form with Alert Child Component</h1>
      <form>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </form>
      <Alert inputText={input} />
    </div>
  );
};

export default Form;
