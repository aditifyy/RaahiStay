import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AddStay({ darkMode, setDarkMode }) {
  const navigate = useNavigate();

  const [stay, setStay] = useState({
    name: "",
    location: "",
    category: "",
    description: "",
    image: "",
    price: "",
    rating: "",
  });

  const handleChange = (e) => {
    setStay({
      ...stay,
      [e.target.name]: e.target.value,
    });
  };

  const addStay = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://raahistay.onrender.com/api/stays", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(stay),
      });

      if (res.ok) {
        alert("Stay Added Successfully!");
        navigate("/stays");
      } else {
        alert("Failed to add stay.");
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong.");
    }
  };

  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div
        style={{
          maxWidth: "700px",
          margin: "40px auto",
          padding: "30px",
          background: "#fff",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>
          Add New Stay
        </h2>

        <form onSubmit={addStay}>

          <input
            type="text"
            name="name"
            placeholder="Stay Name"
            value={stay.name}
            onChange={handleChange}
            required
          />

          <br /><br />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={stay.location}
            onChange={handleChange}
            required
          />

          <br /><br />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={stay.category}
            onChange={handleChange}
            required
          />

          <br /><br />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={stay.image}
            onChange={handleChange}
            required
          />

          <br /><br />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={stay.price}
            onChange={handleChange}
            required
          />

          <br /><br />

          <input
            type="number"
            step="0.1"
            name="rating"
            placeholder="Rating"
            value={stay.rating}
            onChange={handleChange}
            required
          />

          <br /><br />

          <textarea
            name="description"
            placeholder="Description"
            value={stay.description}
            onChange={handleChange}
            rows="5"
            required
          />

          <br /><br />

          <button
            type="submit"
            className="book-btn"
          >
            Add Stay
          </button>

        </form>
      </div>

      <Footer />
    </>
  );
}

export default AddStay;