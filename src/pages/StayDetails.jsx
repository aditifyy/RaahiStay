import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function StayDetails({ darkMode, setDarkMode }) {
  const { id } = useParams();

  const [stay, setStay] = useState(null);
const [favorites, setFavorites] = useState([]);
const [showForm, setShowForm] = useState(false);

const [booking, setBooking] = useState({
  name: "",
  email: "",
  guests: "",
  checkIn: "",
  checkOut: ""
});
const [editing, setEditing] = useState(false);

const [editData, setEditData] = useState({
  name: "",
  location: "",
  category: "",
  description: "",
  image: "",
  price: "",
  rating: "",
});
 useEffect(() => {
  const saved =
    JSON.parse(localStorage.getItem("favorites")) || [];

  setFavorites(saved);

  fetch(`http://localhost:3001/api/stays/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setStay(data);

      setEditData({
        name: data.name,
        location: data.location,
        category: data.category,
        description: data.description,
        image: data.image,
        price: data.price,
        rating: data.rating,
      });
    })
    .catch((err) => console.log(err));
}, [id]);
  if (!stay) {
    return <h2>Loading...</h2>;
  }
const toggleFavorite = () => {
  let updated;

  if (favorites.includes(stay._id)) {
    updated = favorites.filter((id) => id !== stay._id);
  } else {
    updated = [...favorites, stay._id];
  }

  setFavorites(updated);
  localStorage.setItem("favorites", JSON.stringify(updated));
};
const updateStay = async () => {
  try {
    const res = await fetch(
      `http://localhost:3001/api/stays/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editData),
      }
    );

    const data = await res.json();

    setStay(data);

    alert("Stay Updated Successfully!");

    setEditing(false);
  } catch (err) {
    console.log(err);
    alert("Update Failed");
  }
};
  return (
    <>
      <Navbar
  darkMode={darkMode}
  setDarkMode={setDarkMode}
/>

      <section className="stay-details">

        <img
          src={stay.image}
          alt={stay.name}
          className="details-image"
        />

        <div className="details-content">

          <h1>{stay.name}</h1>

          <p>📍 {stay.location}</p>

          <p>⭐ {stay.rating}</p>

          <h2>₹{stay.price}/night</h2>

          <p>{stay.description}</p>
<button
  className="book-btn"
  onClick={() => setEditing(!editing)}
  style={{ marginRight: "10px" }}
>
  {editing ? "Cancel" : "Edit Stay"}
</button>

{editing && (
  <div className="booking-form">

    <input
      type="text"
      placeholder="Name"
      value={editData.name}
      onChange={(e) =>
        setEditData({ ...editData, name: e.target.value })
      }
    />

    <input
      type="text"
      placeholder="Location"
      value={editData.location}
      onChange={(e) =>
        setEditData({ ...editData, location: e.target.value })
      }
    />

    <input
      type="text"
      placeholder="Category"
      value={editData.category}
      onChange={(e) =>
        setEditData({ ...editData, category: e.target.value })
      }
    />

    <input
      type="text"
      placeholder="Image URL"
      value={editData.image}
      onChange={(e) =>
        setEditData({ ...editData, image: e.target.value })
      }
    />

    <input
      type="number"
      placeholder="Price"
      value={editData.price}
      onChange={(e) =>
        setEditData({ ...editData, price: e.target.value })
      }
    />

    <input
      type="number"
      step="0.1"
      placeholder="Rating"
      value={editData.rating}
      onChange={(e) =>
        setEditData({ ...editData, rating: e.target.value })
      }
    />

    <textarea
      placeholder="Description"
      value={editData.description}
      onChange={(e) =>
        setEditData({
          ...editData,
          description: e.target.value,
        })
      }
    />

    <button
      className="book-btn"
      onClick={updateStay}
    >
      Save Changes
    </button>

  </div>
)}
        <button
  className="book-btn"
  onClick={() => setShowForm(true)}
>
  Book Now
</button>
{showForm && (

<div className="booking-form">

<h2>Book Your Stay</h2>

<input
type="text"
placeholder="Your Name"
value={booking.name}
onChange={(e)=>
setBooking({...booking,name:e.target.value})
}
/>

<input
type="email"
placeholder="Email"
value={booking.email}
onChange={(e)=>
setBooking({...booking,email:e.target.value})
}
/>

<input
type="number"
placeholder="Guests"
value={booking.guests}
onChange={(e)=>
setBooking({...booking,guests:e.target.value})
}
/>

<input
type="date"
value={booking.checkIn}
onChange={(e)=>
setBooking({...booking,checkIn:e.target.value})
}
/>

<input
type="date"
value={booking.checkOut}
onChange={(e)=>
setBooking({...booking,checkOut:e.target.value})
}
/>

<button
className="book-btn"
onClick={() => {

const bookings =
JSON.parse(localStorage.getItem("bookings")) || [];

bookings.push({
...booking,
stayName: stay.name,
location: stay.location,
price: stay.price,
image: stay.image
});

localStorage.setItem(
"bookings",
JSON.stringify(bookings)
);

alert("Booking Successful 🎉");

setShowForm(false);

}}
>

Confirm Booking

</button>

</div>

)}
        </div>

      </section>

      <Footer />
    </>
  );
}

export default StayDetails;