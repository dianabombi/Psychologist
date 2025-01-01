import React, { useState } from "react";
import { useNavigate} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function NavBar () {

  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleHomeClick = () => {
    navigate("/");
  }

  const handleBookingClick = () => {
    navigate("/bookings");
  }

  const handleRegisterClick = () => {
    navigate("/register");
  }

  const handleLoginClick = () => {
    navigate ("/login");
  }

  const handleBlogClick = () => {
    navigate ("/blog");
  }

  const handleAboutClick = () => {
    navigate ("/about");
  }

  
  return (
   
    <div className="navBar">
   
    <ul className="listBar">
        <FontAwesomeIcon 
        icon={faHouse}
        onClick={handleHomeClick}
        />
                <li className="navItem" onClick={handleAboutClick}>About</li>
                <li
                    className="fixed-panel" onClick={toggleDropdown}
                >
                    Services
                    {dropdownOpen && (
                        <ul className="dropdownMenu">
                            <li className="dropdownItem">Therapy</li>
                            <li className="dropdownItem">Workshops</li>
                            <li className="dropdownItem" onClick={handleBookingClick}>Book an appointment</li>
                            <li className="dropdownItem">My Diary</li>
                            <li className="dropdownItem" onClick={handleBlogClick}>Blog</li>
                        </ul>
                    )}
                </li>
                <li className="navItem" onClick={handleLoginClick}>Login</li>
                <li className="navItem" onClick={handleRegisterClick}>Register</li>
            </ul>   
        </div>
    );
}

export default NavBar;
