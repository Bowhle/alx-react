import React from 'react';
import PropTypes from 'prop-types';
import ALX_logo from './ALX-logo.jpg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Notifications from './Notifications';
import CourseList from './CourseList/CourseList';


function App(isLoggedIn) {
  return (
    <>
    <Notifications />
    <div className="App">
      < Header />
      <div className="App-body">
      {isLoggedIn ? <CourseList /> : <Login />}
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
