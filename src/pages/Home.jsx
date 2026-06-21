import "../App.css";
import { Link } from "react-router-dom";
import mountain from "../assets/mountain.jpg";
import forest from "../assets/forest.jpg";
import river from "../assets/river.jpg";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
<Link to="/dashboard">DASHBOARD</Link>
function Home() {
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
      
          <button>Find Your Escape</button>
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
      
        <div className="featured-grid">
      
          <div className="stay-card">
            <h3>🏔️ Himalayan Sunrise Cabin</h3>
            <p>
              Wake above the clouds, sip chai on a wooden balcony and watch the
              mountains glow gold at sunrise.
            </p>
          </div>
      
          <div className="stay-card">
            <h3>🌲 Cedar Forest Hideaway</h3>
            <p>
              A cozy retreat tucked between pine trees, perfect for reading,
              journaling and disconnecting from city life.
            </p>
          </div>
      
          <div className="stay-card">
            <h3>🌊 Riverstone Cottage</h3>
            <p>
              Fall asleep to the sound of flowing water and spend evenings beside
              warm bonfires under the stars.
            </p>
          </div>
      
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
      <>
  <Navbar />

  <Hero />

  <Card
    title="Mountain Cabin"
    description="A peaceful mountain retreat."
  />

  <Card
    title="River Cottage"
    description="A cozy riverside stay."
  />

  <Footer />
</>
      export default Home;
