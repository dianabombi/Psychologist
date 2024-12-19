import React from 'react'
import { useNavigate } from 'react-router-dom';

function Dashboard() {

  const user = {
    id:"1",
    name: "Diana", 
    role: "admin" 
  };

  const navigate = useNavigate ();

  const redirectCalendar = () => {
    navigate ("/bookingCalendar");
  }

  const confirmBooking = () => {
    navigate ("/bookingConfirmation");
  }

  const addBlog = () => {
    navigate ("/addBlog");
  }

  return (
    <div>
        <h1>Welcome in Admin Dashboard, {user.name}!</h1>
        {user.role === "admin" && (
            <div>
              <div className="border">
                <button onClick={redirectCalendar}>Calendar of sessions</button>
              </div>
              <div className="border">
                <button onClick={confirmBooking}>Confirm booking</button>
              </div>
              <div className="border">
              <button onClick={addBlog}>Availability confirmation</button>
              </div>
            </div>
        )}

        {user.role === 'user' && (
            <p>You have limited access as a User.</p>
          )}
    </div>
  )
}

export default Dashboard;
