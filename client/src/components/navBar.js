import React from "react";
import MyButton from "../components/button";
import { useNavigate } from "react-router-dom";

function NavBar () {

  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate("/bookings");
  }

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">LOGO</div>
      <div className="flex space-x-4">
        <input className="rounded-sm" placeholder="Search" />
        <MyButton text="Book an appointment" onClick={handleBookingClick} />
        <MyButton text="Register" className="border-solid border-2" />
        <MyButton text="Login" />
      </div> {/* Closing div tag for buttons */}
    </div>
  );
}

export default NavBar;
