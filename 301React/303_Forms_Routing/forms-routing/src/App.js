import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Form from "./pages/Forms/Form";
import Home from "./pages/Home/Home";
import JSON from "./pages/JSON/JSON";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/form">
            <p>Form</p>
          </Link>
          <Link to="/json">
            <p>Json</p>
          </Link>
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="form" element={<Form />} />
            <Route path="json" element={<JSON />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
