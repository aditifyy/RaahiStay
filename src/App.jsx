import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Stays from "./pages/Stays";
import UIShowcase from "./pages/UIShowcase";
import Wishlist from "./pages/Wishlist";
import StayDetails from "./pages/StayDetails";
import Bookings from "./pages/Bookings";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
function App() {
  const isLoggedIn = localStorage.getItem("token");
  const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem("theme") === "dark";
});

useEffect(() => {
  localStorage.setItem(
    "theme",
    darkMode ? "dark" : "light"
  );

  document.body.classList.toggle("dark", darkMode);
}, [darkMode]);
  return (
    
    <BrowserRouter>

<div className={darkMode ? "dark" : "light"}>

<Routes>

<Route
  path="/"
  element={
    <Home
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  }
/>

<Route
  path="/stays"
  element={
    <Stays
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  }
/>

<Route
  path="/about"
  element={
    <About
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  }
/>

<Route
  path="/contact"
  element={
    <Contact
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  }
/>

<Route
  path="/dashboard"
  element={
    isLoggedIn ? (
      <Dashboard
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    ) : (
      <Navigate to="/login" />
    )
  }
/>

<Route
  path="/wishlist"
  element={
    isLoggedIn ? (
      <Wishlist
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    ) : (
      <Navigate to="/login" />
    )
  }
/>

<Route
  path="/bookings"
  element={
    <Bookings
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  }
/>

<Route
  path="/stay/:id"
  element={
    <StayDetails
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  }
/>

<Route
  path="/login"
  element={
    <Login
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  }
/>

</Routes>

</div>

</BrowserRouter>
  
  );
}

export default App;