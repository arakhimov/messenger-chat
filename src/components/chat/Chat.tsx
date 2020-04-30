import React from 'react';
import './Chat.css';
import {Message} from '../../types';
import {MessageItem} from '../messageItem/MessageItem';

interface ChatProps {
  messages: Array<Message>, 
}

export const Chat: React.FC<ChatProps> = ( {messages} ) => {
  return (
    <div className="chat-screen">
      {messages.map((message: any) => <MessageItem message = { message } key = {message.date.time + Math.random()}/>)}
    </div>
  );
    
};