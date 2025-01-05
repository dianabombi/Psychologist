import React from 'react'
import { useNavigate } from 'react-router-dom';

function Dashboard() {

  const user = {
    id:"1",
    name: "guest", 
    role: "admin" 
  };

  const navigate = useNavigate ();

  const redirectCalendar = () => {
    navigate ("/calendar"); //bookingCalendar
  };

  const confirmBooking = () => {
    navigate ("/bookingConfirmation");
  };

  const addBlog = () => {
    navigate ("/addBlog");
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token from localStorage
    navigate("/login"); // Redirect to login page
  };

  return (
    <div>
      <div className='admin-dashboard'>
        <h1>Welcome to admin Dashboard, {user.name}!</h1>

        <div className="left-panel">
          {user.role === "admin" && (
            <div>
              <div>
                <button onClick={redirectCalendar}>Calendar of sessions</button>
              </div>
              <div>
                <button onClick={confirmBooking}>Confirm booking</button>
              </div>
              <div>
              <button>Availability confirmation</button>
              </div>

              <div>
              <button onClick={addBlog}>Blog</button>
              </div>

              <div>
              <button>Settings</button>
              </div>

              <div>
              <button>Users</button>
              </div>

              <div>
              <button className="logout-button" onClick={handleLogout}>
                  Log Out
              </button>
              </div>
          </div>
        )}

        {user.role === 'user' && (
            <p>You have limited access as a User.</p>
          )}
    </div>
    </div>
    </div>
  )
}

export default Dashboard;
