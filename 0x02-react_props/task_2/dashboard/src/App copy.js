import React from 'react';
import ALX_logo from './ALX-logo.jpg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Notifications from './components/Notifications/Notifications';

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
