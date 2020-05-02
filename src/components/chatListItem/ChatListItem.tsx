import React from "react";
import './ChatListItem.css';
import {Chat} from '../../types';
import {Message} from '../../types';

type ChatListItemProps = {
  chat : Chat,
  handlerChat: (nameChat:string, messagesChat: Message[]) => void,
  activeChat: {
    messageList: Message[],
    idActiveChat: string
  }
}

export const ChatListItem: React.FC<ChatListItemProps> = ( {chat, handlerChat, activeChat} ) => {
  const DATE_INDEX = 0;
  return (
    <div 
      onClick = {() => handlerChat(chat.name, chat.messages)}  
      className={activeChat.idActiveChat === chat.name ? "chatListItem chatListItem_active" : "chatListItem"}>
      <div className="chatListItem__image-wrapper">
        <img src={chat.urlImage} alt={chat.name} className="chatListItem__image"/>
      </div>
      <div className="chatListItem__content-wrapper">
        <div className="chatListItem__content-header">
          <span className="chatListItem__name">{chat.name}</span>
          <time className="chatListItem__date">{chat.messages[DATE_INDEX]?.date?.day}</time>
        </div>
        <div className="chatListItem__content">
          <span className="chatListItem__author">{chat.messages[DATE_INDEX]?.author}:</span>
          <p className="chatListItem__text">{chat.messages[DATE_INDEX]?.text}</p>
        </div>
      </div>
    </div>
  );
};


