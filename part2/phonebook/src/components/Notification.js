import React from 'react';
import './Notification.css';

const Notification = ({message}) => {
    
    const messageText = message[0];
    const messageStyle = message[1];

    if (messageText === null) {
      return null
    }
  
    return (
      <div className={messageStyle}>
        {messageText}
      </div>
    )
  }

  export default Notification