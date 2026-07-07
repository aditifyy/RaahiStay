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
  useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("favorites")) || [];
  setFavorites(saved);

  fetch(`http://localhost:3001/api/stays/${id}`)
    .then((res) => res.json())
    .then((data) => setStay(data))
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