const AlertComponent = ({ inputText }) => {
  return (
    <button onClick={() => alert({ inputText })}>Press Me For An Alert!</button>
  );
};

export default AlertComponent;
