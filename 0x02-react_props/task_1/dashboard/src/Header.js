import React from 'react';
import ALX_logo from '../../ALX-logo.jpg';
import './Header.css';

// This code defines a functional React component called Header.
// It imports React, an image (ALX_logo), and a CSS file (Header.css).
function Header() {
    return (
        <header className="App-header">
        <div className='header-content'>
            <img src={ALX_logo} className="ALX-logo" alt="ALX Logo" />
            <h1>School dashboard</h1>
        </div>
        <hr className='header-separator' />
        </header>
    );
    }
export default Header;
