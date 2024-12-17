import React from "react";
import MyButton from "../components/button";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function NavBar () {

  const navigate = useNavigate();

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
  
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
     
      <div className=""> 
          <FontAwesomeIcon 
            icon={faHouse}
            onClick={handleHomeClick}
            /> </div>

      <div className="flex space-x-4">
        <input className="rounded-sm" placeholder="Search" />
        <MyButton text="Book an appointment" onClick={handleBookingClick} />
        <MyButton text="Register" onClick={handleRegisterClick} />
        <MyButton text="Login" onClick={handleLoginClick}/>

      </div>
    </div>
  );
}

export default NavBar;
