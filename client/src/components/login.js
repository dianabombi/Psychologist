import React from 'react';
import axios from "axios";
import { useState } from 'react';
import NavBar from './navBar';

import MyButton from './button';

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInput({
            ...loginInput,
            [name]: value
        });
    };

   const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', loginInput);
            if (response.data.token) {
                setIsLoggedIn(true);
                setSuccessMessage(response.data.msg); // Show success message
                setErrorMessage('');
                // Save the token in localStorage for future requests
                localStorage.setItem('authToken', response.data.token);
            } else {
                setIsLoggedIn(false);
                setErrorMessage(response.data.msg); // Show error message from backend
                setSuccessMessage('');
            }
        } catch (error) {
            console.error(error);
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
                        type="text"
                        placeholder="registered e-mail"
                        name="email"
                        value={loginInput.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="password"
                        name="password"
                        value={loginInput.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="button" onClick={togglePasswordVisibility}>
                        {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                    </button>

                    <MyButton text="SUBMIT" />

                    {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Show error message */}
                    {successMessage && <p className="success-message">{successMessage}</p>}
                </form>
            </div>
        </div>
    );
}

export default Login;
