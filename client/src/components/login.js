import React from 'react';
import { useState } from 'react';

import MyButton from './button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login() {
    const [loginInput, setLoginInput] = useState({
        email:'',
        password:''
    })

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginInput ({
            ...loginInput, // spread operator
            [name]: value, // will update all the "names" with "values", which were input
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault(); 
    }

    const togglePasswordVisibility = () => {
        setShowPassword (!showPassword)
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
           
            <h2>LOGIN</h2>

            <label htmlFor="email">e-mail </label>
                <input 
                    type="text"
                    placeholder="registered e-mail"
                    name = "email"
                    value={loginInput.email}
                    onChange={handleChange}
                    required
                    />

             <label htmlFor="password">password </label>
                <input 
                    type={showPassword ? 'text' : 'password'}
                    placeholder="password"
                    name = "password"
                    value={loginInput.password}
                    onChange={handleChange}
                    required
                    />
                 <button type="button" onClick={togglePasswordVisibility}>
                    {showPassword ? <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye} />}
                </button>
                
                <MyButton 
                    text="SUBMIT" 
                    />
            </form>
    </div>
  )
}

export default Login;
