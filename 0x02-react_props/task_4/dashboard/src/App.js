import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ALX_logo from './ALX-logo.jpg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Notifications from './Notifications';
import CourseList from './CourseList/CourseList';


function App() {
  // Use useState to manage the login state internally for demonstration.
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleToggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
    <Notifications displayDrawer={true} />
    <div className="App">
      < Header />
      <div className={isLoggedIn ? "App-body--logged-in" : "App-body--logged-out"} id="App-body">
      {isLoggedIn ? <CourseList /> : <Login />}
      <button onClick={handleToggleLogin} style={{ position: 'absolute', top: '10px', left: '10px', zIndex: '999', padding: '8px 12px', cursor: 'pointer' }}>
            Toggle Login ({isLoggedIn ? 'ON' : 'OFF'})
          </button>
      </div>
      <div claccName="App-footer">
        < Footer />
      </div>
  </div>
  </>
  );
}

// This code defines a functional React component called App.
App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
