import React from 'react';
import './MessageItem.css';
import {Message} from '../../types';

interface MessageItemProps {
  message: Message
}

export const MessageItem: React.FC<MessageItemProps> = ( {message} ) => {
  return (
    <div className="messageItem">
      <p className="messageItem__text">{message.text}</p>
      <div className="messageItem__date-wrapper">
        <p className="messageItem__date" >{message.date.day}</p>
        <p className="messageItem__date" >{message.date.time}</p>
      </div>
    </div>
  );
};