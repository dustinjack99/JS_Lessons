const Alert = ({ inputText }) => {
  console.log(inputText);
  return <button onClick={() => alert(inputText)}>Press Me for an Alert!</button>;
};

export default Alert;
