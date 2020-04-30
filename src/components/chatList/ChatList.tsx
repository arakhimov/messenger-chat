import React from 'react';
import './ChatList.css';
import {ChatListItem} from '../chatListItem/ChatListItem';
import {Chat} from '../../types';
import {Message} from '../../types';

interface ChatListProps {
  chats: Array<Chat>,
  handlerChatList: Function,
  state: {
    messageList: Array<Message>,
    idActiveChat: string
  }
}

export const ChatList: React.FC<ChatListProps> = ( props ) => {
  return (
    <div className="chatList">
      {props.chats.map(chat => <ChatListItem chat={ chat } key={chat.name + Math.random()} handlerChat = {props.handlerChatList} state={props.state} />)}
    </div>
  );
};

