import React from 'react';
import './ChatList.css';
import { ChatListItem } from '../chatListItem/ChatListItem';
import { chatListProps } from '../../types';
import { RouteComponentProps } from 'react-router-dom';

type ChatListProps = {
  chats: chatListProps[],
  idActiveChat: string,
  handleChatActive: (nameChat:string) => void,
}

export const ChatList: React.FC<ChatListProps & RouteComponentProps> = ( props ) => {
  return (
    <div className="chatList">
      {props.chats.map(chat => <ChatListItem {...props} 
        chat={chat} 
        key={chat.id} 
        handlerChat = {props.handleChatActive} 
        idActiveChat={props.idActiveChat} />)}
    </div>
  );
};

