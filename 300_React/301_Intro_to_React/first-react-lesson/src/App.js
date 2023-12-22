import Counter from "./components/Counter";
import FirstComponent from "./components/FirstComponent";
import assets from "./assets/interests.json";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Counter />
      {assets.data.map(({ hobby, food }) => {
        return <FirstComponent hobby={hobby} food={food} />;
      })}
    </>
  );
}

export default App;
