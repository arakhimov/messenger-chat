import React from 'react';
import './Chat.css';
import {Message} from '../../types';
import {MessageItem} from '../messageItem/MessageItem';

type ChatProps = {
  messages: Message[], 
}

export const Chat: React.FC<ChatProps> = ( {messages} ) => {
  return (
    <div className="chat-screen">
      {messages.map((message: Message) => <MessageItem message = {message} key = {message.date.time + message.text}/>)}
    </div>
  );
    
};