import React from "react";
import PropTypes from "prop-types";

function NotificationItem({ type, html, value }) {
  if (html) {
    return (
      <li data-notification-type={type} dangerouslySetInnerHTML={html} />
    );
  }
  return (
    <li data-notification-type={type}>
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
    type: PropTypes.string,
    html: PropTypes.shape({
      __html: PropTypes.string,
    }),
    value: PropTypes.string,
  };

  NotificationItem.defaultprops = {
    type: 'default',
    html: null,
    value: '',
  };

  export default NotificationItem;