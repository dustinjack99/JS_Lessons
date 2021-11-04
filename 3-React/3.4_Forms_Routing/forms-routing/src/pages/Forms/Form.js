import React, { useState } from "react";
import Alert from "./components/Alert";

const Form = () => {
  const [input, setInput] = useState("hoo-ha");

  return (
    <div>
      <h1>This is our Form with Child Alert Component</h1>
      <form>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
        />
      </form>
      <Alert inputText={input} />
    </div>
  );
};

export default Form;
