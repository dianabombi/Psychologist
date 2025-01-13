import React from "react";
import { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { PieChart, Pie, Cell, LineChart, Line } from "recharts";

function Dashboard() {
  const user = {
    id: "1",
    name: "Barbora",
    role: "admin",
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (user.role === "user") {
      localStorage.setItem("token", "userToken"); // Example token
      navigate("/userDashboard");
    }
  }, [user.role, navigate]);

  const redirectCalendar = () => navigate("/calendar");
  const confirmBooking = () => navigate("/bookingConfirmation");
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const data = [
    { name: "January", sessions: 30, bookings: 20 },
    { name: "February", sessions: 45, bookings: 30 },
    { name: "March", sessions: 60, bookings: 40 },
  ];

  const pieData = [
    { name: "Active Users", value: 400 },
    { name: "Inactive Users", value: 100 },
  ];

  const COLORS = ["#df5a66", "#9b1d78"];

  const blogContributorsData = [
    { month: "January", posts: 10 },
    { month: "February", posts: 15 },
    { month: "March", posts: 20 },
    { month: "April", posts: 25 },
    { month: "May", posts: 30 },
  ];

  return (
    <div>
    <div className="admin-dashboard">
      <h1>Welcome to your Dashboard, {user.name}!</h1>

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
      </div>

        <div className="chart-container">
          {/* BarChart for Session and Booking Statistics */}
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
              <Bar dataKey="sessions" fill="#4caf50" />
              <Bar dataKey="bookings" fill="#1d7874" /> 
            </BarChart>
          </div>

          {/* PieChart for Diary Users */}
          <div
            className="chart-item pie-chart"
            style={{ display: "flex", justifyContent: "flex-end", flexDirection: "column" }}
          >
            <h2>Diary Users</h2>
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
              <Line type="monotone" dataKey="posts" stroke="#f7c74a" activeDot={{ r: 8 }} />
            </LineChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
