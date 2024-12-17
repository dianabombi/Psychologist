import React from 'react';
import {useState} from 'react';

import MyButton from './button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


function Register() {
    const [formInput, setFormInput] = useState({
        firstName: "",
        surname: '',
        email: '',
        phone: '',
        password: '',
        password2: ''
    });

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword (!showPassword)
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormInput ({
            ...formInput, // spread operator
            [name]: value, // will update all the "names" with "values", which were input
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    if (formInput.password !== formInput.password2) {
        alert('Passwords do not match!');
        return;
        }

    alert('Registration successful!');

    setFormInput({
        firstName: '',
        surname: '',
        email: '',
        phone: '',
        password: '',
        password2: '',
      });
    };

  return (
    <div>
        <h1>REGISTER</h1>

        <form onSubmit={handleSubmit}>

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
                placeholder="+30**********"
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
                <button type="button" onClick={togglePasswordVisibility}>
                    {showPassword ? <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye} />}
                </button>

            <label htmlFor="password2">Confirm Password</label>
            <input 
                type={showPassword ? 'text' : 'password'}
                placeholder="confirm password"
                name = "password2"
                value ={formInput.password2}
                onChange ={handleChange}
                required
                />
            <button type="button" onClick={togglePasswordVisibility}>
                {showPassword ? <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye} />}
            </button> 

            <MyButton text="SUBMIT" />
        </form>
    </div>
  )
}

export default Register;
