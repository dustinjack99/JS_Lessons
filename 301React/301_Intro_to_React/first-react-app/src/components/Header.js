import axios from "axios";

const Header = async () => {
  const users = await axios.get("https://jsonplaceholder.typicode.com/users");
  console.log(users);
  return <h2>I wonder if he means old 'Ben Kenobi?</h2>;
};

export default Header;
