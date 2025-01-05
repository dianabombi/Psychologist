import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminProfile() {

    const [formInput, setFormInput] = useState ({
        username: "",
        password:"",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput({
          ...formInput,
          [name]: value,
        });
      };

      const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/dashboard");
    };

  return (
    <div>
        <h1>Admin Profile</h1>
            <form onSubmit={handleSubmit}>  
                <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type = "text"
                        id = "username"
                        name = "username"
                        placeholder = "Enter your admin username"
                        value = {formInput.username}
                        onChange = {handleChange}
                        />
                     <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formInput.password}
                            onChange={handleChange}
                        />
                     </div>   
                    <button>SUBMIT</button>
                </div>
            </form>    
    </div>
  )
}

export default AdminProfile;
