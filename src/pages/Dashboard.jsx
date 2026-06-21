import "./Dashboard.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Dashboard.css";
import { useState } from "react";
function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Navbar />

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

          <button className="explore-btn">
            ↗ Explore Stays
          </button>
        </div>

        <div className="stats-section">
          <div className="stat-card">
            <span>◇</span>
            <h3>Saved Places</h3>
            <p>24</p>
          </div>

          <div className="stat-card">
            <span>✦</span>
            <h3>Bookings</h3>
            <p>08</p>
          </div>

          <div className="stat-card">
            <span>◈</span>
            <h3>Wishlist</h3>
            <p>12</p>
          </div>
        </div>

        <h2 className="section-title">
          ✦ Featured Escapes
        </h2>

        <div className="escapes-grid">
          <div className="escape-card tall">
            <h3>MANALI</h3>
            <p>Mountain Retreat</p>
            <span>4.9 Rating</span>
          </div>

          <div className="escape-card medium">
            <h3>GOA</h3>
            <p>Ocean Escape</p>
            <span>4.8 Rating</span>
          </div>

          <div className="escape-card short">
            <h3>UDAIPUR</h3>
            <p>Lakeside Haven</p>
            <span>5.0 Rating</span>
          </div>
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