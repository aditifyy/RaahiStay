import "../App.css";
import { Link } from "react-router-dom";
import mountain from "../assets/mountain.jpg";
import forest from "../assets/forest.jpg";
import river from "../assets/river.jpg";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
<Link to="/dashboard">DASHBOARD</Link>
function Home({ darkMode, setDarkMode }) {
  
  const [stays, setStays] = useState([]);
const [search, setSearch] = useState("");
const [favorites, setFavorites] = useState(() => {
  const saved = localStorage.getItem("favorites");
  return saved ? JSON.parse(saved) : [];
});
const [loading, setLoading] = useState(true);
const toggleFavorite = (id) => {
  let updatedFavorites;

  if (favorites.includes(id)) {
    updatedFavorites = favorites.filter((fav) => fav !== id);
  } else {
    updatedFavorites = [...favorites, id];
  }

  setFavorites(updatedFavorites);

  localStorage.setItem(
    "favorites",
    JSON.stringify(updatedFavorites)
  );
};
useEffect(() => {

  fetch("http://localhost:3001/api/stays")
    .then((res) => res.json())
    .then((data) => setStays(data))
    .catch((err) => console.log(err));
    setTimeout(() => {
  setLoading(false);
}, 1800);
}, []);
if (loading) {
  return (
    <div className="splash-screen">

      <div className="logo-circle">
  <span className="logo-letter">R</span>
</div>

     <h2 className="brand-name">
  RaahiStay
</h2>

<p>Travel Slower • Stay Longer</p>
    </div>
  );
}
  return (
      <div>


            <nav>
        <h1>RaahiStay</h1>
      
        <div className="nav-links">
  
         <Link to="/stays">ESCAPES</Link>
<Link to="/about">ABOUT</Link>
<Link to="/dashboard">DASHBOARD</Link>
<Link to="/contact">CONTACT</Link>
<Link to="/login">LOGIN</Link>
<button
    className="theme-btn"
    onClick={() => setDarkMode(!darkMode)}
  >
    {darkMode ? "☀" : "🌙"}
  </button>
        </div>
      </nav>
      
           <section className="hero">
      
        <div className="hero-content">
          <p className="section-tag">ECO LUXURY ESCAPES</p>
      
          <h2>
            Stay where the mountains whisper and mornings feel slower.
          </h2>
      
          <p>
            RaahiStay helps travelers discover charming eco-friendly homestays,
            hidden cottages, and unforgettable escapes surrounded by nature.
          </p>
      
          <a href="#featured" className="book-link">
  <button>Find Your Escape</button>
</a>
        </div>
      
        <div className="hero-image">
          <img src={mountain} alt="Mountain Escape" />
        </div>
      
      </section>
      
            <hr />
      <p className="section-tag">
        DISCOVER
      </p>
            <section id="featured" className="featured">
       <h2>☕︎Featured Escapes ོ☼𓂃</h2>
     <div className="search-box">

  <input
    type="text"
    placeholder="Search Manali, Shimla..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    
  />


</div>
    <div className="featured-grid">
  {stays
.filter(
(stay)=>

stay.name.toLowerCase().includes(search.toLowerCase()) ||

stay.location.toLowerCase().includes(search.toLowerCase())

)

.map((stay)=>(
    <div className="stay-card" key={stay._id}>

      <img
        className="stay-image"
        src={
          stay.image ||
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        }
        alt={stay.name}
      />

      <div className="stay-info">

  <div className="stay-top">

    <h3>{stay.name}</h3>

    <div className="top-right">

      <span>⭐ {stay.rating}</span>

      <span
        className="heart"
        onClick={() => toggleFavorite(stay._id)}
      >
        {favorites.includes(stay._id) ? "❤️" : "🤍"}
      </span>

    </div>

  </div>

  <p className="location"></p>

        
        <p className="location">📍 {stay.location}</p>

        <p className="category">{stay.category}</p>

        <p className="description">
          {stay.description}
        </p>

        <div className="stay-bottom">
  <h4>₹{stay.price}/night</h4>

  <Link
  to={`/stay/${stay._id}`}
  className="book-link"
>
    <button className="book-btn">
      View Stay
    </button>
  </Link>
</div>

      </div>

    </div>
  ))}
</div>
      </section>
      <p className="section-tag">
        MOMENTS
      </p>
            <section id="gallery" className="gallery">
             <h2> ۝Gallery۝</h2>
      
              <div className="gallery-grid">
      
        <div className="gallery-card">
          <img src={mountain} alt="Mountain Stay" />
          <div className="gallery-overlay">
            <h3>Mountain Stay</h3>
          </div>
        </div>
      
        <div className="gallery-card">
          <img src={forest} alt="Forest Stay" />
          <div className="gallery-overlay">
            <h3>Forest Stay</h3>
          </div>
        </div>
      
        <div className="gallery-card">
          <img src={river} alt="River Stay" />
          <div className="gallery-overlay">
            <h3>River Stay</h3>
          </div>
        </div>
      
      </div>
            </section>
      
            <section className="stats">
              <h2> Why Travellers Love Us 𓂃✍︎</h2>
      
              <div className="stats-grid">
                <div className="stat-card">
                  <span>🛖</span>
      
                  <div className="stat-content">
                    <h3>500+</h3>
                    <p>Handpicked Stays</p>
                  </div>
                </div>
      
                <div className="stat-card">
                  <span>🌎</span>
      
                  <div className="stat-content">
                    <h3>30+</h3>
                    <p>Eco Destinations</p>
                  </div>
                </div>
      
                <div className="stat-card">
                  <span>✨</span>
      
                  <div className="stat-content">
                    <h3>4.9</h3>
                    <p>Guest Rating</p>
                  </div>
                </div>
              </div>
            </section>
      <section id="stories" className="testimonials">
      <h2>༺ Guest Stories ༻</h2>
      
        <div className="testimonial-grid">
      
          <div className="testimonial-card">
            <span className="quote">❝</span>
            <p>
              The sunrise cabin felt like a dream. Waking up above the clouds with chai in hand was unforgettable.
            </p>
            <h4>— Priya Sharma</h4>
          </div>
      
          <div className="testimonial-card">
            <span className="quote">❝</span>
            <p>
              Exactly the peaceful escape I was looking for. Beautiful stay, amazing views and zero stress.
            </p>
            <h4>— Arjun Mehta</h4>
          </div>
      
          <div className="testimonial-card">
            <span className="quote">❝</span>
            <p>
              The forest hideaway helped me disconnect from city life and reconnect with nature.
            </p>
            <h4>— Riya Kapoor</h4>
          </div>
      
        </div>
      </section>
      
            <footer>
              <p>© 2026 RaahiStay • Travel Slower, Stay Longer</p>
            </footer>
          </div>
        );
      }
      export default Home;
