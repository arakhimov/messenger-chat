import React from "react";
import './ChatListItem.css';
import {Chat} from '../../types';
import {Message} from '../../types';

interface ChatListItemProps {
  chat : Chat,
  handlerChat: Function,
  state: {
    messageList: Array<Message>,
    idActiveChat: string
  }
}

export const ChatListItem: React.FC<ChatListItemProps> = ( {chat, handlerChat, state} ) => {
  return (
    <div 
      onClick = {() => handlerChat(chat.name, chat.messages)}  
      className={state.idActiveChat === chat.name ? "chatListItem chatListItem_active" : "chatListItem"}>
      <div className="chatListItem__image-wrapper">
        <img src={chat.urlImage} alt={chat.name} className="chatListItem__image"/>
      </div>
      <div className="chatListItem__content-wrapper">
        <div className="chatListItem__content-header">
          <span className="chatListItem__name">{chat.name}</span>
          <time className="chatListItem__date">{chat.messages[0].date.day}</time>
        </div>
        <div className="chatListItem__content">
          <span className="chatListItem__author">{chat.messages[0].author}:</span>
          <p className="chatListItem__text">{chat.messages[0].text}</p>
        </div>
      </div>
    </div>
  );
};


