import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Project from "./Components/Project";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Main content with padding to prevent overlap with fixed navbar */}
      <div className="pt-10"> {/* pt-16 adds padding-top to prevent content from being covered by the navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
