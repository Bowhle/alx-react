import React from 'react';
import ALX_logo from '../../ALX-logo.jpg';
import './Login.css';

// This code defines a functional React component called Login.
function Login() {
    return (
        <div className='login'>
            <img src={ALX_logo} className="ALX-logo" alt="ALX Logo" />
            <h1>Login to access the full dashboard</h1>
            <div className='login-form'>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" />
                <button type="submit">OK</button>
            </div>            
        </div>
    );
}
export default Login;