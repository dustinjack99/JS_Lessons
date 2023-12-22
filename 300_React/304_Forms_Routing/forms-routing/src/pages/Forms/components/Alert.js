import React from "react";

export const Alert = (props) => {
  console.log(props);
  return (
    <button onClick={() => alert(props.inputText)}>Press Me For Alert!</button>
  );
};

export default Alert;
