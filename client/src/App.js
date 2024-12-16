import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import NavBar from "./components/navBar";
import HomePage from "./components/homePage";
import BookingSystem from "./components/bookingSystem";


function App() {

  return (
    <BrowserRouter>
      <NavBar /> {/* Navbar visible on all pages */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Homepage Route */}
        <Route path="/bookings" element={<BookingSystem />} /> {/* Booking page */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
