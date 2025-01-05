import React from 'react';
import {useState} from 'react';
import axios from 'axios';

import NavBar from './navBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


function Register() {
    const [formInput, setFormInput] = useState({
        firstName: "",
        surname: "",
        email: "",
        phone: "",
        password: "",
        password2: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword (!showPassword)
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormInput ({
            ...formInput,
            [name]: value, 
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!formInput.firstName || !formInput.surname || !formInput.email || !formInput.phone || !formInput.password) {
            alert('Please fill in all fields.');
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:8000/users/register', formInput);
            console.log("Registration Success:", response.data);

            if (response.data.status === true) {
                alert('Registration successful!');
                setFormInput({
                    firstName: '',
                    surname: '',
                    email: '',
                    phone: '',
                    password: ''
                });
                navigate('/login');
            } else {
                alert(response.data.msg || 'Registration failed. Please check your inputs.');
            }
        } catch (error) {
            setErrorMessage('An error occurred. Please try again later.');
        }
    };


  return (
    <div>
        <NavBar />
    <div className = "register-page">
       
        <form onSubmit={handleSubmit} className="register-form">
        <h1>REGISTER</h1>
            <label htmlFor="firstName">First Name</label>
            <input 
                type="text" 
                placeholder="Enter first name"
                name = "firstName"
                value ={formInput.firstName}
                onChange={handleChange}
                required
                />
            
            <label htmlFor="surname">Surname</label>
            <input 
                type="text" 
                placeholder="Enter surname"
                name = "surname"
                value = {formInput.surname}
                onChange ={handleChange}
                required
                />
            
            <label htmlFor="email">e-mail</label>
            <input 
                type="text" 
                placeholder="email@email.com"
                name = "email"
                value = {formInput.email}
                onChange ={handleChange}
                required
                />
            
            <label htmlFor="phone">Phone Number</label>
            <input 
                type="text" 
                placeholder="690*******"
                name = "phone"
                value = {formInput.phone}
                onChange ={handleChange}
                required
                />
            
            <label htmlFor="password">Password</label>
            <input 
                type={showPassword ? 'text' : 'password'}
                placeholder = "password"
                name = "password"
                value ={formInput.password}
                onChange ={handleChange}
                required
                />
                <button className="password-eye" type="button" onClick={togglePasswordVisibility}>
                    {showPassword ? <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye} />}
                </button>

            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button className="register-button" type="submit">SUBMIT</button>
        </form>
     </div>
</div>
  )
}

export default Register;
