import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({
darkMode,
setDarkMode
}){
  return (
    <nav className="navbar">
      <h2>RaahiStay</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/stays">Stays</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
        <button
className="theme-btn"
onClick={()=>
setDarkMode(!darkMode)
}
>

{darkMode ? "☀" : "🌙"}

</button>
  <Link to="/wishlist">
  Wishlist
</Link>
      </div>
    </nav>
  );
}

export default Navbar;