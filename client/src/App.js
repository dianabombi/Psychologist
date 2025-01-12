import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./components/homePage";
import BookingSystem from "./components/bookingSystem";
import Register from "./components/register";
import Login from "./components/login";
import Blog from "./components/blog";
import Dashboard from "./components/Dashboard";
import About from "./components/about";
import ProtectedRoute from "./components/protectedroutesComponent";
import CalendarPage from "./components/calendarPage";
import MyDiary from "./components/myDiary";
import Therapy from "./components/therapy";
import UserDashboard from "./components/userDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bookings" element={<BookingSystem />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route 
          path="/blog" 
          element={
            <ProtectedRoute>
              <Blog />
            </ProtectedRoute>
          } 
        />

        <Route
          path="/userDashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          } />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/calendar"
          element={
            <ProtectedRoute>
              <CalendarPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/myDiary"
          element={
            <ProtectedRoute>
              <MyDiary />
            </ProtectedRoute>
          }
        />
        <Route path="/therapy" element={<Therapy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
