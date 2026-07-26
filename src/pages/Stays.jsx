import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Stays({ darkMode, setDarkMode }) {
  const [stays, setStays] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/stays")
      .then((res) => res.json())
      .then((data) => setStays(data))
      .catch((err) => console.log(err));

    const saved =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(saved);
  }, []);

  const toggleFavorite = (id) => {
    let updated;

    if (favorites.includes(id)) {
      updated = favorites.filter((fav) => fav !== id);
    } else {
      updated = [...favorites, id];
    }

    setFavorites(updated);
    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );
  };
const deleteStay = async (id) => {
  try {
    await fetch(`http://localhost:3001/api/stays/${id}`, {
      method: "DELETE",
    });

    setStays(stays.filter((stay) => stay._id !== id));
  } catch (err) {
    console.log(err);
  }
};
  return (
    <>
     <Navbar
  darkMode={darkMode}
  setDarkMode={setDarkMode}
/>

      <section className="stays-page">

        <p className="section-tag">
          DISCOVER
        </p>

        <h1 className="stays-heading">
          Featured Escapes
        </h1>

        <div className="search-box">

          <input
            type="text"
            placeholder="Search destination..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        <div className="featured-grid">

          {stays
            .filter(
              (stay) =>
                stay.name
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                stay.location
                  .toLowerCase()
                  .includes(search.toLowerCase())
            )
            .map((stay) => (

              <div
                className="stay-card"
                key={stay._id}
              >

                <img
                  className="stay-image"
                  src={stay.image}
                  alt={stay.name}
                />

                <div className="stay-info">

                  <div className="stay-top">

                    <h3>{stay.name}</h3>

                    <div className="top-right">

                      <span>
                        ⭐ {stay.rating}
                      </span>

                      <span
                        className="heart"
                        onClick={() =>
                          toggleFavorite(stay._id)
                        }
                      >
                        
                        {favorites.includes(stay._id)
                          ? "❤️"
                          : "🤍"}
                      </span>

                    </div>

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
<button
  className="delete-btn"
  onClick={() => deleteStay(stay._id)}
>
  Delete
</button>
                </div>

              </div>

            ))}

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Stays;