import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Notifications from './Notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
const rootNotifications = ReactDOM.createRoot(document.getElementById('root-Notifications'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

rootNotifications.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
