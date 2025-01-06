import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import NavBar from "./components/navBar";
import HomePage from "./components/homePage";
import BookingSystem from "./components/bookingSystem";
import Register from "./components/register";
import Login from "./components/login";
import Blog from "./components/blog";
import Dashboard from "./components/Dashboard";
import About from "./components/about";
import ProtectedRoute from "./components/protectedroutesComponent";
import CalendarPage from "./components/calendarPage";
import AdminProfile from "./components/adminProfile";
import MyDiary from "./components/myDiary";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> 

        <Route 
          path="/bookings" 
          element={
              <BookingSystem />
          } 
          /> 

        <Route path="/register" element={<Register />}  /> 
        <Route path="/login" element={<Login />}  /> 
        <Route path="/blog" element={<Blog />}  /> 

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/about" element={<About />}  /> 

        <Route
          path="/calendar"
          element={
            <ProtectedRoute>
              <CalendarPage />
            </ProtectedRoute>
          }
        />
        <Route path="/admin-dashboard" element={<AdminProfile />} />

        <Route 
          path="/myDiary" 
          element={
            <ProtectedRoute>
              <MyDiary />
            </ProtectedRoute>
          } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
