import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home/Home.js";
import Form from "./pages/Form/Form.js";
import Query from "./pages/Query/Query.js";
import "./App.css";
function App() {
  return (
    <Router>
      <nav id="nav">
        <Link class="link" to="/">
          <p>Home</p>
        </Link>
        <Link class="link" to="query">
          <p>Anime Search</p>
        </Link>
        <Link class="link" to="form">
          <p>Form</p>
        </Link>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="form" element={<Form />} />
          <Route path="query" element={<Query />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
