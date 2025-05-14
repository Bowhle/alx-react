import React from 'react';
import ALX_logo from './ALX-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='header-content'>
        <img src={ALX_logo} className="ALX-logo" alt="ALX Logo" />
        <h1>School dashboard</h1>
        </div>
        <hr className='header-separator' />
      </header>

  <div className='App-body'>
    <p>Login to access the full dashboard</p>
    </div>
  
  <footer className='App-footer'>
    <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
  </footer>
  </div>
  );
}

export default App;
