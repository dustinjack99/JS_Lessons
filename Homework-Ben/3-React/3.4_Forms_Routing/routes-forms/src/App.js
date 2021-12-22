import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home/Home.js";
import Form from "./pages/Form/Form.js";
import Query from "./pages/Query/Query.js";
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="form">
          <p>Form</p>
        </Link>
        <Link to="query">
          <p>Query</p>
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
