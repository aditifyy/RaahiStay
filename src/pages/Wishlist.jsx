import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";

function Wishlist({
darkMode,
setDarkMode
}) {
  const [favorites, setFavorites] = useState([]);
  const [stays, setStays] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);

    fetch("http://localhost:3001/api/stays")
      .then((res) => res.json())
      .then((data) => setStays(data))
      .catch((err) => console.log(err));
  }, []);

  const wishlist = stays.filter((stay) =>
    favorites.includes(stay._id)
  );

  return (
    <>
     <Navbar
darkMode={darkMode}
setDarkMode={setDarkMode}
/>

      <section className="stays-page">

        <p className="section-tag">YOUR COLLECTION</p>

        <h1 className="stays-heading">
          ❤️ My Wishlist
        </h1>

        <div className="featured-grid">

          {wishlist.length === 0 ? (

            <h3>No favourite stays yet ❤️</h3>

          ) : (

            wishlist.map((stay) => (

              <div className="stay-card" key={stay._id}>

                <img
                  className="stay-image"
                  src={stay.image}
                  alt={stay.name}
                />

                <div className="stay-info">

                  <div className="stay-top">

                    <h3>{stay.name}</h3>

                    <span>⭐ {stay.rating}</span>

                  </div>

                  <p className="location">
                    📍 {stay.location}
                  </p>

                  <p className="category">
                    {stay.category}
                  </p>

                  <p className="description">
                    {stay.description}
                  </p>

                  <div className="stay-bottom">

                    <h4>
                      ₹{stay.price}/night
                    </h4>

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

            ))

          )}

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Wishlist;