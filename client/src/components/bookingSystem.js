import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavBar from './navBar';

function BookingSystem() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [bookingDetails, setBookingDetails] = useState(null);

  const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "13:00 PM", "14:00 PM"];

  const handleBookingSubmit = (details) => {
    setBookingDetails({ ...details, date: selectedDate, time: selectedTime });
    console.log("Booking Confirmed:", { ...details, date: selectedDate, time: selectedTime });
  };

  return (
    <div> 
      <NavBar />
      <div className="booking-page">
      <h1 >Booking System</h1>
      
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        minDate={new Date()}
        placeholderText="Select a date"
      />
      <div>
        <h2>Select a Time Slot</h2>
        {timeSlots.map((slot, index) => (
          <button key={index} onClick={() => setSelectedTime(slot)} disabled={!selectedDate}>
            {slot}
          </button>
        ))}
      </div>
      {selectedDate && selectedTime && (
        <div>
          <h2>Enter Your Details</h2>
          <BookingForm onSubmit={handleBookingSubmit} />
        </div>
      )}

      {bookingDetails && (
        <div>
          <h2>Booking Confirmed</h2>
          <p>
            Name: {bookingDetails.name} <br />
            Email: {bookingDetails.email} <br />
            Date: {bookingDetails.date.toDateString()} <br />
            Time: {bookingDetails.time}
          </p>
        </div>
      )}
    </div>
    </div>
  );
}

function BookingForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit({ name, email });
    }}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <button type="submit">Confirm Booking</button>
    </form>
  );
}

export default BookingSystem;
