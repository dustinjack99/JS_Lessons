import "./Home.css";
import characters from "./assets/characters.jpg";
const Home = () => {
  return (
    <div id="homeDiv">
      <img id="characters" src={characters} alt="Many Anime Characters" />
    </div>
  );
};

export default Home;
