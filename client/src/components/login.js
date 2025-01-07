import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import NavBar from './navBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login() {
  
    const [credentials, setCredentials] = useState({email:"", password:""});
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(''); 
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted");
    
        if (!credentials.email || !credentials.password) {
            setErrorMessage('Please fill in all fields.');
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:8000/users/login', credentials);
    
            if (response?.data?.token && response?.data?.role) {
                // Save token in localStorage
                localStorage.setItem("token", response.data.token);

                setErrorMessage('');
                setSuccessMessage('Login successful');

                // Redirect based on user role
                if (response.data.role === 'admin') {
                    navigate("/dashboard"); // Admin-specific dashboard route
                } else if (response.data.role === 'user') {
                    navigate("/myDiary"); // User-specific dashboard route
                } else {
                    setErrorMessage('Invalid role.');
                }
            } else {
                setErrorMessage(response?.data?.msg || 'Login failed. Please check your credentials.');
                setSuccessMessage('');
            }
        } catch (error) {
            console.error('Login error:', error.response || error.message);
            setErrorMessage(error.response?.data?.msg || 'An error occurred. Please try again later.');
            setSuccessMessage('');
        }
    };


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <NavBar />
            <div className="login-page">
                <form onSubmit={handleSubmit} className="login-form">
                    <h2>LOGIN</h2>

                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        placeholder="Registered e-mail"
                        name="email"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />

                    <button className="password-eye" type="button" onClick={togglePasswordVisibility}>
                        {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                    </button>

                    <button className="login-button" type="submit">SUBMIT</button>

                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}
                </form>
            </div>
        </div>
    );
}

export default Login;
