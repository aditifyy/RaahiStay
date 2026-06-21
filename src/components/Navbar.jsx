import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>RaahiStay</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/stays">Stays</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
  
      </div>
    </nav>
  );
}

export default Navbar;