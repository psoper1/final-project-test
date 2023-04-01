import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";

function App() {
    return (
        <>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home className="bg" />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
    )
}

export default App;