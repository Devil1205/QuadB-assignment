import Fetch from "./Components/Fetch/Fetch";
import { Home } from "./Components/Home/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const Backend_URL = "http://localhost:5000/QuadBAPI/data";

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apidata" element={<Fetch Backend_URL={Backend_URL} />} />
      </Routes>
    </Router>
  )
}

export default App
