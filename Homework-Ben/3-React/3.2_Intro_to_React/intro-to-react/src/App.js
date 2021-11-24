import Banner from "./components/Banner/Banner";
import Header from "./components/Header";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Banner />
      <div className="page">
        <h1 id="meet">Meet the Beautiful People</h1>
        <Header />
      </div>
    </div>
  );
}

export default App;
