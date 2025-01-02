import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import NavBar from './navBar';
import MyButton from './button'; // Optional if you're not using MyButton

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login() {
    const [loginInput, setLoginInput] = useState({
        email: '',
        password: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState(''); 
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInput({
            ...loginInput,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted'); 
        try {
            const response = await axios.post('http://localhost:8000/users/login', loginInput);
            if (response.data.token) {
                setIsLoggedIn(true);
                setSuccessMessage(response.data.msg);
                setErrorMessage('');
                localStorage.setItem('authToken', response.data.token);
                console.log("Redirecting to dashboard...");
                navigate("/dashboard");
            } else {
                setIsLoggedIn(false);
                setErrorMessage(response.data.msg);
                setSuccessMessage('');
            }
        } catch (error) {
            console.error('Login error:', error.response || error.message);
            setErrorMessage('An error occurred. Please try again later.');
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
                        value={loginInput.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        name="password"
                        value={loginInput.password}
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
