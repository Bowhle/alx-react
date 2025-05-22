import React, { useState } from 'react';
import ALX_logo from './ALX-logo.jpg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Notifications from './Notifications';
import CourseList from './CourseList/CourseList';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleToggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  return (
    <>
      <Notifications displayDrawer={true} />
      <div className="App">
        <Header />
        <div className={isLoggedIn ? "App-body--logged-in" : "App-body--logged-out"} id="App-body">
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          <button
            onClick={handleToggleLogin}
            style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              zIndex: '999',
              padding: '8px 12px',
              cursor: 'pointer'
            }}
          >
            Toggle Login ({isLoggedIn ? 'ON' : 'OFF'})
          </button>
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
