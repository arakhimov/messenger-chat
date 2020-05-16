import React from 'react';
import './MessageItem.css';
import { Message } from '../../types';

const regExpDate = /\d{2}:\d{2}/i;

type MessageItemProps = {message: Message}

export const MessageItem: React.FC<MessageItemProps> = ( {message} ) => {
  return (
    <div className="messageItem">
      <div className="messageItem__text-wrapper">
        <span className="messageItem__author">{message.author}</span>
        <p className="messageItem__text">{message.text}</p>
      </div>
      <p className="messageItem__date" >{`${new Date(message.date)}`.match(regExpDate)}</p>
    </div>
  );
};