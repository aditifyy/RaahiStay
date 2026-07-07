import "./Dashboard.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Dashboard.css";
import { useState, useEffect } from "react";
function Dashboard({
  darkMode,
  setDarkMode
}) {
  
  const [favorites, setFavorites] = useState([]);
const [stays, setStays] = useState([]);
const [bookings, setBookings] = useState([]);
useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("favorites")) || [];
  setFavorites(saved);
const savedBookings =
  JSON.parse(localStorage.getItem("bookings")) || [];

setBookings(savedBookings);
  fetch("http://localhost:3001/api/stays")
    .then((res) => res.json())
    .then((data) => setStays(data))
    .catch((err) => console.log(err));

}, []);
console.log("Favorites:", favorites);
console.log("Stays:", stays);
const wishlist = stays.filter((stay) =>
  favorites.includes(stay._id)
);
  return (
    <>
     <Navbar
  darkMode={darkMode}
  setDarkMode={setDarkMode}
/>

      <section
  className={`dashboard-page ${
    darkMode ? "dark-mode" : "light-mode"
  }`}
>
  <button
  className="toggle-btn"
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
</button>
        <div className="hero-card">
          <p className="hero-tag">✦ Welcome Back</p>

          <h1 className="hero-title">
            RaahiStay <br />
            Journal
          </h1>

          <p className="hero-text">
            Curated stays, dreamy escapes and unforgettable journeys.
            Discover places that feel like home.
          </p>

          <Link to="/stays" className="book-link">
  <button className="explore-btn">
    ↗ Explore Stays
  </button>
</Link>
        </div>

        <div className="stats-section">
          <div className="stat-card">
            <span>◇</span>
            <h3>Saved Places</h3>
           <p>{favorites.length}</p>
          </div>
<Link to="/bookings" className="stat-link">

  <div className="stat-card">

    <span>✦</span>

    <h3>Bookings</h3>

    <p>{bookings.length}</p>

  </div>

</Link>

          <Link to="/wishlist" className="stat-link">

  <div className="stat-card">
    <span>◈</span>

    <h3>Wishlist</h3>

    <p>{favorites.length}</p>
  </div>

</Link>
        </div>

        <h2 className="section-title">
  ❤️ My Wishlist
</h2>

<div className="escapes-grid">

  {wishlist.length === 0 ? (

    <p>No favourite stays yet ❤️</p>

  ) : (

    wishlist.map((stay) => (

      <div className="escape-card medium" key={stay._id}>

        <h3>{stay.name}</h3>

        <p>📍 {stay.location}</p>

        <span>⭐ {stay.rating}</span>

      </div>

    ))

  )}

</div>
        <h2 className="section-title">
          ✦ Travel Inspirations
        </h2>

        <div className="moodboard">
          <div className="mood-card">Forest Cabin</div>
          <div className="mood-card">River Retreat</div>
          <div className="mood-card">Desert Escape</div>
          <div className="mood-card">Snow Valley</div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Dashboard;