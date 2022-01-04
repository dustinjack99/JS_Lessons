import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Form from "./pages/Form/Form";
import Home from "./pages/Home/Home";
import JSON from "./pages/JSON/JSON";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/form">
          <p>Form</p>
        </Link>
        {/* <Link to="/json">
          <p>JSON</p>
        </Link> */}
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<JSON />} />
          <Route path="form" element={<Form />} />
          <Route path="json" element={<JSON />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
