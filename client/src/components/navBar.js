import React, { useState, useEffect } from "react";  // Don't forget to import useEffect
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function NavBar () {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Define state for login status

  useEffect(() => {
    // Check if a token exists when the component mounts (page load)
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);  // Updates the state based on token existence
  }, []);  // Empty dependency array ensures it runs only once on mount

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleTherapyClick = () => {
    navigate("/therapy");
  };

  const handleBookingClick = () => {
    navigate("/bookings");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleAboutClick = () => {
    navigate("/about");
  };

  const handleDiaryClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/myDiary");
    } else {
      alert("You must be logged in to access this page.");
      navigate("/login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);  // Update the state after logging out
    navigate("/login");
  };

  return (
    <div>
  
    <div className="navBar">
      <ul className="listBar">
      <li className="navItem homeIcon" onClick={handleHomeClick}>
      <FontAwesomeIcon icon={faHouse} />
      </li>
        <li className="navItem" onClick={handleAboutClick}>About Me</li>
        <li className="navItem" onClick={toggleDropdown}>
          Services
          {dropdownOpen && (
            <ul className="dropdownMenu">
              <li className="dropdownItem" onClick={handleTherapyClick}>Therapy</li>
              <li className="dropdownItem" onClick={handleBookingClick}>Book an appointment</li>
              <li className="dropdownItem" onClick={handleDiaryClick}>My Diary</li>
            </ul>
          )}
        </li>

        {isLoggedIn ? (
          <li className="navItem" onClick={handleLogout}>Log Out</li>
    
        ) : (
          <>
            <li className="navItem" onClick={handleLoginClick}>Login</li>
            <li className="navItem" onClick={handleRegisterClick}>Register</li>
          </>
        )}
      </ul>
    </div>
    </div>
  );
}

export default NavBar;
