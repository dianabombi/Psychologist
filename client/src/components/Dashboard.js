import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Cell,  LineChart, Line } from 'recharts';

function Dashboard() {
  const user = {
    id: "1",
    name: "Barbora",
    role: "admin",
  };

  const navigate = useNavigate();

  const redirectCalendar = () => {
    navigate("/calendar"); // bookingCalendar
  };

  const confirmBooking = () => {
    navigate("/bookingConfirmation");
  };

  const addBlog = () => {
    navigate("/addBlog");
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token from localStorage
    navigate("/login"); // Redirect to login page
  };

  const data = [
    { name: 'January', sessions: 30, bookings: 20 },
    { name: 'February', sessions: 45, bookings: 30 },
    { name: 'March', sessions: 60, bookings: 40 },
  ];


  const pieData = [
    { name: 'Active Users', value: 400 },
    { name: 'Inactive Users', value: 100 },
  ];
  
  const COLORS = ['#8884d8', '#82ca9d'];

  const blogContributorsData = [
    { month: 'January', posts: 10 },
    { month: 'February', posts: 15 },
    { month: 'March', posts: 20 },
    { month: 'April', posts: 25 },
    { month: 'May', posts: 30 },
  ];

  return (
    <div>
      <div className="admin-dashboard">
        <h1>Welcome to your Dashboard, {user.role}!</h1>

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

          {user.role === "user" && <p>You have limited access as a User.</p>}
        </div>

  <div className="chart-container">
    {/* BarChart for Diary Users */}
        <div className="chart-item bar-chart">
          <h2>Session and Booking Statistics</h2>
          <BarChart
            width={500}
            height={300}
            data={data} 
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" /> 
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sessions" fill="#8884d8" /> 
            <Bar dataKey="bookings" fill="#82ca9d" /> 
          </BarChart>
        </div>

  
  
  <div className="chart-item pie-chart" style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column' }}>
    <h2>Diary Users</h2>
      
    {/* PieChart for Diary Users */}
      <PieChart width={300} height={300}>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>

{/* LineChart for Blog Contributors */}
<div className="chart-item line-chart">
        <h2>Blog Contributor Statistics</h2>
        <LineChart
          width={600}
          height={300}
          data={blogContributorsData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="posts" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
      </div>
    </div>
  </div>
  );
}

export default Dashboard;
