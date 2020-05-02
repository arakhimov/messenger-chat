import React from 'react';
import './ChatList.css';
import {ChatListItem} from '../chatListItem/ChatListItem';
import {Chat} from '../../types';
import {Message} from '../../types';

type ChatListProps = {
  chats: Chat[],
  handlerChatList: (nameChat:string, messagesChat: Message[]) => void,
  activeChat: {
    messageList: Message[],
    idActiveChat: string
  }
}

export const ChatList: React.FC<ChatListProps> = ( {handlerChatList, activeChat, chats} ) => {
  chats.forEach(item => {item?.messages.sort((a, b) => b?.date?.day.localeCompare(a?.date?.day))});
  chats.sort((a, b) => b?.messages[0]?.date?.day.localeCompare(a?.messages[0]?.date?.day));
  return (
    <div className="chatList">
      {chats.map(chat => <ChatListItem chat={chat} key={chat.name} handlerChat = {handlerChatList} activeChat={activeChat} />)}
    </div>
  );
};

