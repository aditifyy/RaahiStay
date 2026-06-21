import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Stays from "./pages/Stays";
import UIShowcase from "./pages/UIShowcase";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ui" element={<UIShowcase />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/stays" element={<Stays />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;