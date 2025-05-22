import React from 'react';
import ALX_logo from './ALX-logo.jpg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Notifications from './Notifications';

function App() {
  return (
    <>
    <Notifications />
    <div className="App">
      < Header />
      <div className="App-body">
      < Login />
      </div>
      <div claccName="App-footer">
        < Footer />
      </div>
  </div>
  </>
  );
}

export default App;
