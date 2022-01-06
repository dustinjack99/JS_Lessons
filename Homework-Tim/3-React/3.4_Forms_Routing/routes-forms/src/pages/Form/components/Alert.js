const AlertComponent = ({ inputText }) => {
  return (
    <button onClick={() => alert(inputText)}>Press me for an Alert</button>
  );
};

export default AlertComponent;
