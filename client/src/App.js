import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import NavBar from "./components/navBar";
import HomePage from "./components/homePage";
import BookingSystem from "./components/bookingSystem";
import Register from "./components/register";
import Login from "./components/login";
import Blog from "./components/blog";


function App() {

  return (
    <BrowserRouter>
      <NavBar /> {/* Navbar visible on all pages */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Homepage Route */}
        <Route path="/bookings" element={<BookingSystem />} /> {/* Booking page */}
        <Route path="/register" element={<Register />}  /> {/* Register Route */}
        <Route path="/login" element={<Login />}  /> {/* Login Route */}
        <Route path="/blog" element={<Blog />}  /> {/* Blog Route */}


      </Routes>
    </BrowserRouter>
  );
}

export default App;
