import React from 'react';
import { useNavigate } from "react-router-dom";
import NavBar from './navBar';


function UserDashboard() {

    const navigate = useNavigate();

    const addBlog = () => {
        navigate("/blog");
      };
    
      const diary = () => {
        navigate("/myDiary");
      };
  return (
    <div>
        <NavBar />
        <h1>Welcome to your dashboard</h1>
        <div className="tile-container">
            <div className="tile" onClick={diary}>
                <h2>My Diary</h2>
                </div>
                <div className="tile" onClick={addBlog}>
                <h2>Add Blog</h2>
            </div>
        </div>
  </div>
  );
}

export default UserDashboard;
