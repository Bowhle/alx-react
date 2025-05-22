import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from './assets/close-icon.png';
import { getLatestNotification } from './utils.js';

function Notifications({ displayDrawer }) {
  return (
    <>
      <div className="menuItem">Your notifications</div>
      <div className="Notifications"> Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          <button
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            aria-label="Close"
            onClick={() => console.log('Close button has been clicked')}
          >
            <img src={closeIcon} alt="Close" style={{ height: '15px', width: '15px' }} />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            <li data-priority="default">New course available</li>
            <li data-priority="urgent">New resume available</li>
            <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
          </ul>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;