import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";

function Bookings({ darkMode, setDarkMode }) {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("bookings")) || [];

    setBookings(saved);
  }, []);

  return (
    <>
     <Navbar
  darkMode={darkMode}
  setDarkMode={setDarkMode}
/>

      <section className="stays-page">

        <p className="section-tag">
          YOUR TRIPS
        </p>

        <h1 className="stays-heading">
          📅 My Bookings
        </h1>

        <div className="featured-grid">

          {bookings.length === 0 ? (

            <h3>No bookings yet.</h3>

          ) : (

            bookings.map((booking, index) => (

              <div className="stay-card" key={index}>

                <img
                  className="stay-image"
                  src={booking.image}
                  alt={booking.stayName}
                />

                <div className="stay-info">

                  <div className="stay-top">

                    <h3>{booking.stayName}</h3>

                    <span>✅ Confirmed</span>

                  </div>

                  <p className="location">
                    📍 {booking.location}
                  </p>

                  <p>
                    👤 {booking.name}
                  </p>

                  <p>
                    👥 {booking.guests} Guest(s)
                  </p>

                  <p>
                    📅 {booking.checkIn} → {booking.checkOut}
                  </p>

                  <div className="stay-bottom">

                    <h4>
                      ₹{booking.price}/night
                    </h4>

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

export default Bookings;